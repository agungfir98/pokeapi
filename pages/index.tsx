import type { NextPage } from "next";
import Pokeown from "./components/pokeown";
import Pokemon from "./components/pokemon";

const Home: NextPage = () => {
  return (
    <div className="-z-50 bg-[url('../public/img/grass_BG.jpg')] h-screen">
      <Pokeown />
      <Pokemon />
    </div>
  );
};

export default Home;
