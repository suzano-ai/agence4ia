"use client";

import { useTranslations } from "next-intl";
import { Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="section-title bg-amber neu-border">{t("title")}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              {t("heading")}
            </h2>
            <p className="text-lg text-foreground/80 mb-6">{t("description")}</p>
            <p className="text-lg font-semibold text-purple">{t("mission")}</p>
          </div>

          {/* Right - Feature cards */}
          <div className="space-y-4">
            <div className="neu-card p-6 relative">
              <div className="corner-dot corner-dot-tr bg-purple" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple/10 rounded-lg">
                  <Target className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Formation</h3>
                  <p className="text-foreground/70">Apprenez à maîtriser les outils IA</p>
                </div>
              </div>
            </div>

            <div className="neu-card p-6 relative">
              <div className="corner-dot corner-dot-tr bg-teal" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Intégration</h3>
                  <p className="text-foreground/70">Solutions IA sur mesure pour votre business</p>
                </div>
              </div>
            </div>

            <div className="neu-card p-6 relative">
              <div className="corner-dot corner-dot-tr bg-amber" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber/20 rounded-lg">
                  <Users className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Accompagnement</h3>
                  <p className="text-foreground/70">Support continu et personnalisé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
