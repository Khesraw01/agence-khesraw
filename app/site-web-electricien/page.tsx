import type { Metadata } from "next";
import { trades } from "@/lib/content";
import { serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import TradePage from "@/components/TradePage";

const trade = trades[1];

export const metadata: Metadata = {
  title: trade.metaTitle,
  description: trade.metaDescription,
  keywords: trade.keywords,
  alternates: { canonical: `/${trade.slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema(`Site web pour ${trade.name}`, trade.metaDescription)}
      />
      <TradePage trade={trade} />
    </>
  );
}
