"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogSlugs } from "@/lib/blog";

const blogImages = [
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80", // AI / tech abstract
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80", // productivity / laptop
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", // learning / education
];

export default function BlogList() {
  const t = useTranslations("blog");
  const posts = useTranslations("blogPosts");
  const locale = useLocale();

  const colors = ["bg-purple", "bg-teal", "bg-amber"];
  const dotColors = ["bg-teal", "bg-amber", "bg-purple"];

  return (
    <section className="py-20 bg-dark-purple/5 relative">
      <div className="absolute top-0 left-0 right-0 h-2 bg-dark-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-title bg-dark-purple text-white neu-border">
            {t("title")}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-16">
          {t("heading")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {blogSlugs.map((slug, index) => (
            <article key={slug} className="neu-card overflow-hidden relative group">
              <div className={`corner-dot corner-dot-tr ${dotColors[index]}`} />

              <div className="h-48 relative overflow-hidden">
                <Image
                  src={blogImages[index]}
                  alt={posts(`${slug}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  {posts(`${slug}.date`)}
                </div>

                <h2 className="text-lg font-bold mb-3 group-hover:text-purple transition-colors">
                  {posts(`${slug}.title`)}
                </h2>

                <p className="text-foreground/70 text-sm mb-4">
                  {posts(`${slug}.excerpt`)}
                </p>

                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-semibold text-purple hover:text-dark-purple"
                >
                  <Link href={`/${locale}/blog/${slug}`}>
                    {t("readMore")}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
