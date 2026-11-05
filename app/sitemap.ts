import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";
import { allPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const lastmod = now.toISOString().split("T")[0]; // format YYYY-MM-DD (exigé par Google)
  const headerList = await headers();
  const host = headerList.get("host") || undefined;
  const baseUrl = host ? `https://${host}` : site.url;

  // Pages villes : une seule langue → pas de hreflang
  const cityEntries: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}${c.path}`,
    lastModified: lastmod,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: lastmod, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/site-web-plombier`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/site-web-electricien`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/site-web-couvreur`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tarifs`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/mentions-legales`, lastModified: lastmod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/confidentialite`, lastModified: lastmod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: lastmod, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.7 },
    ...allPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticEntries, ...cityEntries, ...blogEntries];
}




