import { Component, input, output, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TeamSlot, TeamService } from '../services/team';

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
  slot = input<TeamSlot>(null);
  index = input<number>(0);
  searchInput = input<string>('');
  filteredOptions = input<string[]>([]);

  // Outputs
  remove = output<void>();
  searchChange = output<string>();
  select = output<string>();

  getSlotProfile() {
    const s = this.slot();
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
}