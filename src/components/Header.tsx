"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#learn-ai", label: t("learnAI") },
    { href: "#integration", label: t("integration") },
    { href: "#pricing", label: t("pricing") },
    { href: "#team", label: t("team") },
    { href: "#blog", label: t("blog") },
    { href: "#contact", label: t("contact") },
  ];

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold hover:text-purple transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language switcher and CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 neu-border rounded-full px-2 py-1">
              <Globe className="w-4 h-4" />
              <button
                onClick={() => switchLocale("fr")}
                className={`px-2 py-1 text-sm font-semibold rounded-full transition-colors ${
                  locale === "fr" ? "bg-amber text-foreground" : "hover:bg-amber/50"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => switchLocale("en")}
                className={`px-2 py-1 text-sm font-semibold rounded-full transition-colors ${
                  locale === "en" ? "bg-amber text-foreground" : "hover:bg-amber/50"
                }`}
              >
                EN
              </button>
            </div>
            <Button
              asChild
              className="bg-purple hover:bg-dark-purple text-white font-bold neu-shadow-sm"
            >
              <a href="#contact">{t("contact")}</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream border-b-2 border-foreground">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-semibold hover:text-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3 border-t border-foreground/20">
              <Globe className="w-4 h-4" />
              <button
                onClick={() => {
                  switchLocale("fr");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  locale === "fr" ? "bg-amber" : "hover:bg-amber/50"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => {
                  switchLocale("en");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  locale === "en" ? "bg-amber" : "hover:bg-amber/50"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
