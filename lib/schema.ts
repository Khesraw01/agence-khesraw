import { site } from "./site";

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+32465704215",
  email: site.email,
  vatID: site.vatId,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BE",
    addressLocality: site.locality,
  },
  areaServed: site.areaServed,
};

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    areaServed: site.areaServed,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      telephone: "+32465704215",
      url: site.url,
    },
  };
}

export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function offerSchema(
  offers: { name: string; priceValue: number; tagline: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: offers.map((o, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: o.name,
      description: o.tagline,
      price: String(o.priceValue),
      priceCurrency: "EUR",
      url: `${site.url}/tarifs`,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}


