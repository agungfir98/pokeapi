import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-20 flex justify-center place-items-center w-screen bottom-0 left-0 absolute bg-pokered rounded-t-lg">
      <div className="grid w-full mx-auto grid-cols-2 justify-center align-middle place-items-center">
        <div className="col-span-1 justify-center align-middle flex">
          <Link href="/" passHref>
            <a className="text-xl  text-center font-bold text-white hover:text-gray-400">
              Fields
            </a>
          </Link>
        </div>
        <div className="col-span-1 justify-center align-middle flex">
          <Link href="/mylist" passHref>
            <a className="text-xl font-bold text-white hover:text-gray-400">
              My Pokemon
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
