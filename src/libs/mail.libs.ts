import nodemailer from "nodemailer";
import { MAILER_EMAIL, MAILER_PASSWORD } from "./environment.libs";
import { StatusCodes } from "http-status-codes";

export const transporter = nodemailer.createTransport({
  host: "smtp.tital.email",
  port: 465,
  secure: true,
  auth: {
    user: MAILER_EMAIL,
    pass: MAILER_PASSWORD,
  },
});

export const sendResetMail = async (
  to: string,
  resetUrl: string
): Promise<void> => {
  const mailOptions = {
    from: MAILER_EMAIL,
    to,
    subject: "Password Reset Request",
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
  };

  await transporter.sendMail(mailOptions);
};
