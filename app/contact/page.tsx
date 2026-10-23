import { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import BookingWidget from "@/components/BookingWidget";
import { PhoneLink } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Contact & Prise de Rendez-vous | Khesraw",
  description:
    "Contactez Khesraw Sarwari pour votre site web d'artisan. Devis gratuit sous 24 h. Appelez le 0465 70 42 15.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-12 text-center md:pt-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.027em] text-midnight-ink md:text-[56px]">
          Parlons de votre <span className="text-royal-signal">projet</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-xl text-slate-caption">
          Devis gratuit. Réponse sous 24 h.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
              Vos coordonnées
            </h2>
            <dl className="mt-6 space-y-5 text-[15px]">
              <div>
                <dt className="text-sm font-medium text-ash-helper">Téléphone</dt>
                <dd>
                  <PhoneLink className="text-lg font-semibold text-royal-signal" />
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ash-helper">E-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="font-medium text-royal-signal">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ash-helper">TVA</dt>
                <dd className="text-graphite-body">{site.vat}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ash-helper">Zone d&apos;activité</dt>
                <dd className="text-graphite-body">
                  {site.country} · {site.regions.join(", ")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[40px] border border-stone-divider bg-white p-6 shadow-card md:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-midnight-ink">
              Demandez votre devis gratuit
            </h2>
            <p className="mt-2 text-sm text-slate-caption">
              Nom, téléphone, métier. C&apos;est tout.
            </p>
            <div className="mt-6">
              <Suspense fallback={null}>
                <ContactFormWrapper />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="rounded-[40px] bg-lavender-wash px-6 py-12 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Réservez un créneau
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-slate-caption">
            Choisissez le moment qui vous arrange.
          </p>
          <div className="mt-7">
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
