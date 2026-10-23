import { faq, type Trade } from "@/lib/content";
import BookingMockup from "@/components/BookingMockup";
import {
  SectionCta,
  TrustBar,
  Process,
  Guarantee,
  Faq,
  FinalCta,
} from "@/components/sections";

export default function TradePage({ trade }: { trade: Trade }) {
  const idx = trade.h1.indexOf(trade.h1Accent);
  const before = trade.h1.slice(0, idx);
  const after = trade.h1.slice(idx + trade.h1Accent.length);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[520px] rounded-b-[48px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(20,90,255,0.1) 0%, rgba(182,203,253,0.4) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-16 pb-12 text-center md:pt-24">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.027em] text-midnight-ink md:text-[56px]">
            {before}
            <span className="text-royal-signal">{trade.h1Accent}</span>
            {after}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-slate-caption">
            {trade.intro}
          </p>
          <SectionCta className="mt-8" />
          <p className="mt-6 text-sm font-medium text-ash-helper">
            Plombiers · Électriciens · Couvreurs · Belgique
          </p>
          <div className="mx-auto mt-8 max-w-2xl text-left">
            <BookingMockup />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 pt-10">
        <TrustBar />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[40px] border border-stone-divider bg-white p-8 shadow-card md:p-10">
            <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
              Votre situation aujourd&apos;hui
            </h2>
            <ul className="mt-6 space-y-4">
              {trade.problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-slate-caption">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coral-lost" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[40px] bg-lavender-wash p-8 md:p-10">
            <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
              La solution
            </h2>
            <ul className="mt-6 space-y-4">
              {trade.benefits.map((b) => (
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

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <Guarantee />
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Questions fréquentes
        </h2>
        <div className="mt-10">
          <Faq items={faq} />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <FinalCta />
      </section>
    </>
  );
}
