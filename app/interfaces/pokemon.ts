export interface Pokemon {
  pokemonId: number;
  name: string;
  image: string;
  types?: string[];
  ability?: Ability[];
  stats: Stat[];
}

export interface TypesInfo<T> {
  type: T;
}
export interface TypeDetail {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
  url?: string;
}

export interface Stat {
  name: string;
  value: string;
}

export interface EvolutionChain {
  chain: any;
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
