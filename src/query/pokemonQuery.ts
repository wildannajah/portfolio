import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      results {
        name
        image
        id
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

// export * from "./types";
export interface Moves {
  move: {
    name: string;
  };
}
export interface Types {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id?: number;
  name: string;
  moves?: Moves[];
  types?: Types[];
  image?: string;
  nickname?: string;
}

interface PokemonResult {
  count: number;
  nextOffset: number;
  prevOffset: number;
  results: Pokemon[];
}

export interface PokemonData {
  pokemons: PokemonResult;
}

export interface PokemonDetail {
  pokemon: Pokemon;
}

export interface PokemonVars {
  limit?: number;
  offset?: number;
  name?: string;
}
