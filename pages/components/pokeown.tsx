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
    <div className="text-md h-10 place-items-center flex absolute top-0 justify-center w-56 bg-pokered mx-auto rounded-b-xl">
      <h2 className="text-center text-white font-semibold">
        Pokemon Owned: {count}{" "}
      </h2>
    </div>
  );
}
