export default function Pokeown() {
  const count = JSON.parse(localStorage.getItem("jumlah_koleksi"));
  return (
    <div className="text-md h-10 place-items-center flex absolute top-0 justify-center w-56 bg-pokered mx-auto rounded-b-xl">
      <h2 className="text-center text-white font-semibold">
        Pokemon Owned: {count}{" "}
      </h2>
    </div>
  );
}
