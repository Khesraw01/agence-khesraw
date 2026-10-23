export type City = {
  slug: string;
  path: string;
  name: string;
  country: "BE" | "FR";
  lang: "fr" | "nl";
  title: string;
  description: string;
  h1: string;
  intro: string[];
  localLine: string;
  metierExample: string;
  faq: { q: string; a: string }[];
  nearby: string[];
  keywords: string[];
};

export const cities: City[] = [
  {
    slug: "mouscron",
    path: "/mouscron",
    name: "Mouscron",
    country: "BE",
    lang: "fr",
    title: "Création site web artisan à Mouscron | Khesraw",
    description:
      "Site web pour artisan à Mouscron. Rapide, optimisé SEO, réservation en ligne. Plombiers, électriciens, couvreurs. Devis gratuit.",
    h1: "Création site web artisan à Mouscron",
    intro: [
      "Mouscron est une ville frontalière du Hainaut, à deux pas de Tourcoing et de Lille. Vos clients comparent les artisans sur Google avant d'appeler.",
      "Sans site web, vous restez invisible. Avec un site rapide, vous apparaissez en tête des résultats locaux.",
      "Je crée des sites pour plombiers, électriciens et couvreurs de Mouscron. Votre agenda se remplit en ligne, 24h/24.",
    ],
    localLine: "Artisans de Mouscron, soyez trouvés avant vos concurrents.",
    metierExample:
      "Un plombier de Mouscron bien référencé capte les dépannages de chauffe-eau avant les grandes enseignes.",
    faq: [
      {
        q: "Pourquoi un site web pour un artisan à Mouscron ?",
        a: "Les habitants de Mouscron cherchent sur Google avant d'appeler. Sans site, vous êtes invisible.",
      },
      {
        q: "Couvrez-vous aussi Tourcoing et Lille ?",
        a: "Oui. Mouscron, Tourcoing et Lille font partie de ma zone d'intervention.",
      },
      {
        q: "Combien de temps pour mettre mon site en ligne ?",
        a: "Comptez 7 à 14 jours après réception de vos informations.",
      },
    ],
    nearby: ["tournai", "lille"],
    keywords: ["création site web artisan Mouscron", "site web plombier Mouscron", "agence web Mouscron"],
  },
  {
    slug: "tournai",
    path: "/tournai",
    name: "Tournai",
    country: "BE",
    lang: "fr",
    title: "Création site web artisan à Tournai | Khesraw",
    description:
      "Site web pour artisan à Tournai. Rapide, optimisé SEO, prise de rendez-vous en ligne. Devis gratuit sous 24 h.",
    h1: "Création site web artisan à Tournai",
    intro: [
      "Tournai, la plus vieille ville de Belgique, abrite un marché artisanal dense. Se démarquer sur Google y est devenu essentiel.",
      "Les clients de Tournai comparent deux ou trois artisans avant de choisir. Votre site doit inspirer confiance immédiatement.",
      "Je conçois des sites rapides et optimisés SEO pour les artisans de Tournai. Vos clients réservent en ligne, sans effort.",
    ],
    localLine: "À Tournai, les clients comparent plusieurs artisans avant d'appeler.",
    metierExample:
      "Un électricien de Tournai avec un site optimisé décroche les rénovations du centre-ville.",
    faq: [
      {
        q: "Un site web est-il rentable pour un artisan de Tournai ?",
        a: "Oui. Un seul chantier rembourse largement votre site.",
      },
      {
        q: "Mes clients peuvent-ils réserver en ligne ?",
        a: "Oui. Votre agenda est connecté. Ils réservent 24h/24.",
      },
      {
        q: "Travaillez-vous avec les communes voisines ?",
        a: "Oui. Mouscron, Ath et le Tournaisis font partie de ma zone.",
      },
    ],
    nearby: ["mouscron", "mons"],
    keywords: ["création site web artisan Tournai", "site web électricien Tournai", "agence web Tournai"],
  },

  {
    slug: "mons",
    path: "/mons",
    name: "Mons",
    country: "BE",
    lang: "fr",
    title: "Création site web artisan à Mons | Khesraw",
    description:
      "Site web pour artisan à Mons. Rapide, SEO local, réservation en ligne. Plombiers, électriciens, couvreurs. Devis gratuit.",
    h1: "Création site web artisan à Mons",
    intro: [
      "Mons, capitale culturelle et ville étudiante, compte de nombreux logements anciens à rénover. La demande d'artisans y est forte.",
      "Les propriétaires du Borinage cherchent des artisans fiables en ligne. Votre site doit vous rendre crédible en une seconde.",
      "Je crée des sites rapides et bien référencés pour les artisans de Mons. Vos clients vous trouvent et réservent en ligne.",
    ],
    localLine: "Mons compte de nombreux logements à rénover. Les artisans visibles gagnent.",
    metierExample:
      "Un couvreur de Mons capte les toitures à refaire du Borinage avant ses concurrents.",
    faq: [
      {
        q: "Comment être visible sur Google à Mons ?",
        a: "Un site optimisé SEO local plus une fiche Google Business à jour.",
      },
      {
        q: "Quel délai pour un site d'artisan à Mons ?",
        a: "Entre 7 et 14 jours après réception de vos informations.",
      },
      {
        q: "Intervenez-vous dans le Borinage ?",
        a: "Oui. Mons, Boussu, Frameries et tout le Borinage.",
      },
    ],
    nearby: ["charleroi", "tournai"],
    keywords: ["création site web artisan Mons", "site web couvreur Mons", "agence web Mons"],
  },
  {
    slug: "charleroi",
    path: "/charleroi",
    name: "Charleroi",
    country: "BE",
    lang: "fr",
    title: "Création site web artisan à Charleroi | Khesraw",
    description:
      "Site web pour artisan à Charleroi. Rapide, optimisé SEO, agenda connecté. Plombiers, électriciens, couvreurs. Devis gratuit.",
    h1: "Création site web artisan à Charleroi",
    intro: [
      "Charleroi, plus grande ville de Wallonie, est en pleine transformation. Le bassin économique y est important et la concurrence rude.",
      "Les clients de Charleroi ont l'embarras du choix. Le premier artisan sur Google remporte l'appel.",
      "Je crée des sites rapides et optimisés pour les artisans de Charleroi. Vous remplissez votre agenda sans dépendre du bouche-à-oreille.",
    ],
    localLine: "À Charleroi, la concurrence est rude. Le premier sur Google gagne l'appel.",
    metierExample:
      "Un plombier de Charleroi bien référencé remplit son agenda de dépannages toute la semaine.",
    faq: [
      {
        q: "Pourquoi investir dans un site web à Charleroi ?",
        a: "Pour capter les clients qui cherchent un artisan sur Google, pas seulement vos habitués.",
      },
      {
        q: "La réservation en ligne fonctionne-t-elle pour mon métier ?",
        a: "Oui. Vos clients choisissent un créneau. Vous recevez une confirmation.",
      },
      {
        q: "Quelles zones couvrez-vous ?",
        a: "Charleroi, Châtelet, Fleurus et toute la région de Charleroi.",
      },
    ],
    nearby: ["mons", "namur"],
    keywords: ["création site web artisan Charleroi", "site web plombier Charleroi", "agence web Charleroi"],
  },

  {
    slug: "namur",
    path: "/namur",
    name: "Namur",
    country: "BE",
    lang: "fr",
    title: "Création site web artisan à Namur | Khesraw",
    description:
      "Site web pour artisan à Namur. Rapide, optimisé SEO, réservation en ligne. Plombiers, électriciens, couvreurs. Devis gratuit.",
    h1: "Création site web artisan à Namur",
    intro: [
      "Namur, capitale de la Wallonie, se situe au confluent de la Meuse et de la Sambre. Sa clientèle résidentielle et de bureaux cherche des artisans fiables.",
      "Les Namurois veulent un artisan joignable et crédible. Votre site web doit refléter votre sérieux dès la première seconde.",
      "Je crée des sites rapides et optimisés SEO pour les artisans de Namur. Vos clients vous trouvent et réservent en ligne.",
    ],
    localLine: "Namur, ville de services. Vos clients cherchent un artisan fiable en ligne.",
    metierExample:
      "Un électricien de Namur attire les mises aux normes de tableaux électriques des particuliers.",
    faq: [
      {
        q: "Un site web attire-t-il des clients à Namur ?",
        a: "Oui. Les particuliers et les bureaux cherchent leur artisan sur Google.",
      },
      {
        q: "Puis-je gérer mes rendez-vous en ligne ?",
        a: "Oui. Votre agenda est connecté. Vos clients réservent un créneau.",
      },
      {
        q: "Couvrez-vous toute la province de Namur ?",
        a: "Oui. Namur, Gembloux, Andenne et la province.",
      },
    ],
    nearby: ["charleroi", "liege"],
    keywords: ["création site web artisan Namur", "site web électricien Namur", "agence web Namur"],
  },
  {
    slug: "liege",
    path: "/liege",
    name: "Liège",
    country: "BE",
    lang: "fr",
    title: "Création site web artisan à Liège | Khesraw",
    description:
      "Site web pour artisan à Liège. Rapide, optimisé SEO, agenda connecté. Plombiers, électriciens, couvreurs. Devis gratuit.",
    h1: "Création site web artisan à Liège",
    intro: [
      "Liège, la Cité ardente, est la première agglomération wallonne. Le marché artisanal y est très actif, mais aussi très concurrentiel.",
      "Des milliers d'artisans se disputent les clients liégeois. Seuls les mieux référencés captent les appels.",
      "Je conçois des sites rapides et optimisés SEO pour les artisans de Liège. Vous devenez l'artisan que l'on trouve en premier.",
    ],
    localLine: "À Liège, des milliers d'artisans se disputent les clients. Soyez celui qu'on trouve.",
    metierExample:
      "Un couvreur de Liège bien positionné gagne les chantiers de toiture en périphérie.",
    faq: [
      {
        q: "Comment dépasser la concurrence à Liège ?",
        a: "Avec un site rapide et un SEO local soigné, vous sortez du lot.",
      },
      {
        q: "La réservation en ligne est-elle adaptée à Liège ?",
        a: "Oui. Les clients réservent à toute heure, même le soir.",
      },
      {
        q: "Quelles communes couvrez-vous ?",
        a: "Liège, Seraing, Herstal et toute l'agglomération.",
      },
    ],
    nearby: ["namur", "charleroi"],
    keywords: ["création site web artisan Liège", "site web couvreur Liège", "agence web Liège"],
  },

  {
    slug: "lille",
    path: "/lille",
    name: "Lille",
    country: "FR",
    lang: "fr",
    title: "Création site web artisan à Lille | Khesraw",
    description:
      "Site web pour artisan à Lille et dans la métropole. Rapide, optimisé SEO, réservation en ligne. Devis gratuit.",
    h1: "Création site web artisan à Lille",
    intro: [
      "Lille, capitale des Flandres, est le cœur de la Métropole Européenne de Lille. Plus d'un million d'habitants cherchent des artisans en ligne.",
      "Tourcoing, Roubaix, Villeneuve-d'Ascq : la demande est énorme. Votre site doit vous rendre visible sur Google.",
      "Je crée des sites rapides et optimisés SEO pour les artisans de la métropole lilloise. Vos clients réservent en ligne.",
    ],
    localLine: "Dans la Métropole Lilloise, les clients réservent en ligne. Soyez trouvés en premier.",
    metierExample:
      "Un plombier de Lille capte les urgences de la métropole grâce à un site rapide et bien classé.",
    faq: [
      {
        q: "Couvrez-vous Tourcoing et Roubaix ?",
        a: "Oui. Toute la Métropole Européenne de Lille.",
      },
      {
        q: "Un site web est-il rentable à Lille ?",
        a: "Oui. La densité de clients y est parmi les plus fortes de la région.",
      },
      {
        q: "Travaillez-vous aussi en Belgique ?",
        a: "Oui. Mouscron, Tournai et Courtrai sont à deux pas de Lille.",
      },
    ],
    nearby: ["tournai", "mouscron"],
    keywords: ["création site internet plombier Lille", "site web artisan Métropole Lilloise", "agence web artisan Tourcoing Roubaix"],
  },
  {
    slug: "kortrijk",
    path: "/nl/kortrijk",
    name: "Kortrijk",
    country: "BE",
    lang: "nl",
    title: "Website laten maken voor vakman in Kortrijk | Khesraw",
    description:
      "Website voor loodgieter, elektricien of dakwerker in Kortrijk. Snel, SEO-geoptimaliseerd, online afspraken. Gratis offerte.",
    h1: "Website laten maken voor vakman in Kortrijk",
    intro: [
      "Kortrijk is een dynamische stad in West-Vlaanderen. Lokale vakmensen verliezen klanten aan concurrenten die online zichtbaar zijn.",
      "Klanten zoeken op Google voor ze bellen. Zonder website blijft u onzichtbaar.",
      "Ik maak snelle, SEO-geoptimaliseerde websites voor loodgieters, elektriciens en dakwerkers in Kortrijk.",
    ],
    localLine: "Vakmensen in Kortrijk, word gevonden vóór uw concurrenten.",
    metierExample:
      "Een loodgieter in Kortrijk met een snelle website vangt de dringende herstellingen op.",
    faq: [
      {
        q: "Waarom een website voor mijn zaak in Kortrijk?",
        a: "Klanten zoeken online voor ze bellen. Een website maakt u vindbaar.",
      },
      {
        q: "Kunnen klanten online een afspraak boeken?",
        a: "Ja. Uw agenda is gekoppeld. Klanten boeken 24/7.",
      },
      {
        q: "Werkt u ook in West-Vlaanderen?",
        a: "Ja. Kortrijk, Roeselare en heel West-Vlaanderen.",
      },
    ],
    nearby: ["tournai", "lille"],
    keywords: ["website laten maken loodgieter Kortrijk", "website elektricien Kortrijk", "website dakwerker West-Vlaanderen"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
