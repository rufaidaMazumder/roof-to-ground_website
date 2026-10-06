"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";

function VerifyForm() {
  const router = useRouter();
  const email = useSearchParams().get("email") || "";
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const otp = new FormData(e.currentTarget).get("otp").toString();

    setLoading(true);
    const { error } = await authClient.emailOtp.verifyEmail({ email, otp });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }
    router.push("/");
  };

  const resend = async () => {
    const { error } = await authClient.emailOtp.sendVerificationOtp({
      email,
      type: "email-verification",
    });
    alert(error ? error.message : "A new code has been sent.");
  };

  return (
    <div className="flex justify-center">
      <Form className="w-full max-w-96" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Verify your email</h1>
        <Description>We sent a 6-digit code to {email}</Description>

        <TextField
          isRequired
          name="otp"
          validate={(value) =>
            /^\d{6}$/.test(value) ? null : "Enter the 6-digit code"
          }
        >
          <Label>Verification code</Label>
          <Input placeholder="123456" maxLength={6} />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" isDisabled={loading}>
            Verify
          </Button>
          <Button type="button" variant="secondary" onPress={resend}>
            Resend code
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyForm />
    </Suspense>
  );
}