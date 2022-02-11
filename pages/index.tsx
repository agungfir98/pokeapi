import type { NextPage } from "next";
import Pokeown from "./components/pokeown";
import Pokemon from "./components/pokemon";

const Home: NextPage = () => {
  return (
    <div className="-z-50 h-screen">
      <div className="flex justify-center">
        <Pokeown />
      </div>
      <Pokemon />
    </div>
  );
};

export default Home;
