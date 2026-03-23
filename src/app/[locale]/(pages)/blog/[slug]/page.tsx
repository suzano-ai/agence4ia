import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/pages/BlogPost";
import { getBlogSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blogPosts" });

  const slugKey = slug as "comment-ia-transforme-pme-2025" | "5-outils-ia-automatiser-business" | "formation-ia-pourquoi-se-former-maintenant";

  if (!getBlogSlugs().includes(slug)) {
    return { title: "Not Found" };
  }

  return {
    title: t(`${slugKey}.title`),
    description: t(`${slugKey}.excerpt`),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!getBlogSlugs().includes(slug)) {
    notFound();
  }

  return (
    <div>
      <BlogPost slug={slug} />
    </div>
  );
}
