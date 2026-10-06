import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/app/lib/auth";
import DashboardNavbar from "@/app/components/DashboardNavbar";

const links = ["Dashboard", "My Profile", "Job Requests", "Messages", "Reviews"];
const topLinks = ["Sell on RoofToGround", "Join as a professional", "Help centre"];

export default async function ProfessionalDashboard() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/sign-in");
  if (session.user.role !== "professional") redirect("/dashboard");

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      <DashboardNavbar links={links} topLinks={topLinks} />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs font-semibold uppercase text-[#E8692D]">Professional dashboard</p>
        <h1 className="text-2xl font-semibold text-[#0B1F33]">
          Welcome back, {session.user.name}!
        </h1>
      </main>
    </div>
  );
}