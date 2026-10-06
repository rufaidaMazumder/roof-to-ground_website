"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthShell from "@/app/components/auth/AuthShell";
import Field from "@/app/components/auth/Field";
import { signUp } from "@/app/lib/auth-client";

const titles = {
  customer: "Join as customer",
  vendor: "Join as seller",
  professional: "Join as professional",
};
const professions = ["Civil Engineer", "Architect","Painter", "Plumber", "Electrician"];
const categories = ["Cement", "Steel & rods", "Bricks & blocks", "Sand & aggregates", "Roofing", "Plumbing", "Electrical", "Paint", "Tools", "Glass"];

function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const roleParam = useSearchParams().get("role");
  const role = ["vendor", "professional"].includes(roleParam) ? roleParam : "customer";

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
    const { error } = await signUp.email({
      name: `${d.firstName} ${d.lastName}`,
      email: d.email,
      password: d.password,
      role,
      phone: d.phone,
      city: d.city,
      profession: d.profession,
      experience: d.experience,
      gender: d.gender,
      shopName: d.shopName,
      shopAddress: d.shopAddress,
      businessCategory: d.businessCategory,
    });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }
    router.push(`/verify-email?email=${encodeURIComponent(d.email)}`);
  };

  return (
    <AuthShell title={titles[role]} mode="sign-up" role={role}>
      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
        <Field label="First name" name="firstName" placeholder="Rufaida" />
        <Field label="Last name" name="lastName" placeholder="Mazumder" />

        {role === "professional" && (
          <Field className="col-span-2" label="Select your profession" name="profession" placeholder="Choose profession" options={professions} />
        )}
        {role === "vendor" && (
          <Field className="col-span-2" label="Business / Shop name" name="shopName" placeholder="Enter your shop name" />
        )}

        <Field className="col-span-2" label="Email address" name="email" type="email" placeholder="you@example.com" />
        <Field className="col-span-2" label="Contact number" name="phone" placeholder="+8801XXXXXXXXX" />

        {role === "vendor" ? (
          <>
            <Field className="col-span-2" label="Shop address" name="shopAddress" placeholder="Sylhet / Sylhet Sadar / Shahjalal Uposhohor" />
            <Field className="col-span-2" label="Business category" name="businessCategory" placeholder="Select category" options={categories} />
          </>
        ) : (
          <Field className="col-span-2" label="City / Area" name="city" placeholder="Sylhet / Sylhet Sadar / Noyashorok" />
        )}

        {role === "professional" && (
          <>
            <Field label="Years of experience" name="experience" placeholder="1 / 2 / 3 ..." />
            <Field label="Gender" name="gender" placeholder="Select" options={["Male", "Female", "Other"]} />
          </>
        )}

        <Field className="col-span-2" label="Password" name="password" type="password" placeholder="At least 8 characters" />
        <Field className="col-span-2" label="Confirm password" name="confirmPassword" type="password" placeholder="Repeat your password" />

        <p className="col-span-2 text-xs text-gray-500">
          By continuing, you agree to the Terms of service and acknowledge the Privacy policy.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="col-span-2 rounded-md bg-[#E8692D] py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
        <button
          type="button"
          disabled
          title="Coming later"
          className="col-span-2 rounded-md border border-gray-200 py-3 text-sm text-gray-400"
        >
          Continue with Google (coming later)
        </button>
      </form>
    </AuthShell>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={null}>
      <SignUpForm />
    </Suspense>
  );
}