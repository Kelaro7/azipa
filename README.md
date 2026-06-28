# Portfolio (React + Vite)

Personal portfolio site deployed on Vercel.

## Environment variables

Copy `.env.example` to `.env.local` for local development. On Vercel, set the same variables in the project dashboard.

| Variable | Scope | Description |
|---|---|---|
| `GMAIL_USER` | Server | Gmail address for contact form |
| `GMAIL_APP_PASSWORD` | Server | Gmail app password |
| `VITE_TURNSTILE_SITE_KEY` | Client | Cloudflare Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Server | Cloudflare Turnstile secret key |

Cloudflare Turnstile: create a site at [dash.cloudflare.com](https://dash.cloudflare.com/) → Turnstile. For local dev you can use test keys (see `.env.example`).

## Resume PDF

Place the resume at `private/andras_czipa_resume_frontend.pdf`. It is served via `/api/resume` with rate limiting — not publicly accessible as a static file.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview production build

