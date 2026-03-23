"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const t = useTranslations("blog");

  const posts = ["post1", "post2", "post3"] as const;
  const colors = ["bg-purple", "bg-teal", "bg-amber"];
  const dotColors = ["bg-teal", "bg-amber", "bg-purple"];

  return (
    <section id="blog" className="py-20 bg-dark-purple/5 relative">
      {/* Color bar accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-dark-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="section-title bg-dark-purple text-white neu-border">
            {t("title")}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          {t("heading")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={post} className="neu-card overflow-hidden relative group">
              <div className={`corner-dot corner-dot-tr ${dotColors[index]}`} />

              {/* Image placeholder */}
              <div
                className={`h-48 ${colors[index]} flex items-center justify-center`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  {t(`posts.${post}.date`)}
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-purple transition-colors">
                  {t(`posts.${post}.title`)}
                </h3>

                <p className="text-foreground/70 text-sm mb-4">
                  {t(`posts.${post}.excerpt`)}
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold text-purple hover:text-dark-purple"
                >
                  {t("readMore")}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
