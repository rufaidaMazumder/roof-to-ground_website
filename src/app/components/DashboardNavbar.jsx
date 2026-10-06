import Link from "next/link";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

export default function DashboardNavbar({ links, topLinks }) {
  return (
    <header className="w-full bg-white">
      <div className="flex justify-between bg-[#0B1F33] px-6 py-2 text-xs text-white">
        <span>Verified vendors • Secure payments • Quality materials</span>
        <div className="flex gap-4">
          {topLinks.map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-gray-200 px-6">
        <div className="py-4">
          <Logo />
        </div>

        <nav className="flex gap-8 text-sm text-[#0B1F33]">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`py-5 ${
                i === 0 ? "border-b-2 border-[#E8692D] text-[#E8692D]" : ""
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm text-[#0B1F33]">
          <span title="Notifications">🔔</span>
          <LogoutButton className="font-medium hover:text-[#E8692D]" />
        </div>
      </div>
    </header>
  );
}