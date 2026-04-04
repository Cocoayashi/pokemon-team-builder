import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokemonService } from '../services/pokemon';
import { TeamService, TeamSlot } from '../services/team';
import { TypeChart } from '../type-chart/type-chart';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    TypeChart
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private pokemonService = inject(PokemonService);
  public teamService = inject(TeamService);

  pokemonNames = signal<string[]>([]);
  searchInputs = signal<string[]>(Array(6).fill(''));
  filteredOptions = signal<string[][]>(Array.from({ length: 6 }, () => []));

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(res => {
      this.pokemonNames.set(res.results.map(p => p.name));
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

  get team() {
    return this.teamService.team();
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
}