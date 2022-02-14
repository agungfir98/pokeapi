import { useEffect, useState } from "react";

export default function Pokeown() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const count: number = JSON.parse(
      localStorage.getItem("jumlah_koleksi") as string
    );
    setCount(count);
  }, []);
  return (
    <div className="absolute left-1/2 top-0 -ml-28">
      <div className="text-md h-10 place-items-center flex absolute top-0 justify-center w-56 bg-pokeblue mx-auto rounded-b-xl">
        <h2 className="text-center text-white font-semibold">
          Pokemon Owned: {count < 1 ? 0 : count}
        </h2>
      </div>
    </div>
  );
}
