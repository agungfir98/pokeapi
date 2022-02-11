import { useQuery } from "@apollo/client";
import Image from "next/image";
import { GET_DETAIL } from "../../graphql/graphql";
import { useRouter } from "next/router";
import { stat, move } from "../../type/type";

export default function Detail() {
  const router = useRouter();
  const { pokeName } = router.query;

  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { name: pokeName },
  });

  if (loading) return <p>Loading... </p>;
  if (error) return <p>error {error.message}</p>;

  const { name, stats, sprites } = data.pokemon;
  const move = data.pokemon.moves;

  move.map((i: move) => {
    // console.log(i.move.name);
  });

  return (
    <div className="mb-64 bg-stone-700 justify-center">
      <div className="m-auto pt-11 flex abso justify-center self-center">
        <Image
          className="drop-shadow-2xl"
          src={sprites.front_default}
          alt={name}
          width={200}
          height={200}
        />
      </div>

      <div className="bg-white -mt-20 rounded-t-3xl container justify-center">
        <h1 className="text-gray-800 font-bebas font-medium drop-shadow-md row-span-1 text-center pt-12 text-4xl z-50">
          {name.toUpperCase()}
        </h1>
        <div className="mt-10 flex justify-center text-center">
          <div className="grid grid-cols-2 gap-3 w-3/4">
            {stats.map((i: stat) => {
              return (
                <div key={i.base_stat}>
                  <div className="font-semibold p-1">{i.stat.name}</div>
                  <div>{i.base_stat}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mx-auto text-center  mt-10">
          <h2 className="text-xl mb-3 font-bold">Moves</h2>
          <div className="mx-auto flex flex-wrap justify-center">
            {move.map((i: move) => {
              return (
                <div className="flex font-medium m-2" key={i.move.name}>
                  <div className="rounded-md text-white bg-pokeyelow p-2">
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
