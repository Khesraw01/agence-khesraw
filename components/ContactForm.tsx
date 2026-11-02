"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/gtag";
import { TRADES } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";
type Errors = { name?: string; phone?: string; trade?: string; consent?: string };

const MIN_ELAPSED_MS = 3000; // piège temporel anti-spam

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export default function ContactForm({
  offre = "",
  submitLabel = "Envoyer ma demande",
}: {
  offre?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  function validate(values: { name: string; phone: string; trade: string; consent: boolean }): Errors {
    const errs: Errors = {};
    if (values.name.trim().length < 2) errs.name = "Indiquez votre nom.";
    if (!isValidPhone(values.phone)) errs.phone = "Indiquez un numéro valide (GSM ou fixe).";
    if (!values.trade) errs.trade = "Choisissez votre métier.";
    if (!values.consent) errs.consent = "Cochez la case pour que je puisse vous recontacter.";
    return errs;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const values = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      trade: String(data.get("trade") ?? ""),
      message: String(data.get("message") ?? ""),
      offre: String(data.get("offre") ?? ""),
      website: String(data.get("website") ?? ""),
      consent: data.get("consent") === "on",
    };

    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    const startedAt = startedAtRef.current || Date.now();
    if (Date.now() - startedAt < MIN_ELAPSED_MS) {
      setStatus("error");
      setFeedback("Envoi trop rapide : patientez 2 secondes puis renvoyez.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(json.error ?? `Une erreur est survenue. Appelez-moi au ${site.phone}.`);
        return;
      }

      setStatus("success");
      setFeedback(json.message ?? "Merci, votre demande a bien été envoyée.");
      trackEvent("envoi_formulaire", { trade: values.trade });
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(`Impossible d'envoyer la demande. Appelez-moi au ${site.phone}.`);
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-stone-divider bg-white px-4 py-3.5 text-[16px] text-graphite-body placeholder:text-ash-helper transition-shadow focus:border-azure-focus focus:outline-none focus:ring-2 focus:ring-azure-focus/30";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Champ piège anti-robots : invisible pour les humains */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {offre ? <input type="hidden" name="offre" value={offre} /> : null}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-[15px] font-semibold text-graphite-body">
          Votre nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-[15px] font-medium text-alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="trade" className="mb-1.5 block text-[15px] font-semibold text-graphite-body">
          Votre métier
        </label>
        <select
          id="trade"
          name="trade"
          defaultValue=""
          className={fieldClass}
          aria-invalid={Boolean(errors.trade)}
          aria-describedby={errors.trade ? "trade-error" : undefined}
        >
          <option value="" disabled>
            Choisir…
          </option>
          {TRADES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.trade && (
          <p id="trade-error" className="mt-1.5 text-[15px] font-medium text-alert">
            {errors.trade}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-[15px] font-semibold text-graphite-body">
          Votre téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="04xx xx xx xx"
          className={fieldClass}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-[15px] font-medium text-alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[15px] font-semibold text-graphite-body">
          Votre message <span className="font-normal text-slate-caption">(facultatif)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Par exemple : je fais mes devis le soir, je rate des appels…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 rounded border-stone-divider accent-royal-signal"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <label htmlFor="consent" className="text-[15px] leading-snug text-slate-caption">
            J&apos;accepte que {site.name} utilise ces informations uniquement pour me recontacter au
            sujet de ma demande.{" "}
            <Link href="/confidentialite" className="font-medium text-royal-signal underline underline-offset-2">
              Politique de confidentialité
            </Link>
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-[15px] font-medium text-alert">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "success" && (
        <p role="status" className="rounded-xl bg-mint-win/10 px-4 py-3 text-[15px] font-medium text-[#0a6b19]">
          {feedback}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-alert/10 px-4 py-3 text-[15px] font-medium text-alert">
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal-signal px-8 py-4 text-[16px] font-semibold text-white transition-all duration-200 ease-out hover:bg-[#1048e0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours…" : submitLabel}
      </button>
    </form>
  );
}
