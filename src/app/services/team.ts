import { Injectable, signal, inject } from '@angular/core';
import { Pokemon, PokemonService } from './pokemon';

export type TeamSlot = Pokemon | null;

@Injectable({ providedIn: 'root' })
export class TeamService {
  private pokemonService = inject(PokemonService);

  team = signal<TeamSlot[]>(Array(6).fill(null));
  typeChart = signal<Record<string, Record<string, number>> | null>(null);
  typeChartLoading = signal<boolean>(true);
  pokemonByType = signal<Record<string, string[]>>({});

  constructor() {
    this.pokemonService.buildTypeChart().subscribe(({ chart, pokemonByType }) => {
      this.typeChart.set(chart);
      this.pokemonByType.set(pokemonByType);
      this.typeChartLoading.set(false);
    });
  }

  addToSlot(index: number, pokemon: Pokemon): void {
    this.team.update(current => {
      const updated = [...current];
      updated[index] = pokemon;
      return updated;
    });
  }

  removeFromSlot(index: number): void {
    this.team.update(current => {
      const updated = [...current];
      updated[index] = null;
      return updated;
    });
  }

  getPokemonDefensiveProfile(types: string[]): Record<string, number> | null {
    const chart = this.typeChart();
    if (!chart) return null;

    const allTypes = Object.keys(chart);
    const result: Record<string, number> = {};

    for (const attackingType of allTypes) {
      let multiplier = 1;
      for (const defendingType of types) {
        multiplier *= chart[attackingType]?.[defendingType] ?? 1;
      }
      result[attackingType] = multiplier;
    }

    return result;
  }

  getTeamDefensiveProfile(team: TeamSlot[]): Record<string, number> | null {
    const chart = this.typeChart();
    if (!chart) return null;

    const filledSlots = team.filter(slot => slot !== null);
    if (filledSlots.length === 0) return null;

    const allTypes = Object.keys(chart);
    const result: Record<string, number> = {};

    for (const attackingType of allTypes) {
      let best = Infinity;
      for (const slot of filledSlots) {
        const types = slot!.types.map(t => t.type.name);
        let multiplier = 1;
        for (const defendingType of types) {
          multiplier *= chart[attackingType]?.[defendingType] ?? 1;
        }
        if (multiplier < best) best = multiplier;
      }
      result[attackingType] = best;
    }

    return result;
  }

  getRecommendedTypes(noProtectionTypes: string[]): { type: string; covers: number }[] {
    const chart = this.typeChart();
    if (!chart || noProtectionTypes.length === 0) return [];

    const teamTypes = new Set(
      this.team()
        .filter(s => s !== null)
        .flatMap(s => s!.types.map(t => t.type.name))
    );

    const allTypes = Object.keys(chart);
    const recommendations: { type: string; covers: number }[] = [];

    for (const candidateType of allTypes) {
      if (teamTypes.has(candidateType)) continue;

      let covers = 0;
      for (const unprotectedType of noProtectionTypes) {
        const multiplier = chart[unprotectedType]?.[candidateType] ?? 1;
        if (multiplier < 1) covers++;
      }

      if (covers > 0) {
        recommendations.push({ type: candidateType, covers });
      }
    }

    return recommendations.sort((a, b) => b.covers - a.covers);
  }
}