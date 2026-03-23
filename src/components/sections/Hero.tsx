"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { GraduationCap, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-purple rounded-full" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-teal rounded-full" />
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-amber rounded-full" />
      <div className="absolute bottom-32 right-10 w-3 h-3 bg-purple rounded-full" />

      {/* Arrow decorations */}
      <svg
        className="absolute top-48 right-1/4 w-8 h-8 text-teal"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
      <svg
        className="absolute bottom-48 left-1/4 w-6 h-6 text-purple transform rotate-180"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main tagline */}
        <div className="inline-block mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="bg-amber px-4 py-2 inline-block neu-border neu-shadow transform -rotate-1">
              {t("tagline")}
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
          {t("subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-teal hover:bg-teal/90 text-white font-bold text-lg px-8 py-6 neu-border neu-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#010101] transition-all"
          >
            <a href={`/${locale}/learn-ai`} className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              {t("ctaLearn")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-purple hover:bg-purple/90 text-white font-bold text-lg px-8 py-6 neu-border neu-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#010101] transition-all"
          >
            <a href={`/${locale}/integration`} className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              {t("ctaIntegration")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>


      </div>
    </section>
  );
}
