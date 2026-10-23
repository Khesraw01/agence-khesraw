import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneLink } from "@/components/buttons";

const year = new Date().getFullYear();

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/site-web-plombier", label: "Site web plombier" },
  { href: "/site-web-electricien", label: "Site web électricien" },
  { href: "/site-web-couvreur", label: "Site web couvreur" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal-signal text-base font-semibold">
                k
              </span>
              <span className="text-lg font-semibold tracking-tight">
                {site.wordmark}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Informations</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/mentions-legales" className="transition-colors hover:text-white">
                  Mentions légales &amp; RGPD
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="transition-colors hover:text-white">
                  Plan du site
                </Link>
              </li>
              <li className="text-white/55">TVA : {site.vat}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <PhoneLink className="transition-colors hover:text-white" />
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {site.country} · {site.locality}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55 md:flex-row">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="transition-colors hover:text-white">
              Confidentialité
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
