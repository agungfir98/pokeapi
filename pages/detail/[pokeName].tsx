import { Tema } from "../../switch/switch";
import Image from "next/image";
import { GET_DETAIL } from "../../graphql/graphql";
import { useRouter } from "next/router";
import { stat, move, tipe } from "../../type/type";
import { useQuery } from "@apollo/client";

export default function Detail() {
  const router = useRouter();
  const { pokeName } = router.query;

  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { name: pokeName },
  });

  if (loading) return <p>Loading... </p>;
  if (error) return <p>error {error.message}</p>;

  const { name, stats, sprites, types } = data.pokemon;
  const move = data.pokemon.moves;

  function bgPokeType() {
    return types.map((i: tipe) => {
      return i.type.name;
    })[0];
  }

  function tipe() {
    return types.map((i: tipe) => {
      return (
        <div
          className="flex justify-center font-medium m-1 my-5"
          key={i.type.name}
        >
          <div className={`rounded-md ${Tema(i.type.name)} p-2`}>
            {i.type.name}
          </div>
        </div>
      );
    });
  }

  return (
    <div className={`${Tema(bgPokeType())} min-h-screen justify-center`}>
      <div className="m-auto pt-11 flex justify-center self-center">
        <Image
          className="drop-shadow-2xl"
          src={sprites.front_default}
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <div className="coba from-red-500 to-pink-500"></div>

      <div className="bg-white -mt-20 min-h-full rounded-t-3xl container mx-auto justify-center text-center">
        <h1 className="text-gray-800 tracking-widest font-bebas font-medium drop-shadow-md row-span-1 text-center pt-12 text-4xl z-50">
          {name.toUpperCase()}
        </h1>
        {/* ============================== */}
        <div className="flex justify-center">{tipe()}</div>
        {/* ============================== */}
        {/* ============================== STATS ============================== */}
        <h2 className="text-xl mb-3 mt-2 font-bold text-gray-800">Stats</h2>
        <div className="flex justify-center text-center">
          <div className="grid grid-cols-2 gap-3 w-3/4">
            {stats.map((i: stat) => {
              return (
                <div key={i.base_stat}>
                  <div className="font-extrabold tracking-wider p-1 text-gray-800">
                    {i.stat.name}
                  </div>
                  <div className="text-gray-800">{i.base_stat}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================== MOVES ============================== */}
        <div className="sm:mx-20 text-center pb-1 mt-10">
          <h2 className="text-xl mb-3 font-bold text-gray-800">Moves</h2>
          <div className="mb-20 flex flex-wrap justify-center">
            {move.map((i: move) => {
              return (
                <div className="font-medium m-1" key={i.move.name}>
                  <div className={`rounded-md w-fit ${Tema(bgPokeType())} p-2`}>
                    {i.move.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
