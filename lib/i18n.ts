export type Locale = "fr" | "nl";

export function getLocale(pathname: string): Locale {
  return pathname.startsWith("/nl") ? "nl" : "fr";
}

export const t = {
  fr: {
    nav: [
      { href: "/", label: "Accueil" },
      { href: "/tarifs", label: "Tarifs" },
      { href: "/contact", label: "Contact" },
    ],
    devis: "Devis gratuit",
    footerNav: [
      { href: "/", label: "Accueil" },
      { href: "/site-web-plombier", label: "Site web plombier" },
      { href: "/site-web-electricien", label: "Site web électricien" },
      { href: "/site-web-couvreur", label: "Site web couvreur" },
      { href: "/tarifs", label: "Tarifs" },
      { href: "/contact", label: "Contact" },
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
