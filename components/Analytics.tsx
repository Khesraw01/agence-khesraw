"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";
import { getConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Charge Google Analytics 4 UNIQUEMENT après consentement explicite.
 * Si NEXT_PUBLIC_GA_ID n'est pas défini, le composant ne fait rien.
 */
export default function Analytics() {
  useEffect(() => {
    const gaId = site.gaId;
    if (!gaId) {
      return;
    }

    const load = (allowed: boolean) => {
      const existing = document.getElementById("ga-script");

      if (allowed) {
        if (existing) {
          return; // déjà chargé
        }
        window.dataLayer = window.dataLayer || [];
        const gtag = (...args: unknown[]) => {
          window.dataLayer?.push(args);
        };
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", gaId, { anonymize_ip: true });

        const script = document.createElement("script");
        script.id = "ga-script";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);
      } else if (existing) {
        existing.remove();
        window.dataLayer = [];
        window.gtag = undefined;
      }
    };

    load(getConsent().analytics);

    const handler = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      load(detail?.analytics === true);
    };

    window.addEventListener("khesraw:consent-updated", handler);
    return () => window.removeEventListener("khesraw:consent-updated", handler);
  }, []);

  return null;
}
