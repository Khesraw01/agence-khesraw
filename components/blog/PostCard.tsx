import Link from "next/link";
import { type BlogPost, readingMinutes } from "@/lib/blog";

export default function PostCard({ post, headingLevel = "h3" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-stone-divider bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-card"
    >
      <span className="text-[13px] font-bold uppercase tracking-wider text-royal-deep">{post.category}</span>
      <Heading className="mt-2 text-[20px] font-bold leading-snug tracking-tight text-midnight-ink group-hover:text-royal-deep">
        {post.title}
      </Heading>
      <p className="mt-3 flex-1 text-[16px] leading-relaxed text-slate-caption">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-royal-deep">
        Lire le conseil · {readingMinutes(post)} min <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
