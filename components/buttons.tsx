"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/gtag";

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function PhoneButton({
  label = "Appeler maintenant",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={site.phoneHref}
      onClick={() => trackEvent("clic_telephone")}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-royal-signal px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-200 ease-out hover:bg-[#1048e0] hover:shadow-sm ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

export function QuoteButton({
  label = "Devis gratuit",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href="/contact"
      onClick={() => trackEvent("clic_devis")}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-royal-signal bg-snow-canvas px-7 py-3.5 text-[15px] font-medium text-royal-signal transition-all duration-200 ease-out hover:bg-lavender-wash ${className}`}
    >
      {label}
    </Link>
  );
}

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.phoneHref}
      onClick={() => trackEvent("clic_telephone")}
      className={className}
    >
      {site.phone}
    </a>
  );
}

export function OfferCta({
  slug,
  label,
  featured = false,
  className = "",
}: {
  slug: string;
  label: string;
  featured?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-200 ease-out";
  const style = featured
    ? "bg-royal-signal text-white hover:bg-[#1048e0] hover:shadow-sm"
    : "border border-royal-signal bg-snow-canvas text-royal-signal hover:bg-lavender-wash";
  return (
    <Link
      href={`/contact?offre=${slug}`}
      onClick={() => trackEvent("clic_offre", { offre: slug })}
      className={`${base} ${style} ${className}`}
    >
      {label}
    </Link>
  );
}

export function FloatingCallButton() {
  return (
    <a
      href={site.phoneHref}
      onClick={() => trackEvent("clic_telephone")}
      aria-label="Appeler Khesraw Sarwari"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-royal-signal text-white shadow-sm transition-transform duration-200 ease-out hover:scale-105 md:hidden"
    >
      <PhoneIcon />
    </a>
  );
}
