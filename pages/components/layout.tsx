import Navbar from "./navbar";
import Pokeown from "./pokeown";

export default function Layout({ children }: any) {
  return (
    <div className="h-screen w-screen">
      <main className="">{children}</main>
    </div>
  );
}
