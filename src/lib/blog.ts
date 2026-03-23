export const blogSlugs = [
  "comment-ia-transforme-pme-2025",
  "5-outils-ia-automatiser-business",
  "formation-ia-pourquoi-se-former-maintenant",
] as const;

export type BlogSlug = (typeof blogSlugs)[number];

export function getBlogSlugs(): string[] {
  return [...blogSlugs];
}
