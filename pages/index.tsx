import type { NextPage } from "next";
import Pokeown from "./components/pokeown";

const Home: NextPage = () => {
  return (
    <div className="-z-50 h-screen bg-green-800">
      <div className="flex justify-center">
        <Pokeown />
      </div>
      <div className="w-48 h-48 bg-red-700 flex justify-center  place-items-center">
        <div className="w-20 h-20 bg-slate-400"></div>
      </div>
    </div>
  );
};

export default Home;
