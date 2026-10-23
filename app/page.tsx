import type { Metadata } from "next";
import Link from "next/link";
import { faq } from "@/lib/content";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import BookingMockup from "@/components/BookingMockup";
import { PhoneButton, QuoteButton } from "@/components/buttons";
import {
  SectionCta,
  TrustBar,
  TradeCards,
  Process,
  Advantages,
  Guarantee,
  PricingTeaser,
  Faq,
  FinalCta,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Sites Web pour Artisans du Bâtiment | Khesraw",
  description:
    "Sites web rapides et SEO pour plombiers, électriciens et couvreurs en Belgique. Prise de rendez-vous en ligne. Devis gratuit.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[560px] rounded-b-[48px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(20,90,255,0.1) 0%, rgba(182,203,253,0.4) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-16 pb-12 text-center md:pt-24">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.027em] text-midnight-ink md:text-[56px]">
            Votre site web{" "}
            <span className="text-royal-signal">travaille</span> pour vous 24h/24
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-slate-caption">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PhoneButton />
            <QuoteButton />
          </div>
          <p className="mt-6 text-sm font-medium text-ash-helper">
            Plombiers · Électriciens · Couvreurs · Belgique
          </p>
          <div className="mx-auto mt-8 max-w-2xl text-left shadow-glow">
            <BookingMockup />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 pt-10">
        <TrustBar />
      </div>

      {/* PROBLEME / SOLUTION */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[40px] border border-stone-divider bg-white p-8 shadow-card md:p-10">
            <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
              Sans site web, vous êtes invisible
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Vos clients ne vous trouvent pas sur Google.",
                "Votre agenda dépend du téléphone.",
                "Vous perdez des clients au profit de concurrents en ligne.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-slate-caption">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coral-lost" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[40px] bg-lavender-wash p-8 md:p-10">
            <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
              Avec un bon site, tout change
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Soyez trouvé en premier sur Google.",
                "Vos clients réservent en ligne 24h/24.",
                "Un site rapide. Un agenda plein.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] font-medium text-graphite-body">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mint-win" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <SectionCta className="mt-8" />
          </div>
        </div>
      </section>

      {/* METIERS */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Un site pour votre métier
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-lg text-slate-caption">
          Plombier, électricien ou couvreur. Vous êtes couvert.
        </p>
        <div className="mt-10">
          <TradeCards />
        </div>
        <SectionCta className="mt-10" />
      </section>

      {/* AVANTAGES */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Trois avantages concrets
        </h2>
        <div className="mt-10">
          <Advantages />
        </div>
        <SectionCta className="mt-10" />
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Un processus simple
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-lg text-slate-caption">
          Trois étapes. Aucune surprise.
        </p>
        <div className="mt-10">
          <Process />
        </div>
        <SectionCta className="mt-10" />
      </section>

      {/* TARIFS */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Des tarifs clairs
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-lg text-slate-caption">
          Trois offres. Aucun frais caché.
        </p>
        <div className="mt-10">
          <PricingTeaser />
        </div>
        <SectionCta className="mt-10" />
      </section>

      {/* GARANTIE */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <Guarantee />
      </section>

      {/* AVIS */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Ils nous font confiance
        </h2>
        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-stone-divider bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-medium text-midnight-ink">
            Premiers clients : bientôt
          </p>
          <p className="mt-2 text-[15px] text-slate-caption">
            Les premiers avis clients arriveront ici. En attendant, votre
            garantie reste : 10 appels en 3 mois, ou 3 mois offerts.
          </p>
        </div>
      </section>

      {/* VILLES */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Nos zones d&apos;intervention
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-lg text-slate-caption">
          Mouscron, Tournai, Courtrai, Lille et toute la Wallonie.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={c.path}
              className="rounded-full border border-stone-divider bg-white px-5 py-2.5 text-sm font-medium text-slate-caption transition-colors hover:border-royal-signal hover:text-royal-signal"
            >
              {c.name}
            </Link>
          ))}
        </div>
        <SectionCta className="mt-10" />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Questions fréquentes
        </h2>
        <div className="mt-10">
          <Faq items={faq} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <FinalCta />
      </section>
    </>
  );
}
