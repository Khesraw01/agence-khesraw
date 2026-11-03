"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { trackEvent } from "@/lib/gtag";
import { WhatsAppIcon } from "@/components/buttons";
import type { Offer } from "@/lib/offers";

export type { Offer };

function renderPrice(price: string): ReactNode {
  const parts = price.split("[prix]");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 ? (
        <span className="mx-0.5 rounded-md bg-marker px-1.5 text-[0.55em] font-semibold align-middle text-midnight-ink">
          prix à confirmer
        </span>
      ) : null}
    </span>
  ));
}

function whatsappFor(offer: Offer) {
  return whatsappLink(`Bonjour Khesraw, je suis artisan et l'offre « ${offer.name} » m'intéresse.`);
}

export default function OfferTabs({ offers, defaultSlug }: { offers: Offer[]; defaultSlug: string }) {
  const initial = Math.max(0, offers.findIndex((o) => o.slug === defaultSlug));
  const [selected, setSelected] = useState(initial);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const fromHash = () => {
      const match = window.location.hash.match(/^#offre-(.+)$/);
      if (!match) return;
      const index = offers.findIndex((o) => o.slug === match[1]);
      if (index >= 0) {
        setSelected(index);
        document.getElementById("offres")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [offers]);

  function select(index: number, focus = false) {
    setSelected(index);
    trackEvent("onglet_offre", { offre: offers[index].slug });
    if (focus) tabRefs.current[index]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const last = offers.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = selected === last ? 0 : selected + 1;
    if (event.key === "ArrowLeft") next = selected === 0 ? last : selected - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next !== null) {
      event.preventDefault();
      select(next, true);
    }
  }

  const offer = offers[selected];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Choisissez une offre"
        className="grid grid-cols-3 gap-1.5 rounded-2xl bg-white p-1.5 shadow-card md:inline-grid md:min-w-[560px]"
      >
        {offers.map((o, i) => {
          const isSelected = i === selected;
          return (
            <button
              key={o.slug}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`onglet-${o.slug}`}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls={`panneau-${o.slug}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
              className={`min-h-12 rounded-xl px-2 py-2.5 text-[14px] font-semibold leading-tight transition-colors md:text-[15px] ${
                isSelected ? "bg-royal-signal text-white" : "text-slate-caption hover:bg-lavender-wash hover:text-royal-deep"
              }`}
            >
              {o.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        id={`panneau-${offer.slug}`}
        role="tabpanel"
        aria-labelledby={`onglet-${offer.slug}`}
        tabIndex={0}
        className="mt-5 rounded-[28px] border border-stone-divider bg-white p-6 shadow-card md:p-10"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-[24px] font-bold tracking-tight text-midnight-ink md:text-[30px]">{offer.name}</h3>
          {offer.badge ? (
            <span className="rounded-full bg-marker px-3 py-1 text-[13px] font-bold text-midnight-ink">{offer.badge}</span>
          ) : null}
        </div>
        <p className="mt-3 text-[17px] leading-relaxed text-slate-caption">
          <span className="font-semibold text-graphite-body">Pour qui : </span>
          {offer.forWho}
        </p>

        <div className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <ul className="space-y-3">
            {offer.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] leading-snug text-graphite-body">
                <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-win/15 text-[#0a6b19]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-lavender-wash p-5">
            <p className="text-[34px] font-bold leading-tight tracking-tight text-midnight-ink">{renderPrice(offer.price)}</p>
            {offer.priceNote ? <p className="mt-2 text-[15px] leading-snug text-slate-caption">{offer.priceNote}</p> : null}
            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                href="/#contact"
                onClick={() => trackEvent("clic_offre", { offre: offer.slug })}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-royal-signal px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#1048e0]"
              >
                {offer.cta}
              </Link>
              <a
                href={whatsappFor(offer)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("clic_whatsapp", { offre: offer.slug })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-whatsapp px-6 py-3 text-[16px] font-semibold text-whatsapp transition-colors hover:bg-whatsapp/5"
              >
                <WhatsAppIcon />
                En parler sur WhatsApp
              </a>
              <a href={site.phoneHref} className="py-1 text-center text-[15px] font-semibold text-royal-deep underline underline-offset-4">
                Ou appelez-moi : {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
