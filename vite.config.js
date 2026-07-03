import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const RESUME_FILENAME = "andras_czipa_resume_frontend.pdf";
const rootDir = dirname(fileURLToPath(import.meta.url));

function devResumeApiPlugin() {
  return {
    name: "dev-api-resume",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/api/resume")) {
          next();
          return;
        }

        const resumePath = join(rootDir, "private", RESUME_FILENAME);
        if (!existsSync(resumePath)) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Resume not found" }));
          return;
        }

        const pdf = readFileSync(resumePath);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${RESUME_FILENAME}"`
        );
        res.end(pdf);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devResumeApiPlugin()],
});
