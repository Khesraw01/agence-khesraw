import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales | Khesraw",
  description:
    "Mentions légales du site de Khesraw Sarwari : éditeur, hébergement, activité, responsabilité et règlement des litiges.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <LegalPage eyebrow="Informations légales" title="Mentions légales" updated={site.legal.updated}>
      <LegalSection title="Éditeur du site">
        <p>
          Ce site est édité par {site.name}, personne physique exerçant en qualité d&apos;
          {site.legal.status}.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Adresse du siège : {site.legal.addressLine}, {site.country}</li>
          <li>Numéro d&apos;entreprise (BCE) : {site.legal.bce}</li>
          <li>Numéro de TVA : {site.vat}</li>
          <li>Téléphone : {site.phone}</li>
          <li>E-mail : {site.email}</li>
          <li>Responsable de la publication : {site.name}</li>
        </ul>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Le site est hébergé par {site.legal.hostName}, {site.legal.hostAddress}.
        </p>
        <p>
          La plateforme client s&apos;appuie sur l&apos;infrastructure de {site.legal.platformName} (
          {site.legal.platformCountry}).
        </p>
      </LegalSection>

      <LegalSection title="Activité">
        <p>
          Création de sites internet, mise en place et maintenance de systèmes d&apos;automatisation de
          la relation client (messages, devis, rendez-vous, avis) pour indépendants et petites
          entreprises.
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des éléments de ce site (textes, visuels, logo, structure, code) est protégé
          par le droit d&apos;auteur. Toute reproduction, même partielle, sans autorisation écrite
          préalable est interdite.
        </p>
        <p>
          Les marques, noms et logos de tiers éventuellement cités restent la propriété de leurs
          titulaires respectifs.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être
          modifiées à tout moment. Malgré le soin apporté à leur rédaction, elles ne constituent ni une
          garantie de résultat, ni un engagement contractuel. Seuls le devis signé et le contrat liant
          les parties font foi.
        </p>
        <p>
          Le site peut contenir des liens vers des sites tiers, sur le contenu desquels l&apos;éditeur
          n&apos;exerce aucun contrôle.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles et cookies">
        <p>
          Le traitement des données personnelles est décrit dans la{" "}
          <Link href="/confidentialite" className="font-medium text-royal-signal underline underline-offset-2">
            politique de confidentialité
          </Link>
          . L&apos;usage des cookies est décrit dans la{" "}
          <Link href="/cookies" className="font-medium text-royal-signal underline underline-offset-2">
            politique de cookies
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Règlement des litiges">
        <p>
          Tout litige relatif à l&apos;utilisation de ce site est soumis au droit belge. En cas de
          litige, les tribunaux de l&apos;arrondissement judiciaire de {site.legal.arrondissement} sont
          seuls compétents.
        </p>
        <p>
          Conformément au droit européen, les consommateurs disposent également de la plateforme de
          règlement en ligne des litiges de la Commission européenne :{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-royal-signal underline underline-offset-2"
          >
            ec.europa.eu/odr
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
