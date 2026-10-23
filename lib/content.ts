export type Trade = {
  slug: string;
  name: string;
  h1: string;
  h1Accent: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problems: string[];
  benefits: string[];
};

export const trades: Trade[] = [
  {
    slug: "site-web-plombier",
    name: "Plombier",
    h1: "Plus de chantiers pour votre entreprise de plomberie",
    h1Accent: "chantiers",
    intro:
      "Un site rapide qui vous rend visible sur Google. Vos clients vous appellent ou réservent en ligne.",
    metaTitle: "Site Web pour Plombier | Khesraw",
    metaDescription:
      "Création de site web pour plombier en Belgique. Rapide, optimisé SEO, avec réservation en ligne. Plus de clients. Devis gratuit.",
    keywords: [
      "création site web plombier",
      "site internet plombier",
      "site web plombier Belgique",
      "plombier Bruxelles",
    ],
    problems: ["Peu d'appels entrants", "Invisible sur Google", "Un agenda difficile à remplir"],
    benefits: ["Plus d'appels qualifiés", "Réservation en ligne 24h/24", "Visible sur Google Maps"],
  },
  {
    slug: "site-web-electricien",
    name: "Électricien",
    h1: "Plus de clients pour votre entreprise d'électricité",
    h1Accent: "clients",
    intro:
      "Un site optimisé SEO qui vous met en première page. Vos clients réservent en quelques clics.",
    metaTitle: "Site Web pour Électricien | Khesraw",
    metaDescription:
      "Site internet pour électricien : rapide, optimisé SEO, réservation en ligne. Soyez trouvé en premier sur Google. Devis gratuit.",
    keywords: [
      "site internet électricien",
      "création site web électricien",
      "site web électricien Bruxelles",
      "électricien Wallonie",
    ],
    problems: ["Aucun site ou un site daté", "Peu de demandes de devis", "Concurrence forte sur Google"],
    benefits: ["Première page sur Google", "Demandes de devis qualifiées", "Réservation en ligne simple"],
  },
  {
    slug: "site-web-couvreur",
    name: "Couvreur",
    h1: "Plus de devis pour votre entreprise de couverture",
    h1Accent: "devis",
    intro:
      "Un site qui inspire confiance et remplit votre carnet de chantiers. Vos clients réservent en ligne.",
    metaTitle: "Site Web pour Couvreur | Khesraw",
    metaDescription:
      "Création de site web pour couvreur en Belgique. Rapide, SEO local, prise de rendez-vous en ligne. Devis gratuit.",
    keywords: [
      "site web couvreur",
      "création site web couvreur",
      "site web couvreur Belgique",
      "couvreur Bruxelles",
    ],
    problems: ["Des devis qui ne décollent pas", "Peu de visibilité locale", "Des prospects qui vous oublient"],
    benefits: ["Plus de demandes de devis", "Visibilité locale sur Google", "Réservation en ligne 24h/24"],
  },
];

export const offers = [
  {
    slug: "essentiel",
    name: "Essentiel",
    price: "697 € HTVA",
    priceValue: 697,
    tagline: "Pour démarrer en ligne.",
    features: [
      "Site d'une page",
      "Design moderne, mobile",
      "SEO de base",
      "Bouton d'appel et formulaire",
      "Hébergement et HTTPS, 1re année",
    ],
    cta: "Choisir Essentiel",
    featured: false,
  },
  {
    slug: "croissance",
    name: "Croissance",
    price: "1 497 € HTVA",
    priceValue: 1497,
    installment: "ou 3 × 499 € HTVA",
    tagline: "Une machine à rendez-vous.",
    features: [
      "Tout le Pro",
      "Agenda connecté, confirmation et rappel SMS/email",
      "3 à 5 pages locales (communes ciblées)",
      "Fiche Google Business Profile optimisée",
      "Demande d'avis automatique après chantier",
      "Appels manqués récupérés par SMS",
      "Suivi mensuel pendant 3 mois",
      "Formation vidéo de 30 minutes",
      "Garantie « 10 appels ou 3 mois offerts »",
    ],
    cta: "Choisir Croissance",
    featured: true,
    badge: "Recommandé",
  },
  {
    slug: "pro",
    name: "Pro",
    price: "997 € HTVA",
    priceValue: 997,
    tagline: "Pour être trouvé localement.",
    features: [
      "Tout l'Essentiel",
      "Site de 4 pages",
      "SEO local (ville + métier)",
      "Lien de rendez-vous en ligne",
      "Google Analytics 4",
    ],
    cta: "Choisir Pro",
    featured: false,
  },
];


export const steps = [
  {
    n: "1",
    title: "Appel découverte",
    desc: "On parle de votre métier et de vos objectifs. 15 minutes suffisent.",
  },
  {
    n: "2",
    title: "Création",
    desc: "Je conçois et développe votre site. Vous validez chaque étape.",
  },
  {
    n: "3",
    title: "Mise en ligne",
    desc: "Votre site est en ligne. Votre agenda se remplit.",
  },
];

export const advantages = [
  {
    title: "Rapide",
    desc: "Votre site charge en moins d'une seconde. Vos clients ne patientent pas.",
  },
  {
    title: "SEO local",
    desc: "Vous apparaissez quand on cherche un artisan près de chez soi.",
  },
  {
    title: "Réservation en ligne",
    desc: "Vos clients réservent 24h/24. Votre agenda se remplit.",
  },
];

export const faqPrix = [
  { q: "Les prix incluent-ils la TVA ?", a: "Non. Ils sont HTVA, TVA belge de 21 % en plus." },
  { q: "Puis-je payer en plusieurs fois ?", a: "Oui. L'offre Croissance se paie en 3 × 499 € HTVA." },
  { q: "Combien de temps pour avoir mon site ?", a: "Comptez 7 à 14 jours après réception de vos informations." },
  { q: "Que couvre la maintenance à 49 € par mois ?", a: "Hébergement, mises à jour, sauvegardes et petites modifications." },
  { q: "Puis-je changer d'offre plus tard ?", a: "Oui. Vous payez seulement la différence." },
  { q: "Comment fonctionne la garantie ?", a: "Si vous ne recevez pas 10 appels en 3 mois, vous obtenez 3 mois offerts." },
];

export const comparison = [
  { label: "Pages", essentiel: "1 page", pro: "4 pages", croissance: "3 à 5 pages + locales" },
  { label: "SEO de base", essentiel: "✓", pro: "✓", croissance: "✓" },
  { label: "SEO local", essentiel: "—", pro: "✓", croissance: "✓" },
  { label: "Pages par commune", essentiel: "—", pro: "—", croissance: "✓" },
  { label: "Agenda connecté", essentiel: "—", pro: "✓", croissance: "✓" },
  { label: "Rappels SMS", essentiel: "—", pro: "—", croissance: "✓" },
  { label: "Google Business Profile", essentiel: "—", pro: "—", croissance: "✓" },
  { label: "Avis automatiques", essentiel: "—", pro: "—", croissance: "✓" },
  { label: "Appels manqués récupérés", essentiel: "—", pro: "—", croissance: "✓" },
  { label: "Suivi 3 mois", essentiel: "—", pro: "—", croissance: "✓" },
  { label: "Garantie 10 appels", essentiel: "—", pro: "—", croissance: "✓" },
];


export const faq = [
  {
    q: "Combien coûte un site web pour artisan ?",
    a: "Trois formules claires : 697 €, 997 € ou 1497 €. Pas de frais cachés.",
  },
  {
    q: "Combien de temps pour mettre mon site en ligne ?",
    a: "Entre 7 et 15 jours selon la formule. Vous validez avant la mise en ligne.",
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: "Oui. J'optimise le SEO local et votre fiche Google Business.",
  },
  {
    q: "Puis-je réserver des rendez-vous en ligne ?",
    a: "Oui. Votre agenda est connecté. Vos clients réservent 24h/24.",
  },
  {
    q: "Devrai-je payer un abonnement ?",
    a: "L'hébergement est facturé à part, environ 15 € par mois. La maintenance est incluse 12 mois avec la formule Croissance.",
  },
  {
    q: "Comment commencer ?",
    a: "Appelez-moi ou demandez un devis gratuit. Réponse sous 24 h.",
  },
];
