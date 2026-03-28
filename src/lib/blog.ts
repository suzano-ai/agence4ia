import { supabase } from "./supabase";
import type { BlogPost } from "./supabase";

// Static slugs (for backward compat)
export const blogSlugs = [
  "comment-ia-transforme-pme-2025",
  "5-outils-ia-automatiser-business",
  "formation-ia-pourquoi-se-former-maintenant",
];

// Alias for generateStaticParams
export function getBlogSlugs() {
  return blogSlugs;
}

// Type alias for backward compat
export type BlogSlug = string;

// Static fallback articles (used if Supabase is not configured)
const staticPosts: BlogPost[] = [
  {
    slug: "comment-ia-transforme-pme-2025",
    locale: "fr",
    title: "Comment l'IA transforme les petites entreprises en 2025",
    excerpt:
      "L'intelligence artificielle n'est plus réservée aux grands groupes. Découvrez comment les PME intègrent l'IA pour automatiser leurs opérations et gagner en compétitivité.",
    content: "",
    category: "transformation",
    published: true,
    published_at: new Date(Date.now() - 30 * 86400000).toISOString(),
  },
  {
    slug: "5-outils-ia-automatiser-business",
    locale: "fr",
    title: "Les 5 meilleurs outils IA pour automatiser votre business",
    excerpt:
      "ChatGPT, Claude, Gemini, Mistral, n8n — voici les 5 outils IA incontournables pour automatiser votre business en 2025.",
    content: "",
    category: "outils",
    published: true,
    published_at: new Date(Date.now() - 15 * 86400000).toISOString(),
  },
  {
    slug: "formation-ia-pourquoi-se-former-maintenant",
    locale: "fr",
    title: "Formation IA : pourquoi se former maintenant ?",
    excerpt:
      "En 2026, la compétence IA est devenue aussi indispensable que maîtriser Excel en 2000.",
    content: "",
    category: "formation",
    published: true,
    published_at: new Date(Date.now() - 7 * 86400000).toISOString(),
  },
];

export async function getBlogPosts(locale: string): Promise<BlogPost[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return staticPosts.filter((p) => p.locale === locale);
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("locale", locale)
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error || !data?.length) {
    return staticPosts.filter((p) => p.locale === locale);
  }

  return data as BlogPost[];
}

export async function getBlogPost(
  slug: string,
  locale: string
): Promise<BlogPost | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return staticPosts.find((p) => p.slug === slug && p.locale === locale) ?? null;
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("locale", locale)
    .eq("published", true)
    .single();

  if (error || !data) return null;
  return data as BlogPost;
}
