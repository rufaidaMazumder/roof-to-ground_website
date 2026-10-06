import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function sendEmail({ to, subject, html }) {
  await transporter.sendMail({
    from: `"RoofToGround" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
}