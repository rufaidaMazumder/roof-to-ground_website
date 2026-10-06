const pros = [
  ["Civil engineers", "84", "4.9", "📐"],
  ["Architects", "62", "4.8", "✏️"],
  ["Contractors", "139", "4.7", "👷"],
  ["Property agents", "48", "4.9", "🔑"],
  ["Painters", "96", "4.8", "🎨"],
  ["Plumbers", "73", "4.7", "🔧"],
];

export default function Professionals() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold text-[#E8692D]">HIRE WITH CONFIDENCE</p>
          <h2 className="mt-2 text-3xl text-[#0B1F33]">Verified building professionals</h2>
          <p className="mt-1 text-sm text-gray-500">
            Browse credentials, portfolios, availability, and reviews before you start a conversation.
          </p>
        </div>
        <button className="rounded-md border border-gray-300 px-4 py-2 text-sm">Find a professional →</button>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {pros.map(([name, count, rating, icon]) => (
          <div key={name} className="rounded-lg bg-[#F5F7F9] p-4">
            <span className="text-2xl">{icon}</span>
            <p className="mt-3 text-sm font-medium text-[#0B1F33]">{name}</p>
            <p className="text-xs text-gray-500">{count} verified nearby</p>
            <p className="mt-1 text-xs font-semibold text-[#E8692D]">★ {rating} average</p>
          </div>
        ))}
      </div>
    </section>
  );
}