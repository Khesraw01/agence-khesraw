import type { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/blog/PostCard";
import { PhoneButton, WhatsAppButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Blog : conseils pour artisans du bâtiment (devis, appels, avis) | Khesraw",
  description:
    "Conseils pratiques pour plombiers, électriciens et couvreurs : relancer un devis, ne plus perdre d'appels, obtenir des avis Google, gagner du temps sur l'administratif.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  const posts = allPosts();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Conseils pour artisans du bâtiment",
          url: `${site.url}/blog`,
          inLanguage: "fr-BE",
          author: { "@type": "Person", name: site.name, url: site.url },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />

      <section className="mx-auto max-w-[1100px] px-5 pt-12 pb-8 md:pt-20">
        <nav aria-label="Fil d'Ariane" className="text-[15px] text-slate-caption">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="underline-offset-4 hover:text-royal-deep hover:underline">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Blog</li>
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl text-[34px] font-bold tracking-[-0.02em] text-midnight-ink md:text-[52px]">
          Blog&nbsp;: conseils pour artisans du bâtiment
        </h1>
        <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-slate-caption md:text-[20px]">
          Des méthodes simples pour vos devis, vos appels, vos relances et vos avis Google. À appliquer
          dès demain, avec ou sans moi.
        </p>
      </section>

      <section aria-label="Articles" className="mx-auto max-w-[1100px] px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} headingLevel="h2" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 pb-20">
        <div className="rounded-[28px] bg-navy px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-[26px] font-bold tracking-tight md:text-[34px]">Vous préférez que ça se fasse tout seul ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[17px] leading-relaxed text-white/80">
            Je vous installe un système qui prépare vos devis, répond à vos appels manqués et relance vos
            clients. Parlons-en 15 minutes.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <PhoneButton label="Appeler" />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
