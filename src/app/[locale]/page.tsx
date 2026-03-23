import { setRequestLocale } from "next-intl/server";
import {
  Hero,
  About,
  LearnAI,
  Integration,
  Pricing,
  Team,
  Blog,
  Contact,
} from "@/components/sections";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <LearnAI />
      <Integration />
      <Pricing />
      <Team />
      <Blog />
      <Contact />
    </>
  );
}
