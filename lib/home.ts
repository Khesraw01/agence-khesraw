import type { HomeContent } from "@/lib/home-types";
import { offers } from "@/lib/offers";

export const home: HomeContent = {
  meta: {
    title: "Devis automatiques pour artisans en Wallonie picarde | Khesraw",
    description:
      "Plombiers, électriciens, couvreurs : vos devis se préparent tout seuls, les appels manqués reçoivent un SMS, les relances partent seules. Essai gratuit 7 jours.",
  },
  hero: {
    eyebrow: "Plombier, électricien ou couvreur en Wallonie picarde ?",
    title: "Vos devis se préparent tout seuls pendant vos chantiers.",
    highlight: "tout seuls",
    subtitle:
      "Vous n'avez plus qu'à les relire et les valider depuis votre GSM. Appel manqué, devis sans réponse, chantier terminé : le bon message part aussi tout seul.",
    primaryCta: "Appeler Khesraw",
    whatsappCta: "Ou écrivez-moi sur WhatsApp",
    secondaryCta: "Voir comment ça marche",
    secondaryHref: "#solution",
    scrollCue: "Faites le test en 30 secondes",
    reassurance: [
      "Un indépendant d'ici, pas une agence",
      "Essai gratuit de 7 jours",
      "Aucun devis ne part sans votre accord",
      "Français et néerlandais",
    ],
    demoTitle: "Mme Lambert",
    demo: [
      { from: "system", text: "Appel manqué · Mme Lambert" },
      {
        from: "auto",
        note: "SMS envoyé automatiquement",
        text: "Bonjour, je suis sur chantier et je ne peux pas décrocher. Décrivez votre besoin ici, je vous prépare un devis.",
      },
      { from: "client", text: "Fuite sous l'évier. Je vous envoie 2 photos et les mesures. Mouscron." },
      { from: "system", text: "Brouillon de devis prêt : à valider sur votre GSM" },
      { from: "artisan", note: "Vous", text: "Validé ✓ Le devis part au client." },
    ],
  },
  problem: {
    label: "Le problème",
    title: "Ça vous arrive aussi ?",
    intro: "Cochez ce qui vous parle. Je vous montre ensuite ce qui peut se faire tout seul.",
    legend: "Cochez ce qui vous arrive :",
    items: [
      { id: "soir", label: "Je tape mes devis le soir ou le week-end, à la main." },
      { id: "appels", label: "Je rate des appels quand je suis sur un toit ou sous un évier." },
      { id: "deplacements", label: "Je me déplace pour voir avant de pouvoir chiffrer." },
      { id: "relances", label: "J'envoie des devis, puis plus de nouvelles. Et pas le temps de relancer." },
      { id: "avis", label: "Mes clients sont contents, mais laissent rarement un avis Google." },
      { id: "factures", label: "Des factures sont payées en retard, et c'est à moi de relancer." },
    ],
    results: [
      {
        min: 0,
        title: "Rien coché pour l'instant.",
        text: "Touchez les phrases qui vous ressemblent. Rien n'est envoyé : tout reste sur votre écran.",
        ctaLabel: "",
        ctaHref: "#solution",
      },
      {
        min: 1,
        title: "C'est déjà une corvée de trop.",
        text: "Bonne nouvelle : ce que vous avez coché peut se faire tout seul. Voyez combien de temps ça vous coûte.",
        ctaLabel: "Faire le calcul",
        ctaHref: "#cout",
      },
      {
        min: 3,
        title: "Ça fait plusieurs corvées.",
        text: "Chacune peut se faire sans vous. Commencez par mesurer le temps que vous y passez.",
        ctaLabel: "Faire le calcul",
        ctaHref: "#cout",
      },
      {
        min: 5,
        title: "Vous cochez presque tout.",
        text: "C'est exactement pour ça que l'Assistant Devis existe. Voyez d'abord ce que ça vous coûte aujourd'hui.",
        ctaLabel: "Faire le calcul",
        ctaHref: "#cout",
      },
    ],
    next: "Et ces devis, combien d'heures vous prennent-ils ? Faites le calcul avec vos chiffres.",
  },
  cost: {
    label: "Ce que ça vous coûte",
    title: "Vos devis, combien d'heures par mois ?",
    intro: "Réglez les curseurs avec vos propres chiffres. Le calcul se fait sous vos yeux, rien n'est envoyé.",
    calculator: {
      quotesLabel: "Devis par semaine",
      minutesLabel: "Minutes par devis",
      rateLabel: "Votre taux horaire (facultatif)",
      rateHint: "Ce que vous facturez pour une heure de travail, HTVA.",
      monthLabel: "Vos devis vous prennent environ",
      yearLabel: "Sur un an, ça fait",
      moneyLabel: "À votre taux, c'est l'équivalent de",
      note: "Calcul : devis par semaine × minutes × 52 semaines. Ce sont vos chiffres, pas une estimation de ma part.",
    },
    next: "Et si le brouillon était prêt avant votre retour ? Voici comment ça marche.",
  },
  solution: {
    label: "Comment ça marche",
    title: "Quatre étapes. Vous ne faites que la troisième.",
    intro: "Le client décrit son besoin, le brouillon se prépare, vous validez. Le reste suit tout seul.",
    steps: [
      {
        title: "Le client fait sa demande",
        text: "Sur votre site, par SMS ou sur WhatsApp. Un formulaire guidé lui demande le type de travaux, des photos, les mesures et l'adresse.",
      },
      {
        title: "Le brouillon se prépare",
        text: "Le devis se remplit tout seul, à partir de vos prix. Il vous attend sur votre GSM.",
      },
      {
        title: "Vous validez depuis votre GSM",
        text: "Vous relisez, vous corrigez une ligne si besoin, vous validez. Aucun devis ne part sans votre accord.",
      },
      {
        title: "Le devis part, la relance suit",
        text: "Le devis part au client, à votre nom. Sans réponse, il est relancé automatiquement.",
      },
    ],
    extrasTitle: "En plus, sans rien faire",
    extras: [
      {
        title: "L'appel manqué",
        text: "Le client reçoit un SMS du type « Je suis sur chantier, décrivez votre besoin ici ». Il remplit sa demande pendant que vous travaillez.",
      },
      {
        title: "L'avis Google",
        text: "Chantier terminé ? Le client reçoit une demande d'avis, sans que vous y pensiez.",
      },
      {
        title: "La facture en retard",
        text: "Les rappels de paiement partent à votre place, poliment.",
      },
    ],
    next: "Concrètement, qu'est-ce que ça change dans une journée ? Comparez sur un exemple.",
  },
  day: {
    label: "Avant / après",
    title: "Une journée sans, une journée avec",
    intro: "Même artisan, mêmes chantiers. Seule la paperasse change.",
    withoutTitle: "Sans l'Assistant Devis",
    withTitle: "Avec l'Assistant Devis",
    without: [
      { time: "Le matin, sous un évier", text: "Le GSM sonne, impossible de décrocher. Le client appelle ailleurs." },
      { time: "Le midi, dans la camionnette", text: "Vous rappelez les appels manqués pendant votre pause." },
      { time: "L'après-midi", text: "Le devis de la semaine passée attend toujours une réponse." },
      { time: "Le soir, à la maison", text: "Vous tapez vos devis jusqu'à tard." },
      { time: "Chantier terminé", text: "Vous oubliez de demander un avis." },
    ],
    withSystem: [
      { time: "Le matin, sous un évier", text: "Le client reçoit un SMS et décrit son besoin." },
      { time: "Le midi, dans la camionnette", text: "Les demandes sont déjà là, avec photos et adresse." },
      { time: "L'après-midi", text: "Le devis sans réponse a été relancé, sans que vous y pensiez." },
      { time: "Le soir, à la maison", text: "Vos devis sont validés depuis la journée, sur votre GSM." },
      { time: "Chantier terminé", text: "La demande d'avis Google est partie toute seule." },
    ],
    next: "Envie de la journée « avec » ? Voici les trois formules.",
  },
  offers: {
    label: "Les offres",
    title: "Trois formules. Commencez petit si vous voulez.",
    intro:
      "Touchez un onglet pour voir le détail. Prix HTVA, TVA belge en plus. Pas sûr ? Appelez-moi : je vous dis honnêtement quelle formule vous suffit, même la moins chère.",
    defaultSlug: "assistant",
    items: offers,
    next: "Plombier, électricien ou couvreur ? Voyez ce que ça donne pour votre métier.",
  },
  trades: {
    label: "Votre métier",
    title: "Réglé sur votre métier, avec vos prix",
    intro: "Le formulaire pose les questions de votre métier. Le brouillon utilise vos prix, pas des prix tout faits.",
    items: [
      {
        name: "Plombier / chauffagiste",
        href: "/site-web-plombier",
        text: "Exemple : type de panne, photo de l'installation, accès, adresse. Le brouillon reprend vos forfaits.",
        cta: "Voir la page plombier",
      },
      {
        name: "Électricien",
        href: "/site-web-electricien",
        text: "Exemple : travaux voulus, photo du tableau, pièces concernées, adresse. Le brouillon reprend vos prix.",
        cta: "Voir la page électricien",
      },
      {
        name: "Couvreur",
        href: "/site-web-couvreur",
        text: "Exemple : photos du toit, surface approximative, type de couverture. Le brouillon part de votre prix au mètre carré.",
        cta: "Voir la page couvreur",
      },
    ],
    next: "Reste une question : pourquoi passer par moi plutôt que par une agence ?",
  },
  why: {
    label: "Pourquoi moi",
    title: "Un indépendant, comme vous",
    intro: "Pas d'agence, pas de standard. Vous avez affaire à moi, du premier appel au suivi.",
    points: [
      {
        title: "Près de chez vous",
        text: "Je travaille en Wallonie picarde : Mouscron, Estaimpuis, Comines-Warneton, Tournai et alentours.",
      },
      {
        title: "Français et néerlandais",
        text: "Je vous parle dans votre langue, et vos messages aux clients peuvent partir dans les deux.",
      },
      { title: "Un seul interlocuteur", text: "Vous appelez, c'est moi qui réponds. Celui qui règle votre système, c'est aussi moi." },
      {
        title: "Jugez par vous-même",
        text: "Plutôt que des témoignages, un essai de 7 jours. Khesraw Sarwari, TVA BE 0798.505.503.",
      },
    ],
    processTitle: "Comment je travaille",
    process: [
      { title: "Un appel de 15 minutes", text: "Vous m'expliquez comment vous faites vos devis aujourd'hui." },
      { title: "Je règle tout avec vos prix", text: "Vos forfaits, vos lignes types, vos messages. Vous n'avez rien à installer." },
      { title: "Vous testez 7 jours", text: "Sur vos vrais clients, gratuitement." },
      { title: "Vous décidez", text: "Vous continuez au mois, ou vous arrêtez. Sans durée minimum." },
    ],
    next: "Encore un doute ? Voici les réponses franches, une par une.",
  },
  faq: {
    label: "Vos questions",
    title: "Vos doutes, un par un",
    intro: "Des réponses courtes et franches. S'il en manque une, appelez-moi.",
    items: [
      {
        q: "Ça coûte combien ?",
        a: "L'Assistant Devis se paie au mois, après 7 jours d'essai gratuit. Le site se paie une seule fois. Tous les prix sont affichés dans les offres, HTVA.",
      },
      { q: "Je suis engagé pour combien de temps ?", a: "Il n'y a pas de durée minimum. L'abonnement se paie au mois et s'arrête quand vous voulez." },
      {
        q: "Je garde mon numéro de GSM ?",
        a: "Oui. Vos clients vous appellent au même numéro qu'avant ; le SMS part seulement quand vous ne décrochez pas.",
      },
      {
        q: "C'est compliqué ? Je ne suis pas fort en informatique.",
        a: "Je règle tout avec vous au départ. Ensuite, au quotidien, vous relisez et vous validez depuis votre GSM.",
      },
      {
        q: "Et si un devis part avec une erreur ?",
        a: "Il ne part pas sans vous : chaque brouillon attend votre validation. Vous pouvez corriger une ligne avant l'envoi.",
      },
      {
        q: "Mes clients et leurs données, ils deviennent quoi ?",
        a: "Ils restent à vous : je ne les contacte pas et je ne revends rien. Si vous arrêtez, vous récupérez votre liste de clients.",
      },
      {
        q: "Et si ça ne marche pas pour mon métier ?",
        a: "Je vous le dis franchement avant de commencer. Les 7 jours d'essai servent aussi à le vérifier, sans rien payer.",
      },
    ],
    next: "Vous avez tout vu. Dernière étape : un appel pour voir si ça vous convient.",
  },
  contact: {
    label: "Contact",
    title: "Parlez-moi de vos devis",
    intro: "Un appel suffit pour voir si ça colle à votre façon de travailler. Sinon, je vous le dis franchement.",
    formTitle: "Ou laissez votre numéro, je vous rappelle",
    submit: "Envoyer ma demande",
    reassurance: "Vos coordonnées servent seulement à vous rappeler. Pas de newsletter, pas de revente.",
  },
  blog: {
    title: "Pas encore prêt ? Lisez mes conseils gratuits",
    intro: "Des méthodes simples pour vos devis, vos appels et vos avis Google, à appliquer dès demain, avec ou sans moi.",
  },
};
