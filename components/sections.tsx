import Link from "next/link";
import { trades, steps, advantages, offers } from "@/lib/content";
import { site } from "@/lib/site";
import { PhoneButton, QuoteButton } from "@/components/buttons";

export function SectionCta({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <PhoneButton />
      <QuoteButton />
    </div>
  );
}

export function TrustBar() {
  const items = [
    { label: `TVA ${site.vat}` },
    { label: "Basé en Belgique" },
    { label: "Réponse sous 24 h" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-caption">
      {items.map((i) => (
        <span key={i.label} className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-win" aria-hidden="true" />
          {i.label}
        </span>
      ))}
    </div>
  );
}

export function TradeCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {trades.map((t) => (
        <Link
          key={t.slug}
          href={`/${t.slug}`}
          className="group rounded-2xl border border-stone-divider bg-white p-6 shadow-sm transition-shadow duration-200 ease-out hover:shadow-card"
        >
          <h3 className="text-xl font-semibold tracking-tight text-midnight-ink">
            {t.name}
          </h3>
          <p className="mt-2 text-[15px] text-slate-caption">{t.intro}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-royal-signal">
            En savoir plus <span aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function Process() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((s) => (
        <div
          key={s.n}
          className="rounded-2xl border border-stone-divider bg-white p-6 shadow-sm"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-royal-signal text-sm font-semibold text-white">
            {s.n}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-midnight-ink">
            {s.title}
          </h3>
          <p className="mt-2 text-[15px] text-slate-caption">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function Advantages() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {advantages.map((a) => (
        <div
          key={a.title}
          className="rounded-2xl border border-stone-divider bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-midnight-ink">{a.title}</h3>
          <p className="mt-2 text-[15px] text-slate-caption">{a.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function Guarantee() {
  return (
    <div className="rounded-[40px] bg-lavender-wash p-8 text-center md:p-12">
      <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
        Zéro risque
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-lg text-slate-caption">
        10 appels en 3 mois, ou 3 mois offerts. Vous êtes accompagné
        jusqu&apos;au résultat.
      </p>
      <p className="mt-2 text-sm text-ash-helper">
        Conditions détaillées sur demande.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-caption">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-win" aria-hidden="true" />
          TVA {site.vat}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-win" aria-hidden="true" />
          Basé en Belgique
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-win" aria-hidden="true" />
          Réponse sous 24 h
        </span>
      </div>
    </div>
  );
}

export function PricingTeaser() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {offers.map((o) => (
        <Link
          key={o.slug}
          href="/tarifs"
          className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-shadow duration-200 ease-out hover:shadow-card ${
            o.featured ? "border-royal-signal" : "border-stone-divider"
          }`}
        >
          {o.badge && (
            <span className="mb-3 inline-flex w-fit rounded-full bg-royal-signal px-3 py-1 text-xs font-medium text-white">
              {o.badge}
            </span>
          )}
          <h3 className="text-xl font-semibold tracking-tight text-midnight-ink">
            {o.name}
          </h3>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-midnight-ink">
            {o.price}
          </p>
          <p className="mt-1 text-sm text-ash-helper">{o.tagline}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-royal-signal">
            Voir les détails <span aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((f) => (
        <details
          key={f.q}
          className="rounded-2xl border border-stone-divider bg-white p-5 shadow-sm"
        >
          <summary className="cursor-pointer text-base font-medium text-midnight-ink">
            {f.q}
          </summary>
          <p className="mt-3 text-[15px] text-slate-caption">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FinalCta() {
  return (
    <div className="rounded-[40px] bg-lavender-wash px-6 py-14 text-center">
      <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
        Votre site travaille pour vous 24h/24
      </h2>
      <p className="mx-auto mt-3 max-w-md text-lg text-slate-caption">
        Demandez un devis gratuit. Réponse sous 24 h.
      </p>
      <SectionCta className="mt-7" />
    </div>
  );
}
