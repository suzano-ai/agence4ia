"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const formationPlans = ["1h", "2h", "3h", "5h"] as const;

  const integrationPlans = [
    { key: "starter", popular: false },
    { key: "growth", popular: false },
    { key: "scale", popular: true },
    { key: "enterprise", popular: false },
  ] as const;

  return (
    <section id="pricing" className="py-20 bg-amber/10 relative">
      {/* Color bar accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-amber" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="section-title bg-amber neu-border">{t("title")}</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-16">
          {t("heading")}
        </h2>

        {/* Formation Pricing */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-teal mb-2">
              {t("formation.title")}
            </h3>
            <p className="text-foreground/70">{t("formation.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {formationPlans.map((plan) => {
              const discountKey = `formation.plans.${plan}.discount` as const;
              const hasDiscount = t.has(discountKey);
              return (
              <div key={plan} className="neu-card p-6 text-center relative">
                {hasDiscount && (
                  <Badge className="absolute -top-3 -right-3 bg-teal text-white font-bold">
                    {t(discountKey)}
                  </Badge>
                )}
                <div className="text-lg font-semibold text-foreground/70 mb-2">
                  {t(`formation.plans.${plan}.duration`)}
                </div>
                <div className="text-4xl font-extrabold text-teal mb-2">
                  {t(`formation.plans.${plan}.price`)}
                </div>
                <p className="text-sm text-foreground/60">
                  {t(`formation.plans.${plan}.description`)}
                </p>
              </div>
            )})}
          </div>

          <p className="text-center text-foreground/70">{t("formation.custom")}</p>
        </div>

        {/* Integration Pricing */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-purple mb-2">
              {t("integration.title")}
            </h3>
            <p className="text-foreground/70">{t("integration.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationPlans.map(({ key, popular }) => (
              <div
                key={key}
                className={`neu-card p-6 relative ${
                  popular ? "ring-4 ring-purple scale-105" : ""
                }`}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <Badge className="bg-purple text-white font-bold flex items-center gap-1 text-xs">
                      <Star className="w-3 h-3 flex-shrink-0" /> Popular
                    </Badge>
                  </div>
                )}
                <div className="corner-dot corner-dot-tr bg-purple" />

                <h4 className="text-xl font-bold mb-2">
                  {t(`integration.plans.${key}.name`)}
                </h4>

                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-purple">
                    {t(`integration.plans.${key}.price`)}
                  </span>
                  <span className="text-foreground/60">
                    {t(`integration.plans.${key}.period`)}
                  </span>
                </div>

                <p className="text-sm text-foreground/70 mb-4">
                  {t(`integration.plans.${key}.description`)}
                </p>

                <ul className="space-y-2 mb-6">
                  {(
                    t.raw(`integration.plans.${key}.features`) as string[]
                  ).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-teal flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full font-bold ${
                    popular
                      ? "bg-purple hover:bg-dark-purple text-white"
                      : "bg-white hover:bg-gray-50 text-foreground neu-border"
                  }`}
                >
                  <Link href={`/${locale}/contact`}>{t("choose")}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
