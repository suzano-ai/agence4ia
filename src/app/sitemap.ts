import { MetadataRoute } from "next";

const baseUrl = "https://agence4ia.com";
const locales = ["fr", "en"] as const;

const routes = [
  { path: "", priority: 1.0, changeFreq: "weekly" as const },
  { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/learn-ai", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/integration", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/pricing", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/team", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFreq: "weekly" as const },
  { path: "/contact", priority: 0.9, changeFreq: "monthly" as const },
];

const blogSlugs = [
  "comment-ia-transforme-pme-2025",
  "5-outils-ia-automatiser-business",
  "formation-ia-pourquoi-se-former-maintenant",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Main pages — one entry per locale with x-default pointing to FR
  for (const { path, priority, changeFreq } of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: changeFreq,
        priority,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${path}`,
            en: `${baseUrl}/en${path}`,
            "x-default": `${baseUrl}/fr${path}`,
          },
        },
      });
    }
  }

  // Blog articles
  for (const slug of blogSlugs) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr/blog/${slug}`,
            en: `${baseUrl}/en/blog/${slug}`,
            "x-default": `${baseUrl}/fr/blog/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
