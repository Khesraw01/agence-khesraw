"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocale, t } from "@/lib/i18n";
import { PhoneLink, QuoteButton } from "@/components/buttons";
import { LogoMark, LogoText } from "@/components/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const labels = t[locale];
  const nl = locale === "nl";
  const otherLang = nl ? "/" : "/nl";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-divider bg-snow-canvas/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5"
        aria-label={nl ? "Hoofdnavigatie" : "Navigation principale"}
      >
        <Link
          href={nl ? "/nl" : "/"}
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-graphite-body"
        >
          <LogoMark />
          <LogoText />
          <span className="sr-only"> — {nl ? "home" : "accueil"}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {labels.nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-slate-caption transition-colors hover:text-royal-signal"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={otherLang}
            hrefLang={nl ? "fr-BE" : "nl-BE"}
            className="hidden text-sm font-semibold text-slate-caption transition-colors hover:text-royal-signal md:inline-flex"
          >
            {nl ? "FR" : "NL"}
            <span className="sr-only"> — {labels.switchAria}</span>
          </Link>
          <PhoneLink className="hidden text-[15px] font-semibold text-graphite-body transition-colors hover:text-royal-signal md:inline-flex" />
          <span className="hidden sm:block">
            <QuoteButton href={labels.devisHref} label={labels.devis} size="sm" />
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-divider text-graphite-body lg:hidden"
            aria-label={open ? labels.menuClose : labels.menuOpen}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-stone-divider bg-snow-canvas px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {labels.nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[16px] font-medium text-graphite-body transition-colors hover:bg-lavender-wash hover:text-royal-signal"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={otherLang}
              hrefLang={nl ? "fr-BE" : "nl-BE"}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[16px] font-medium text-slate-caption transition-colors hover:bg-lavender-wash hover:text-royal-signal"
            >
              <span lang={nl ? "fr" : "nl"}>{labels.switchLabel}</span>
            </Link>
            <PhoneLink className="mt-2 px-3 py-3 text-[16px] font-semibold text-royal-signal" />
            <QuoteButton href={labels.devisHref} label={labels.devis} className="mt-2" />
          </div>
        </div>
      )}
    </header>
  );
}
