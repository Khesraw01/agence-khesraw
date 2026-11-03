// Source unique des offres (accueil, page tarifs, données structurées).
// PRIX PROVISOIRES choisis par défaut — à confirmer par Khesraw avant diffusion.
export type Offer = {
  slug: string;
  tabLabel: string;
  name: string;
  badge: string;
  forWho: string;
  included: string[];
  price: string;
  priceValue: number; // pour les données structurées (EUR, HTVA)
  priceNote: string;
  cta: string;
  featured?: boolean;
};

export const offers: Offer[] = [
  {
    slug: "assistant",
    tabLabel: "Assistant Devis",
    name: "Assistant Devis",
    badge: "Essai gratuit 7 jours",
    forWho: "Vous avez déjà un site, ou vous n'en voulez pas. Vous voulez surtout ne plus taper vos devis le soir.",
    included: [
      "Formulaire guidé pour vos clients : travaux, photos, mesures, adresse",
      "Brouillon de devis préparé avec vos prix",
      "Relecture et validation depuis votre GSM",
      "Relance automatique des devis sans réponse",
      "SMS automatique après un appel manqué",
      "Demande d'avis Google après le chantier",
      "Rappels de paiement pour les factures en retard",
      "Mise en place avec vos prix, faite par moi",
    ],
    price: "89 € HTVA / mois",
    priceValue: 89,
    priceNote: "Après 7 jours d'essai gratuit. Sans engagement : vous arrêtez quand vous voulez.",
    cta: "Demander mon essai gratuit",
    featured: true,
  },
  {
    slug: "site",
    tabLabel: "Site Artisan",
    name: "Site Artisan",
    badge: "Paiement unique",
    forWho: "Vous n'avez pas de site, ou il date. Vous voulez une vitrine claire et lisible sur GSM.",
    included: [
      "Un site clair, pensé d'abord pour le GSM",
      "Boutons Appeler et WhatsApp toujours visibles",
      "Vos services, votre zone et vos photos de chantier",
      "Formulaire de contact simple",
      "Mise en ligne faite par moi",
      "Le site et le nom de domaine sont à vous",
    ],
    price: "890 € HTVA",
    priceValue: 890,
    priceNote: "Payé une seule fois. Hébergement du site : environ 15 € par mois, facturé à part.",
    cta: "Parler de mon site",
  },
  {
    slug: "pack",
    tabLabel: "Pack Complet",
    name: "Pack Complet",
    badge: "Site + Assistant",
    forWho: "Vous partez de zéro et vous voulez tout régler d'un coup : le site et les devis.",
    included: [
      "Le Site Artisan, en entier",
      "L'Assistant Devis, en entier",
      "Le formulaire guidé intégré à votre site",
      "Tout réglé en une fois, avec un seul interlocuteur : moi",
    ],
    price: "890 € + 69 € / mois HTVA",
    priceValue: 890,
    priceNote: "Le site est payé une fois, l'Assistant Devis au mois (tarif réduit dans le pack), sans engagement.",
    cta: "Parler du pack complet",
  },
];

export function getOffer(slug: string): Offer | undefined {
  return offers.find((o) => o.slug === slug);
}
