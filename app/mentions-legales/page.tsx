import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions Légales & RGPD | Khesraw",
  description:
    "Mentions légales, politique de confidentialité et gestion des cookies du site de Khesraw Sarwari, agence web en Belgique.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales & confidentialité"
      updated="23 octobre 2026"
    >
      <LegalSection title="1. Éditeur du site">
        <p>
          Ce site est édité par {site.name}, agence web pour artisans du
          bâtiment, {site.country} ({site.locality}).
        </p>
        <p>
          Téléphone : {site.phone} · E-mail : {site.email} · TVA : {site.vat}.
        </p>
      </LegalSection>

      <LegalSection title="2. Hébergement">
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis.
        </p>
      </LegalSection>

      <LegalSection title="3. Données collectées">
        <p>
          Via le formulaire de contact : nom, numéro de téléphone, métier et
          message facultatif. Ces données servent uniquement à répondre à votre
          demande.
        </p>
        <p>
          Données techniques : adresse IP et données de navigation, traitées
          pour la sécurité et la prévention des abus.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies et mesure d'audience">
        <p>
          Des cookies strictement nécessaires assurent le bon fonctionnement du
          site. Des cookies de mesure d&apos;audience (Google Analytics) ne sont
          déposés qu&apos;après votre consentement, recueilli via la bannière.
        </p>
      </LegalSection>

      <LegalSection title="5. Durée de conservation">
        <p>
          Les demandes de contact sont conservées 12 mois, puis supprimées.
        </p>
      </LegalSection>

      <LegalSection title="6. Vos droits">
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement et d&apos;opposition. Écrivez à{" "}
          {site.email} pour exercer ces droits.
        </p>
      </LegalSection>

      <LegalSection title="7. Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus du site (textes, logo, maquettes, code) est
          protégé. Toute reproduction sans autorisation est interdite.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
