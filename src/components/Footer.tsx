"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const quickLinks = [
    { href: "#about", label: nav("about") },
    { href: "#learn-ai", label: nav("learnAI") },
    { href: "#integration", label: nav("integration") },
    { href: "#pricing", label: nav("pricing") },
  ];

  const contactLinks = [
    { href: "#team", label: nav("team") },
    { href: "#blog", label: nav("blog") },
    { href: "#contact", label: nav("contact") },
  ];

  return (
    <footer className="bg-dark-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="bg-cream rounded-lg p-2 inline-block mb-4">
              <Logo className="h-8" />
            </div>
            <p className="text-white/80 max-w-md">{t("description")}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-amber mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-amber mb-4">{t("contact")}</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Agence4IA. {t("rights")}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href={`/${locale}/privacy`} className="text-white/60 hover:text-amber">
              {t("privacy")}
            </Link>
            <Link href={`/${locale}/terms`} className="text-white/60 hover:text-amber">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
