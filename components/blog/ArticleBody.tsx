import type { BlogBlock } from "@/lib/blog";

export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 text-[18px] leading-[1.7] text-graphite-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-6 text-[24px] font-bold tracking-tight text-midnight-ink md:text-[28px]">
                {block.text}
              </h2>
            );
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((item, n) => (
                  <li key={n} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-royal-signal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2.5">
                {block.items.map((item, n) => (
                  <li key={n} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-royal-signal/10 text-[15px] font-bold text-royal-deep"
                    >
                      {n + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "tip":
            return (
              <aside key={i} className="rounded-2xl border-l-4 border-marker bg-[#fff8e1] px-5 py-4 text-[17px]">
                <p>
                  <span className="font-bold text-midnight-ink">Astuce : </span>
                  {block.text}
                </p>
              </aside>
            );
          case "template":
            return (
              <figure key={i} className="rounded-2xl border border-stone-divider bg-white p-5 shadow-sm">
                <figcaption className="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-midnight-ink">
                  <span className="rounded-full bg-lavender-wash px-2.5 py-0.5 text-[13px] font-bold text-royal-deep">
                    Modèle à adapter
                  </span>
                  {block.title}
                </figcaption>
                <div className="mt-3 space-y-2 rounded-xl bg-fog-surface px-4 py-3 text-[16px] leading-relaxed text-graphite-body">
                  {block.lines.map((line, n) => (
                    <p key={n}>{line}</p>
                  ))}
                </div>
              </figure>
            );
        }
      })}
    </div>
  );
}
