import Link from "next/link";

export default function AuthShell({ title, mode, role, children }) {
  const q = role && role !== "customer" ? `?role=${role}` : "";
  const tab = (active) =>
    `flex-1 rounded-md py-2 text-center text-sm font-medium ${
      active ? "bg-white text-[#E8692D] shadow-sm" : "bg-gray-200 text-gray-600"
    }`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto w-full max-w-xl">
        <Link href="/" className="text-sm text-gray-500">← Back to home</Link>
        <h1 className="mt-4 text-2xl font-bold text-[#0B1F33]">{title}</h1>
        <p className="mb-5 text-sm text-[#E8692D]">
          Join RoofToGround and get your next project moving.
        </p>
        {mode && (
          <div className="mb-5 flex gap-1 rounded-lg bg-gray-100 p-1">
            <Link href={`/sign-in${q}`} className={tab(mode === "sign-in")}>Sign in</Link>
            <Link href={`/sign-up${q}`} className={tab(mode === "sign-up")}>Sign up</Link>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}