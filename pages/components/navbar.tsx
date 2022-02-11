import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" flex justify-center place-items-center w-screen bottom-0 left-0 fixed  ">
      <div className="grid w-full mx-auto grid-cols-2 justify-center align-middle place-items-center ">
        <Link href="/" passHref>
          <a className="h-20  text-xl w-full flex justify-center text-center font-bold text-white hover:text-gray-400 bg-pokered rounded-t-lg">
            <p className="self-center">Fields</p>
          </a>
        </Link>
        <Link href="/mylist" passHref>
          <a className="h-20  text-xl w-full flex justify-center text-center font-bold text-white hover:text-gray-400 bg-pokered rounded-t-lg">
            <p className="self-center">My Pokemon</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
