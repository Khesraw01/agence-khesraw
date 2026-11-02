export type DayMoment = { time: string; text: string };

function Column({
  title,
  moments,
  variant,
}: {
  title: string;
  moments: DayMoment[];
  variant: "without" | "with";
}) {
  const good = variant === "with";
  return (
    <div className={`rounded-[24px] p-6 md:p-8 ${good ? "bg-white shadow-card ring-2 ring-royal-signal" : "bg-white/70 ring-1 ring-stone-divider"}`}>
      <h3 className={`flex items-center gap-2.5 text-[20px] font-bold ${good ? "text-royal-deep" : "text-midnight-ink"}`}>
        <span
          aria-hidden="true"
          className={`flex h-7 w-7 items-center justify-center rounded-full text-[15px] font-bold text-white ${good ? "bg-royal-signal" : "bg-alert"}`}
        >
          {good ? "✓" : "✕"}
        </span>
        {title}
      </h3>
      <ol className="relative mt-6 space-y-5 border-l-2 border-dashed border-stone-divider pl-5">
        {moments.map((m, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[27px] top-1.5 h-3 w-3 rounded-full ring-4 ring-white ${good ? "bg-royal-signal" : "bg-alert"}`}
            />
            <p className="text-[14px] font-bold uppercase tracking-wide text-slate-caption">{m.time}</p>
            <p className="mt-0.5 text-[16px] leading-snug text-graphite-body">{m.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function DayComparison({
  withoutTitle,
  withTitle,
  without,
  withSystem,
}: {
  withoutTitle: string;
  withTitle: string;
  without: DayMoment[];
  withSystem: DayMoment[];
}) {
  return (
    <div>
      <p className="mb-4 inline-flex rounded-full bg-marker px-3 py-1 text-[13px] font-bold text-midnight-ink">
        Exemple de journée, pour illustrer
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        <Column title={withoutTitle} moments={without} variant="without" />
        <Column title={withTitle} moments={withSystem} variant="with" />
      </div>
    </div>
  );
}
