import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

export function generateStaticParams() {
  return cities.filter((c) => c.lang === "fr").map((c) => ({ ville: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return {};
  return {
    title: city.title,
    description: city.description,
    keywords: city.keywords,
    alternates: { canonical: city.path },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) notFound();
  return <CityPage city={city} />;
}
