"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Video, Clock, Award, UserCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// LLM Models data
const llmModels = [
  { name: "ChatGPT", color: "#10a37f", desc: "LLM / Chatbot" },
  { name: "Claude", color: "#cc785c", desc: "LLM / Chatbot" },
  { name: "Gemini", color: "#4285f4", desc: "LLM / Chatbot" },
  { name: "Grok", color: "#000000", desc: "LLM / Chatbot" },
  { name: "Mistral", color: "#f04e23", desc: "LLM / Chatbot" },
  { name: "Llama", color: "#0064e0", desc: "LLM / Chatbot" },
  { name: "Copilot", color: "#0078d4", desc: "LLM / Chatbot" },
  { name: "Perplexity", color: "#20b2aa", desc: "LLM / Chatbot" },
  { name: "DeepSeek", color: "#5b7cf7", desc: "LLM / Chatbot" },
  { name: "Qwen", color: "#7c3aed", desc: "LLM / Chatbot" },
];

// AI Tools data
const aiTools = [
  { name: "n8n", color: "#ea4b71", desc: "Automatisation no-code" },
  { name: "Make", color: "#6d28d9", desc: "Intégrations visuelles" },
  { name: "Zapier", color: "#FF4A00", desc: "Automatisation simple" },
  { name: "Hugging Face", color: "#FFD21E", desc: "Modèles open source", textDark: true },
  { name: "LangChain", color: "#1C3C3C", desc: "Développement LLM" },
  { name: "OpenAI API", color: "#10a37f", desc: "API & intégrations" },
  { name: "Stable Diffusion", color: "#7c3aed", desc: "Génération d'images" },
  { name: "Midjourney", color: "#000000", desc: "Art IA" },
  { name: "ElevenLabs", color: "#1a1a2e", desc: "Synthèse vocale IA" },
  { name: "Runway ML", color: "#00c4cc", desc: "Vidéo IA" },
];

// Skill levels data
const skillLevels = [
  {
    emoji: "🟢",
    title: "Débutant",
    subtitle: "0 → Autonomie IA",
    bgClass: "bg-teal/10",
    borderClass: "border-teal",
    items: [
      "Comprendre les LLMs",
      "Prompting efficace",
      "Utiliser ChatGPT, Claude, Gemini au quotidien",
      "Automatiser des tâches simples",
    ],
    duration: "1-2h",
  },
  {
    emoji: "🟡",
    title: "Intermédiaire",
    subtitle: "Autonomie → Productivité",
    bgClass: "bg-amber/10",
    borderClass: "border-amber",
    items: [
      "Créer des workflows n8n/Make",
      "Utiliser les APIs IA",
      "Générer du contenu (texte, image, vidéo)",
      "Intégrer l'IA dans son business",
    ],
    duration: "3-5h",
  },
  {
    emoji: "🟣",
    title: "Avancé",
    subtitle: "Productivité → Expertise",
    bgClass: "bg-purple/10",
    borderClass: "border-purple",
    items: [
      "Déployer des agents IA",
      "Fine-tuning de modèles",
      "Construire des pipelines complexes",
      "Devenir référent IA dans son équipe",
    ],
    duration: "5h+ custom",
  },
];

// Program sessions data
const programSessions = [
  { num: 1, title: "Introduction aux LLMs", desc: "Comprendre les fondamentaux de l'intelligence artificielle générative", duration: "1h" },
  { num: 2, title: "Maîtrise du Prompting", desc: "Techniques avancées pour obtenir les meilleurs résultats", duration: "1h" },
  { num: 3, title: "Automatisation avec n8n/Make", desc: "Créer des workflows automatisés sans code", duration: "1h" },
  { num: 4, title: "Cas pratiques métier", desc: "Application concrète à votre contexte professionnel", duration: "1h" },
  { num: 5, title: "Projet final + Certification", desc: "Mise en pratique et validation des compétences", duration: "1h" },
];

export default function LearnAI() {
  const t = useTranslations("learnAI");
  const locale = useLocale();

  const features = [
    { icon: Video, key: "workshops", color: "text-purple" },
    { icon: Clock, key: "flexible", color: "text-teal" },
    { icon: Award, key: "certificate", color: "text-amber" },
    { icon: UserCheck, key: "personalized", color: "text-purple" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="learn-ai" className="py-20 bg-teal/10 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-teal" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title bg-teal text-white neu-border">{t("title")}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("heading")}</h2>
              <p className="text-xl text-teal font-semibold mb-4">{t("subtitle")}</p>
              <p className="text-lg text-foreground/80 mb-8">{t("description")}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map(({ icon: Icon, key, color }) => (
                  <div
                    key={key}
                    className="flex items-center gap-3 p-4 bg-white neu-border rounded-lg"
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className="font-medium">{t(`features.${key}`)}</span>
                  </div>
                ))}
              </div>

              <p className="text-foreground/70 italic mb-6">{t("target")}</p>

              <Button
                asChild
                className="bg-teal hover:bg-teal/90 text-white font-bold neu-shadow"
              >
                <Link href={`/${locale}/pricing`}>{t("viewPricing")}</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="neu-card p-8 relative">
                <div className="corner-dot corner-dot-tl bg-teal" />
                <div className="corner-dot corner-dot-br bg-purple" />

                <div className="aspect-video bg-gradient-to-br from-teal/20 to-purple/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 neu-border">
                      <Video className="w-10 h-10 text-white" />
                    </div>
                    <p className="font-bold text-lg">Formation via Google Meet</p>
                    <p className="text-foreground/60">Sessions interactives en direct</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-amber text-foreground font-bold px-4 py-2 neu-border rounded-lg transform rotate-3">
                Certificat inclus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: LLM Models Grid */}
      <section className="py-20 bg-purple/10 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-purple" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title bg-purple text-white neu-border">Ce que vous allez apprendre</span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-6">Maîtrisez les meilleurs modèles IA</h3>
            <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">
              Apprenez à utiliser les LLMs les plus puissants du marché pour automatiser et optimiser votre travail
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {llmModels.map((model) => (
              <div
                key={model.name}
                className="neu-card p-4 text-center hover:scale-105 transition-transform"
                style={{ backgroundColor: model.color }}
              >
                <p className="font-bold text-white text-lg">{model.name}</p>
                <p className="text-white/80 text-sm">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Tools Grid */}
      <section className="py-20 bg-amber/10 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-amber" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title bg-amber text-foreground neu-border">Outils & Plateformes IA</span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-6">Les outils qui transforment votre productivité</h3>
            <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">
              De l&apos;automatisation no-code à la génération de contenu, maîtrisez l&apos;écosystème IA complet
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="neu-card p-4 text-center hover:scale-105 transition-transform"
                style={{ backgroundColor: tool.color }}
              >
                <p className={`font-bold text-lg ${tool.textDark ? "text-foreground" : "text-white"}`}>{tool.name}</p>
                <p className={`text-sm ${tool.textDark ? "text-foreground/70" : "text-white/80"}`}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Skill Levels */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-teal" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title bg-teal text-white neu-border">Niveaux & Parcours</span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-6">Un parcours adapté à votre niveau</h3>
            <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">
              Que vous débutiez ou souhaitiez approfondir, nous avons le programme qu&apos;il vous faut
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillLevels.map((level) => (
              <div
                key={level.title}
                className={`neu-card p-6 ${level.bgClass} border-2 ${level.borderClass} relative`}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl">{level.emoji}</span>
                  <h4 className="text-xl font-extrabold mt-2">{level.title}</h4>
                  <p className="text-foreground/70 font-medium">{level.subtitle}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {level.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <span className="inline-block bg-foreground text-white px-3 py-1 rounded-full text-sm font-bold">
                    Durée: {level.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Program Structure */}
      <section className="py-20 bg-dark-purple text-white relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-amber" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title bg-amber text-foreground neu-border">Programme type</span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-6 text-white">Une formation structurée en 5 sessions</h3>
            <p className="text-white/70 mt-2">
              Un parcours progressif pour maîtriser l&apos;IA de A à Z
            </p>
          </div>

          <div className="space-y-6">
            {programSessions.map((session) => (
              <div
                key={session.num}
                className="flex items-start gap-4 p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center flex-shrink-0 neu-border">
                  <span className="font-extrabold text-foreground text-lg">{session.num}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-bold text-lg text-white">Session {session.num}: {session.title}</h4>
                    <span className="bg-purple text-white text-xs px-2 py-1 rounded-full font-bold">
                      {session.duration}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{session.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Certificate Block */}
      <section className="py-20 bg-purple/10 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-purple" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-title bg-purple text-white neu-border">Certification</span>
          </div>

          <div className="neu-card p-8 md:p-12 bg-gradient-to-br from-white to-purple/5 relative overflow-hidden">
            <div className="corner-dot corner-dot-tl bg-amber" />
            <div className="corner-dot corner-dot-tr bg-purple" />
            <div className="corner-dot corner-dot-bl bg-teal" />
            <div className="corner-dot corner-dot-br bg-amber" />

            {/* Decorative border */}
            <div className="absolute inset-4 border-2 border-dashed border-purple/30 rounded-lg pointer-events-none" />

            <div className="text-center relative z-10">
              <Award className="w-16 h-16 text-amber mx-auto mb-4" />

              <h3 className="text-2xl md:text-3xl font-extrabold text-dark-purple mb-2">
                Certificat de Compétences IA
              </h3>
              <p className="text-purple font-semibold text-lg mb-4">
                Agence4IA — AI Practitioner Certificate
              </p>

              <p className="text-foreground/70 max-w-xl mx-auto mb-8">
                Délivré à l&apos;issue de votre parcours, ce certificat atteste de votre maîtrise des outils d&apos;intelligence artificielle modernes.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full neu-border">
                  <CheckCircle className="w-5 h-5 text-teal" />
                  <span className="text-sm font-medium">Reconnu par nos partenaires</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full neu-border">
                  <CheckCircle className="w-5 h-5 text-teal" />
                  <span className="text-sm font-medium">Valeur ajoutée sur votre CV</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full neu-border">
                  <CheckCircle className="w-5 h-5 text-teal" />
                  <span className="text-sm font-medium">Format numérique + PDF</span>
                </div>
              </div>

              <Button
                asChild
                className="bg-purple hover:bg-purple/90 text-white font-bold neu-shadow text-lg px-8 py-6"
              >
                <Link href={`/${locale}/contact`}>Commencer ma formation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
