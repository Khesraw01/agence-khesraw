"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocale, t } from "@/lib/i18n";
import { PhoneLink, QuoteButton } from "@/components/buttons";
import { LogoMark, LogoText } from "@/components/Logo";

export type BlogLink = { href: string; title: string };

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar({ blogLinks = [] }: { blogLinks?: BlogLink[] }) {
  const [open, setOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const blogRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const labels = t[locale];
  const nl = locale === "nl";
  const otherLang = nl ? "/" : "/nl";
  const hasBlogMenu = !nl && blogLinks.length > 0;

  useEffect(() => {
    if (!blogOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!blogRef.current?.contains(event.target as Node)) setBlogOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBlogOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [blogOpen]);

  function closeAll() {
    setOpen(false);
    setBlogOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-divider bg-snow-canvas/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5"
        aria-label={nl ? "Hoofdnavigatie" : "Navigation principale"}
      >
        <Link href={nl ? "/nl" : "/"} onClick={closeAll} className="flex items-center gap-2.5 text-graphite-body">
          <LogoMark />
          <LogoText />
          <span className="sr-only"> — {nl ? "home" : "accueil"}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {labels.nav.map((l) =>
            l.href === "/blog" && hasBlogMenu ? (
              <div key={l.href} ref={blogRef} className="relative">
                <button
                  type="button"
                  onClick={() => setBlogOpen((v) => !v)}
                  aria-expanded={blogOpen}
                  aria-controls="menu-blog"
                  className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-royal-signal ${
                    blogOpen || pathname.startsWith("/blog") ? "text-royal-deep" : "text-slate-caption"
                  }`}
                >
                  {l.label}
                  <Chevron open={blogOpen} />
                </button>
                {blogOpen && (
                  <div
                    id="menu-blog"
                    className="absolute left-1/2 top-full z-50 mt-4 w-[360px] -translate-x-1/2 rounded-2xl border border-stone-divider bg-white p-2 shadow-card"
                  >
                    <ul>
                      {blogLinks.map((post) => (
                        <li key={post.href}>
                          <Link
                            href={post.href}
                            onClick={closeAll}
                            aria-current={pathname === post.href ? "page" : undefined}
                            className="block rounded-xl px-3 py-2.5 text-[15px] leading-snug text-graphite-body transition-colors hover:bg-lavender-wash hover:text-royal-deep"
                          >
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/blog"
                      onClick={closeAll}
                      className="mt-1 block rounded-xl border-t border-stone-divider px-3 py-3 text-[15px] font-semibold text-royal-deep transition-colors hover:bg-lavender-wash"
                    >
                      {labels.allArticles} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-slate-caption transition-colors hover:text-royal-signal"
              >
                {l.label}
              </Link>
            )
          )}
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
        <div
          id="menu-mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-stone-divider bg-snow-canvas px-5 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {labels.nav.map((l) =>
              l.href === "/blog" && hasBlogMenu ? (
                <div key={l.href} className="py-1">
                  <Link
                    href="/blog"
                    onClick={closeAll}
                    className="block rounded-lg px-3 py-3 text-[16px] font-semibold text-graphite-body transition-colors hover:bg-lavender-wash hover:text-royal-signal"
                  >
                    {l.label}
                  </Link>
                  <ul className="ml-3 border-l-2 border-stone-divider pl-2">
                    {blogLinks.map((post) => (
                      <li key={post.href}>
                        <Link
                          href={post.href}
                          onClick={closeAll}
                          className="block rounded-lg px-3 py-2.5 text-[15px] leading-snug text-slate-caption transition-colors hover:bg-lavender-wash hover:text-royal-deep"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeAll}
                  className="rounded-lg px-3 py-3 text-[16px] font-medium text-graphite-body transition-colors hover:bg-lavender-wash hover:text-royal-signal"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              href={otherLang}
              hrefLang={nl ? "fr-BE" : "nl-BE"}
              onClick={closeAll}
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
