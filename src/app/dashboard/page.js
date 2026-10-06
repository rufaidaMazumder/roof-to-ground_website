import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/app/lib/auth";

const destinations = {
  vendor: "/vendor/dashboard",
  professional: "/professional/dashboard",
};

export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/sign-in");

  redirect(destinations[session.user.role] || "/");
}