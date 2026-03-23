"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  Bot,
  Phone,
  Camera,
  Calendar,
  Globe,
  Music,
  Video,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntegrationPageContent() {
  const t = useTranslations("integration");
  const locale = useLocale();

  const stats = [
    { value: "67%", color: "text-purple", description: "des restaurants qui utilisent l'IA augmentent leur chiffre d'affaires" },
    { value: "3x", color: "text-teal", description: "plus de leads pour les agences immobilières avec l'IA" },
    { value: "40%", color: "text-amber", description: "de réduction des coûts opérationnels en e-commerce avec l'IA" },
  ];

  const industries = [
    { emoji: "🍽️", name: "Restauration", description: "Automatisez vos réservations, gérez vos avis clients et créez du contenu automatiquement" },
    { emoji: "🛒", name: "E-commerce", description: "Chatbot support 24/7, relances automatiques, génération de fiches produits par IA" },
    { emoji: "🏠", name: "Immobilier", description: "Qualification de leads automatique, visites virtuelles, suivi client intelligent" },
  ];

  const services = [
    { key: "chatbot", icon: Bot, color: "bg-purple", outcome: "Répondez à vos clients 24h/24, 7j/7. Réduisez de 60% les demandes répétitives. Augmentez vos conversions en guidant chaque visiteur vers l'achat ou la prise de rendez-vous." },
    { key: "voiceagent", icon: Phone, color: "bg-teal", outcome: "Ne ratez plus aucun appel. Notre IA décroche, qualifie et planifie automatiquement les rendez-vous. Résultat : +40% de leads transformés sans effort humain." },
    { key: "contentflow", icon: Camera, color: "bg-amber", outcome: "Publiez chaque jour sur Instagram sans y passer du temps. Notre IA crée et programme vos posts, stories et reels adaptés à votre audience." },
    { key: "bookingai", icon: Calendar, color: "bg-purple", outcome: "Votre agenda géré à 100% par l'IA. Confirmations automatiques, rappels, gestion des annulations. Zéro no-show, zéro friction." },
    { key: "sitemanager", icon: Globe, color: "bg-teal", outcome: "Votre site mis à jour automatiquement : nouveaux produits, prix, horaires, actualités. Votre vitrine toujours à jour sans intervention manuelle." },
    { key: "soundforge", icon: Music, color: "bg-amber", outcome: "Créez des jingles, musiques d'ambiance et contenus audio uniques pour votre marque. Différenciez-vous avec une identité sonore IA." },
    { key: "videofactory", icon: Video, color: "bg-purple", outcome: "Générez des vidéos marketing professionnelles automatiquement. Produit, service, témoignage — prêt à publier en quelques minutes." },
    { key: "autopilot", icon: Zap, color: "bg-teal", outcome: "Un agent IA dédié à votre business qui apprend et automatise vos processus les plus chronophages. Vous gagnez du temps, il génère des résultats." },
  ];

  const processSteps = [
    { number: "1", emoji: "📞", title: "Audit Gratuit", description: "Appel vidéo d'1h pour analyser vos besoins et identifier les opportunités IA dans votre business" },
    { number: "2", emoji: "📋", title: "Proposition Sur Mesure", description: "Nous sélectionnons les blocs IA les plus adaptés et vous présentons un plan d'action clair" },
    { number: "3", emoji: "⚡", title: "Déploiement", description: "Intégration complète dans vos outils existants. Délai moyen : 1 à 2 semaines" },
    { number: "4", emoji: "🔄", title: "Support Continu", description: "Abonnement mensuel sans engagement. Vous restez libre, nous restons disponibles" },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-2 bg-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-title bg-purple text-white neu-border">
            {t("title")}
          </span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">{t("heading")}</h1>
          <p className="text-xl text-purple font-semibold mb-4">{t("subtitle")}</p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Pourquoi intégrer l'IA maintenant ? */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Pourquoi intégrer l&apos;IA maintenant ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map(({ value, color, description }) => (
              <div key={value} className="neu-card p-6 text-center relative">
                <div className="corner-dot corner-dot-tr bg-purple" />
                <div className={`text-5xl md:text-6xl font-extrabold ${color} mb-3`}>{value}</div>
                <p className="text-foreground/70">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secteurs que nous transformons */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Secteurs que nous transformons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {industries.map(({ emoji, name, description }) => (
              <div key={name} className="neu-card p-6 relative">
                <div className="corner-dot corner-dot-tl bg-teal" />
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-bold text-xl mb-2">{name}</h3>
                <p className="text-foreground/70">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/60 italic">Et tous les secteurs peu digitalisés...</p>
        </div>

        {/* Services détaillés */}
        <h2 className="text-2xl font-bold text-center mb-8">{t("servicesTitle")}</h2>

        <div className="space-y-8 mb-20">
          {services.map(({ key, icon: Icon, color, outcome }) => (
            <div key={key} className="neu-card p-6 relative">
              <div
                className={`corner-dot corner-dot-tr ${color}`}
              />
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 ${color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-bold text-xl mb-2">{t(`services.${key}.name`)}</h3>
                  <p className="text-foreground/80 mb-3">
                    {outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/70 italic mb-16">{t("target")}</p>

        {/* Comment ça marche ? */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%)] right-[calc(12.5%)] h-1 bg-purple/30" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map(({ number, emoji, title, description }, index) => (
                <div key={number} className="text-center relative">
                  {/* Step number circle */}
                  <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 neu-border relative z-10">
                    <span className="text-2xl font-bold text-white">{number}</span>
                  </div>
                  <div className="text-3xl mb-2">{emoji}</div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-foreground/70 text-sm">{description}</p>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 mx-auto mt-4 text-foreground/30 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="neu-card bg-amber p-8 md:p-12 text-center relative">
          <div className="corner-dot corner-dot-tl bg-foreground" />
          <div className="corner-dot corner-dot-br bg-foreground" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Prêt à automatiser votre business ?</h2>
          <p className="text-xl font-semibold mb-6">Audit gratuit — 1h de conseil offerte</p>
          <Button
            asChild
            className="bg-foreground hover:bg-foreground/90 text-white font-bold neu-shadow text-lg px-8 py-6"
          >
            <Link href={`/${locale}/contact`}>Réserver mon audit gratuit</Link>
          </Button>
          <p className="text-foreground/70 mt-4 text-sm">Sans engagement · Résultats en 2 semaines · Support inclus</p>
        </div>

        {/* View pricing button */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-purple hover:bg-dark-purple text-white font-bold neu-shadow"
          >
            <Link href={`/${locale}/pricing`}>{t("viewPricing")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
