import Link from "next/link";
import { type City, getCity } from "@/lib/cities";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { PhoneButton, QuoteButton } from "@/components/buttons";

const metiers = [
  { href: "/site-web-plombier", label: "Plombier" },
  { href: "/site-web-electricien", label: "Électricien" },
  { href: "/site-web-couvreur", label: "Couvreur" },
];

export default function CityPage({ city }: { city: City }) {
  const nearby = city.nearby
    .map((s) => getCity(s))
    .filter((c): c is City => Boolean(c));

  const idx = city.h1.indexOf(city.name);
  const before = city.h1.slice(0, idx);
  const after = city.h1.slice(idx + city.name.length);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: city.name, path: city.path },
        ])}
      />
      <JsonLd data={faqSchema(city.faq)} />

      <section className="mx-auto max-w-[1200px] px-6 pt-12 pb-8 md:pt-16">
        <nav aria-label="Fil d'Ariane" className="text-sm text-ash-helper">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-royal-signal">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-slate-caption">
              {city.name}
            </li>
          </ol>
        </nav>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.027em] text-midnight-ink md:text-[56px]">
          {before}
          <span className="text-royal-signal">{city.name}</span>
          {after}
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-slate-caption">{city.localLine}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PhoneButton />
          <QuoteButton />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {city.intro.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-slate-caption">
                {p}
              </p>
            ))}
            <div className="rounded-2xl bg-lavender-wash p-6">
              <p className="text-lg font-medium text-midnight-ink">{city.metierExample}</p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-stone-divider bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-midnight-ink">Votre métier</h2>
              <div className="mt-4 flex flex-col gap-2">
                {metiers.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="rounded-full border border-stone-divider px-4 py-2 text-sm font-medium text-slate-caption transition-colors hover:border-royal-signal hover:text-royal-signal"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>

            {nearby.length > 0 && (
              <div className="rounded-2xl border border-stone-divider bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-midnight-ink">Villes proches</h2>
                <div className="mt-4 flex flex-col gap-2">
                  {nearby.map((c) => (
                    <Link
                      key={c.slug}
                      href={c.path}
                      className="text-sm font-medium text-royal-signal hover:underline"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Questions fréquentes à {city.name}
        </h2>
        <div className="mt-8 space-y-3">
          {city.faq.map((f) => (
            <details
              key={f.q}
              className="rounded-2xl border border-stone-divider bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer text-base font-medium text-midnight-ink">
                {f.q}
              </summary>
              <p className="mt-3 text-[15px] text-slate-caption">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="rounded-[40px] bg-lavender-wash px-6 py-12 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Artisan de {city.name} ? Parlons de votre site.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-slate-caption">
            Devis gratuit. Réponse sous 24 h.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PhoneButton />
            <QuoteButton />
          </div>
        </div>
      </section>
    </>
  );
}
