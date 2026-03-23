import { MetadataRoute } from "next";

const baseUrl = "https://agence4ia.com";
const locales = ["fr", "en"];

const routes = [
  "",
  "/about",
  "/learn-ai",
  "/integration",
  "/pricing",
  "/team",
  "/blog",
  "/contact",
];

const blogSlugs = [
  "comment-ia-transforme-pme-2025",
  "5-outils-ia-automatiser-business",
  "formation-ia-pourquoi-se-former-maintenant",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Main pages
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/learn-ai" || route === "/integration" ? 0.9 : 0.8,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    }

    // Blog articles
    for (const slug of blogSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
