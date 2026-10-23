import type { Metadata } from "next";
import Link from "next/link";
import { offers, faqPrix, comparison } from "@/lib/content";
import { offerSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { OfferCta, QuoteButton, PhoneButton } from "@/components/buttons";
import { Faq, Guarantee } from "@/components/sections";

export const metadata: Metadata = {
  title: "Tarifs création site web artisan | Belgique",
  description:
    "Site web pour plombier, électricien ou couvreur. 3 offres claires dès 697 € HTVA. Rendez-vous en ligne inclus. Devis gratuit.",
  keywords: [
    "prix site web artisan",
    "tarif création site plombier",
    "site internet couvreur prix",
    "agence web artisan Belgique",
  ],
  alternates: { canonical: "/tarifs" },
};

function Cell({ value }: { value: string }) {
  if (value === "✓") return <span className="text-royal-signal">✓</span>;
  if (value === "—") return <span className="text-ash-helper">—</span>;
  return <span className="text-sm text-graphite-body">{value}</span>;
}

export default function Page() {
  return (
    <>
      <JsonLd data={offerSchema(offers)} />
      <JsonLd data={faqSchema(faqPrix)} />

      {/* HERO */}
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-10 text-center md:pt-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.027em] text-midnight-ink md:text-[56px]">
          Des tarifs clairs. Un site qui{" "}
          <span className="text-royal-signal">rapporte</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-xl text-slate-caption">
          Trois offres. Aucun frais caché.
        </p>
        <div className="mt-8">
          <QuoteButton label="Demander mon devis gratuit" />
        </div>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-stone-divider bg-white px-6 py-5 text-center shadow-card">
          <p className="text-sm text-ash-helper">
            Valeur réelle : <span className="line-through">2 400 €</span>
          </p>
          <p className="mt-1 text-xl font-semibold text-midnight-ink">
            Votre prix : <span className="text-royal-signal">1 497 € HTVA</span>
          </p>
        </div>
      </section>

      {/* CARTES */}
      <section className="mx-auto max-w-[1200px] px-6 pb-12">
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.slug}
              className={`relative flex flex-col rounded-[40px] border bg-white p-8 shadow-card ${
                o.featured
                  ? "border-2 border-royal-signal lg:scale-[1.04]"
                  : "border border-stone-divider"
              }`}
            >
              {o.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-royal-signal px-4 py-1 text-xs font-medium text-white">
                  {o.badge}
                </span>
              )}
              <h2 className="text-xl font-semibold tracking-tight text-midnight-ink">
                {o.name}
              </h2>
              <p className="mt-1 text-sm text-ash-helper">{o.tagline}</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-midnight-ink">
                {o.price}
              </p>
              {o.installment && (
                <p className="mt-1 text-sm font-medium text-royal-signal">
                  {o.installment}
                </p>
              )}
              <ul className="mt-6 flex-1 space-y-3">
                {o.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-graphite-body">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-win" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <OfferCta slug={o.slug} label={o.cta} featured={o.featured} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RENTABILITE */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="rounded-[40px] border border-stone-divider bg-white p-8 shadow-card md:p-12">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Un seul chantier rembourse votre site.
          </h2>
          <ul className="mt-6 space-y-3 text-lg text-slate-caption">
            <li>Un chantier de toiture vaut 3 000 € ou plus.</li>
            <li>Un seul client suffit.</li>
            <li>Le reste est du bénéfice.</li>
          </ul>
          <div className="mt-8">
            <OfferCta slug="croissance" label="Calculer mon gain" featured />
          </div>
        </div>
      </section>

      {/* COMPARAISON */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Comparez les offres
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-slate-caption">
          Pour 500 € de plus, passez d&apos;un site vitrine à une machine à
          rendez-vous.
        </p>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-stone-divider bg-white shadow-card">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-stone-divider">
                <th className="p-4 text-sm font-medium text-slate-caption">
                  Fonctionnalité
                </th>
                <th className="p-4 text-sm font-semibold text-midnight-ink">
                  Essentiel
                </th>
                <th className="p-4 text-sm font-semibold text-midnight-ink">
                  Pro
                </th>
                <th className="bg-lavender-wash p-4 text-sm font-semibold text-midnight-ink">
                  Croissance
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-stone-divider last:border-0"
                >
                  <th
                    scope="row"
                    className="p-4 text-left text-sm font-medium text-graphite-body"
                  >
                    {row.label}
                  </th>
                  <td className="p-4 text-center">
                    <Cell value={row.essentiel} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell value={row.pro} />
                  </td>
                  <td className="bg-lavender-wash p-4 text-center">
                    <Cell value={row.croissance} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* RARETE */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="rounded-[40px] bg-lavender-wash p-8 text-center md:p-10">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Réservez votre zone
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-slate-caption">
            Un seul client par métier et par commune. Réservez votre zone avant
            vos concurrents.
          </p>
          <div className="mt-7">
            <QuoteButton label="Réserver ma zone" />
          </div>
        </div>
      </section>

      {/* GARANTIE */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <Guarantee />
      </section>

      {/* MAINTENANCE */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="rounded-[40px] border border-stone-divider bg-white p-8 shadow-card md:p-12">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Restez en tête. 49 € par mois.
          </h2>
          <ul className="mt-6 space-y-3 text-lg text-slate-caption">
            <li>Hébergement, mises à jour et sauvegardes.</li>
            <li>Petites modifications incluses.</li>
            <li>Sans engagement. Résiliable à tout moment.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <h2 className="text-center text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
          Questions fréquentes sur les prix
        </h2>
        <div className="mt-10">
          <Faq items={faqPrix} />
        </div>
      </section>

      {/* MAILLAGE INTERNE */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { href: "/site-web-plombier", label: "Site web plombier" },
            { href: "/site-web-electricien", label: "Site web électricien" },
            { href: "/site-web-couvreur", label: "Site web couvreur" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-stone-divider bg-white px-5 py-2.5 text-sm font-medium text-slate-caption transition-colors hover:border-royal-signal hover:text-royal-signal"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="rounded-[40px] bg-lavender-wash px-6 py-14 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Prêt à lancer votre site ?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-slate-caption">
            Appelez-moi ou demandez un devis gratuit.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PhoneButton />
            <QuoteButton label="Demander mon devis gratuit" />
          </div>
        </div>
      </section>
    </>
  );
}

