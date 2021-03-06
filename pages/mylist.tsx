import Navbar from "./components/navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { myPoke } from "../type/type";

const MySwal = withReactContent(Swal);
export default function Mylist() {
  const [data, setData] = useState([]);
  const [koleksi, setKoleksi] = useState(0);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("koleksi") as string));
    setKoleksi(JSON.parse(localStorage.getItem("jumlah_koleksi") as string));
  }, []);

  function release(nick: string) {
    data.map((v: { nickname: string }, i: number) => {
      if (v.nickname == nick) {
        data.splice(i, 1);
      }
    });
    const count = data.length.toString();
    if (localStorage) {
      localStorage.setItem("jumlah_koleksi", count);
      localStorage.setItem("koleksi", JSON.stringify(data));
    }
  }

  function delItem(nick: string) {
    const updateData = [...data].filter(
      (i: { nickname: string }) => i.nickname !== nick
    );
    setData(updateData);
  }
  console.log(data);

  return (
    <div className="container p-5 h-screen mx-auto text-center">
      <Navbar />
      <div className="pb-16">
        <h1 className="text-center font-bold text-gray-500 text-4xl">
          KOLEKSI
        </h1>
        {koleksi < 1 || !koleksi || koleksi === undefined ? (
          <div className="flex h-screen -mt-20 justify-center align-middle">
            <p className="my-auto text-3xl font-bold text-gray-400">
              ANDA TIDAK PUNYA KOLEKSI
            </p>
          </div>
        ) : (
          data.map((i: myPoke) => {
            return (
              <div
                className="flex m-4 max-w-xl mx-auto bg-pokeblue rounded-3xl drop-shadow-xl"
                key={i.nickname}
              >
                <Link href={`/detail/${i.nama}`} passHref>
                  <div className="-ml-2 w-2/6 md:w-1/4">
                    <Image src={i.img} alt={i.nama} width={100} height={100} />
                  </div>
                </Link>
                <Link href={`/detail/${i.nama}`} passHref>
                  <div className="w-2/3 md:w-2/3 text-left my-auto pl-3">
                    <div className="h-fit p-1">
                      <p className="font-bold text-lg text-white">{i.nama}</p>
                      <p className="font-medium text-white">{i.nickname}</p>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    MySwal.fire({
                      icon: "warning",
                      title: <p>Release {i.nickname}?</p>,
                      confirmButtonText: "confirm",
                      showCancelButton: true,
                    }).then((res) => {
                      if (res.isConfirmed) {
                        MySwal.fire({
                          icon: "success",
                          showConfirmButton: false,
                          timer: 1000,
                        });
                        const nick = i.nickname;
                        delItem(nick);
                        release(nick);
                      }
                    });
                  }}
                  className="text-center rounded-r-3xl w-1/4 md:w-1/5"
                  type="button"
                >
                  <div className="flex justify-center align-middle font-medium text-white">
                    RELEASE
                  </div>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
