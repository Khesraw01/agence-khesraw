export type DemoBubble = {
  from: "client" | "auto" | "artisan" | "system";
  text: string;
  note?: string;
};

const bubbleStyle: Record<DemoBubble["from"], string> = {
  client: "self-start rounded-2xl rounded-bl-md bg-fog-surface text-graphite-body",
  auto: "self-end rounded-2xl rounded-br-md bg-royal-signal text-white",
  artisan: "self-end rounded-2xl rounded-br-md bg-royal-deep text-white",
  system: "self-center rounded-xl border border-mint-win/40 bg-[#ecfbef] text-[#0a5c16]",
};

export default function PhoneDemo({ title, bubbles }: { title: string; bubbles: DemoBubble[] }) {
  return (
    <figure
      aria-label={`Exemple fictif de conversation : ${bubbles.map((b) => b.text).join(" ")}`}
      className="relative mx-auto w-full max-w-[340px]"
    >
      <div className="rounded-[2.2rem] border-[7px] border-midnight-ink bg-white shadow-card">
        <div className="flex items-center justify-between rounded-t-[1.7rem] border-b border-stone-divider bg-white px-4 py-3">
          <div>
            <p className="text-[13px] font-semibold text-midnight-ink">{title}</p>
            <p className="text-[12px] text-slate-caption">SMS · maintenant</p>
          </div>
          <span className="rounded-full bg-marker px-2.5 py-0.5 text-[12px] font-bold text-midnight-ink">Exemple</span>
        </div>
        <div aria-hidden="true" className="flex min-h-[360px] flex-col gap-2.5 px-3.5 py-4">
          {bubbles.map((bubble, i) => (
            <div
              key={i}
              className={`bubble max-w-[86%] px-3.5 py-2.5 text-[14px] leading-snug ${bubbleStyle[bubble.from]}`}
              style={{ animationDelay: `${0.35 + i * 0.7}s` }}
            >
              {bubble.note ? (
                <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide">
                  {bubble.note}
                </span>
              ) : null}
              {bubble.text}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
