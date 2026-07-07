# Asset Guide — PIPS Kassesay Campus Website

Drop real files into these folders using the **exact filenames** below and the
site picks them up automatically — no code changes needed. Until a file
exists, the site shows a clean green placeholder (never a broken image).

**General rules**
- JPG for photos, PNG for logos. Keep each photo under ~500 KB (the site
  optimizes further, but smaller uploads = faster builds).
- Photos should be sharp, well-lit, and taken in landscape orientation
  unless a portrait crop is listed below.
- After adding files, rebuild/redeploy the site (on Vercel: just `git push`).

---

## /logo/

| File | What it is | Size |
|---|---|---|
| `pips-logo-primary.png` | Main PIPS/campus logo, transparent background | min 512×512 px |
| `pips-logo-mono-white.png` | All-white version for dark green backgrounds | min 512×512 px |
| `favicon.png` | Browser tab icon (square crop of the crest) | 256×256 px — also copy it to `/app/icon.png` |

Until logos are added, the site shows a drawn crest mark in brand green.

---

## /photos/

| File | Where it appears | Size / crop |
|---|---|---|
| `hero-campus.jpg` | Homepage full-screen hero | **2400×1600 px landscape.** The most important photo on the site — golden-hour shot of the campus building with students if possible. Left side stays partly covered by text, so keep the key subject right-of-center. |
| `principal.jpg` | About page, Principal's Message | 1000×1250 px, **4:5 portrait**, chest-up, plain background |

---

## /photos/gallery/

**Homepage "Snapshots" strip** — 8 square photos, cropped 1:1:

`snap-01.jpg` … `snap-08.jpg` — 1200×1200 px each. Mix of classroom,
assembly, sports, and event shots. These are the first real photos visitors
see, so choose the strongest eight.

**Gallery page** — `gallery-1.jpg` … `gallery-12.jpg` — 1200×1200 px, 1:1.
Each slot has a category set in `app/gallery/page.tsx` (Events / Sports /
Academics / Campus) — match the photo to its slot's category, or edit the
category list in that file.

---

## /photos/faculty/

`faculty-1.jpg` … `faculty-6.jpg` — 1000×1250 px, **4:5 portrait**, chest-up,
consistent plain background across all staff photos (same wall/backdrop makes
the grid look professional).

Names, roles, and bios live in `data/faculty.ts` — edit that file to match
each photo to the right teacher, and add more entries if there are more staff.

---

## /photos/societies/

One landscape photo per society, **16:10 crop, 1600×1000 px**:

| File | Society |
|---|---|
| `literary-debating.jpg` | Literary & Debating |
| `science-steam.jpg` | Science & STEAM |
| `sports.jpg` | Sports |
| `arts-media.jpg` | Arts & Media |
| `islamic-studies.jpg` | Islamic Studies |
| `community-service.jpg` | Community Service |
| `leadership-mun.jpg` | Leadership & MUN |

Society names and descriptions are editable in `data/societies.ts`.
