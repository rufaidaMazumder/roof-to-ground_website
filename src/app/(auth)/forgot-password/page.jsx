"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "@/app/components/auth/AuthShell";
import Field from "@/app/components/auth/Field";
import { authClient } from "@/app/lib/auth-client";

export default function ForgotPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email").toString();

    setLoading(true);
    const { error } = await authClient.emailOtp.sendVerificationOtp({
      email,
      type: "forget-password",
    });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }
    router.push(`/reset-password?email=${encodeURIComponent(email)}`);
  };

  return (
    <AuthShell title="Forgot password">
      <form onSubmit={onSubmit} className="space-y-4">
        <p className="text-sm text-gray-600">
          Enter your email and we will send you a 6-digit code.
        </p>
        <Field label="Email address" name="email" type="email" placeholder="you@example.com" />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-[#E8692D] py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send code"}
        </button>
      </form>
    </AuthShell>
  );
}