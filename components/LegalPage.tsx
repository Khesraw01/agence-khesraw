import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-[720px] px-6 py-16">
      <p className="font-mono text-sm font-medium text-royal-signal">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-midnight-ink">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ash-helper">
        Dernière mise à jour : {updated}
      </p>
      <div className="mt-10 space-y-10">{children}</div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-midnight-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-caption">
        {children}
      </div>
    </section>
  );
}
