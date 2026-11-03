import type { Metadata } from "next";
import { home } from "@/lib/home";
import { faqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(home.faq.items)} />
      <HomePage c={home} />
    </>
  );
}
