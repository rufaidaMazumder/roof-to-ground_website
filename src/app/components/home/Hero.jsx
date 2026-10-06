import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="bg-[#0B1F33] text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg,#0B1F33 15%,rgba(11,31,51,0.35)), url('/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] tracking-wide">
          <span className="mr-1 text-[#E8692D]">●</span> BUILD WITH CONFIDENCE
        </span>
        <h1 className="mt-6 max-w-2xl text-5xl font-light leading-tight">
          Everything your project needs, from roof to ground.
        </h1>
        <p className="mt-5 max-w-lg text-gray-300">
          Compare trusted materials, request bulk quotes, and hire verified building
          professionals—all in one secure marketplace.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="#materials" className="rounded-md bg-[#E8692D] px-6 py-3 text-sm font-semibold">
            Shop materials →
          </Link>
          <Link href="#bulk" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0B1F33]">
            Request a bulk quote →
          </Link>
        </div>
        <p className="mt-6 flex gap-5 text-xs text-gray-300">
          <span>✓ 1,200+ verified vendors</span>
          <span>✓ 4.8/5 buyer rating</span>
          <span>✓ Secure checkout</span>
        </p>
      </div>
    </section>
  );
}