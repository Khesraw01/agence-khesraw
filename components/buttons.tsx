"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/gtag";
import { getLocale } from "@/lib/i18n";

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.55.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

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

type ButtonSize = "sm" | "md" | "lg";

const sizeClass: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm font-semibold",
  md: "px-7 py-3.5 text-[15px] font-semibold",
  lg: "min-h-14 px-8 py-3.5 text-[17px] font-semibold",
};

export function PhoneButton({
  label = "Appeler maintenant",
  className = "",
  size = "md",
}: {
  label?: string;
  className?: string;
  size?: ButtonSize;
}) {
  return (
    <a
      href={site.phoneHref}
      onClick={() => trackEvent("clic_telephone")}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-royal-signal text-white transition-all duration-200 ease-out hover:bg-[#1048e0] hover:shadow-sm ${sizeClass[size]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

export function QuoteButton({
  label = "Devis gratuit",
  href = "/contact",
  className = "",
  size = "md",
}: {
  label?: string;
  href?: string;
  className?: string;
  size?: ButtonSize;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent("clic_devis")}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-royal-signal bg-snow-canvas text-royal-deep transition-all duration-200 ease-out hover:bg-lavender-wash ${sizeClass[size]} ${className}`}
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

export function WhatsAppButton({
  label = "WhatsApp",
  className = "",
  size = "md",
}: {
  label?: string;
  className?: string;
  size?: ButtonSize;
}) {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("clic_whatsapp")}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white transition-all duration-200 ease-out hover:brightness-110 ${sizeClass[size]} ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function StickyCallBar() {
  const pathname = usePathname();
  const nl = getLocale(pathname) === "nl";
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-divider bg-white/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          onClick={() => trackEvent("clic_telephone")}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-royal-signal text-[16px] font-semibold text-white"
        >
          <PhoneIcon />
          {nl ? "Bellen" : "Appeler"}
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("clic_whatsapp")}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp text-[16px] font-semibold text-white"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
