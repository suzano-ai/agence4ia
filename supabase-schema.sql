-- ============================================================
-- Agence4IA — Supabase Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- 1. LEADS — CRM interne (formulaires de contact)
CREATE TABLE IF NOT EXISTS leads (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  full_name    TEXT NOT NULL,
  email        TEXT NOT NULL,
  phone        TEXT NOT NULL,
  company      TEXT,
  service      TEXT NOT NULL CHECK (service IN ('learnAI', 'integration')),
  message      TEXT NOT NULL,
  budget       TEXT,
  locale       TEXT DEFAULT 'fr',
  source       TEXT DEFAULT 'website',
  status       TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed'))
);

-- Index pour recherche rapide
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);

-- RLS — lecture seule pour les admins
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow insert from API" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow read for authenticated" ON leads FOR SELECT USING (auth.role() = 'authenticated');


-- 2. PAGE VIEWS — Analytics simples
CREATE TABLE IF NOT EXISTS page_views (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  page       TEXT NOT NULL,
  locale     TEXT DEFAULT 'fr',
  referrer   TEXT,
  user_agent TEXT
);

CREATE INDEX idx_page_views_page ON page_views(page);
CREATE INDEX idx_page_views_created ON page_views(created_at DESC);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow insert from API" ON page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow read for authenticated" ON page_views FOR SELECT USING (auth.role() = 'authenticated');


-- 3. BLOG POSTS — Articles dynamiques
CREATE TABLE IF NOT EXISTS blog_posts (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  slug         TEXT NOT NULL,
  locale       TEXT NOT NULL DEFAULT 'fr',
  title        TEXT NOT NULL,
  excerpt      TEXT NOT NULL,
  content      TEXT NOT NULL,
  cover_image  TEXT,
  category     TEXT,
  published    BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  UNIQUE (slug, locale)
);

CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_blog_locale ON blog_posts(locale);
CREATE INDEX idx_blog_published ON blog_posts(published, published_at DESC);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow read published" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Allow all for authenticated" ON blog_posts FOR ALL USING (auth.role() = 'authenticated');


-- 4. WAITLIST — Newsletter / early access
CREATE TABLE IF NOT EXISTS waitlist (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email      TEXT NOT NULL UNIQUE,
  name       TEXT,
  source     TEXT DEFAULT 'website'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow insert" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow read for authenticated" ON waitlist FOR SELECT USING (auth.role() = 'authenticated');


-- 5. TESTIMONIALS — Avis clients
CREATE TABLE IF NOT EXISTS testimonials (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name       TEXT NOT NULL,
  company    TEXT,
  role       TEXT,
  content    TEXT NOT NULL,
  rating     INT DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  locale     TEXT DEFAULT 'fr',
  published  BOOLEAN DEFAULT false
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow read published" ON testimonials FOR SELECT USING (published = true);
CREATE POLICY "Allow all for authenticated" ON testimonials FOR ALL USING (auth.role() = 'authenticated');


-- ============================================================
-- SEED DATA — Articles de blog initiaux
-- ============================================================
INSERT INTO blog_posts (slug, locale, title, excerpt, content, category, published, published_at) VALUES
(
  'comment-ia-transforme-pme-2025',
  'fr',
  'Comment l''IA transforme les petites entreprises en 2025',
  'L''intelligence artificielle n''est plus réservée aux grands groupes. Découvrez comment les PME intègrent l''IA pour automatiser leurs opérations et gagner en compétitivité.',
  '## L''IA accessible à toutes les entreprises

En 2025, intégrer l''IA dans une PME est devenu aussi simple qu''ouvrir un compte Gmail. Les barrières techniques ont disparu, et les coûts ont chuté de 80% en 3 ans.

## Les 3 usages IA qui transforment les PME

### 1. Automatisation du SAV
Un chatbot IA traite en moyenne 80% des demandes clients sans intervention humaine. Pour un restaurant qui reçoit 40 appels par jour, c''est 3 heures récupérées chaque soir.

### 2. Génération de contenu
L''IA rédige des fiches produit, des posts Instagram et des newsletters en quelques secondes. Ce qui prenait 2 heures prend maintenant 10 minutes.

### 3. Qualification des leads
En immobilier, l''IA analyse les critères de 100 prospects et identifie les 20 qui vont réellement acheter. Résultat : +35% de conversions.

## Par où commencer ?

La meilleure façon de commencer est de choisir UNE tâche répétitive dans votre business et de l''automatiser. Ne cherchez pas à tout révolutionner d''un coup.

Chez Agence4IA, nous proposons un audit gratuit de 1h pour identifier vos 3 gains IA immédiats.',
  'transformation',
  true,
  NOW() - INTERVAL '30 days'
),
(
  'comment-ia-transforme-pme-2025',
  'en',
  'How AI is Transforming Small Businesses in 2025',
  'Artificial intelligence is no longer reserved for large corporations. Discover how SMBs are integrating AI to automate operations and gain competitive edge.',
  '## AI Accessible to All Businesses

In 2025, integrating AI into an SMB has become as simple as opening a Gmail account. Technical barriers have disappeared, and costs have dropped 80% in 3 years.

## The 3 AI Uses Transforming SMBs

### 1. Customer Service Automation
An AI chatbot handles an average of 80% of customer requests without human intervention. For a restaurant receiving 40 calls per day, that''s 3 hours recovered every evening.

### 2. Content Generation
AI writes product descriptions, Instagram posts and newsletters in seconds. What took 2 hours now takes 10 minutes.

### 3. Lead Qualification
In real estate, AI analyzes the criteria of 100 prospects and identifies the 20 who will actually buy. Result: +35% conversions.

## Where to Start?

The best way to start is to choose ONE repetitive task in your business and automate it. Don''t try to revolutionize everything at once.

At Agence4IA, we offer a free 1-hour audit to identify your 3 immediate AI gains.',
  'transformation',
  true,
  NOW() - INTERVAL '30 days'
),
(
  '5-outils-ia-automatiser-business',
  'fr',
  'Les 5 meilleurs outils IA pour automatiser votre business',
  'ChatGPT, Claude, Gemini, Mistral, n8n — voici les 5 outils IA incontournables pour automatiser votre business en 2025, avec des cas d''usage concrets pour chaque secteur.',
  '## Les 5 outils IA essentiels pour votre business

### 1. ChatGPT (OpenAI)
Le plus connu. Idéal pour : rédaction d''emails, brainstorming, résumés rapides. Version gratuite suffisante pour 90% des usages quotidiens.

### 2. Claude (Anthropic)
Meilleur que ChatGPT sur le français et les documents longs. Parfait pour : analyser des contrats, rédiger des rapports, comprendre des PDF complexes.

### 3. Gemini (Google)
Ultra-rapide. Intégré à Google Workspace. Parfait pour : recherches, résumés de vidéos YouTube, traductions instantanées.

### 4. Mistral (France)
Le modèle européen. Performant, respectueux des données, disponible localement. Pour : les entreprises soucieuses de souveraineté des données.

### 5. n8n (Automatisation)
Le couteau suisse de l''automatisation IA. Connecte tous vos outils et déclenche des actions automatiques. Pour : les workflows complexes multi-outils.

## Comment choisir ?

La réponse dépend de votre secteur et de vos besoins. Chez Agence4IA, nous vous guidons dans ce choix lors d''un audit gratuit.',
  'outils',
  true,
  NOW() - INTERVAL '15 days'
),
(
  '5-outils-ia-automatiser-business',
  'en',
  'The 5 Best AI Tools to Automate Your Business',
  'ChatGPT, Claude, Gemini, Mistral, n8n — here are the 5 must-have AI tools to automate your business in 2025, with concrete use cases for each sector.',
  '## The 5 Essential AI Tools for Your Business

### 1. ChatGPT (OpenAI)
The most well-known. Ideal for: email writing, brainstorming, quick summaries. Free version sufficient for 90% of daily uses.

### 2. Claude (Anthropic)
Better than ChatGPT for French and long documents. Perfect for: analyzing contracts, writing reports, understanding complex PDFs.

### 3. Gemini (Google)
Ultra-fast. Integrated with Google Workspace. Perfect for: research, YouTube video summaries, instant translations.

### 4. Mistral (France)
The European model. Performant, data-respectful, available locally. For: companies concerned about data sovereignty.

### 5. n8n (Automation)
The Swiss army knife of AI automation. Connects all your tools and triggers automatic actions. For: complex multi-tool workflows.

## How to Choose?

The answer depends on your sector and needs. At Agence4IA, we guide you in this choice during a free audit.',
  'tools',
  true,
  NOW() - INTERVAL '15 days'
),
(
  'formation-ia-pourquoi-se-former-maintenant',
  'fr',
  'Formation IA : pourquoi se former maintenant ?',
  'En 2026, la compétence IA est devenue aussi indispensable que maîtriser Excel en 2000. Voici pourquoi se former maintenant est la décision la plus stratégique de votre carrière.',
  '## L''IA : la compétence du siècle

En 2000, maîtriser Excel vous démarquait. En 2010, c''était les réseaux sociaux. En 2026, c''est l''IA.

La différence ? La courbe d''adoption est 10x plus rapide que toutes les technologies précédentes.

## Ce que vous gagnez en vous formant maintenant

### 1. Du temps (beaucoup)
Les professionnels formés à l''IA économisent en moyenne 15 heures par semaine. C''est l''équivalent d''un mi-temps supplémentaire.

### 2. De la valeur sur le marché
Selon LinkedIn, les offres d''emploi mentionnant "IA" ont augmenté de 340% en 2 ans. La compétence IA est maintenant demandée dans TOUS les secteurs.

### 3. Un avantage concurrentiel immédiat
Pendant que vos concurrents font manuellement, vous automatisez. C''est aussi simple que ça.

## La formation Agence4IA : concrète et applicable

Notre formation n''est pas théorique. En 1 heure, vous repartez avec des compétences directement applicables le lendemain matin.

Programme : Comprendre l''IA → Prompt Engineering → Automatisation → Cas concrets de votre secteur.

**Dès 20€/h. Certifiée. En ligne.**',
  'formation',
  true,
  NOW() - INTERVAL '7 days'
),
(
  'formation-ia-pourquoi-se-former-maintenant',
  'en',
  'AI Training: Why Train Now?',
  'In 2026, AI skills have become as essential as mastering Excel in 2000. Here''s why training now is the most strategic decision of your career.',
  '## AI: The Skill of the Century

In 2000, mastering Excel set you apart. In 2010, it was social media. In 2026, it''s AI.

The difference? The adoption curve is 10x faster than all previous technologies.

## What You Gain by Training Now

### 1. Time (a lot of it)
Professionals trained in AI save an average of 15 hours per week. That''s the equivalent of an extra half-time position.

### 2. Market Value
According to LinkedIn, job offers mentioning "AI" have increased by 340% in 2 years. AI skills are now required in ALL sectors.

### 3. Immediate Competitive Advantage
While your competitors do things manually, you automate. It''s as simple as that.

## Agence4IA Training: Concrete and Applicable

Our training is not theoretical. In 1 hour, you leave with skills directly applicable the next morning.

Program: Understanding AI → Prompt Engineering → Automation → Concrete cases from your sector.

**From €20/h. Certified. Online.**',
  'training',
  true,
  NOW() - INTERVAL '7 days'
);
