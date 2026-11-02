"use client";

import { useState } from "react";

export type CalculatorCopy = {
  quotesLabel: string;
  minutesLabel: string;
  rateLabel: string;
  rateHint: string;
  monthLabel: string;
  yearLabel: string;
  moneyLabel: string;
  note: string;
};

function formatInt(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function TimeCalculator({ copy }: { copy: CalculatorCopy }) {
  const [quotes, setQuotes] = useState(5);
  const [minutes, setMinutes] = useState(45);
  const [rate, setRate] = useState("");

  const hoursPerYear = (quotes * minutes * 52) / 60;
  const hoursPerMonth = hoursPerYear / 12;
  const hourly = Number(rate.replace(",", "."));
  const money = Number.isFinite(hourly) && hourly > 0 ? hoursPerYear * hourly : null;

  const rangeClass = "mt-3 h-2 w-full cursor-pointer accent-marker";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-7 rounded-[24px] border border-white/15 bg-white/5 p-6">
        <div>
          <label htmlFor="calc-devis" className="flex items-baseline justify-between gap-3 text-[17px] font-semibold text-white">
            <span>{copy.quotesLabel}</span>
            <span className="text-[24px] font-bold text-marker">{quotes}</span>
          </label>
          <input
            id="calc-devis"
            type="range"
            min={1}
            max={30}
            value={quotes}
            onChange={(e) => setQuotes(Number(e.target.value))}
            className={rangeClass}
          />
        </div>
        <div>
          <label htmlFor="calc-minutes" className="flex items-baseline justify-between gap-3 text-[17px] font-semibold text-white">
            <span>{copy.minutesLabel}</span>
            <span className="text-[24px] font-bold text-marker">{minutes} min</span>
          </label>
          <input
            id="calc-minutes"
            type="range"
            min={10}
            max={180}
            step={5}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className={rangeClass}
          />
        </div>
        <div>
          <label htmlFor="calc-taux" className="block text-[17px] font-semibold text-white">
            {copy.rateLabel}
          </label>
          <div className="mt-2 flex items-center gap-2">
            <input
              id="calc-taux"
              type="text"
              inputMode="decimal"
              value={rate}
              onChange={(e) => setRate(e.target.value.replace(/[^\d.,]/g, ""))}
              className="w-32 rounded-xl border border-white/25 bg-white px-4 py-3 text-[17px] font-semibold text-midnight-ink focus:outline-none focus:ring-2 focus:ring-marker"
              aria-describedby="calc-taux-aide"
            />
            <span className="text-[17px] font-semibold text-white">€ / heure</span>
          </div>
          <p id="calc-taux-aide" className="mt-2 text-[14px] text-white/70">
            {copy.rateHint}
          </p>
        </div>
      </div>

      <output
        htmlFor="calc-devis calc-minutes calc-taux"
        aria-live="polite"
        className="flex flex-col justify-center rounded-[24px] bg-white p-6 text-midnight-ink shadow-card"
      >
        <span className="text-[16px] font-semibold text-slate-caption">{copy.monthLabel}</span>
        <span className="mt-1 text-[52px] font-bold leading-none tracking-tight">
          {formatInt(hoursPerMonth)} <span className="text-[24px]">h</span>
        </span>
        <span className="mt-5 text-[16px] font-semibold text-slate-caption">{copy.yearLabel}</span>
        <span className="mt-1 text-[32px] font-bold leading-none">{formatInt(hoursPerYear)} h</span>
        {money !== null ? (
          <>
            <span className="mt-5 text-[16px] font-semibold text-slate-caption">{copy.moneyLabel}</span>
            <span className="marker mt-1 self-start text-[32px] font-bold leading-tight">{formatInt(money)} €</span>
          </>
        ) : null}
        <span className="mt-6 text-[14px] leading-snug text-slate-caption">{copy.note}</span>
      </output>
    </div>
  );
}
