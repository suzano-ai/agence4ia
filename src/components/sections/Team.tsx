"use client";

import { useTranslations } from "next-intl";
import { Link2, Mail } from "lucide-react";

export default function Team() {
  const t = useTranslations("team");

  const members = [
    {
      key: "aymane",
      initials: "AA",
      color: "bg-purple",
    },
    {
      key: "bachir",
      initials: "BG",
      color: "bg-teal",
    },
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="section-title bg-purple text-white neu-border">
            {t("title")}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          {t("heading")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map(({ key, initials, color }) => (
            <div key={key} className="neu-card p-8 text-center relative">
              <div className="corner-dot corner-dot-tl bg-amber" />
              <div className="corner-dot corner-dot-br bg-teal" />

              {/* Avatar placeholder */}
              <div
                className={`w-32 h-32 ${color} rounded-full flex items-center justify-center mx-auto mb-6 neu-border text-white text-4xl font-bold`}
              >
                {initials}
              </div>

              <h3 className="text-xl font-bold mb-1">
                {t(`members.${key}.name`)}
              </h3>
              <p className="text-foreground/70 mb-4">
                {t(`members.${key}.role`)}
              </p>

              {/* Social links placeholder */}
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="p-2 bg-foreground/5 hover:bg-purple hover:text-white rounded-full transition-colors"
                >
                  <Link2 className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-foreground/5 hover:bg-purple hover:text-white rounded-full transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
