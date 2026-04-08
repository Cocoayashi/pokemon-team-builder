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
import { TeamService } from '../services/team';
import { TypeChart } from '../type-chart/type-chart';
import { GAME_GROUPS, GameGroup } from '../data/game-groups';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonSearch } from '../pokemon-search/pokemon-search';
import { TEAM_SIZE } from '../services/team';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PokemonSearch,
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
    PokemonCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private pokemonService = inject(PokemonService);
  public teamService = inject(TeamService);

  selectedSlot = signal<number | null>(null)
  allPokemonNames = signal<string[]>([]);
  pokemonNames = signal<string[]>([]);
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

onSelectPokemon(event: { slot: number; name: string }): void {
  this.onSelectPokemon(event);
  this.selectedSlot.set(null);
}

  get team() {
    return this.teamService.team();
  }
}