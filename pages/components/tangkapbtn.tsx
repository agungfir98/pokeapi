import { useEffect, useState, useReducer } from "react";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { myPoke, tangkap } from "../../type/type";

export default function TangkapBtn(pokemon: tangkap) {
  const Myswal = withReactContent(swal);

  const [getLocalData, setGetLocalData] = useState(
    JSON.parse(localStorage.getItem("koleksi") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("koleksi", JSON.stringify(getLocalData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { nama, img, tipe } = pokemon;

  function Catch(name: string) {
    const rand = Math.random() < 0.5 ? 0 : 1;
    if (rand === 0) {
      Myswal.fire({
        icon: "error",
        title: <p>Oops, {name.toUpperCase()} lepas</p>,
      });
    } else {
      Myswal.fire({
        icon: "success",
        title: <p>{name.toUpperCase()} Berhasil ditangkap!</p>,
        text: "Beri dia nama",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "submit",
        cancelButtonText: "batal",
      }).then((res) => {
        const data: {
          nickname: string;
          nama: string;
          img: string;
          tipe: [string];
        } = {
          nickname: res.value,
          nama,
          img,
          tipe,
        };
        if (res.isConfirmed) {
          Myswal.fire({
            icon: "success",
            title: <p>Berhasil disimpan</p>,
            showConfirmButton: false,
            timer: 1000,
          });
          let arr = getLocalData;
          arr.push(data);
          let jumlah = arr.length;
          if (localStorage) {
            localStorage.setItem("jumlah_koleksi", JSON.stringify(jumlah));
            localStorage.setItem("koleksi", JSON.stringify(arr));
          }
        }
      });
    }
  }

  return (
    <div className=" flex justify-center place-items-center w-screen bottom-0 left-0 fixed  ">
      <button onClick={() => Catch(pokemon.nama)}>
        <a className="h-14  text-xl w-full flex justify-center text-center font-medium text-white hover:text-gray-400 bg-pokered rounded-t-lg">
          <p className="self-center p-5">Catch It</p>
        </a>
      </button>
    </div>
  );
}
