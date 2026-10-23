import type { Metadata } from "next";
import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Website laten maken voor vakman in Kortrijk | Khesraw",
  description:
    "Website voor loodgieter, elektricien of dakwerker in Kortrijk. Snel, SEO-geoptimaliseerd, online afspraken. Gratis offerte.",
  alternates: {
    canonical: "/nl/kortrijk",
    languages: { "nl-BE": "/nl/kortrijk" },
  },
};

export default function Page() {
  const city = getCity("kortrijk");
  return city ? <CityPage city={city} /> : null;
}
