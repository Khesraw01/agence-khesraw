import { posts } from "@/lib/blog-posts";

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "template"; title: string; lines: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string; // AAAA-MM-JJ
  summary: string[];
  blocks: BlogBlock[];
  cta: { title: string; text: string };
};

const MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

function blockText(block: BlogBlock): string[] {
  if ("items" in block) return block.items;
  if (block.type === "template") return [block.title, ...block.lines];
  return [block.text];
}

export function readingMinutes(post: BlogPost): number {
  const text = [post.title, ...post.summary, ...post.blocks.flatMap(blockText)].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
}

export function allPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
