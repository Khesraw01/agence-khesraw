import type { DemoBubble } from "@/components/home/PhoneDemo";
import type { DiagnosticItem, DiagnosticResult } from "@/components/home/Diagnostic";
import type { CalculatorCopy } from "@/components/home/TimeCalculator";
import type { DayMoment } from "@/components/home/DayComparison";
import type { Offer } from "@/components/home/OfferTabs";

type SectionCopy = { label: string; title: string; intro: string; next: string };
type Point = { title: string; text: string };

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: string;
    whatsappCta: string;
    secondaryCta: string;
    secondaryHref: string;
    scrollCue: string;
    reassurance: string[];
    demoTitle: string;
    demo: DemoBubble[];
  };
  problem: SectionCopy & { legend: string; items: DiagnosticItem[]; results: DiagnosticResult[] };
  cost: SectionCopy & { calculator: CalculatorCopy };
  solution: SectionCopy & { steps: Point[]; extrasTitle: string; extras: Point[] };
  day: SectionCopy & { withoutTitle: string; withTitle: string; without: DayMoment[]; withSystem: DayMoment[] };
  offers: SectionCopy & { items: Offer[]; defaultSlug: string };
  trades: SectionCopy & { items: { name: string; href: string; text: string; cta: string }[] };
  why: SectionCopy & { points: Point[]; processTitle: string; process: Point[] };
  faq: SectionCopy & { items: { q: string; a: string }[] };
  contact: Omit<SectionCopy, "next"> & { formTitle: string; submit: string; reassurance: string };
  blog: { title: string; intro: string };
};
