import { useRouter } from "next/router";

export default function BackBtn() {
  const router = useRouter();
  const larr = "<";
  return (
    <div className="absolute m-1 md:hidden">
      <button type="button" onClick={() => router.back()}>
        <div className="flex h-12 w-12 bg-white/20 rounded-full text-center align-middle">
          <p className="mx-auto my-auto text-3xl font-medium">{larr}</p>
        </div>
      </button>
    </div>
  );
}
