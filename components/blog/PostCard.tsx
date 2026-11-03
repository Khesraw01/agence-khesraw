import Link from "next/link";
import { type BlogPost, readingMinutes } from "@/lib/blog";

export default function PostCard({ post, headingLevel = "h3" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-stone-divider bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-card"
    >
      {post.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt=""
          width={1200}
          height={630}
          loading="lazy"
          className="-mx-6 -mt-6 mb-5 aspect-[1200/630] w-[calc(100%+3rem)] max-w-none rounded-t-2xl object-cover"
        />
      ) : null}
      <span className="text-[13px] font-bold uppercase tracking-wider text-royal-deep">{post.category}</span>
      <Heading className="mt-2 text-[20px] font-bold leading-snug tracking-tight text-midnight-ink group-hover:text-royal-deep">
        {post.title}
      </Heading>
      <p className="mt-3 flex-1 text-[16px] leading-relaxed text-slate-caption">{post.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-royal-deep">
        Lire l&apos;article · {readingMinutes(post)} min <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
