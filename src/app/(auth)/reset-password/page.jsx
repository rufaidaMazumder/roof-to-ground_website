"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthShell from "@/app/components/auth/AuthShell";
import Field from "@/app/components/auth/Field";
import { authClient } from "@/app/lib/auth-client";

function ResetForm() {
  const router = useRouter();
  const email = useSearchParams().get("email") || "";
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));

    if (d.password !== d.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (d.password.length < 8 || !/[A-Z]/.test(d.password) || !/[0-9]/.test(d.password)) {
      alert("Password needs 8+ characters, 1 uppercase letter and 1 number");
      return;
    }

    setLoading(true);
    const { error } = await authClient.emailOtp.resetPassword({
      email,
      otp: d.otp,
      password: d.password,
    });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }
    alert("Password changed. Please sign in.");
    router.push("/sign-in");
  };

  return (
    <AuthShell title="Reset password">
      <form onSubmit={onSubmit} className="space-y-4">
        <p className="text-sm text-gray-600">We sent a 6-digit code to {email}</p>
        <Field label="6-digit code" name="otp" placeholder="123456" />
        <Field label="New password" name="password" type="password" placeholder="At least 8 characters" />
        <Field label="Confirm new password" name="confirmPassword" type="password" placeholder="Repeat password" />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-[#E8692D] py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Saving..." : "Reset password"}
        </button>
      </form>
    </AuthShell>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetForm />
    </Suspense>
  );
}