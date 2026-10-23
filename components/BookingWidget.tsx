"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/gtag";

export default function BookingWidget() {
  const [open, setOpen] = useState(false);

  if (!site.calUrl) {
    return (
      <a
        href={site.phoneHref}
        onClick={() => trackEvent("clic_telephone")}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-royal-signal px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-200 ease-out hover:bg-[#1048e0]"
      >
        Réserver par téléphone
      </a>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          trackEvent("rendezvous_reserve");
        }}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-royal-signal px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-200 ease-out hover:bg-[#1048e0]"
      >
        Réserver en ligne
      </button>
    );
  }

  return (
    <iframe
      src={site.calUrl}
      title="Prise de rendez-vous en ligne"
      loading="lazy"
      className="h-[600px] w-full rounded-2xl border border-stone-divider bg-white"
    />
  );
}
