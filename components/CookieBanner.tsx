"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { setConsent } from "@/lib/consent";

const CONSENT_KEY = "khesraw_consent";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("khesraw:consent-updated", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("khesraw:consent-updated", listener);
  };
}

function hasStoredConsent(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes(`${CONSENT_KEY}=`);
}

export default function CookieBanner() {
  const visible = useSyncExternalStore(
    subscribe,
    () => !hasStoredConsent(),
    () => false
  );

  if (!visible) {
    return null;
  }

  const acceptAll = () => setConsent(true);
  const refuseAll = () => setConsent(false);

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 rounded-2xl border border-stone-divider bg-white p-5 shadow-card md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-slate-caption">
          Nous utilisons des cookies strictement nécessaires au fonctionnement
          du site et, avec votre accord, des cookies de mesure d&apos;audience.
          Consultez notre{" "}
          <Link
            href="/mentions-legales"
            className="font-medium text-royal-signal underline underline-offset-2"
          >
            politique de confidentialité
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={refuseAll}
            className="rounded-full border border-stone-divider px-5 py-2.5 text-sm font-medium text-slate-caption transition-colors hover:bg-fog-surface"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-royal-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cobalt-glow"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
