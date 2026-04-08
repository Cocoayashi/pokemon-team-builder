import { Component, input, output, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TeamService, TeamSlot } from '../services/team';
import { Pokemon } from '../services/pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard {
  private teamService = inject(TeamService);

  // Inputs
  cardPokemon = input<TeamSlot>();
  index = input<number>(0);

  getSlotProfile() {
    const s = this.cardPokemon() as Pokemon;
    if (!s) return null;
    const types = s.types.map(t => t.type.name);
    const profile = this.teamService.getPokemonDefensiveProfile(types);
    if (!profile) return null;

    return {
      weaknesses: Object.entries(profile).filter(([, m]) => m > 1).map(([t]) => t),
      resistances: Object.entries(profile).filter(([, m]) => m < 1 && m > 0).map(([t]) => t),
      immunities: Object.entries(profile).filter(([, m]) => m === 0).map(([t]) => t),
    };
  }
    removePokemon(): void {
    this.teamService.removeFromSlot(this.index());
  }
  
}