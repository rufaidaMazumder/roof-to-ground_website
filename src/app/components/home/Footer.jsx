const cols = {
  Marketplace: ["Shop materials", "Request a quote", "Find vendors", "Deals"],
  "Build & design": ["Find professionals", "House plans", "Material calculator", "Project guides"],
  "For partners": ["Sell on RoofToGround", "Join as a professional", "Vendor centre", "Partner standards"],
  Support: ["Help centre", "Payments & delivery", "Returns & disputes", "Contact us"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1F33] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-5">
        <div>
          <p className="text-xl">RoofToGround</p>
          <p className="mt-3 text-xs text-gray-400">
            The trusted marketplace for construction materials, vendors, plans, and professionals.
          </p>
          <p className="mt-3 text-xs text-gray-400">support@rooftoground.com</p>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold">{title}</p>
            <ul className="mt-3 space-y-2 text-xs text-gray-400">
              {links.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl justify-between border-t border-white/10 pt-4 text-xs text-gray-500">
        <span>© 2026 RoofToGround Marketplace. All rights reserved.</span>
        <span>Privacy · Terms · Cookies · Trust & safety</span>
      </div>
    </footer>
  );
}