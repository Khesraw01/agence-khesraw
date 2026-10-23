"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneLink, QuoteButton } from "@/components/buttons";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-divider bg-snow-canvas/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.brand} — accueil`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal-signal text-base font-semibold text-white">
            k
          </span>
          <span className="text-lg font-semibold tracking-tight text-graphite-body">
            {site.wordmark}
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((l) => (
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
          <PhoneLink className="hidden text-[15px] font-semibold text-graphite-body transition-colors hover:text-royal-signal md:inline-flex" />
          <QuoteButton className="hidden px-5 py-2.5 text-sm sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-divider text-graphite-body lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          className="border-t border-stone-divider bg-snow-canvas px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-caption transition-colors hover:bg-lavender-wash hover:text-royal-signal"
              >
                {l.label}
              </Link>
            ))}
            <PhoneLink className="mt-2 px-3 py-2.5 text-[15px] font-semibold text-royal-signal" />
            <QuoteButton className="mt-2" />
          </div>
        </div>
      )}
    </header>
  );
}
