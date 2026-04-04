import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

export interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

export interface TypeEffectiveness {
  double_damage_from: { name: string }[];
  half_damage_from: { name: string }[];
  no_damage_from: { name: string }[];
}

export interface TypeData {
  name: string;
  damage_relations: TypeEffectiveness;
  pokemon: { pokemon: { name: string; url: string } }[];
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2';

  getPokemon(nameOrId: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${nameOrId}`);
  }

  getPokemonList(limit = 2000): Observable<{ results: { name: string }[] }> {
    return this.http.get<{ results: { name: string }[] }>(
      `${this.baseUrl}/pokemon?limit=${limit}`
    );
  }

  getAllTypes(): Observable<{ results: { name: string; url: string }[] }> {
    return this.http.get<{ results: { name: string; url: string }[] }>(
      `${this.baseUrl}/type`
    );
  }

  getTypeData(name: string): Observable<TypeData> {
    return this.http.get<TypeData>(`${this.baseUrl}/type/${name}`);
  }

  buildTypeChart(): Observable<{ chart: Record<string, Record<string, number>>; pokemonByType: Record<string, string[]> }> {
  return this.getAllTypes().pipe(
    map(res => res.results.filter(t => !['unknown', 'shadow', 'stellar'].includes(t.name))),
    switchMap(types => forkJoin(types.map(t => this.getTypeData(t.name)))),
    map(typeDataList => {
      const chart: Record<string, Record<string, number>> = {};
      const pokemonByType: Record<string, string[]> = {};

      for (const typeData of typeDataList) {
        chart[typeData.name] = {};
        pokemonByType[typeData.name] = typeData.pokemon.map(p => p.pokemon.name);
      }

      for (const typeData of typeDataList) {
        const { name, damage_relations } = typeData;
        for (const t of damage_relations.double_damage_from) {
          if (!chart[t.name]) chart[t.name] = {};
          chart[t.name][name] = 2;
        }
        for (const t of damage_relations.half_damage_from) {
          if (!chart[t.name]) chart[t.name] = {};
          chart[t.name][name] = 0.5;
        }
        for (const t of damage_relations.no_damage_from) {
          if (!chart[t.name]) chart[t.name] = {};
          chart[t.name][name] = 0;
        }
      }

      return { chart, pokemonByType };
    })
  );
  }
}