import type { Metadata } from "next";
import { offers } from "@/lib/content";
import { offerSchema, faqSchema } from "@/lib/schema";
import { faqPrix } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { OfferCta, PhoneButton, QuoteButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Prijzen website vakman | Khesraw",
  description:
    "Website voor loodgieter, elektricien of dakwerker. Drie duidelijke formules vanaf 697 € excl. btw. Gratis offerte.",
  alternates: {
    canonical: "/nl/tarifs",
    languages: { "nl-BE": "/nl/tarifs", "fr-BE": "/tarifs" },
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={offerSchema(offers)} />
      <JsonLd data={faqSchema(faqPrix)} />

      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-10 text-center md:pt-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.027em] text-midnight-ink md:text-[56px]">
          Duidelijke prijzen. <span className="text-royal-signal">Geen verrassingen.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-xl text-slate-caption">
          Drie formules. Kies wat bij u past.
        </p>
        <div className="mt-8">
          <QuoteButton href="/nl/contact" label="Vraag mijn gratis offerte" />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.slug}
              className={`relative flex flex-col rounded-[40px] border bg-white p-8 shadow-card ${
                o.featured
                  ? "border-2 border-royal-signal lg:scale-[1.04]"
                  : "border border-stone-divider"
              }`}
            >
              {o.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-royal-signal px-4 py-1 text-xs font-medium text-white">
                  Aanbevolen
                </span>
              )}
              <h2 className="text-xl font-semibold tracking-tight text-midnight-ink">
                {o.name}
              </h2>
              <p className="mt-1 text-sm text-ash-helper">{o.tagline}</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-midnight-ink">
                {o.price}
              </p>
              {o.installment && (
                <p className="mt-1 text-sm font-medium text-royal-signal">
                  {o.installment}
                </p>
              )}
              <ul className="mt-6 flex-1 space-y-3">
                {o.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-graphite-body">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-win" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <OfferCta slug={o.slug} label={`Kies ${o.name}`} featured={o.featured} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[40px] bg-lavender-wash px-6 py-14 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Klaar om te starten?
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PhoneButton label="Bel nu" />
            <QuoteButton href="/nl/contact" label="Gratis offerte" />
          </div>
        </div>
      </section>
    </>
  );
}
