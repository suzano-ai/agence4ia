import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Team } from "@/components/sections";

const BASE_URL = "https://agence4ia.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "fr"
      ? "Notre Équipe — Experts IA & Data | Agence4IA"
      : "Our Team — AI & Data Experts | Agence4IA";
  const description =
    locale === "fr"
      ? "Agence4IA est fondée par Aymane Abdennour (spécialiste IA & Data) et Bachir Ghafir Idrissi (spécialiste IA & Finance). Une équipe d'experts au service de votre transformation IA."
      : "Agence4IA was founded by Aymane Abdennour (AI & Data specialist) and Bachir Ghafir Idrissi (AI & Finance specialist). An expert team at the service of your AI transformation.";

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/team`,
      languages: {
        fr: `${BASE_URL}/fr/team`,
        en: `${BASE_URL}/en/team`,
        "x-default": `${BASE_URL}/fr/team`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/team`,
      siteName: "Agence4IA",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Agence4IA",
      member: [
        {
          "@type": "OrganizationRole",
          member: {
            "@type": "Person",
            name: "Aymane Abdennour",
            jobTitle: locale === "fr" ? "Co-fondateur, Spécialiste IA & Data" : "Co-founder, AI & Data Specialist",
            sameAs: "https://www.linkedin.com/in/aymaneabdennour/",
          },
          roleName: locale === "fr" ? "Co-fondateur" : "Co-founder",
        },
        {
          "@type": "OrganizationRole",
          member: {
            "@type": "Person",
            name: "Bachir Ghafir Idrissi",
            jobTitle: locale === "fr" ? "Co-fondateur, Spécialiste IA & Finance" : "Co-founder, AI & Finance Specialist",
            sameAs: "https://www.linkedin.com/in/bachir-ghafir-el-idrissi-61356021a/",
          },
          roleName: locale === "fr" ? "Co-fondateur" : "Co-founder",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Team />
      </div>
    </>
  );
}
