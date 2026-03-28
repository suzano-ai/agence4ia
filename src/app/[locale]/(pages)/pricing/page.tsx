import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Pricing } from "@/components/sections";

const BASE_URL = "https://agence4ia.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "fr"
      ? "Tarifs IA — Formation dès 20€/h · Intégration dès 100€/mois | Agence4IA"
      : "AI Pricing — Training from €20/h · Integration from €100/month | Agence4IA";
  const description =
    locale === "fr"
      ? "Tarifs transparents et sans engagement. Formation IA dès 20€/h (certifiée). Intégration ChatBot dès 100€/mois. Plans Starter, Growth, Scale et Enterprise disponibles."
      : "Transparent pricing, no commitment. AI training from €20/h (certified). ChatBot integration from €100/month. Starter, Growth, Scale and Enterprise plans available.";

  return {
    title,
    description,
    keywords:
      locale === "fr"
        ? [
            "prix formation IA",
            "tarif chatbot IA",
            "tarif intégration IA",
            "coût IA PME",
            "abonnement IA",
            "prix agence IA France",
          ]
        : [
            "AI training price",
            "AI chatbot pricing",
            "AI integration cost",
            "AI agency pricing France",
          ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/pricing`,
      languages: {
        fr: `${BASE_URL}/fr/pricing`,
        en: `${BASE_URL}/en/pricing`,
        "x-default": `${BASE_URL}/fr/pricing`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/pricing`,
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

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isFR = locale === "fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: isFR ? "Tarifs Agence4IA" : "Agence4IA Pricing",
    description: isFR
      ? "Formation IA dès 20€/h. Intégration IA dès 100€/mois."
      : "AI training from €20/h. AI integration from €100/month.",
    url: `${BASE_URL}/${locale}/pricing`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Pricing />
      </div>
    </>
  );
}
