import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, formatDate, getPost, readingMinutes } from "@/lib/blog";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/blog/ArticleBody";
import PostCard from "@/components/blog/PostCard";
import { PhoneButton, WhatsAppButton } from "@/components/buttons";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return allPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Khesraw`,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "fr_BE",
      siteName: site.brand,
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [site.name],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = allPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const url = `${site.url}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "fr-BE",
          mainEntityOfPage: url,
          url,
          author: { "@type": "Person", name: site.name, url: site.url },
          publisher: { "@type": "Person", name: site.name, url: site.url },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Conseils", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="mx-auto max-w-[720px] px-5 pt-10 pb-12 md:pt-16">
        <nav aria-label="Fil d'Ariane" className="text-[15px] text-slate-caption">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="underline-offset-4 hover:text-royal-deep hover:underline">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="underline-offset-4 hover:text-royal-deep hover:underline">
                Conseils
              </Link>
            </li>
          </ol>
        </nav>

        <p className="mt-6 text-[13px] font-bold uppercase tracking-wider text-royal-deep">{post.category}</p>
        <h1 className="mt-2 text-[32px] font-bold tracking-[-0.02em] text-midnight-ink md:text-[44px]">{post.title}</h1>
        <p className="mt-4 text-[15px] text-slate-caption">
          Par {site.name} · {formatDate(post.date)} · {readingMinutes(post)} min de lecture
        </p>

        <div className="mt-8 rounded-2xl bg-lavender-wash p-5 md:p-6">
          <p className="text-[15px] font-bold uppercase tracking-wider text-royal-deep">En bref</p>
          <ul className="mt-3 space-y-2 text-[17px] leading-snug text-graphite-body">
            {post.summary.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-royal-signal" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <ArticleBody blocks={post.blocks} />
        </div>

        <aside className="mt-14 rounded-[28px] bg-navy px-6 py-10 text-white md:px-10">
          <h2 className="text-[24px] font-bold tracking-tight md:text-[30px]">{post.cta.title}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-white/80">{post.cta.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneButton label="Appeler" />
            <WhatsAppButton />
          </div>
          <Link href="/#solution" className="mt-5 inline-block text-[16px] font-semibold text-white underline underline-offset-4">
            Voir comment ça marche
          </Link>
        </aside>
      </article>

      {others.length > 0 ? (
        <section aria-labelledby="autres-conseils" className="mx-auto max-w-[1100px] px-5 pb-20">
          <h2 id="autres-conseils" className="text-[26px] font-bold tracking-tight text-midnight-ink md:text-[32px]">
            Autres conseils
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {others.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
