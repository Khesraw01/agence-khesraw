import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";
import { PhoneLink } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Contact & afspraak | Khesraw",
  description:
    "Neem contact op met Khesraw Sarwari voor uw website als vakman. Gratis offerte binnen 24 uur. Bel 0465 70 42 15.",
  alternates: {
    canonical: "/nl/contact",
    languages: { "nl-BE": "/nl/contact", "fr-BE": "/contact" },
  },
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-12 text-center md:pt-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.027em] text-midnight-ink md:text-[56px]">
          Laten we uw <span className="text-royal-signal">project</span> bespreken
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-xl text-slate-caption">
          Gratis offerte. Antwoord binnen 24 uur.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
              Uw gegevens
            </h2>
            <dl className="mt-6 space-y-5 text-[15px]">
              <div>
                <dt className="text-sm font-medium text-ash-helper">Telefoon</dt>
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
                <dt className="text-sm font-medium text-ash-helper">Btw</dt>
                <dd className="text-graphite-body">{site.vat}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ash-helper">Werkgebied</dt>
                <dd className="text-graphite-body">
                  {site.zones.join(", ")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[40px] border border-stone-divider bg-white p-6 shadow-card md:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-midnight-ink">
              Vraag uw gratis offerte
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="rounded-[40px] bg-lavender-wash px-6 py-12 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-midnight-ink md:text-[40px]">
            Boek een moment
          </h2>
          <div className="mt-7">
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
