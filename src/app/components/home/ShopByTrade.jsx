const trades = [
  ["Cement", "🧱"], ["Steel rods", "🏗️"], ["Bricks & blocks", "🧱"],
  ["Sand & aggregates", "⛏️"], ["Roofing", "🏠"], ["Plumbing", "🔧"],
  ["Electrical", "⚡"], ["Paint", "🎨"], ["Tools", "🔨"],
];

export default function ShopByTrade() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-xs font-semibold text-[#E8692D]">SHOP BY TRADE</p>
      <h2 className="mt-2 text-3xl text-[#0B1F33]">Materials for every stage of the build</h2>
      <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-9">
        {trades.map(([name, icon]) => (
          <div key={name} className="flex flex-col items-center gap-2 rounded-lg bg-[#F5F7F9] p-4 text-center text-xs text-[#0B1F33]">
            <span className="text-2xl">{icon}</span>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}