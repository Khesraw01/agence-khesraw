"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";
import { getLocale, t } from "@/lib/i18n";
import { PhoneLink } from "@/components/buttons";

const year = new Date().getFullYear();

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const labels = t[locale];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal-signal text-base font-semibold">
                k
              </span>
              <span className="text-lg font-semibold tracking-tight">
                {site.wordmark}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">
              {locale === "nl" ? "Navigatie" : "Navigation"}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {labels.footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">{labels.footerInfo}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/mentions-legales" className="transition-colors hover:text-white">
                  {labels.legal}
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="transition-colors hover:text-white">
                  {labels.privacy}
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="transition-colors hover:text-white">
                  {labels.sitemap}
                </Link>
              </li>
              <li className="text-white/55">TVA : {site.vat}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">{labels.footerContact}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <PhoneLink className="transition-colors hover:text-white" />
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="text-white/55">{site.country}</li>
              <li>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={c.path}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55 md:flex-row">
          <p>
            © {year} {site.name}. {labels.rights}.
          </p>
          <div className="flex gap-5">
            <Link href="/confidentialite" className="transition-colors hover:text-white">
              {labels.privacy}
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white">
              {labels.sitemap}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

