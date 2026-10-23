import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/lib/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headerList = await headers();
  const host = headerList.get("host") || undefined;
  const baseUrl = host ? `https://${host}` : site.url;

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

