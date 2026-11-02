import type { ReactNode } from "react";

type Tone = "light" | "tint" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-snow-canvas text-graphite-body",
  tint: "bg-lavender-wash text-graphite-body",
  dark: "bg-navy text-white",
};

export function StepPill({ step, total, label, tone = "light" }: { step: number; total: number; label: string; tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <p className="flex items-center gap-3">
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-bold tracking-wide ${
          dark ? "bg-white/10 text-white" : "bg-royal-signal/10 text-royal-deep"
        }`}
      >
        Étape {step} sur {total}
      </span>
      <span className={`text-[13px] font-semibold uppercase tracking-wider ${dark ? "text-white/80" : "text-slate-caption"}`}>
        {label}
      </span>
    </p>
  );
}

export function NextStep({ href, text, tone = "light" }: { href: string; text: string; tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <a
      href={href}
      className={`group mt-12 flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 transition-colors md:mt-14 ${
        dark
          ? "border-white/15 bg-white/5 hover:bg-white/10"
          : "border-stone-divider bg-white shadow-sm hover:border-royal-signal"
      }`}
    >
      <span className="min-w-0">
        <span className={`block text-[13px] font-bold uppercase tracking-wider ${dark ? "text-white/70" : "text-royal-deep"}`}>
          Suivant
        </span>
        <span className={`mt-0.5 block text-[17px] font-semibold leading-snug ${dark ? "text-white" : "text-midnight-ink"}`}>
          {text}
        </span>
      </span>
      <span
        aria-hidden="true"
        className={`nudge-down flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          dark ? "bg-white text-navy" : "bg-royal-signal text-white"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </span>
    </a>
  );
}

export default function HomeSection({
  id,
  step,
  total,
  label,
  title,
  intro,
  tone = "light",
  next,
  children,
}: {
  id: string;
  step: number;
  total: number;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  next?: { id: string; text: string };
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section id={id} aria-labelledby={`${id}-titre`} className={`scroll-mt-20 ${toneClass[tone]}`}>
      <div className="mx-auto max-w-[1100px] px-5 py-16 md:py-24">
        <StepPill step={step} total={total} label={label} tone={tone} />
        <h2
          id={`${id}-titre`}
          className={`mt-4 max-w-3xl text-[30px] font-bold tracking-[-0.02em] md:text-[44px] ${
            dark ? "text-white" : "text-midnight-ink"
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <p className={`mt-4 max-w-2xl text-[18px] leading-relaxed md:text-[20px] ${dark ? "text-white/80" : "text-slate-caption"}`}>
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
        {next ? <NextStep href={`#${next.id}`} text={next.text} tone={tone} /> : null}
      </div>
    </section>
  );
}
