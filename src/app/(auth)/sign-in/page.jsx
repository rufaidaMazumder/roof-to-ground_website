"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AuthShell from "@/app/components/auth/AuthShell";
import Field from "@/app/components/auth/Field";
import { signIn, authClient } from "@/app/lib/auth-client";

const titles = {
  customer: "Join as customer",
  vendor: "Join as seller",
  professional: "Join as professional",
};

function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const roleParam = useSearchParams().get("role");
  const role = ["vendor", "professional"].includes(roleParam) ? roleParam : "customer";

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email").toString();
    const password = fd.get("password").toString();

    setLoading(true);
    const { error } = await signIn.email({ email, password });
    setLoading(false);

    if (error) {
      if (error.status === 403) {
        // email exists but is not verified: send a new code
        await authClient.emailOtp.sendVerificationOtp({
          email,
          type: "email-verification",
        });
        router.push(`/verify-email?email=${encodeURIComponent(email)}`);
        return;
      }
      alert(error.message);
      return;
    }
    router.push("/dashboard");
  };

  return (
    <AuthShell title={titles[role]} mode="sign-in" role={role}>
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Email address" name="email" type="email" placeholder="you@example.com" />
        <Field label="Enter your password" name="password" type="password" placeholder="At least 8 characters" />
        <p className="text-xs text-gray-500">
          By continuing, you agree to the Terms of service and acknowledge the Privacy policy.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-[#E8692D] py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <button
          type="button"
          disabled
          title="Coming later"
          className="w-full rounded-md border border-gray-200 py-3 text-sm text-gray-400"
        >
          Continue with Google (coming later)
        </button>
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">
            No account?{" "}
            <Link href={`/sign-up${role !== "customer" ? `?role=${role}` : ""}`} className="underline">
              Sign up
            </Link>
          </span>
          <Link href="/forgot-password" className="font-semibold text-[#E8692D]">
            Forgot password?
          </Link>
        </div>
      </form>
    </AuthShell>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <SignInForm />
    </Suspense>
  );
}