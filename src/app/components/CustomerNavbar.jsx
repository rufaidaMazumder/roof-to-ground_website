"use client";
import Link from "next/link";
import { useSession } from "@/app/lib/auth-client";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

const navLinks = [
  "Materials",
  "Professionals",
  "Vendors",
  "House plans",
  "Material calculator",
  "Deals",
];

export default function CustomerNavbar() {
  const { data: session, isPending } = useSession();
  const role = session?.user?.role;

  return (
    <header className="w-full bg-white">
      {/* top bar */}
      <div className="flex justify-between bg-[#0B1F33] px-6 py-2 text-xs text-white">
        <span>Verified vendors • Secure payments • Quality materials</span>
        <div className="flex gap-4">
          <Link href="/sign-up?role=vendor">Join as Seller</Link>
          <Link href="/sign-up?role=professional">Join as a professional</Link>
          <a href="#">Help centre</a>
        </div>
      </div>

      {/* main bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <Logo />
        <div className="flex items-center gap-6 text-sm text-[#0B1F33]">
          {isPending ? null : session ? (
            <>
              {role && role !== "customer" && (
                <Link href="/dashboard" className="underline">
                  My dashboard
                </Link>
              )}
              <span>Hi, {session.user.name}</span>
              <LogoutButton redirectTo="/" className="font-medium hover:text-[#E8692D]" />
            </>
          ) : (
            <Link href="/sign-in" className="font-medium hover:text-[#E8692D]">
              Sign in
            </Link>
          )}
          <a href="#">
            Messages <span className="ml-1 rounded-full bg-[#E8692D] px-1.5 text-xs text-white">3</span>
          </a>
          <a href="#">
            Cart <span className="ml-1 rounded-full bg-[#E8692D] px-1.5 text-xs text-white">2</span>
          </a>
        </div>
      </div>

      {/* category row */}
      <nav className="flex items-center gap-6 border-y border-gray-200 px-6 py-3 text-sm text-[#0B1F33]">
        <a href="#" className="text-[#E8692D]">All categories</a>
        {navLinks.map((l) => (
          <a key={l} href="#">{l}</a>
        ))}
        <input
          placeholder="Search cement, roofing, vendors, professionals..."
          className="ml-auto w-96 rounded-full border border-gray-300 bg-gray-100 px-4 py-1.5 text-xs"
        />
      </nav>
    </header>
  );
}