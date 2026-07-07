# PIPS Kassesay Campus — Official Website

Premium website for PIPS Kassesay Campus (Hafizabad District, Punjab), a
franchise campus of the PIPS School System. Built with Next.js 14, TypeScript,
Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy (Vercel — free)

1. Push this repo to GitHub (already done if you're reading this there).
2. Go to https://vercel.com → New Project → import this repo → Deploy.
   No configuration needed.

## Make it yours — three things to do

1. **Photos & logo** — drop real files into `public/assets/` using the exact
   filenames listed in [`public/assets/README-ASSETS.md`](public/assets/README-ASSETS.md).
   Placeholders disappear automatically.
2. **Admissions email** — create a free account at https://resend.com, create
   an API key, then copy `.env.example` to `.env.local` and fill in
   `RESEND_API_KEY` and `ADMISSIONS_EMAIL`. On Vercel, add the same two values
   under Project Settings → Environment Variables. Until then, form
   submissions are logged to the server console (the form still works).
3. **Content** — everything editable lives in `/data`:
   - `data/news.ts` — add announcements here (this is the ONLY news source; no external feed by design)
   - `data/faculty.ts` — real teacher names, roles, bios + principal's message
   - `data/societies.ts` — society names and descriptions
   - `data/testimonials.ts` — real parent feedback (with permission)

   Campus contact details (phones, address, hours) are in `lib/site.ts`.

## Structure

- `app/` — pages: home, about, academics, faculty, societies, gallery, news (+ posts), admissions, contact
- `app/api/admissions/` — inquiry form endpoint
- `components/` — shared UI (nav, footer, hero, honour code reveal, carousel…)
- Brand color tokens: `app/globals.css` (single source of truth)
