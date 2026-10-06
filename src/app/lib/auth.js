import { betterAuth } from "better-auth";
import { emailOTP } from "better-auth/plugins";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { sendEmail } from "./email";

const client = new MongoClient(process.env.BETTER_AUTH_MONGODB_URL);
const db = client.db("rtg_better_auth");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

    user: {
    additionalFields: {
      role: { type: "string", required: false, defaultValue: "customer", input: true },
      phone: { type: "string", required: false, input: true },
      city: { type: "string", required: false, input: true },
      profession: { type: "string", required: false, input: true },
      experience: { type: "string", required: false, input: true },
      gender: { type: "string", required: false, input: true },
      shopName: { type: "string", required: false, input: true },
      shopAddress: { type: "string", required: false, input: true },
      businessCategory: { type: "string", required: false, input: true },
    },
  },

  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          // only these roles are allowed from sign-up (never "admin")
          const allowed = ["customer", "vendor", "professional"];
          const role = allowed.includes(user.role) ? user.role : "customer";
          return { data: { ...user, role } };
        },
      },
    },
  },

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },

  emailVerification: {
    autoSignInAfterVerification: true,
  },

  plugins: [
    emailOTP({
      overrideDefaultEmailVerification: true,
      sendVerificationOnSignUp: true,
      otpLength: 6,
      expiresIn: 300,
      async sendVerificationOTP({ email, otp, type }) {
        const subject =
          type === "forget-password"
            ? "Reset your RoofToGround password"
            : "Verify your RoofToGround email";

        const html = `
          <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto">
            <h2>RoofToGround</h2>
            <p>Your verification code is:</p>
            <p style="font-size:32px;font-weight:bold;letter-spacing:6px">${otp}</p>
            <p>This code expires in 5 minutes. If you did not request it, ignore this email.</p>
          </div>`;

        sendEmail({ to: email, subject, html }).catch((err) =>
          console.error("Email error:", err)
        );
      },
    }),
  ],
});