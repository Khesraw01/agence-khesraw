import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité (RGPD) | Khesraw",
  description:
    "Quelles données sont collectées sur khesraw.com, pourquoi, combien de temps, qui y accède et quels sont vos droits (RGPD).",
  alternates: { canonical: "/confidentialite" },
};

const dataRows = [
  {
    data: "Nom, téléphone, e-mail, métier, message (formulaire de contact)",
    why: "Répondre à votre demande et établir un devis",
    base: "Mesures précontractuelles à votre demande",
    keep: "3 ans après le dernier contact",
  },
  {
    data: "Données de facturation (nom, adresse, n° d'entreprise, TVA)",
    why: "Établir et conserver les factures",
    base: "Obligation légale (comptabilité)",
    keep: "7 ans (délai légal belge)",
  },
  {
    data: "Coordonnées professionnelles d'entreprises prospectées",
    why: "Prospection commerciale B2B",
    base: "Intérêt légitime (développement commercial)",
    keep: "3 ans, ou suppression immédiate en cas d'opposition",
  },
  {
    data: "Données techniques (adresse IP, pages vues, navigateur)",
    why: "Sécurité et mesure d'audience",
    base: "Intérêt légitime, ou consentement pour les cookies non essentiels",
    keep: "14 mois maximum",
  },
];

const providers = [
  { name: site.legal.hostName, role: "Hébergement du site", where: "États-Unis" },
  { name: site.legal.platformName, role: "Plateforme de gestion de la relation client", where: "États-Unis" },
];

export default function Page() {
  return (
    <LegalPage eyebrow="Informations légales" title="Politique de confidentialité" updated={site.legal.updated}>
      <p className="text-[15px] leading-relaxed text-slate-caption">
        Cette page explique quelles données personnelles sont collectées via le site {site.url.replace("https://", "")},
        pourquoi, combien de temps elles sont conservées et quels sont vos droits.
      </p>

      <LegalSection title="1. Qui est responsable de vos données">
        <p>
          {site.name}, {site.legal.addressLine}, {site.country}. Numéro d&apos;entreprise :{" "}
          {site.legal.bce} — E-mail : {site.email} — Téléphone : {site.phone}.
        </p>
        <p className="rounded-xl bg-lavender-wash p-4">
          <strong className="text-midnight-ink">Deux rôles différents.</strong> Pour les données
          collectées sur ce site (visiteurs, demandes de devis), je suis <strong>responsable du
          traitement</strong>. Pour les données traitées dans la plateforme pour le compte d&apos;un client
          professionnel, c&apos;est le client qui est responsable et j&apos;agis comme{" "}
          <strong>sous-traitant</strong> : voir le point 7.
        </p>
      </LegalSection>

      <LegalSection title="2. Quelles données, pourquoi, sur quelle base">
        <div className="overflow-x-auto rounded-2xl border border-stone-divider">
          <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-stone-divider bg-fog-surface">
                <th className="p-3 font-semibold text-midnight-ink">Données</th>
                <th className="p-3 font-semibold text-midnight-ink">Pourquoi</th>
                <th className="p-3 font-semibold text-midnight-ink">Base légale</th>
                <th className="p-3 font-semibold text-midnight-ink">Conservation</th>
              </tr>
            </thead>
            <tbody>
              {dataRows.map((r) => (
                <tr key={r.data} className="border-b border-stone-divider align-top last:border-0">
                  <td className="p-3 text-graphite-body">{r.data}</td>
                  <td className="p-3 text-slate-caption">{r.why}</td>
                  <td className="p-3 text-slate-caption">{r.base}</td>
                  <td className="p-3 text-slate-caption">{r.keep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Aucune donnée sensible (santé, origine, opinions, etc.) n&apos;est collectée. Aucune décision
          automatisée produisant des effets juridiques n&apos;est prise.
        </p>
      </LegalSection>

      <LegalSection title="3. Prospection commerciale">
        <p>
          Si vous êtes contacté dans un cadre professionnel (B2B), vos coordonnées proviennent de sources
          publiques : votre site internet, votre fiche Google Business, un annuaire professionnel.
        </p>
        <p>
          <strong className="text-midnight-ink">Vous pouvez vous y opposer à tout moment</strong>, par un
          simple message à {site.email}, par téléphone, ou en le disant pendant un appel. Votre demande est
          enregistrée immédiatement et définitivement : vous ne serez plus contacté, sur aucun canal.
        </p>
        <p>
          Les numéros inscrits sur la liste belge «&nbsp;Ne m&apos;appelez plus !&nbsp;» (ne-m-appelez-plus.be)
          sont exclus des campagnes d&apos;appels.
        </p>
      </LegalSection>

      <LegalSection title="4. Qui a accès à vos données">
        <p>Vos données ne sont ni vendues, ni louées, ni échangées. Elles sont accessibles à des prestataires techniques agissant pour mon compte :</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-divider">
          <table className="w-full min-w-[480px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-stone-divider bg-fog-surface">
                <th className="p-3 font-semibold text-midnight-ink">Prestataire</th>
                <th className="p-3 font-semibold text-midnight-ink">Rôle</th>
                <th className="p-3 font-semibold text-midnight-ink">Localisation</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p) => (
                <tr key={p.name} className="border-b border-stone-divider align-top last:border-0">
                  <td className="p-3 text-graphite-body">{p.name}</td>
                  <td className="p-3 text-slate-caption">{p.role}</td>
                  <td className="p-3 text-slate-caption">{p.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Ces prestataires sont établis aux États-Unis. Les transferts hors Union européenne reposent sur
          les garanties prévues par le RGPD (clauses contractuelles types ou Data Privacy Framework).
          D&apos;autres prestataires (messagerie professionnelle, comptable) peuvent s&apos;ajouter ; ils
          seront alors mentionnés ici.
        </p>
      </LegalSection>

      <LegalSection title="5. Vos droits">
        <p>
          Vous disposez des droits suivants : accès, rectification, effacement, limitation, opposition,
          portabilité, et retrait de votre consentement lorsque le traitement repose sur celui-ci.
        </p>
        <p>
          Pour les exercer, écrivez à {site.email}. Une réponse vous est apportée dans un délai d&apos;un
          mois. Une preuve d&apos;identité peut être demandée en cas de doute raisonnable.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de l&apos;Autorité de protection des
          données : Rue de la Presse 35, 1000 Bruxelles —{" "}
          <a
            href="https://www.autoriteprotectiondonnees.be"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-royal-signal underline underline-offset-2"
          >
            autoriteprotectiondonnees.be
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Sécurité">
        <p>
          Les accès sont protégés par mot de passe, les connexions sont chiffrées (HTTPS), et seules les
          personnes qui en ont besoin accèdent aux données. Aucun système n&apos;étant infaillible, toute
          violation de données présentant un risque est notifiée conformément au RGPD.
        </p>
      </LegalSection>

      <LegalSection title="7. Données traitées pour le compte de clients professionnels">
        <p>
          Dans le cadre des services de gestion de la relation client, je traite des données (coordonnées
          de clients, échanges, devis) <strong>pour le compte</strong> de mes clients professionnels. Dans
          ce cas :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>le client professionnel est <strong>responsable du traitement</strong> ;</li>
          <li>j&apos;agis comme <strong>sous-traitant</strong>, uniquement sur ses instructions ;</li>
          <li>les règles sont fixées dans un accord de sous-traitance signé avec lui ;</li>
          <li>
            si vous êtes client d&apos;un de ces professionnels, adressez-lui directement vos demandes
            relatives à vos données.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Modifications">
        <p>
          Cette politique peut être mise à jour. La date en haut de page indique la dernière version.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
