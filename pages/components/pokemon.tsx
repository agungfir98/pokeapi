import { useQuery } from "@apollo/client";
import { GET_DATA } from "../../graphql/graphql";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { pokemons } from "../../type/type";
import Navbar from "./navbar";

export default function Pokemon() {
  const [detik, setDetik] = useState(1);
  const [limit, setLimit] = useState(2);

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { limit: limit, offset: detik },
  });

  useEffect(() => {
    const rand = Math.floor(Math.random() * 3) + 3;
    const rand2 = Math.floor(Math.random() * 1123) + 1;
    setLimit(rand);
    setDetik(rand2);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen align-middle justify-center">
        <p className="mx-auto">Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-screen w-screen align-middle justify-center">
        <p className="mx-auto">Loading...</p>
      </div>
    );
  }
  return (
    <div className="container inline-flex flex-wrap container my-10 mb-20 justify-center">
      <Navbar />
      {data.pokemons.results.map((i: pokemons) => {
        return (
          <Link key={i.id} href={`/detail/${i.name}`} passHref>
            <div className="w-32 m-5 block justify-center">
              <h2 className="text-center">{i.name}</h2>
              <div className="m-auto flex justify-center self-center">
                <Image src={i.image} alt={i.name} width={75} height={75} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
