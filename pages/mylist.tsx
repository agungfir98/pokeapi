import Navbar from "./components/navbar";

export default function Mylist() {
  // const { nickname, nama, img, tipe } = window.localStorage.getItem("koleksi");
  // const data = JSON.parse(localStorage.getItem("koleksi"));

  // const { nickname, nama, img, tipe } = data;
  // console.log(nickname, nama, img, tipe);
  return (
    <div className="container mx-auto text-center bg-black">
      <Navbar />
      <h1 className="text-center text-red-400 text-4xl">mylist</h1>
    </div>
  );
}
