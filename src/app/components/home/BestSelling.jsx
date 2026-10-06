const products = [
  { tag: "SAME-DAY DELIVERY", name: "Premium Portland Cement 50kg", vendor: "BuildMart Sylhet", rating: 4.9, price: "৳520", unit: "/bag", icon: "🧱" },
  { tag: "FREE DELIVERY OVER ৳20,000", name: "High-Tensile Steel Rod — 12mm", vendor: "Metro Steel Works", rating: 4.8, price: "৳2,250", unit: "/pc", icon: "🏗️" },
  { tag: "450 PIECES AVAILABLE", name: "6-inch Solid Concrete Block", vendor: "PrimeBlock Industries", rating: 4.7, price: "৳65", unit: "/piece", icon: "🧱" },
  { tag: "CUT TO YOUR MEASUREMENT", name: "Aluzinc Roofing Sheet 0.45mm", vendor: "Crown Roofing Co.", rating: 4.9, price: "৳1,350", unit: "/sheet", icon: "🏠" },
];

export default function BestSelling() {
  return (
    <section id="materials" className="bg-[#F5F7F9] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold text-[#E8692D]">TOP PICKS THIS WEEK</p>
            <h2 className="mt-2 text-3xl text-[#0B1F33]">Best-selling materials</h2>
            <p className="mt-1 text-sm text-gray-500">
              Live stock from highly rated suppliers near you. Compare unit prices before you buy.
            </p>
          </div>
          <div className="hidden gap-2 text-xs md:flex">
            {["All materials", "In stock nearby", "Top rated"].map((t) => (
              <span key={t} className="rounded-full border border-gray-300 bg-white px-3 py-1">{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="flex h-36 items-center justify-center bg-gray-200 text-5xl">{p.icon}</div>
              <div className="p-4">
                <p className="text-[10px] font-semibold text-green-700">{p.tag}</p>
                <h3 className="mt-1 text-sm font-semibold text-[#0B1F33]">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.vendor} · ★ {p.rating}</p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-bold text-[#0B1F33]">
                    {p.price} <span className="text-xs font-normal text-gray-500">{p.unit}</span>
                  </p>
                  <button className="h-8 w-8 rounded-md bg-[#E8692D] text-lg text-white">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}