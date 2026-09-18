# Tallat Hussain — Personal Portfolio

A production-ready personal portfolio built with Next.js (App Router), TypeScript
and Tailwind CSS, for Tallat Hussain — Security Operations Professional.

## 1. Installation

```bash
npm install
```

## 2. Development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 3. Build

```bash
npm run build
npm run start
```

Fix any build errors before deploying. The project is plain TypeScript + Tailwind
with no external services required to build.

## 4. Environment variables

Copy `.env.example` to `.env.local` and fill in real values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production domain, no trailing slash. Used in canonical URLs, sitemap, robots.txt and JSON-LD. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console HTML-tag verification value. Leave blank until you have a real one. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (starts with `G-`). Leave blank to disable Analytics — it only loads when this is set. |

None of these are required for the site to build or run — they only add
verification/tracking once filled in.

## 5. Vercel deployment

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Add the environment variables from `.env.example` in the Vercel project
   settings (Project → Settings → Environment Variables).
4. Deploy. No extra build configuration is required — Vercel auto-detects
   Next.js.

## 6. Google Search Console setup

1. In Search Console, add your production domain as a property.
2. Choose the "HTML tag" verification method and copy the `content` value.
3. Set `NEXT_PUBLIC_GSC_VERIFICATION` to that value (in `.env.local` for
   local testing, and in Vercel's environment variables for production).
4. Redeploy. The tag is injected automatically via `app/layout.tsx` metadata.
5. Submit `https://your-domain.com/sitemap.xml` in Search Console once live.

## 7. Google Analytics setup

1. Create a GA4 property and copy the Measurement ID (`G-XXXXXXX`).
2. Set `NEXT_PUBLIC_GA_ID` to that value.
3. Redeploy. The GA snippet only loads when this variable is present, so
   nothing is tracked until you add it.

## 8. Replacing/updating the profile image

The hero image lives at `public/images/tallat-hussain-hero.png`. It has
already been cropped to shoulders/mid-thigh (no feet visible) with a
transparent background, matching the hero section's design.

To replace it:

1. Prepare a new image, ideally with a transparent or plain background,
   cropped so the subject is framed from the head to roughly mid-thigh.
2. Save it as `public/images/tallat-hussain-hero.png` (same filename), or
   update the `src` path in `components/Hero.tsx` and the `openGraph`/
   `twitter` image paths in `app/layout.tsx` if you rename the file.
3. Keep the aspect ratio reasonably close to the current one (`760×1398`)
   to avoid layout shift — if it changes significantly, update the
   `aspect-[760/1398]` class in `components/Hero.tsx` to match.

## 9. Adding articles

All article content lives in `lib/data.ts`, in the `articles` array. Each
entry looks like:

```ts
{
  slug: "your-article-slug",       // used in the URL: /articles/your-article-slug
  title: "Your Article Title",
  summary: "One or two sentence summary shown on cards.",
  dateLabel: "[ADD DATE]",         // replace with a real publish date once known
  body: [
    "First paragraph.",
    "Second paragraph.",
    "Add as many paragraphs as needed.",
  ],
},
```

Add a new object to the array and the article page, sitemap entry, listing
card and structured data are all generated automatically — no other files
need to change.

## 10. Updating professional information

Everything on the site — name, tagline, bio, experience, skills,
certifications, projects, FAQ and contact details — is centralized in
`lib/data.ts`. Update the relevant array or object there:

- `site` — name, tagline, short bio, email, LinkedIn, domain.
- `experience` — job history. Replace the `[ADD EMPLOYER]`, `[ADD JOB
  TITLE]` and `[ADD EMPLOYMENT DATES]` placeholders with real details.
- `skillGroups` — skills grouped by category.
- `certifications` — training and certifications. Keep `status: "In
  Progress"` for anything not yet completed (e.g. NEBOSH IGC).
- `projects` — personal projects, each with a `status` of `"Concept"`,
  `"In Development"` or `"Planned"`.
- `faqs` — question/answer pairs used in the FAQ section and FAQPage
  structured data.

No other files need to be touched for routine content updates.

## Project structure

```text
app/
  layout.tsx        Root layout, metadata, JSON-LD (Person, WebSite)
  page.tsx           Homepage (assembles all sections)
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           Dynamic robots.txt
  not-found.tsx        Custom 404 page
  articles/
    page.tsx            Articles listing page
    [slug]/page.tsx       Individual article page (SSG, JSON-LD)
components/          All UI sections (Hero, About, Experience, Skills, ...)
lib/data.ts            Single source of truth for all site content
public/images/          Profile image and static assets
```

## Notes

- Placeholders (`[ADD EMAIL]`, `[ADD LINKEDIN]`, `[ADD EMPLOYER]`, etc.)
  are intentional — no fictional employers, dates, certifications or
  contact details have been invented. Search for `[ADD` in `lib/data.ts`
  to find everything that still needs a real value.
- The contact form uses a `mailto:` handoff (no backend/email service) and
  is disabled until a real email address is set in `lib/data.ts`.
- Animations respect `prefers-reduced-motion` throughout.
