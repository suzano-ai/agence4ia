"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const quickLinks = [
    { href: `/${locale}/about`, label: nav("about") },
    { href: `/${locale}/learn-ai`, label: nav("learnAI") },
    { href: `/${locale}/integration`, label: nav("integration") },
    { href: `/${locale}/pricing`, label: nav("pricing") },
  ];

  const contactLinks = [
    { href: `/${locale}/team`, label: nav("team") },
    { href: `/${locale}/blog`, label: nav("blog") },
    { href: `/${locale}/contact`, label: nav("contact") },
  ];

  return (
    <footer className="bg-dark-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="sm:col-span-2 md:col-span-2">
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
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/33777345056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-3 py-1.5 rounded hover:bg-[#20bd5a] transition-colors mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@agence4ia.com"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-amber transition-colors text-sm mt-1"
                >
                  <Mail className="w-4 h-4" />
                  contact@agence4ia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Agence4IA. {t("rights")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
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
