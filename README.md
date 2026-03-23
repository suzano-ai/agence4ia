# Agence4IA Website

Website for Agence4IA - AI training and integration agency.

**Tagline:** "Passez à l'IA. On s'occupe du reste." / "Switch to AI. We handle the rest."

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **i18n:** next-intl (French & English)
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Email:** Resend (for form confirmations)
- **Hosting:** Render

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file with:

```env
# Resend (for email confirmations)
RESEND_API_KEY=your_resend_api_key

# Notion (for lead capture)
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_database_id
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx    # Locale layout with i18n provider
│   │   └── page.tsx      # Homepage with all sections
│   ├── globals.css       # Global styles & brand colors
│   └── layout.tsx        # Root layout
├── components/
│   ├── sections/         # Page sections (Hero, About, etc.)
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Logo.tsx
├── i18n/
│   ├── config.ts         # Locale configuration
│   └── request.ts        # next-intl request config
├── lib/
│   └── utils.ts          # Utility functions
└── middleware.ts         # i18n routing middleware

messages/
├── fr.json               # French translations
└── en.json               # English translations
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#f4ebe2` | Background |
| Amber | `#FFC466` | Titles, accents |
| Purple | `#8e59ff` | Primary accent |
| Dark Purple | `#230661` | Secondary, footer |
| Teal | `#3ab598` | Accent, CTA |
| Black | `#010101` | Text, borders |

## Features

- **Bilingual:** Full French (primary) and English support
- **Responsive:** Mobile-first design
- **Neubrutalism:** Geometric borders, corner dots, bold colors
- **SEO Ready:** Meta tags, OG images, semantic HTML
- **Accessible:** ARIA labels, keyboard navigation
- **Lead Capture:** Contact form with validation

## Deployment

### Deploy to Render

1. Push to GitHub
2. Connect repo to Render
3. Add environment variables
4. Deploy!

The `render.yaml` is configured for automatic deployment.

## Services Offered

### Learn AI (Formation)
- Online workshops via Google Meet
- Sessions: 1h to 5h+
- Certificate included
- Pricing: 20 EUR/h to 80 EUR/5h

### AI Integration
- ChatBot Pro
- VoiceAgent
- ContentFlow
- BookingAI
- SiteManager AI
- SoundForge AI
- VideoFactory
- AutoPilot

Monthly subscriptions from 100 EUR to 5000 EUR.

## Team

- **Aymane ABDENNOUR** - Co-founder
- **Bachir GHAFIR IDRISSI** - Co-founder

## License

Private - All rights reserved Agence4IA
