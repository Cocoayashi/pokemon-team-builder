import { Component, input, output, signal, inject } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TeamService, TEAM_SIZE, TeamSlot } from '../services/team';
import { PokemonService } from '../services/pokemon';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pokemon-search.html',
  styleUrl: './pokemon-search.css',
})


export class PokemonSearch {
  private teamService = inject(TeamService);
  private pokemonService = inject(PokemonService);
  

  // Input the filtered name list based on selected game group from home
  pokemonNames = input<string[]>([]);

  // Which slot the user has clicked to fill

  filteredOptions = signal<string[]>([]);
  onEnter(input: HTMLInputElement) {
    if (this.filteredOptions().length > 0) {
      this.onSelect(this.filteredOptions()[0]);
      input.value = '';
    }
  }
  onSearchChange(value: string): void {
    if (value.length < 2) {
      this.filteredOptions.set([]);
      return;
    }
    const matches = this.pokemonNames()
      .filter(name => name.includes(value.toLowerCase()))
      .slice(0, 10);
    this.filteredOptions.set(matches);
  }

  onSelect(name: string): void {
    this.pokemonService.getPokemon(name).subscribe(pokemon => {
      const newPokemon = pokemon as TeamSlot;
      this.teamService.addToSlot(newPokemon);
      this.filteredOptions.set([]);
    });
  }
}