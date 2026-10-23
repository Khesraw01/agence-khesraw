import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité (RGPD) | Khesraw",
  description:
    "Politique de confidentialité et gestion des cookies du site de Khesraw Sarwari, agence web en Belgique.",
  alternates: { canonical: "/confidentialite" },
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Politique de confidentialité"
      updated="23 octobre 2026"
    >
      <LegalSection title="1. Responsable du traitement">
        <p>
          {site.name}, agence web pour artisans du bâtiment, {site.country}.
          Contact : {site.email} · {site.phone}.
        </p>
      </LegalSection>

      <LegalSection title="2. Données collectées">
        <p>
          Via le formulaire : nom, téléphone, métier, ville et message. Ces
          données servent uniquement à répondre à votre demande.
        </p>
        <p>
          Données techniques : adresse IP et navigation, traitées pour la
          sécurité et la prévention des abus.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies et mesure d&apos;audience">
        <p>
          Des cookies strictement nécessaires assurent le bon fonctionnement du
          site. Des cookies de mesure d&apos;audience (Google Analytics) ne sont
          déposés qu&apos;après votre consentement, via la bannière. Refuser est
          aussi simple qu&apos;accepter.
        </p>
      </LegalSection>

      <LegalSection title="4. Durée de conservation">
        <p>
          Les demandes de contact sont conservées 12 mois, puis supprimées. Les
          données d&apos;audience : 14 mois maximum.
        </p>
      </LegalSection>

      <LegalSection title="5. Vos droits">
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement et d&apos;opposition. Écrivez à{" "}
          {site.email} pour exercer ces droits.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
