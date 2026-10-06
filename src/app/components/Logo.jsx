import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#E8692D] font-bold text-white">
        R
      </span>
      <span className="text-xl text-[#0B1F33]">RoofToGround</span>
    </Link>
  );
}