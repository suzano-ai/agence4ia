"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Video, Clock, Award, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="learn-ai" className="py-20 bg-teal/10 relative">
      {/* Color bar accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="section-title bg-teal text-white neu-border">{t("title")}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("heading")}</h2>
            <p className="text-xl text-teal font-semibold mb-4">{t("subtitle")}</p>
            <p className="text-lg text-foreground/80 mb-8">{t("description")}</p>

            {/* Features grid */}
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

          {/* Right - Illustration */}
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

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-amber text-foreground font-bold px-4 py-2 neu-border rounded-lg transform rotate-3">
              Certificat inclus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
