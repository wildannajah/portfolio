import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      types
      number
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
    }
  }
`;

export interface FastAttack {
  name: string;
}
export interface SpecialAttack {
  name: string;
}
export interface Attack {
  fast: FastAttack[];
  special: SpecialAttack[];
}

export interface Pokemon {
  id: number;
  name: string;
  number: string;
  weight?: {
    minimum: string;
    maximum: string;
  };
  height?: {
    minimum: string;
    maximum: string;
  };
  classification?: string;
  types: string[];
  resistant?: string | string[];
  attacks?: Attack;
  weaknesses?: string[];
}

export interface PokemonList {
  pokemons: Pokemon[];
}
export interface PokemonDetail {
  pokemon: Pokemon;
}
export interface PokemonVars {
  first?: number;
  id?: string | string[];
}
