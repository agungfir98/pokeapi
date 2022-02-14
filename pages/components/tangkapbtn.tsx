import { useEffect, useState } from "react";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { tangkap } from "../../type/type";

export default function TangkapBtn(pokemon: tangkap) {
  const Myswal = withReactContent(swal);

  const [getJumlah, setGetJumlah] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("jumlah_koleksi") as string);
    }
  });
  const [getLocalData, setGetLocalData] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("koleksi") || ("[]" as string));
    }
  });

  useEffect(() => {
    localStorage.setItem("koleksi", JSON.stringify(getLocalData));
    localStorage.setItem("jumlah_koleksi", JSON.stringify(getJumlah));
  }, [getLocalData, getJumlah]);

  const { nama, img, tipe } = pokemon;

  function Catch(name: string) {
    const rand = Math.random() < 0.5 ? 0 : 1;
    if (rand === 0) {
      Myswal.fire({
        icon: "error",
        title: <p>Oops, {name.toUpperCase()} evade!</p>,
      });
    } else {
      Myswal.fire({
        icon: "success",
        title: <p>{name.toUpperCase()} Caught!</p>,
        text: "Give it a name",
        input: "text",
        inputValue: `${nama}`,
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "submit",
        preConfirm: (value) => {
          getLocalData.map((i: { nickname: string }) => {
            if (i.nickname === value) {
              swal.showValidationMessage("Nickname already exist!");
            }
          });
        },
      }).then((res: any) => {
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
            title: <p>Saved</p>,
            showConfirmButton: false,
            timer: 1000,
          });
        }
        if (typeof window !== "undefined") {
          let arr = getLocalData;
          arr.push(data);
          let jumlah = arr.length;
          localStorage.setItem("jumlah_koleksi", JSON.stringify(jumlah));
          localStorage.setItem("koleksi", JSON.stringify(arr));
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
