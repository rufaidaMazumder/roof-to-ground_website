const steps = [
  ["01", "Tell us what you need", "Add quantities, brands, and delivery location."],
  ["02", "Receive vendor offers", "Compare prices and message suppliers directly."],
  ["03", "Choose and pay securely", "Approve a quote and track delivery."],
];

export default function BulkQuote() {
  return (
    <section id="bulk" className="bg-[#0B1F33] py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold text-[#E8692D]">BUYING IN BULK?</p>
          <h2 className="mt-2 text-4xl font-light leading-tight">
            One request. Multiple competitive quotes.
          </h2>
          <p className="mt-4 text-sm text-gray-300">
            Upload your bill of quantities or list what you need. Nearby verified vendors
            respond directly, so you can compare price, lead time, and delivery.
          </p>
          <button className="mt-6 rounded-md bg-[#E8692D] px-6 py-3 text-sm font-semibold">
            Start a quote request →
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <div key={n} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold text-[#E8692D]">{n}</p>
              <h3 className="mt-2 text-sm">{t}</h3>
              <p className="mt-2 text-xs text-gray-400">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}