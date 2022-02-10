import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Pokeown from "./components/pokeown";

import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query getSome($name: String!, $limit: Int) {
    pokemons(limit: $limit) {
      results {
        name
        id
        image
      }
    }
    pokemon(name: $name) {
      name
      stats {
        stat {
          name
        }
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

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_DATA);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>error {error.message}</p>;
  }

  const Maped = data.pokemons.results.map((i: any) => {
    console.log(i);
    return (
      <ul key={i.id}>
        <li>{i.name}</li>
      </ul>
    );
  });
  // useEffect(() => {}, []);

  return (
    <div className="-z-50 h-screen begron ">
      <div className="flex justify-center">
        <Pokeown />
      </div>
      {Maped}
      {/* <div className="w-48 h-48 bg-red-700 flex justify-center  place-items-center">
        <div className="w-20 h-20 bg-slate-400"></div>
      </div>
      <div className="w-32 h-32 bg-red-100 flex justify-center text-center place-items-start-center">
        <p className="border-2 border-black self-center">HALOO</p>
      </div> */}
    </div>
  );
};

export default Home;
