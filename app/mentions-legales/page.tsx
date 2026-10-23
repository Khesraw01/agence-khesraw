import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales | Khesraw",
  description:
    "Mentions légales du site de Khesraw Sarwari, agence web pour artisans en Belgique.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      updated="23 octobre 2026"
    >
      <LegalSection title="1. Éditeur du site">
        <p>
          Éditeur : {site.name}, agence web pour artisans du bâtiment.
        </p>
        <p>
          Téléphone : {site.phone} · E-mail : {site.email}.
        </p>
        <p>
          TVA : {site.vat} · Pays : {site.country}.
        </p>
        <p>Adresse professionnelle : {site.address}.</p>
      </LegalSection>

      <LegalSection title="2. Hébergement">
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis.
        </p>
      </LegalSection>

      <LegalSection title="3. Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus du site (textes, logo, maquettes, code) est
          protégé. Toute reproduction sans autorisation est interdite.
        </p>
      </LegalSection>

      <LegalSection title="4. Données personnelles">
        <p>
          Le traitement de vos données est décrit dans la{" "}
          <Link
            href="/confidentialite"
            className="font-medium text-royal-signal underline underline-offset-2"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}

