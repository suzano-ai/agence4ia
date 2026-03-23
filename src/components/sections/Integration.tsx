"use client";

import { useTranslations } from "next-intl";
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

export default function Integration() {
  const t = useTranslations("integration");

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
    <section id="integration" className="py-20 relative">
      {/* Color bar accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="section-title bg-purple text-white neu-border">
            {t("title")}
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("heading")}</h2>
          <p className="text-xl text-purple font-semibold mb-4">{t("subtitle")}</p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Process steps */}
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

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map(({ key, icon: Icon, color }) => (
            <div key={key} className="neu-card p-6 relative group">
              <div
                className={`corner-dot corner-dot-tr ${color.replace("bg-", "bg-")}`}
              />
              <div
                className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t(`services.${key}.name`)}</h3>
              <p className="text-sm text-foreground/70">
                {t(`services.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/70 italic mb-8">{t("target")}</p>

        <div className="text-center">
          <Button
            asChild
            className="bg-purple hover:bg-dark-purple text-white font-bold neu-shadow"
          >
            <a href="#pricing">Voir les offres</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
