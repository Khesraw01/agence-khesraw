export type Locale = "fr" | "nl";

export function getLocale(pathname: string): Locale {
  return pathname.startsWith("/nl") ? "nl" : "fr";
}

export const t = {
  fr: {
    nav: [
      { href: "/#solution", label: "Comment ça marche" },
      { href: "/#offres", label: "Offres" },
      { href: "/#metiers", label: "Métiers" },
      { href: "/blog", label: "Conseils" },
      { href: "/#contact", label: "Contact" },
    ],
    devis: "Essai gratuit",
    devisHref: "/#contact",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    switchLabel: "Nederlands",
    switchAria: "Nederlandse versie",
    footerNav: [
      { href: "/", label: "Accueil" },
      { href: "/#offres", label: "Offres" },
      { href: "/blog", label: "Conseils pour artisans" },
      { href: "/site-web-plombier", label: "Plombier / chauffagiste" },
      { href: "/site-web-electricien", label: "Électricien" },
      { href: "/site-web-couvreur", label: "Couvreur" },
      { href: "/#contact", label: "Contact" },
    ],
    footerInfo: "Informations",
    footerContact: "Contact",
    legal: "Mentions légales",
    privacy: "Confidentialité",
    sitemap: "Plan du site",
    rights: "Tous droits réservés",
  },
  nl: {
    nav: [
      { href: "/nl", label: "Home" },
      { href: "/nl/tarifs", label: "Prijzen" },
      { href: "/nl/contact", label: "Contact" },
    ],
    devis: "Gratis offerte",
    devisHref: "/nl/contact",
    menuOpen: "Menu openen",
    menuClose: "Menu sluiten",
    switchLabel: "Français",
    switchAria: "Version française",
    footerNav: [
      { href: "/nl", label: "Home" },
      { href: "/site-web-plombier", label: "Website loodgieter" },
      { href: "/site-web-electricien", label: "Website elektricien" },
      { href: "/site-web-couvreur", label: "Website dakwerker" },
      { href: "/nl/tarifs", label: "Prijzen" },
      { href: "/nl/contact", label: "Contact" },
    ],
    footerInfo: "Informatie",
    footerContact: "Contact",
    legal: "Wettelijke vermeldingen",
    privacy: "Privacy",
    sitemap: "Sitemap",
    rights: "Alle rechten voorbehouden",
  },
} as const;
