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
  Search,
  Settings,
  Cog,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntegrationPageContent() {
  const t = useTranslations("integration");
  const locale = useLocale();

  const services = [
    { key: "chatbot", icon: Bot, color: "bg-purple" },
    { key: "voiceagent", icon: Phone, color: "bg-teal" },
    { key: "contentflow", icon: Camera, color: "bg-amber" },
    { key: "bookingai", icon: Calendar, color: "bg-purple" },
    { key: "sitemanager", icon: Globe, color: "bg-teal" },
    { key: "soundforge", icon: Music, color: "bg-amber" },
    { key: "videofactory", icon: Video, color: "bg-purple" },
    { key: "autopilot", icon: Zap, color: "bg-teal" },
  ];

  const processSteps = [
    { key: "audit", icon: Search, color: "bg-purple" },
    { key: "integration", icon: Settings, color: "bg-teal" },
    { key: "automation", icon: Cog, color: "bg-amber" },
    { key: "support", icon: Headphones, color: "bg-purple" },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-2 bg-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-title bg-purple text-white neu-border">
            {t("title")}
          </span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{t("heading")}</h1>
          <p className="text-xl text-purple font-semibold mb-4">{t("subtitle")}</p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {processSteps.map(({ key, icon: Icon, color }, index) => (
            <div key={key} className="text-center">
              <div
                className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-3 neu-border`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg">{t(`process.${key}`)}</div>
              <p className="text-sm text-foreground/60">{t(`process.${key}Desc`)}</p>
              {index < 3 && (
                <ArrowRight className="w-6 h-6 mx-auto mt-2 text-foreground/30 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">{t("servicesTitle")}</h2>

        <div className="space-y-8 mb-12">
          {services.map(({ key, icon: Icon, color }) => (
            <div key={key} className="neu-card p-6 relative">
              <div
                className={`corner-dot corner-dot-tr ${color.replace("bg-", "bg-")}`}
              />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{t(`services.${key}.name`)}</h3>
                  <p className="text-foreground/70 mb-4">
                    {t(`services.${key}.description`)}
                  </p>
                  <p className="text-foreground/80">
                    {t(`services.${key}.details`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/70 italic mb-8">{t("target")}</p>

        <div className="text-center">
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
