"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

export type DiagnosticItem = { id: string; label: string };
export type DiagnosticResult = { min: number; title: string; text: string; ctaLabel: string; ctaHref: string };

export default function Diagnostic({
  legend,
  items,
  results,
}: {
  legend: string;
  items: DiagnosticItem[];
  results: DiagnosticResult[];
}) {
  const [checked, setChecked] = useState<string[]>([]);
  const count = checked.length;
  const result = [...results].sort((a, b) => b.min - a.min).find((r) => count >= r.min) ?? results[0];

  function toggle(id: string) {
    setChecked((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      if (next.length === 1 && prev.length === 0) trackEvent("diagnostic_commence");
      return next;
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-start">
      <fieldset>
        <legend className="mb-4 text-[17px] font-semibold text-midnight-ink">{legend}</legend>
        <div className="space-y-3">
          {items.map((item) => {
            const isChecked = checked.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex min-h-14 cursor-pointer items-center gap-4 rounded-2xl border-2 bg-white px-4 py-3.5 text-[17px] leading-snug transition-colors ${
                  isChecked ? "border-royal-signal bg-royal-signal/5" : "border-stone-divider hover:border-ash-helper"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                  className="h-6 w-6 shrink-0 accent-royal-signal"
                />
                <span className={isChecked ? "font-semibold text-midnight-ink" : "text-graphite-body"}>{item.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div aria-live="polite" className="rounded-[24px] bg-navy p-6 text-white shadow-card lg:sticky lg:top-28">
        <p className="text-[15px] font-semibold text-white/75">
          {count} sur {items.length} coché{count > 1 ? "s" : ""}
        </p>
        <div aria-hidden="true" className="mt-3 flex gap-1.5">
          {items.map((item, i) => (
            <span key={item.id} className={`h-2 flex-1 rounded-full ${i < count ? "bg-marker" : "bg-white/15"}`} />
          ))}
        </div>
        <p className="mt-5 text-[22px] font-bold leading-snug">{result.title}</p>
        <p className="mt-2 text-[16px] leading-relaxed text-white/85">{result.text}</p>
        {result.ctaLabel ? (
          <a
            href={result.ctaHref}
            className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-[16px] font-semibold text-navy"
          >
            {result.ctaLabel} <span aria-hidden="true">↓</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
