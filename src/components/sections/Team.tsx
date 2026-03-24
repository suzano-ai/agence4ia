"use client";

import { useTranslations } from "next-intl";
import { Link2, Mail } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const t = useTranslations("team");

  const members = [
    {
      key: "aymane",
      initials: "AA",
      color: "bg-purple",
      photo: "/team-aymane.jpg",
      linkedin: "https://www.linkedin.com/in/aymaneabdennour/",
      email: "aymane.abdennour@gmail.com",
    },
    {
      key: "bachir",
      initials: "BG",
      color: "bg-teal",
      photo: "/team-bachir.jpg",
      linkedin: "https://www.linkedin.com/in/bachir-ghafir-el-idrissi-61356021a/",
      email: "bachiridrissi8@gmail.com",
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

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-16">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map(({ key, initials, color, photo, linkedin, email }) => (
            <div key={key} className="neu-card p-8 text-center relative">
              <div className="corner-dot corner-dot-tl bg-amber" />
              <div className="corner-dot corner-dot-br bg-teal" />

              {/* Photo */}
              <div className="w-32 h-32 rounded-full mx-auto mb-6 neu-border overflow-hidden relative">
                <Image
                  src={photo}
                  alt={t(`members.${key}.name`)}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>

              <h3 className="text-xl font-bold mb-1">
                {t(`members.${key}.name`)}
              </h3>
              <p className="text-foreground/70 mb-4">
                {t(`members.${key}.role`)}
              </p>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-foreground/5 hover:bg-purple hover:text-white rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Link2 className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="p-2 bg-foreground/5 hover:bg-purple hover:text-white rounded-full transition-colors"
                  aria-label="Email"
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
