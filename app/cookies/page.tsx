import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de cookies | Khesraw",
  description:
    "Quels cookies sont utilisés sur khesraw.com, à quoi ils servent, et comment accepter, refuser ou modifier votre choix.",
  alternates: { canonical: "/cookies" },
};

const cookies = [
  {
    name: "khesraw_consent",
    type: "Essentiel",
    role: "Mémoriser votre choix concernant les cookies",
    keep: "1 an",
  },
  {
    name: "Google Analytics",
    type: "Mesure d'audience (après accord)",
    role: "Compter les visites et les pages vues",
    keep: "14 mois",
  },
];

export default function Page() {
  return (
    <LegalPage eyebrow="Informations légales" title="Politique de cookies" updated={site.legal.updated}>
      <LegalSection title="Qu'est-ce qu'un cookie">
        <p>
          Un cookie est un petit fichier déposé sur votre appareil lorsque vous visitez un site. Il permet
          au site de fonctionner, de mémoriser vos choix ou de mesurer son audience.
        </p>
      </LegalSection>

      <LegalSection title="Les cookies utilisés sur ce site">
        <div className="overflow-x-auto rounded-2xl border border-stone-divider">
          <table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-stone-divider bg-fog-surface">
                <th className="p-3 font-semibold text-midnight-ink">Cookie</th>
                <th className="p-3 font-semibold text-midnight-ink">Type</th>
                <th className="p-3 font-semibold text-midnight-ink">À quoi il sert</th>
                <th className="p-3 font-semibold text-midnight-ink">Durée</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.name} className="border-b border-stone-divider align-top last:border-0">
                  <td className="p-3 text-graphite-body">{c.name}</td>
                  <td className="p-3 text-slate-caption">{c.type}</td>
                  <td className="p-3 text-slate-caption">{c.role}</td>
                  <td className="p-3 text-slate-caption">{c.keep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Les cookies de mesure d&apos;audience ne sont déposés qu&apos;après votre accord. Tant que vous
          n&apos;avez pas accepté, aucun cookie non essentiel n&apos;est utilisé.
        </p>
      </LegalSection>

      <LegalSection title="Votre choix">
        <p>
          Les <strong>cookies essentiels</strong> sont nécessaires au fonctionnement du site et ne
          nécessitent pas votre accord. Tous les <strong>autres cookies</strong> (mesure d&apos;audience,
          publicité, réseaux sociaux) ne sont déposés qu&apos;après votre accord, donné via la bannière
          affichée à votre première visite.
        </p>
        <p>
          Refuser est aussi simple qu&apos;accepter : la bannière propose un bouton «&nbsp;Tout refuser&nbsp;»
          au même niveau que «&nbsp;Tout accepter&nbsp;». Vous pouvez modifier votre choix à tout moment en
          supprimant les cookies depuis les réglages de votre navigateur.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question : {site.email}. Voir aussi notre{" "}
          <Link href="/confidentialite" className="font-medium text-royal-signal underline underline-offset-2">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
