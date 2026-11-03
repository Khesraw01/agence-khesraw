import type { Metadata } from "next";
import Link from "next/link";
import { offers } from "@/lib/offers";
import { home } from "@/lib/home";
import { offerSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import OfferTabs from "@/components/home/OfferTabs";
import { Faq } from "@/components/sections";
import { PhoneButton, WhatsAppButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Tarifs : devis automatiques et site pour artisan | Khesraw",
  description:
    "Trois offres claires pour artisans : l'Assistant Devis dès 89 € HTVA/mois (essai gratuit 7 jours), le Site Artisan ou le pack complet. Sans engagement.",
  keywords: [
    "prix système devis artisan",
    "tarif site web artisan Belgique",
    "abonnement devis automatique",
  ],
  alternates: { canonical: "/tarifs" },
};

const faqPrix = [
  { q: "Les prix incluent-ils la TVA ?", a: "Non. Les prix sont HTVA ; la TVA belge de 21 % s'ajoute." },
  {
    q: "L'essai de 7 jours est-il vraiment gratuit ?",
    a: "Oui. Vous testez l'Assistant Devis pendant 7 jours sans payer. Vous décidez ensuite de continuer ou d'arrêter.",
  },
  { q: "Suis-je engagé ?", a: "Non. L'abonnement se paie au mois et s'arrête quand vous voulez, sans frais." },
  {
    q: "Le Site Artisan, y a-t-il des frais après ?",
    a: "Le site est payé une seule fois. Seul l'hébergement est facturé à part, environ 15 € par mois.",
  },
  {
    q: "Puis-je commencer petit puis ajouter le site ?",
    a: "Oui. Beaucoup démarrent avec l'Assistant Devis seul, puis ajoutent le site plus tard.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={offerSchema(offers)} />
      <JsonLd data={faqSchema(faqPrix)} />

      {/* HERO */}
      <section className="mx-auto max-w-[1100px] px-5 pt-14 pb-8 text-center md:pt-20">
        <h1 className="mx-auto max-w-3xl text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-midnight-ink md:text-[52px]">
          Des tarifs clairs, sans engagement
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[19px] leading-relaxed text-slate-caption md:text-[21px]">
          Commencez par l&apos;essai gratuit de 7 jours. Prix HTVA, TVA belge en plus. Pas de frais caché.
        </p>
      </section>

      {/* OFFRES (mêmes onglets que l'accueil) */}
      <section className="mx-auto max-w-[1100px] px-5 pb-12">
        <OfferTabs offers={offers} defaultSlug="assistant" />
      </section>

      {/* GARANTIE HONNÊTE */}
      <section className="mx-auto max-w-[1100px] px-5 py-10">
        <div className="rounded-[28px] bg-lavender-wash p-6 text-center md:p-10">
          <h2 className="text-[26px] font-bold tracking-tight text-midnight-ink md:text-[34px]">
            Vous essayez avant de payer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[17px] leading-relaxed text-slate-caption">
            L&apos;Assistant Devis se teste 7 jours gratuitement, sur vos vrais clients. Si ça ne vous
            convient pas, vous arrêtez. Vous ne payez que si vous continuez.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1100px] px-5 py-10">
        <h2 className="text-center text-[26px] font-bold tracking-tight text-midnight-ink md:text-[34px]">
          Questions sur les prix
        </h2>
        <div className="mt-8">
          <Faq items={faqPrix} />
        </div>
      </section>

      {/* MAILLAGE INTERNE */}
      <section className="mx-auto max-w-[1100px] px-5 py-8">
        <p className="text-center text-[15px] font-semibold uppercase tracking-wider text-slate-caption">
          Un site réglé sur votre métier
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {[
            { href: "/site-web-plombier", label: "Plombier / chauffagiste" },
            { href: "/site-web-electricien", label: "Électricien" },
            { href: "/site-web-couvreur", label: "Couvreur" },
            { href: "/blog", label: "Conseils gratuits" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-stone-divider bg-white px-5 py-2.5 text-[15px] font-medium text-slate-caption transition-colors hover:border-royal-signal hover:text-royal-deep"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-[1100px] px-5 pb-20">
        <div className="rounded-[28px] bg-navy px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-[26px] font-bold tracking-tight md:text-[34px]">{home.contact.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-[17px] leading-relaxed text-white/80">
            Un appel de 15 minutes suffit pour voir si ça colle à votre façon de travailler.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <PhoneButton label="Appeler" />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
