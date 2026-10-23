import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";

function cityLangKey(city: (typeof cities)[number]): string {
  if (city.country === "FR") return "fr-FR";
  return city.lang === "nl" ? "nl-BE" : "fr-BE";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const headerList = await headers();
  const host = headerList.get("host") || undefined;
  const baseUrl = host ? `https://${host}` : site.url;

  const cityEntries: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}${c.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: {
      languages: { [cityLangKey(c)]: `${baseUrl}${c.path}` },
    },
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "fr-BE": `${baseUrl}/`,
          "nl-BE": `${baseUrl}/nl`,
          "x-default": `${baseUrl}/`,
        },
      },
    },
    { url: `${baseUrl}/site-web-plombier`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/site-web-electricien`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/site-web-couvreur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { "fr-BE": `${baseUrl}/tarifs`, "nl-BE": `${baseUrl}/nl/tarifs` } },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { "fr-BE": `${baseUrl}/contact`, "nl-BE": `${baseUrl}/nl/contact` } },
    },
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/nl`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/nl/tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/nl/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  return [...staticEntries, ...cityEntries];
}



