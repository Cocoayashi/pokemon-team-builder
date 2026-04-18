export interface GameGroup {
  label: string;
  pokedexes: string[];
  dlcPokedexes?: string[];
}

// Each pokemon game has its own selection of pokemon.
// The poke api doesn't have good names for each game.
// Instead, I decided to hard code the names of each game with their api name
export const GAME_GROUPS: GameGroup[] = [
  { label: 'Gen 1: Red & Blue & Yellow',          pokedexes: ['kanto'] },
  { label: 'Gen 2: Gold & Silver & Crystal',      pokedexes: ['original-johto'] },
  { label: 'Gen 3: Ruby & Sapphire & Emerald',    pokedexes: ['hoenn'] },
  { label: 'Gen 3: FireRed & LeafGreen',          pokedexes: ['kanto'] },
  { label: 'Gen 4: Diamond & Pearl',              pokedexes: ['original-sinnoh'] },
  { label: 'Gen 4: Platinum',                     pokedexes: ['extended-sinnoh'] },
  { label: 'Gen 4: HeartGold & SoulSilver',       pokedexes: ['updated-johto'] },
  { label: 'Gen 5: Black & White',                pokedexes: ['original-unova'] },
  { label: 'Gen 5: Black 2 & White 2',            pokedexes: ['updated-unova'] },
  { label: 'Gen 6: X & Y',                        pokedexes: ['kalos-central', 'kalos-coastal', 'kalos-mountain'] },
  { label: 'Gen 6: Omega Ruby & Alpha Sapphire',  pokedexes: ['updated-hoenn'] },
  { label: 'Gen 7: Sun & Moon',                   pokedexes: ['original-alola'] },
  { label: 'Gen 7: Ultra Sun & Ultra Moon',       pokedexes: ['updated-alola'] },
  { label: 'Gen 7: Let\'s Go Pikachu & Eevee',    pokedexes: ['letsgo-kanto'] },
  { label: 'Gen 8: Sword & Shield',               pokedexes: ['galar'],          dlcPokedexes: ['isle-of-armor', 'crown-tundra'] },
  { label: 'Gen 8: Legends: Arceus',              pokedexes: ['hisui'] },
  { label: 'Gen 9: Scarlet & Violet',             pokedexes: ['paldea'],          dlcPokedexes: ['kitakami', 'blueberry'] },
  { label: 'Gen 9: Legends: Z-A',                 pokedexes: ['lumiose-city'],    dlcPokedexes: ['hyperspace'] },
];