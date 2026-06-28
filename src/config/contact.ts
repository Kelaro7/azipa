export const LINKEDIN_URL = "https://www.linkedin.com/in/andras-czipa/";

export const RESUME_FILENAME = "andras_czipa_resume_frontend.pdf";

export function getPhoneHref(): string {
  const parts = ["+36", "20", "429", "9395"];
  return `tel:${parts.join("")}`;
}
