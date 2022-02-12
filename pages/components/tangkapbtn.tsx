import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { tangkap } from "../../type/type";

export default function tangkapbtn(pokemon: tangkap) {
  const Myswal = withReactContent(swal);

  const getLocalStorage = JSON.parse(localStorage.getItem("koleksi") || "[]");

  const { nama, img, tipe } = pokemon;

  async function Catch(name: string) {
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
        const simpan = getLocalStorage;
        const data = {
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
          simpan.push(data);
          const jumlah = simpan.length;
          localStorage.setItem("jumlah_koleksi", jumlah);
          localStorage.setItem("koleksi", JSON.stringify(simpan));
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
