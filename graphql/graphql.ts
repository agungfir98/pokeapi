import { gql, useQuery } from "@apollo/client";

export const GET_DATA = gql`
  query ($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        id
        dreamworld
        image
      }
    }
  }
`;

export const GET_DETAIL = gql`
  # Write your query or mutation here
  query ($name: String!) {
    pokemons {
      results {
        name
        id
        dreamworld
      }
    }
    pokemon(name: $name) {
      name
      sprites {
        front_default
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;
