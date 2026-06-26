# Etimad AI Labs — Website

Premium marketing site for **Etimad AI Labs Private Limited** (`etimad.ai`).

Built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build & run

```bash
pnpm build
pnpm start
```

The site is fully static (`○ prerendered`) and deploys to Vercel, Netlify, or
any static host with zero config.

## Structure

```
app/
  layout.tsx      Root layout, metadata, SEO, fonts
  page.tsx        Page composition + JSON-LD structured data
  globals.css     Design tokens, theme, animations (Tailwind v4 @theme)
components/        Navbar, Hero, Services, Approach, Process, Team, Contact, Footer
lib/content.ts     All site copy & data (single source of truth)
public/favicon.svg Brand mark
```

## Editing content

All copy — services, principles, process steps, founders, address, email —
lives in `lib/content.ts`. Update there and it propagates across the site,
including the SEO/JSON-LD metadata.

## Brand

- Accent: teal → sky gradient ("etimad" = trust)
- Background: near-black ink scale
- Font: Geist

## Deploy to `etimad.ai`

1. Push to a Git repo and import into Vercel.
2. Add `etimad.ai` as a custom domain.
3. Done — no environment variables required.

The contact form POSTs `{ name, company, message }` to a Cloud Run
notification function that alerts the sales team. The endpoint is set in
`components/Contact.tsx` (`NOTIFY_URL`) and can be overridden at build time
with the `NEXT_PUBLIC_NOTIFY_URL` environment variable. The function must send
CORS headers (`Access-Control-Allow-Origin`) for the browser request to
succeed.
