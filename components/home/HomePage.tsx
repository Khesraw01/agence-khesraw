import Link from "next/link";
import type { HomeContent } from "@/lib/home-types";
import { site } from "@/lib/site";
import HomeSection from "@/components/home/HomeSection";
import ScrollGuide from "@/components/home/ScrollGuide";
import PhoneDemo from "@/components/home/PhoneDemo";
import Diagnostic from "@/components/home/Diagnostic";
import TimeCalculator from "@/components/home/TimeCalculator";
import DayComparison from "@/components/home/DayComparison";
import OfferTabs from "@/components/home/OfferTabs";
import BlogTeaser from "@/components/home/BlogTeaser";
import ContactForm from "@/components/ContactForm";
import { PhoneButton, WhatsAppButton } from "@/components/buttons";

function WithHighlight({ text, highlight }: { text: string; highlight: string }) {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="marker">{highlight}</span>
      {text.slice(at + highlight.length)}
    </>
  );
}

function Check() {
  return (
    <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-win/15 text-[#0a6b19]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12 5 5L20 7" />
      </svg>
    </span>
  );
}

export default function HomePage({ c }: { c: HomeContent }) {
  const order = [
    { id: "probleme", label: c.problem.label },
    { id: "cout", label: c.cost.label },
    { id: "solution", label: c.solution.label },
    { id: "journee", label: c.day.label },
    { id: "offres", label: c.offers.label },
    { id: "metiers", label: c.trades.label },
    { id: "pourquoi", label: c.why.label },
    { id: "questions", label: c.faq.label },
    { id: "contact", label: c.contact.label },
  ];
  const total = order.length;
  const step = (id: string) => order.findIndex((o) => o.id === id) + 1;
  const next = (id: string, text: string) => {
    const following = order[order.findIndex((o) => o.id === id) + 1];
    return following ? { id: following.id, text } : undefined;
  };

  return (
    <>
      <ScrollGuide steps={order} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lavender-wash to-snow-canvas">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-5 pt-9 pb-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-14 md:pt-16 md:pb-20">
          <div>
            <p className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-[14px] font-semibold text-royal-deep shadow-sm">
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[38px] font-bold leading-[1.06] tracking-[-0.03em] text-midnight-ink md:text-[58px]">
              <WithHighlight text={c.hero.title} highlight={c.hero.highlight} />
            </h1>
            <p className="mt-5 max-w-xl text-[19px] leading-relaxed text-slate-caption md:text-[21px]">{c.hero.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PhoneButton label={c.hero.primaryCta} size="lg" />
              <a
                href={c.hero.secondaryHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-royal-signal bg-white px-8 text-[17px] font-semibold text-royal-deep transition-colors hover:bg-lavender-wash"
              >
                {c.hero.secondaryCta}
              </a>
            </div>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[16px] font-semibold text-whatsapp underline underline-offset-4"
            >
              {c.hero.whatsappCta}
            </a>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
              {c.hero.reassurance.map((r) => (
                <li key={r} className="flex items-center gap-2 text-[15px] font-medium text-graphite-body">
                  <Check />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <PhoneDemo title={c.hero.demoTitle} bubbles={c.hero.demo} />
        </div>
        <div className="flex justify-center pb-8">
          <a href="#probleme" className="group flex flex-col items-center gap-2 text-[16px] font-semibold text-midnight-ink">
            {c.hero.scrollCue}
            <span aria-hidden="true" className="nudge-down flex h-11 w-11 items-center justify-center rounded-full bg-royal-signal text-white shadow-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* 1. LE PROBLÈME */}
      <HomeSection
        id="probleme"
        step={step("probleme")}
        total={total}
        label={c.problem.label}
        title={c.problem.title}
        intro={c.problem.intro}
        next={next("probleme", c.problem.next)}
      >
        <Diagnostic legend={c.problem.legend} items={c.problem.items} results={c.problem.results} />
      </HomeSection>

      {/* 2. CE QUE ÇA COÛTE */}
      <HomeSection
        id="cout"
        tone="dark"
        step={step("cout")}
        total={total}
        label={c.cost.label}
        title={c.cost.title}
        intro={c.cost.intro}
        next={next("cout", c.cost.next)}
      >
        <TimeCalculator copy={c.cost.calculator} />
      </HomeSection>

      {/* 3. LA SOLUTION */}
      <HomeSection
        id="solution"
        step={step("solution")}
        total={total}
        label={c.solution.label}
        title={c.solution.title}
        intro={c.solution.intro}
        next={next("solution", c.solution.next)}
      >
        <ol className="grid gap-4 md:grid-cols-4">
          {c.solution.steps.map((s, i) => (
            <li key={s.title} className="reveal relative rounded-[22px] border border-stone-divider bg-white p-5 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal-signal text-[18px] font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-[19px] font-bold text-midnight-ink">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-slate-caption">{s.text}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-12 text-[22px] font-bold text-midnight-ink">{c.solution.extrasTitle}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {c.solution.extras.map((e) => (
            <div key={e.title} className="reveal rounded-[22px] bg-lavender-wash p-5">
              <p className="text-[18px] font-bold text-midnight-ink">{e.title}</p>
              <p className="mt-2 text-[16px] leading-relaxed text-slate-caption">{e.text}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      {/* 4. UNE JOURNÉE */}
      <HomeSection
        id="journee"
        tone="tint"
        step={step("journee")}
        total={total}
        label={c.day.label}
        title={c.day.title}
        intro={c.day.intro}
        next={next("journee", c.day.next)}
      >
        <DayComparison
          withoutTitle={c.day.withoutTitle}
          withTitle={c.day.withTitle}
          without={c.day.without}
          withSystem={c.day.withSystem}
        />
      </HomeSection>

      {/* 5. LES OFFRES */}
      <HomeSection
        id="offres"
        step={step("offres")}
        total={total}
        label={c.offers.label}
        title={c.offers.title}
        intro={c.offers.intro}
        next={next("offres", c.offers.next)}
      >
        <OfferTabs offers={c.offers.items} defaultSlug={c.offers.defaultSlug} />
      </HomeSection>

      {/* 6. VOTRE MÉTIER */}
      <HomeSection
        id="metiers"
        tone="tint"
        step={step("metiers")}
        total={total}
        label={c.trades.label}
        title={c.trades.title}
        intro={c.trades.intro}
        next={next("metiers", c.trades.next)}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {c.trades.items.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="reveal group flex flex-col rounded-[22px] border border-stone-divider bg-white p-6 shadow-sm transition-shadow hover:shadow-card"
            >
              <h3 className="text-[21px] font-bold text-midnight-ink">{t.name}</h3>
              <p className="mt-2 flex-1 text-[16px] leading-relaxed text-slate-caption">{t.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[16px] font-semibold text-royal-deep">
                {t.cta} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </HomeSection>

      {/* 7. POURQUOI MOI */}
      <HomeSection
        id="pourquoi"
        step={step("pourquoi")}
        total={total}
        label={c.why.label}
        title={c.why.title}
        intro={c.why.intro}
        next={next("pourquoi", c.why.next)}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[24px] border border-stone-divider bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-royal-signal text-[22px] font-bold text-white"
              >
                KS
              </span>
              <div>
                <p className="text-[19px] font-bold text-midnight-ink">{site.name}</p>
                <p className="text-[15px] text-slate-caption">Indépendant · Wallonie picarde · FR / NL</p>
              </div>
            </div>
            <ul className="mt-6 space-y-4">
              {c.why.points.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <Check />
                  <span className="text-[16px] leading-relaxed text-slate-caption">
                    <span className="font-semibold text-midnight-ink">{p.title}. </span>
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[22px] font-bold text-midnight-ink">{c.why.processTitle}</h3>
            <ol className="mt-5 space-y-4">
              {c.why.process.map((p, i) => (
                <li key={p.title} className="reveal flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-royal-signal/10 text-[16px] font-bold text-royal-deep">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-[18px] font-bold text-midnight-ink">{p.title}</span>
                    <span className="mt-1 block text-[16px] leading-relaxed text-slate-caption">{p.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </HomeSection>

      {/* 8. QUESTIONS */}
      <HomeSection
        id="questions"
        tone="tint"
        step={step("questions")}
        total={total}
        label={c.faq.label}
        title={c.faq.title}
        intro={c.faq.intro}
        next={next("questions", c.faq.next)}
      >
        <div className="space-y-3">
          {c.faq.items.map((f) => (
            <details key={f.q} className="group rounded-[20px] border border-stone-divider bg-white shadow-sm">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[17px] font-semibold text-midnight-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lavender-wash text-[20px] text-royal-deep transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-[16px] leading-relaxed text-slate-caption">{f.a}</p>
            </details>
          ))}
        </div>
      </HomeSection>

      {/* 9. CONTACT */}
      <HomeSection
        id="contact"
        step={step("contact")}
        total={total}
        label={c.contact.label}
        title={c.contact.title}
        intro={c.contact.intro}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <PhoneButton label={`Appeler le ${site.phone}`} size="lg" className="w-full" />
            <WhatsAppButton label="Écrire sur WhatsApp" size="lg" className="w-full" />
            <p className="pt-2 text-[16px] leading-relaxed text-slate-caption">{c.contact.reassurance}</p>
          </div>
          <div className="rounded-[24px] border border-stone-divider bg-white p-6 shadow-card md:p-8">
            <h3 className="text-[22px] font-bold text-midnight-ink">{c.contact.formTitle}</h3>
            <div className="mt-5">
              <ContactForm submitLabel={c.contact.submit} />
            </div>
          </div>
        </div>
      </HomeSection>

      {/* CONSEILS (blog) */}
      <section aria-labelledby="conseils-titre" className="bg-lavender-wash">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:py-20">
          <h2 id="conseils-titre" className="text-[28px] font-bold tracking-[-0.02em] text-midnight-ink md:text-[38px]">
            {c.blog.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[18px] leading-relaxed text-slate-caption">{c.blog.intro}</p>
          <div className="mt-8">
            <BlogTeaser />
          </div>
        </div>
      </section>
    </>
  );
}
