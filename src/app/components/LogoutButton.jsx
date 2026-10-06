"use client";
import { useRouter } from "next/navigation";
import { signOut } from "@/app/lib/auth-client";

export default function LogoutButton({ redirectTo = "/sign-in", className = "" }) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push(redirectTo);
          router.refresh();
        },
      },
    });
  };

  return (
    <button type="button" onClick={handleLogout} className={className}>
      Logout
    </button>
  );
}