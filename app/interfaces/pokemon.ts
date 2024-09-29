export interface Pokemon {
  pokemonId: number;
  name: string;
  image: string;
  types?: string[];
  ability?: Ability[];
  stats?: Stat[];
}

export interface PokemonInit {
  name: string;
  url: string;
}

export interface PokemonType {
  type: TypeDetail;
}

export interface TypeDetail {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
  url?: string;
}

export interface AbilityResponse {
  ability: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface EvolutionChain {
  chain: Chain | null;
}

export interface EvolutionChainResponse {
  baby_trigger_item: null | {
    name: string;
    url: string;
  };
  chain: Chain;
  id: number;
}

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionDetail {
  gender: null | number;
  held_item: null | {
    name: string;
    url: string;
  };
  item: null | {
    name: string;
    url: string;
  };
  known_move: null | {
    name: string;
    url: string;
  };
  known_move_type: null | {
    name: string;
    url: string;
  };
  location: null | {
    name: string;
    url: string;
  };
  min_affection: null | number;
  min_beauty: null | number;
  min_happiness: null | number;
  min_level: null | number;
  needs_overworld_rain: boolean;
  party_species: null | {
    name: string;
    url: string;
  };
  party_type: null | {
    name: string;
    url: string;
  };
  relative_physical_stats: null | number;
  time_of_day: string;
  trade_species: null | {
    name: string;
    url: string;
  };
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}

export interface Species {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonInit[];
}

export interface PokemonResponsePromise {
  abilities: Array<{ ability: { name: string; url: string } }>;
  base_experience: number;
  forms: Array<{ name: string; url: string }>;
  game_indices: Array<{
    game_index: number;
    version: { name: string; url: string };
  }>;
  height: number;
  held_items: Array<{ item: { name: string; url: string } }>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{ move: { name: string; url: string } }>;
  name: string;
  order: number;
  past_abilities: Array<AbilityResponse>;
  past_types: Array<PokemonType>;
  species: { name: string; url: string };
  sprites: {
    front_default: string;
    back_female: string | null;
  };
  stats: Array<Stat>;
  types: Array<PokemonType>;
  weight: number;
}
