import type { Metadata } from "next";
import Link from "next/link";
import { PhoneButton, QuoteButton } from "@/components/buttons";
import BookingMockup from "@/components/BookingMockup";
import { trades } from "@/lib/content";

export const metadata: Metadata = {
  title: "Websites voor vakmensen | Khesraw",
  description:
    "Snelle, SEO-geoptimaliseerde websites voor loodgieters, elektriciens en dakwerkers in België. Gratis offerte.",
  alternates: {
    canonical: "/nl",
    languages: { "nl-BE": "/nl", "fr-BE": "/", "x-default": "/" },
  },
};

export default function Page() {
  return (
    <>
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
            Uw website <span className="text-royal-signal">werkt</span> 24/7 voor u
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-slate-caption">
            Snelle, SEO-geoptimaliseerde websites voor loodgieters,
            elektriciens en dakwerkers. Klanten boeken online.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PhoneButton label="Bel nu" />
            <QuoteButton href="/nl/contact" label="Gratis offerte" />
          </div>
          <p className="mt-6 text-sm font-medium text-ash-helper">
            Loodgieters · Elektriciens · Dakwerkers · België
          </p>
          <div className="mx-auto mt-8 max-w-2xl text-left shadow-glow">
            <BookingMockup />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-caption">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-win" aria-hidden="true" />
            Btw BE 0798.505.503
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-win" aria-hidden="true" />
            Gevestigd in België
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-win" aria-hidden="true" />
            Antwoord binnen 24 uur
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Een website voor uw beroep
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trades.map((tr) => (
            <Link
              key={tr.slug}
              href={`/${tr.slug}`}
              className="rounded-2xl border border-stone-divider bg-white p-6 shadow-sm transition-shadow duration-200 ease-out hover:shadow-card"
            >
              <h3 className="text-xl font-semibold tracking-tight text-midnight-ink">
                {tr.name}
              </h3>
              <p className="mt-2 text-[15px] text-slate-caption">{tr.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-royal-signal">
                Meer weten <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="rounded-[40px] bg-lavender-wash px-6 py-14 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Klaar om uw website te lanceren?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-slate-caption">
            Bel mij of vraag een gratis offerte aan.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PhoneButton label="Bel nu" />
            <QuoteButton href="/nl/contact" label="Gratis offerte" />
          </div>
        </div>
      </section>
    </>
  );
}
