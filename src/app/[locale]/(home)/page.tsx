import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Hero } from "@/components/sections";

const BASE_URL = "https://agence4ia.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const title =
    locale === "fr"
      ? "Agence4IA — Formation IA & Intégration Intelligence Artificielle | Paris"
      : "Agence4IA — AI Training & AI Integration Solutions | France";
  const description =
    locale === "fr"
      ? "Agence spécialisée en intelligence artificielle. Formation IA dès 20€/h, intégration ChatBot & VoiceAgent pour PME. Audit gratuit. Toulouse & Paris."
      : "AI agency specialized in AI training from €20/h and ChatBot & VoiceAgent integration for SMBs. Free audit. Toulouse & Paris, France.";

  return {
    title,
    description,
    keywords:
      locale === "fr"
        ? [
            "agence intelligence artificielle",
            "formation IA",
            "intégration IA",
            "chatbot IA",
            "automatisation PME",
            "VoiceAgent",
            "formation ChatGPT",
            "agence IA France",
            "Toulouse",
          ]
        : [
            "AI agency France",
            "AI training",
            "AI integration",
            "chatbot AI",
            "business automation",
            "VoiceAgent",
            "ChatGPT training",
          ],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/fr`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Agence4IA",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Agence4IA — Passez à l'IA. On s'occupe du reste.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isFR = locale === "fr";

  // JSON-LD Schema.org — Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agence4IA",
    url: "https://agence4ia.com",
    logo: "https://agence4ia.com/favicon-512.png",
    description: isFR
      ? "Agence spécialisée en intelligence artificielle. Formation IA et intégration de solutions IA pour PME."
      : "AI agency specialized in AI training and AI integration solutions for SMBs.",
    telephone: "+33777345056",
    email: "contact@agence4ia.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressLocality: "Toulouse",
    },
    sameAs: ["https://www.instagram.com/agence4.ia/"],
    founder: [
      {
        "@type": "Person",
        name: "Aymane Abdennour",
        sameAs: "https://www.linkedin.com/in/aymaneabdennour/",
      },
      {
        "@type": "Person",
        name: "Bachir Ghafir Idrissi",
        sameAs:
          "https://www.linkedin.com/in/bachir-ghafir-el-idrissi-61356021a/",
      },
    ],
    offers: [
      {
        "@type": "Offer",
        name: isFR ? "Formation IA" : "AI Training",
        price: "20",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "20",
          priceCurrency: "EUR",
          unitCode: "HUR",
        },
      },
      {
        "@type": "Offer",
        name: "ChatBot Pro",
        price: "100",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "100",
          priceCurrency: "EUR",
          billingIncrement: 1,
          unitCode: "MON",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
    </>
  );
}
