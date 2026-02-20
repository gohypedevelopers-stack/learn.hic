# Business Scale Workshop — Landing Page

A high-conversion marketing landing page built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + custom design tokens
- **Form**: React Hook Form + Zod validation
- **UI Components**: Radix UI / shadcn-style primitives
- **Deployment**: Vercel

---

## Getting Started (Local Dev)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Deploy Checklist (Vercel)

### Required Files (must be present in repo root)
| File | Purpose |
|------|---------|
| `package.json` | Declares `next build` script |
| `next.config.mjs` | Next.js config (use `.mjs`, NOT `.ts`) |
| `vercel.json` | Explicit Vercel build settings |
| `app/layout.tsx` | Root layout (App Router) |
| `app/page.tsx`  | Home route `/` |

### How to Deploy
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import the repo
3. **Root Directory**: leave as `/` (repo root = Next.js project root)
4. **Build Command**: `next build` *(auto-detected from vercel.json)*
5. **Output Directory**: `.next` *(auto-detected)*
6. Click **Deploy**

### How to Verify on Vercel
- Visit the Vercel preview URL — the home page (`/`) must load with the landing sections
- Visit `<url>/api/apply` with a POST to verify the API route works
- Check **Vercel → Deployments → Build Logs** for any errors

### Common Gotchas
- ❌ Do NOT use `output: "export"` in `next.config` unless deploying as a static site
- ❌ Do NOT commit `.next/` or `node_modules/`
- ✅ Use `next.config.mjs` (not `.ts`) for broadest Vercel compatibility
- ✅ Ensure `vercel.json` has `"framework": "nextjs"`

---

## Project Structure

```
├── app/
│   ├── api/apply/route.ts   # Form submission API
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Home page (/)
│   └── globals.css          # Global styles
├── components/
│   ├── landing/             # Page section components
│   └── ui/                  # Reusable UI primitives
├── lib/
│   ├── constants.ts         # Shared constants
│   └── utils.ts             # cn() helper
├── public/                  # Static assets
├── next.config.mjs          # Next.js config
└── vercel.json              # Vercel deployment config
```
