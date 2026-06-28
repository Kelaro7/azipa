import { RESUME_FILENAME } from "../config/contact";

export async function downloadResume(): Promise<void> {
  const res = await fetch("/api/resume");
  if (!res.ok) {
    throw new Error("Failed to download resume");
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = RESUME_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
