import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { forkJoin } from 'rxjs';
import { PokemonService } from '../services/pokemon';
import { TeamService, TeamSlot } from '../services/team';
import { TypeChart } from '../type-chart/type-chart';
import { GAME_GROUPS, GameGroup } from '../data/game-groups';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSlideToggleModule, 
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    TypeChart,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private pokemonService = inject(PokemonService);
  public teamService = inject(TeamService);

  allPokemonNames = signal<string[]>([]);
  pokemonNames = signal<string[]>([]);
  searchInputs = signal<string[]>(Array(6).fill(''));
  filteredOptions = signal<string[][]>(Array.from({ length: 6 }, () => []));
  gameGroups = GAME_GROUPS;
  includeDlc = signal<boolean>(false);
  selectedGroup = signal<GameGroup | null>(null);
  filterLoading = signal<boolean>(false);

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(res => {
      const names = res.results.map(p => p.name);
      this.allPokemonNames.set(names);
      this.pokemonNames.set(names);
    });
  }

  onGameGroupChange(group: GameGroup | null): void {
    this.selectedGroup.set(group);
    this.includeDlc.set(false);
    this.loadPokemonForCurrentSelection();
  }

  onDlcToggle(include: boolean): void {
    this.includeDlc.set(include);
    this.loadPokemonForCurrentSelection();
  }

  private loadPokemonForCurrentSelection(): void {
    const group = this.selectedGroup();

    if (!group) {
      this.pokemonNames.set(this.allPokemonNames());
      return;
    }

    this.filterLoading.set(true);

    const pokedexes = [
      ...group.pokedexes,
      ...(this.includeDlc() && group.dlcPokedexes ? group.dlcPokedexes : []),
    ];

    const requests = pokedexes.map(name => this.pokemonService.getPokedex(name));

    forkJoin(requests).subscribe(results => {
      const names = new Set<string>();
      for (const result of results) {
        for (const entry of result.pokemon_entries) {
          names.add(entry.pokemon_species.name);
        }
      }
      this.pokemonNames.set([...names]);
      this.filterLoading.set(false);
    });
  }

  onSearchChange(index: number, value: string): void {
    const inputs = [...this.searchInputs()];
    inputs[index] = value;
    this.searchInputs.set(inputs);

    if (value.length < 2) {
      const filtered = [...this.filteredOptions()];
      filtered[index] = [];
      this.filteredOptions.set(filtered);
      return;
    }

    const matches = this.pokemonNames()
      .filter(name => name.includes(value.toLowerCase()))
      .slice(0, 10);

    const filtered = [...this.filteredOptions()];
    filtered[index] = matches;
    this.filteredOptions.set(filtered);
  }

  selectPokemon(index: number, name: string): void {
    this.pokemonService.getPokemon(name).subscribe(pokemon => {
      this.teamService.addToSlot(index, pokemon);
      const inputs = [...this.searchInputs()];
      inputs[index] = '';
      this.searchInputs.set(inputs);
    });
  }

  removePokemon(index: number): void {
    this.teamService.removeFromSlot(index);
  }

  getSlotProfile(slot: TeamSlot): { weaknesses: string[], resistances: string[], immunities: string[] } | null {
    if (!slot) return null;
    const types = slot.types.map(t => t.type.name);
    const profile = this.teamService.getPokemonDefensiveProfile(types);
    if (!profile) return null;

    return {
      weaknesses: Object.entries(profile).filter(([, m]) => m > 1).map(([t]) => t),
      resistances: Object.entries(profile).filter(([, m]) => m < 1 && m > 0).map(([t]) => t),
      immunities: Object.entries(profile).filter(([, m]) => m === 0).map(([t]) => t),
    };
  }

  get team() {
    return this.teamService.team();
  }
}