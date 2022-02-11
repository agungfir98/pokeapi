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
