# Shivam Mathur — Personal Portfolio

Enterprise-grade personal portfolio website for Shivam Mathur — LATTICE Developer at Anduril Industries, aerospace engineer, and researcher specializing in hypersonic systems, robotics, and defense technology.

Inspired by the design language of Palantir and Anduril: dark, high-contrast, precise typography, cinematic sections, subtle grid/noise backgrounds, and strong motion design.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Visualizations | Recharts (skills radar, experience charts) |
| Particles | tsParticles |
| Blog | MDX via `@next/mdx` |
| Icons | Lucide React |
| Linting | ESLint (Next.js config) |

---

## Features

- **Multi-page** — Home, About, Experience, Projects, Publications, Blog, Contact
- **Dark mode by default** with persistent light/dark toggle
- **Smooth animations** — Framer Motion scroll-reveals and transitions
- **Interactive visualizations** — Skills radar chart (Recharts), experience timeline
- **Cinematic hero** — tsParticles interactive background, glitch text, typewriter roles
- **Blog** — 4 starter MDX posts on aerospace/defense/robotics topics with tag filtering
- **Contact form** — Serverless API route (`/api/contact`) with Resend/SendGrid support and graceful local fallback
- **SEO** — `sitemap.ts`, `robots.ts`, OpenGraph image generation, full metadata
- **Custom cursor** — Smooth trailing cursor for desktop
- **Mobile-first responsive** — Full mobile nav with hamburger menu
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation

---

## Project Structure

```
├── data/
│   └── resume.ts          # Centralized TypeScript content module
├── public/                # Static assets
└── src/
    ├── app/
    │   ├── api/
    │   │   └── contact/
    │   │       └── route.ts   # Serverless contact form handler
    │   ├── about/page.tsx
    │   ├── blog/
    │   │   ├── page.tsx
    │   │   └── [slug]/page.tsx
    │   ├── contact/page.tsx
    │   ├── experience/page.tsx
    │   ├── projects/page.tsx
    │   ├── publications/page.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── opengraph-image.tsx   # Dynamic OG image
    │   ├── page.tsx              # Home
    │   ├── robots.ts             # robots.txt
    │   └── sitemap.ts            # sitemap.xml
    └── components/
        ├── AboutSection.tsx
        ├── AmbientParticles.tsx
        ├── AwardsSection.tsx
        ├── ContactSection.tsx
        ├── CustomCursor.tsx
        ├── ExperienceSection.tsx
        ├── Footer.tsx
        ├── HeroSection.tsx
        ├── Navbar.tsx
        ├── ProjectsSection.tsx
        ├── PublicationsSection.tsx
        ├── SkillsSection.tsx
        └── ThemeProvider.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Local Development

```bash
# Clone the repository
git clone https://github.com/SM-737/Shivam-Mathur-portfolio-.git
cd Shivam-Mathur-portfolio-

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (see Environment Variables below)

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Full URL of your deployed site (e.g. `https://shivammathur.dev`). Used for sitemap and OG tags. |
| `RESEND_API_KEY` | Optional | [Resend](https://resend.com) API key for email delivery. Free tier: 100 emails/day. |
| `SENDGRID_API_KEY` | Optional | [SendGrid](https://sendgrid.com) API key (fallback if Resend not set). |
| `CONTACT_FROM_EMAIL` | Optional | Verified sender email address. Defaults to `portfolio@shivammathur.dev`. |
| `CONTACT_TO_EMAIL` | Optional | Recipient email for contact submissions. Defaults to `sm0181196@gmail.com`. |

> **Note:** If no email provider is configured, contact form submissions are logged to the server console. This is the graceful fallback for local development.

---

## Email Provider Setup

### Option 1 — Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your sender domain
3. Create an API key under **API Keys**
4. Set `RESEND_API_KEY` in `.env.local`

### Option 2 — SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify your sender identity / domain
3. Create an API key under **Settings → API Keys**
4. Set `SENDGRID_API_KEY` in `.env.local`

---

## Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL` → your Vercel domain or custom domain
   - `RESEND_API_KEY` or `SENDGRID_API_KEY`
   - `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`
4. Deploy — Vercel auto-detects Next.js and builds the project

#### Custom Domain

In the Vercel dashboard → **Settings → Domains**, add your custom domain and follow the DNS configuration instructions.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## SEO

- **sitemap.xml** — Auto-generated at `/sitemap.xml` (all static routes + blog slugs)
- **robots.txt** — Auto-generated at `/robots.txt`
- **OpenGraph image** — Dynamically generated at build time via `app/opengraph-image.tsx`
- **Metadata** — Per-page title, description, and keywords via Next.js `generateMetadata`

---

## Content Updates

All portfolio content is centralized in **`data/resume.ts`**. Edit this file to update:

- Personal details (name, contact, tagline)
- Education and courses
- Experience timeline
- Projects
- Publications
- Skills (technical + soft)
- Certifications
- Awards
- Languages

Blog posts are defined inline in `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`.

---

## License

All rights reserved. © Shivam Mathur.

