import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TeamService } from '../services/team';
import { TypePokemonDialog } from '../type-pokemon-dialog/type-pokemon-dialog';

interface TypeEntry {
  type: string;
  multiplier: number;
}

@Component({
  selector: 'app-type-chart',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatDialogModule, MatButtonModule],
  templateUrl: './type-chart.html',
  styleUrl: './type-chart.css',
})
export class TypeChart {
  private teamService = inject(TeamService);
  private dialog = inject(MatDialog);

  loading = this.teamService.typeChartLoading;

  profile = computed(() => {
    const team = this.teamService.team();
    const chart = this.teamService.typeChart();

    if (!chart) return null;

    const filledSlots = team.filter(slot => slot !== null);
    if (filledSlots.length === 0) return null;

    const result = this.teamService.getTeamDefensiveProfile(team);
    if (!result) return null;

    const allTypes = Object.keys(chart);
    const weaknesses: TypeEntry[] = [];
    const resistances: TypeEntry[] = [];
    const immunities: TypeEntry[] = [];
    const noProtection: TypeEntry[] = [];

    for (const type of allTypes) {
      const m = result[type];
      if (m === 0) immunities.push({ type, multiplier: m });
      else if (m > 1) {
        weaknesses.push({ type, multiplier: m });
        noProtection.push({ type, multiplier: m });
      }
      else if (m < 1) resistances.push({ type, multiplier: m });
      else noProtection.push({ type, multiplier: m });
    }

    const recommendations = this.teamService.getRecommendedTypes(
      noProtection.map(e => e.type)
    );

    return { weaknesses, resistances, immunities, noProtection, recommendations };
  });

  openPokemonDialog(type: string): void {
    const pokemonByType = this.teamService.pokemonByType();
    this.dialog.open(TypePokemonDialog, {
      width: '500px',
      data: { type, pokemon: pokemonByType[type] ?? [] },
    });
  }
}