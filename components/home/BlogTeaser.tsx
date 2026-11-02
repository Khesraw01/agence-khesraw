import Link from "next/link";
import { allPosts } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";

export default function BlogTeaser() {
  const latest = allPosts().slice(0, 3);
  if (latest.length === 0) return null;
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {latest.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <Link
        href="/blog"
        className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-royal-signal px-6 py-3 text-[16px] font-semibold text-royal-deep transition-colors hover:bg-lavender-wash"
      >
        Tous les conseils <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
