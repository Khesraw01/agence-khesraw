import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // AAAA-MM-JJ
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  html: string;
  words: number;
};

const DIR = path.join(process.cwd(), "content", "blog");

function unquote(raw: string): string {
  const v = raw.trim();
  if (v.startsWith('"') && v.endsWith('"')) {
    try {
      return JSON.parse(v);
    } catch {
      return v.slice(1, -1);
    }
  }
  if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
  return v;
}

function parseFile(file: string): (BlogPost & { draft: boolean }) | null {
  const source = fs.readFileSync(path.join(DIR, file), "utf8").replace(/^﻿/, "");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (m) data[m[1]] = unquote(m[2]);
  }
  if (!data.title || !data.date) return null;
  const body = match[2];
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title.replace(/ ([:;?!»])/g, " $1"),
    date: data.date.slice(0, 10),
    description: data.description ?? "",
    image: data.image ?? "",
    imageAlt: data.imageAlt ?? data.title,
    category: data.category || "Conseil",
    draft: data.draft === "true",
    html: marked.parse(body, { async: false }),
    words: body.split(/\s+/).filter(Boolean).length,
  };
}

const posts: BlogPost[] = (fs.existsSync(DIR) ? fs.readdirSync(DIR) : [])
  .filter((f) => f.endsWith(".md"))
  .map(parseFile)
  .filter((p): p is BlogPost & { draft: boolean } => p !== null && !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));

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

export function readingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(post.words / 200));
}

export function allPosts(): BlogPost[] {
  return posts;
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
