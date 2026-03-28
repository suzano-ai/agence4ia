import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { LearnAI } from "@/components/sections";

const BASE_URL = "https://agence4ia.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "fr"
      ? "Formation IA en ligne — Apprenez l'Intelligence Artificielle dès 20€/h | Agence4IA"
      : "Online AI Training — Learn Artificial Intelligence from €20/h | Agence4IA";
  const description =
    locale === "fr"
      ? "Formation IA certifiée en ligne. Prompt engineering, automatisation, ChatGPT, Claude. Dès 20€/h. Pour particuliers, entrepreneurs et PME. Certificat inclus."
      : "Certified online AI training. Prompt engineering, automation, ChatGPT, Claude. From €20/h. For individuals, entrepreneurs and SMBs. Certificate included.";

  return {
    title,
    description,
    keywords:
      locale === "fr"
        ? [
            "formation IA en ligne",
            "apprendre intelligence artificielle",
            "cours ChatGPT",
            "formation prompt engineering",
            "formation Claude IA",
            "apprendre l'IA pour les nuls",
            "formation IA certifiée",
          ]
        : [
            "online AI training",
            "learn artificial intelligence",
            "ChatGPT course",
            "prompt engineering training",
            "AI certification",
          ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/learn-ai`,
      languages: {
        fr: `${BASE_URL}/fr/learn-ai`,
        en: `${BASE_URL}/en/learn-ai`,
        "x-default": `${BASE_URL}/fr/learn-ai`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/learn-ai`,
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

export default async function LearnAIPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isFR = locale === "fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: isFR ? "Formation IA en ligne" : "Online AI Training",
    description: isFR
      ? "Formation en intelligence artificielle : prompt engineering, automatisation, ChatGPT, Claude. Dès 20€/h."
      : "AI training: prompt engineering, automation, ChatGPT, Claude. From €20/h.",
    provider: {
      "@type": "Organization",
      name: "Agence4IA",
      url: "https://agence4ia.com",
    },
    offers: {
      "@type": "Offer",
      price: "20",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "20",
        priceCurrency: "EUR",
        unitCode: "HUR",
      },
    },
    courseMode: "online",
    inLanguage: locale === "fr" ? "fr" : "en",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: {
        "@type": "Person",
        name: "Aymane Abdennour",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <LearnAI />
      </div>
    </>
  );
}
