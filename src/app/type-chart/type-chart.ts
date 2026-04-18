import { Component, inject, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TeamService } from '../services/team';
import { TypePokemonDialog } from '../type-pokemon-dialog/type-pokemon-dialog';
import { GameGroup } from '../data/game-groups';
import { Pokemon } from '../services/pokemon';

interface TypeEntry {
  type: string;
  multiplier: number;
}

@Component({
  selector: 'app-type-chart',
  standalone: true,
  imports: [CommonModule, 
    MatProgressSpinnerModule, 
    MatDialogModule, 
    MatButtonModule,],
  templateUrl: './type-chart.html',
  styleUrl: './type-chart.css',
})
export class TypeChart {
  private teamService = inject(TeamService);
  /* Dialog box for recommended types pop up */
  private dialog = inject(MatDialog);
  pokemonNames = input<string[]>([]);

  loading = this.teamService.typeChartLoading;

  profile = computed(() => {
    const team = this.teamService.team() as Pokemon[];
    const chart = this.teamService.typeChart();

    if (!chart) return null;

    const result = this.teamService.getTeamDefensiveProfile(team);
    if (!result) return null;

    const allTypes = Object.keys(chart);
    const weaknesses: TypeEntry[] = [];
    const resistances: TypeEntry[] = [];
    const immunities: TypeEntry[] = [];
    const noProtection: TypeEntry[] = [];

    for (const type of allTypes) {
      /* This is what the damage against your pokemon is multiplied by */
      const multiplier = result[type];
      
  /* multiplied by 0, you have a pokemon that is immune to this type  */
      if (multiplier === 0) immunities.push({ type, multiplier: multiplier });

  /* multiplied by either 2 or 4, your pokemon is weak to this type */
      else if (multiplier > 1) {
        weaknesses.push({ type, multiplier: multiplier });
        noProtection.push({ type, multiplier: multiplier });
      }
  /* multiplied by either .5 or .25, your pokemon has resistance against this type */
      else if (multiplier < 1) resistances.push({ type, multiplier: multiplier });
  
  /* else, the type wasnt mentioned and the user should know that */
      else noProtection.push({ type, multiplier: multiplier });
    }

    const recommendations = this.teamService.getRecommendedTypes(
      noProtection.map(e => e.type)
    );

    return { weaknesses, resistances, immunities, noProtection, recommendations };
  });

  openPokemonDialog(type: string): void {
    const pokemonByType = this.teamService.pokemonByType();
    const pokemonNames = this.pokemonNames();

    const filteredPokemonByType = Object.fromEntries(
      Object.entries(pokemonByType).map(([type, pokemon]) => [
        type,
        pokemon.filter(p => pokemonNames.includes(p))
      ])
    );

      this.dialog.open(TypePokemonDialog, {
      width: '500px',
      data: { type, pokemon: filteredPokemonByType[type] ?? [] },
    });
  }
}