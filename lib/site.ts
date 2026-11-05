const WHATSAPP_NUMBER = "32465704215";

export function whatsappLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const site = {
  brand: "Khesraw",
  wordmark: "Khesraw",
  name: "Khesraw Sarwari",
  role: "Devis automatiques et sites web pour artisans",
  tagline: "Devis automatiques pour artisans du bâtiment",
  description:
    "Devis préparés automatiquement, SMS après un appel manqué, relances et avis Google : j'allège l'administratif des artisans du bâtiment en Wallonie picarde.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khesraw.com",
  phone: "0465 70 42 15",
  phoneHref: "tel:+32465704215",
  phoneInternational: "+32 465 70 42 15",
  whatsappHref: whatsappLink(
    "Bonjour Khesraw, je suis artisan et j'aimerais en savoir plus sur les devis automatiques."
  ),
  email: "bonjour@khesraw.com",
  vat: "BE 0798.505.503",
  vatId: "BE0798505503",
  country: "Belgique",
  locality: "Belgique",
  address: "Adresse professionnelle à compléter",
  regions: ["Bruxelles", "Wallonie", "Flandre"],
  zones: ["Mouscron", "Tournai", "Comines-Warneton", "Estaimpuis", "Wallonie picarde"],
  areaServed: ["Belgique"],
  trades: ["Plombier", "Électricien", "Couvreur"],
  // Informations légales — à compléter en un seul endroit (voir /mentions-legales).
  legal: {
    status: "indépendant à titre complémentaire",
    // ⚠️ Adresse obligatoire en droit belge : à renseigner avant diffusion.
    addressLine: "Adresse à compléter",
    bce: "0798.505.503",
    arrondissement: "Hainaut, division Tournai",
    hostName: "Vercel Inc.",
    hostAddress: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    platformName: "HighLevel Inc.",
    platformCountry: "États-Unis",
    updated: "5 novembre 2026",
  },
  calUrl: process.env.NEXT_PUBLIC_CAL_URL ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5WJJQD2M",
} as const;
