import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { getClientIp, isRateLimited } from "./lib/rate-limit";

const RESUME_FILENAME = "andras_czipa_resume_frontend.pdf";

function getResumePath(): string | null {
  const candidates = [
    join(process.cwd(), "private", RESUME_FILENAME),
    join(process.cwd(), "..", "private", RESUME_FILENAME),
  ];

  return candidates.find((path) => existsSync(path)) ?? null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const clientIp = getClientIp(req.headers["x-forwarded-for"]);

  if (
    isRateLimited("resume", clientIp, {
      max: 10,
      windowMs: 60 * 60 * 1000,
    })
  ) {
    return res.status(429).json({ error: "Too many requests. Try again later." });
  }

  const resumePath = getResumePath();
  if (!resumePath) {
    console.error("Resume file not found. cwd:", process.cwd());
    return res.status(404).json({ error: "Resume not found" });
  }

  try {
    const pdf = readFileSync(resumePath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="andras_czipa_resume_frontend.pdf"'
    );
    res.setHeader("Cache-Control", "private, no-store");

    return res.status(200).send(pdf);
  } catch (err) {
    console.error("Resume download error:", err);
    return res.status(500).json({ error: "Failed to download resume" });
  }
}
