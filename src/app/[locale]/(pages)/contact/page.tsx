import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Contact } from "@/components/sections";

const BASE_URL = "https://agence4ia.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "fr"
      ? "Contact — Audit IA Gratuit pour votre Business | Agence4IA"
      : "Contact — Free AI Audit for your Business | Agence4IA";
  const description =
    locale === "fr"
      ? "Demandez votre audit IA gratuit. 1h de conseil offerte pour analyser votre business et identifier vos 3 gains IA immédiats. Sans engagement. Réponse sous 24h."
      : "Request your free AI audit. 1 hour of free consulting to analyze your business and identify your 3 immediate AI gains. No commitment. Reply within 24h.";

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact`,
      languages: {
        fr: `${BASE_URL}/fr/contact`,
        en: `${BASE_URL}/en/contact`,
        "x-default": `${BASE_URL}/fr/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/contact`,
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <Contact />
    </div>
  );
}
