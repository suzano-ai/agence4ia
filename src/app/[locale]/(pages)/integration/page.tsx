import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import IntegrationPageContent from "@/components/pages/IntegrationPageContent";

const BASE_URL = "https://agence4ia.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "fr"
      ? "Intégration IA pour PME — ChatBot, VoiceAgent, Automatisation | Agence4IA"
      : "AI Integration for SMBs — ChatBot, VoiceAgent, Automation | Agence4IA";
  const description =
    locale === "fr"
      ? "Intégrez l'IA dans votre business. ChatBot Pro, VoiceAgent, ContentFlow, BookingAI. À partir de 100€/mois sans engagement. Audit gratuit pour restaurants, e-commerce, immobilier."
      : "Integrate AI into your business. ChatBot Pro, VoiceAgent, ContentFlow, BookingAI. From €100/month, no commitment. Free audit for restaurants, e-commerce, real estate.";

  return {
    title,
    description,
    keywords:
      locale === "fr"
        ? [
            "intégration IA PME",
            "chatbot intelligence artificielle",
            "VoiceAgent IA",
            "automatisation PME",
            "chatbot restaurant",
            "IA e-commerce",
            "IA immobilier",
            "intégration ChatGPT entreprise",
            "agence IA Toulouse",
          ]
        : [
            "AI integration SMB",
            "AI chatbot business",
            "VoiceAgent AI",
            "business automation AI",
            "ChatGPT integration",
          ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/integration`,
      languages: {
        fr: `${BASE_URL}/fr/integration`,
        en: `${BASE_URL}/en/integration`,
        "x-default": `${BASE_URL}/fr/integration`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/integration`,
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

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isFR = locale === "fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isFR ? "Intégration IA pour PME" : "AI Integration for SMBs",
    description: isFR
      ? "Intégration de solutions d'intelligence artificielle pour entreprises. ChatBot, VoiceAgent, automatisation."
      : "AI solutions integration for businesses. ChatBot, VoiceAgent, automation.",
    provider: {
      "@type": "Organization",
      name: "Agence4IA",
      url: "https://agence4ia.com",
    },
    offers: {
      "@type": "Offer",
      price: "100",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "100",
        priceCurrency: "EUR",
        billingIncrement: 1,
        unitCode: "MON",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <IntegrationPageContent />
      </div>
    </>
  );
}
