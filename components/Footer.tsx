"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";
import { getLocale, t } from "@/lib/i18n";
import { PhoneLink } from "@/components/buttons";
import { LogoMark, LogoText } from "@/components/Logo";

const year = new Date().getFullYear();

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const labels = t[locale];
  const nl = locale === "nl";

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={nl ? "/nl" : "/"} className="flex items-center gap-2.5">
              <LogoMark />
              <LogoText />
              <span className="sr-only"> — {nl ? "home" : "accueil"}</span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/75">
              {nl
                ? "Snelle websites voor loodgieters, elektriciens en dakwerkers."
                : site.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{nl ? "Navigatie" : "Navigation"}</h2>
            <ul className="mt-3 text-[15px] text-white/75">
              {labels.footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-2 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{labels.footerInfo}</h2>
            <ul className="mt-3 text-[15px] text-white/75">
              <li>
                <Link href="/mentions-legales" className="inline-block py-2 transition-colors hover:text-white">
                  {labels.legal}
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="inline-block py-2 transition-colors hover:text-white">
                  {labels.privacy}
                </Link>
              </li>
              <li className="py-2 text-white/65">TVA : {site.vat}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{labels.footerContact}</h2>
            <ul className="mt-3 text-[15px] text-white/75">
              <li>
                <PhoneLink className="inline-block py-2 transition-colors hover:text-white" />
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-block py-2 transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="pt-3 text-sm font-semibold text-white">{nl ? "Regio's" : "Zones"}</li>
              <li>
                <div className="flex flex-wrap gap-x-4">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={c.path}
                      className="inline-block py-2 text-white/75 transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/65 md:text-left">
          <p>
            © {year} {site.name}. {labels.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
