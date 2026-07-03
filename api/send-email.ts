import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { getClientIp, isRateLimited } from "./lib/rate-limit";
import { verifyTurnstileToken } from "./lib/turnstile";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_MS = 3000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const clientIp = getClientIp(req.headers["x-forwarded-for"]);

  const { name, email, subject, message, website, turnstileToken, elapsedMs } =
    req.body ?? {};

  if (website) {
    return res.status(200).json({ success: true });
  }

  if (
    isRateLimited("send-email", clientIp, {
      max: 5,
      windowMs: 60 * 60 * 1000,
    })
  ) {
    return res.status(429).json({ error: "Too many requests. Try again later." });
  }

  if (typeof elapsedMs !== "number" || elapsedMs < MIN_SUBMIT_MS) {
    return res.status(400).json({ error: "Invalid submission" });
  }

  if (!turnstileToken || typeof turnstileToken !== "string") {
    return res.status(400).json({ error: "Captcha verification required" });
  }

  const turnstileValid = await verifyTurnstileToken(turnstileToken, clientIp);
  if (!turnstileValid) {
    return res.status(400).json({ error: "Captcha verification failed" });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const safeName = escapeHtml(String(name));
  const safeEmail = escapeHtml(String(email));
  const safeMessage = escapeHtml(String(message));

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${safeName}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `[Portfolio] ${String(subject)}`,
      text: `From: ${String(name)} (${email})\n\n${String(message)}`,
      html: `
        <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
        <hr />
        <p>${safeMessage.replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
