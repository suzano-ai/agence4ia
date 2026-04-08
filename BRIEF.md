# Agence4IA — Website Build Brief

## Agency Info
- **Name:** Agence4IA
- **Domain:** agence4ia.com
- **Tagline (FR):** "Passez à l'IA. On s'occupe du reste."
- **Tagline (EN):** "Switch to AI. We handle the rest."
- **Languages:** French (primary) + English — language selector visible on first load
- **Hosting:** Render
- **Stack:** Next.js 14 (App Router) + Tailwind CSS + shadcn/ui + i18n (next-intl)

---

## Brand Identity

| Element | Value |
|---------|-------|
| Background | `#f4ebe2` (warm cream) |
| Title background | `#FFC466` (amber yellow) |
| Text / subtitle | `#010101` |
| Purple accent | `#8e59ff` |
| Dark purple | `#230661` |
| Teal accent | `#3ab598` |
| Font | Cocomat Pro (use Nunito as Google Fonts fallback — closest match) |

**Design style:** Neubrutalism-meets-clean-agency
- Geometric thin black borders around title/card blocks
- Corner dot decorations (purple, teal, orange) on cards/sections
- Small arrow/cursor decorative SVG elements scattered
- Color bar accents at top of section blocks
- Clean outlined SVG icons (teal, orange, purple)
- Bold uppercase section titles on colored background blocks
- Very original, bold, NOT generic SaaS blue

---

## Site Architecture

### Homepage flow:
1. **Hero** — full-screen, bilingual toggle visible, tagline, two big CTA buttons:
   - 🎓 "Learn AI" (Formation)
   - 🤖 "AI Integration" (Deployment)
2. **About** — short intro, who we are, our mission
3. **Pole 1 — Learn AI** (Formation section)
4. **Pole 2 — AI Integration** (Deployment section)
5. **Pricing** — separated per pole
6. **Team** — Aymane ABDENNOUR + Bachir GHAFIR IDRISSI (placeholder avatars for now)
7. **Blog** — 3 placeholder articles (for SEO)
8. **Contact / Lead Form**
9. **Footer**

---

## Pole 1 — Learn AI (Formation)

**What's included:**
- Online workshops via Google Meet
- Sessions: 1h minimum, scalable up to 5h+
- Small certification at the end

**Pricing:**
- 1h = €20
- 2h = €36 (10% off)
- 3h = €51 (15% off)
- 5h = €80 (20% off)
- Custom package → contact form

**Target:** B2C — employees, entrepreneurs, students, professionals who want to learn to use AI tools

---

## Pole 2 — AI Integration (Deployment)

**Model:** Monthly subscription, no commitment, starting from €100/month

**Service blocks (use marketing names):**

| Block name | What it does |
|------------|-------------|
| 🤖 **ChatBot Pro** | AI chatbot for website/customer support |
| 📞 **VoiceAgent** | AI for inbound calls + appointment scheduling |
| 📸 **ContentFlow** | AI content generation + auto-posting to Instagram |
| 📅 **BookingAI** | AI booking & calendar management |
| 🌐 **SiteManager AI** | AI to manage and update your website |
| 🎵 **SoundForge AI** | AI for music generation |
| 🎬 **VideoFactory** | AI-generated video creation + auto-publishing |
| ⚡ **AutoPilot** | Custom AI agents for specific business tasks |

**Pricing tiers:**
- Starter: €100/month (1 service block)
- Growth: €250/month (3 service blocks)
- Scale: €500/month (6 service blocks)
- Enterprise: €1000–€5000 (full custom deployment)

**Process shown on site:** Audit → Integration → Automation → Support

**Target:** B2B — startups and small businesses

---

## Lead Capture Form

The user will provide exact form fields later. For now use:
- Full name
- Email
- Phone
- Company name (optional)
- Service interested in (dropdown: Learn AI / AI Integration)
- Message / describe your project
- Budget range (optional)

**Form submissions:** Send confirmation email via Resend

---

## Booking
- Calendar booking link: use Cal.com embed (placeholder link for now)

---

## Team
- **Aymane ABDENNOUR** — Co-founder
- **Bachir GHAFIR IDRISSI** — Co-founder
- Photos: placeholder avatars for now (will be replaced)

---

## Blog
- 3 placeholder SEO articles in both FR and EN:
  1. "Comment l'IA transforme les petites entreprises en 2025"
  2. "Les 5 meilleurs outils IA pour automatiser votre business"
  3. "Formation IA : pourquoi se former maintenant ?"

---

## Integrations
- **Resend** — transactional email (form confirmations)
- **Cal.com** — booking embed
- **next-intl** — FR/EN i18n

---

## Technical Requirements
- Next.js 14 App Router
- Tailwind CSS + shadcn/ui
- next-intl for i18n (FR primary, EN secondary)
- Fully responsive (mobile-first)
- SEO optimized (meta tags, OG, sitemap)
- Deployed on Render (include render.yaml)
- No fake testimonials
- No placeholder logos (generate SVG logo with brand colors)

---

## Deliverables
1. Full Next.js project in `/agence4ia/`
2. All pages working
3. i18n strings in `/messages/fr.json` and `/messages/en.json`
4. `render.yaml` for deployment
5. `README.md` with setup instructions
6. GitHub-ready (`.gitignore`, clean commits)

When completely finished, run:
openclaw system event --text "Done: Agence4IA website fully built and ready for GitHub push" --mode now
