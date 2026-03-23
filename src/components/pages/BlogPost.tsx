"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Calendar, ArrowLeft, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogSlug } from "@/lib/blog";

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const t = useTranslations("blogPosts");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const slugKey = slug as BlogSlug;

  const colorMap: Record<BlogSlug, string> = {
    "comment-ia-transforme-pme-2025": "bg-purple",
    "5-outils-ia-automatiser-business": "bg-teal",
    "formation-ia-pourquoi-se-former-maintenant": "bg-amber",
  };

  const color = colorMap[slugKey] || "bg-purple";

  return (
    <article className="py-20 relative">
      <div className={`absolute top-0 left-0 right-0 h-2 ${color}`} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          asChild
          variant="ghost"
          className="mb-8 hover:bg-foreground/5"
        >
          <Link href={`/${locale}/blog`}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {nav("blog")}
          </Link>
        </Button>

        <div className={`h-64 ${color} rounded-lg flex items-center justify-center mb-8 neu-border`}>
          <div className="w-24 h-24 bg-white/20 rounded-full" />
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {t(`${slugKey}.date`)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {t(`${slugKey}.readTime`)}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {t(`${slugKey}.author`)}
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          {t(`${slugKey}.title`)}
        </h1>

        <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
          {t(`${slugKey}.excerpt`)}
        </p>

        <div className="prose prose-lg max-w-none">
          <div
            className="text-foreground/80 space-y-6"
            dangerouslySetInnerHTML={{ __html: t.raw(`${slugKey}.content`) as string }}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10">
          <Button
            asChild
            className={`${color} hover:opacity-90 text-white font-bold neu-shadow`}
          >
            <Link href={`/${locale}/contact`}>
              {t("cta")}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
