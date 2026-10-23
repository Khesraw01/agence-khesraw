# Khesraw — Sites web pour artisans

Site de **Khesraw Sarwari**, agence web pour plombiers, électriciens et couvreurs en Belgique. Prise de rendez-vous en ligne incluse.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19
- TypeScript · Tailwind CSS v4
- Police Inter (next/font, sous-ensemble latin)

## Pages

| Page | URL |
| --- | --- |
| Accueil | `/` |
| Site web pour plombier | `/site-web-plombier` |
| Site web pour électricien | `/site-web-electricien` |
| Site web pour couvreur | `/site-web-couvreur` |
| Tarifs (697 € · 997 € · 1497 €) | `/tarifs` |
| Contact & rendez-vous | `/contact` |
| Mentions légales & RGPD | `/mentions-legales` |

## Mots-clés par page

| Page | Mots-clés ciblés |
| --- | --- |
| Accueil | agence web artisan Belgique, site web artisan Bruxelles |
| Plombier | création site web plombier, site internet plombier, site web plombier Belgique |
| Électricien | site internet électricien, création site web électricien, site web électricien Bruxelles |
| Couvreur | site web couvreur, création site web couvreur, site web couvreur Belgique |
| Tarifs | tarif site web artisan, prix site internet artisan |
| Contact | devis site web artisan, contact agence web artisan |

## SEO technique

- Schema.org : LocalBusiness, Service, FAQPage, Review
- sitemap.xml, robots.txt, canonical, Open Graph
- `lang="fr-BE"`, HTTPS forcé (`proxy.ts`)
- GA4 : événements `clic_telephone`, `clic_devis`, `envoi_formulaire`, `rendezvous_reserve`

## Configuration (`.env.local`)

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (canonical, sitemap, OG) |
| `NEXT_PUBLIC_GA_ID` | Identifiant GA4 (après consentement) |
| `NEXT_PUBLIC_CAL_URL` | Lien Cal.com / Calendly (widget de rendez-vous) |
| `CONTACT_WEBHOOK_URL` | Webhook recevant les demandes de contact |

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # serveur de production
```

## Prochaines étapes SEO

1. **Google Business Profile** : créer et optimiser la fiche (catégorie, photos, avis).
2. **Avis Google** : demander systématiquement un avis après chaque chantier.
3. **Backlinks** : annuaires locaux, partenariats artisans, presse locale.
4. **Google Search Console** : soumettre le sitemap et suivre les requêtes.


