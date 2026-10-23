"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/gtag";

type Status = "idle" | "loading" | "success" | "error";
type Errors = { name?: string; phone?: string; trade?: string };

const MIN_ELAPSED_MS = 3000; // piège temporel anti-spam
const TRADES = ["Plombier", "Électricien", "Couvreur", "Autre"];

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export default function ContactForm({ offre = "" }: { offre?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  function validate(values: {
    name: string;
    phone: string;
    trade: string;
  }): Errors {
    const errs: Errors = {};
    if (values.name.trim().length < 2) errs.name = "Veuillez indiquer votre nom.";
    if (!isValidPhone(values.phone)) errs.phone = "Veuillez saisir un numéro valide.";
    if (!values.trade) errs.trade = "Veuillez choisir votre métier.";
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
      ville: String(data.get("ville") ?? ""),
      message: String(data.get("message") ?? ""),
      offre: String(data.get("offre") ?? ""),
    };

    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      return;
    }

    const startedAt = startedAtRef.current || Date.now();
    if (Date.now() - startedAt < MIN_ELAPSED_MS) {
      setStatus("error");
      setFeedback("Envoi trop rapide, veuillez réessayer.");
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
        setFeedback(json.error ?? "Une erreur est survenue. Veuillez réessayer.");
        return;
      }

      setStatus("success");
      setFeedback(json.message ?? "Merci, votre demande a bien été envoyée.");
      trackEvent("envoi_formulaire", { trade: values.trade });
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Impossible de contacter le serveur. Veuillez réessayer.");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-stone-divider bg-fog-surface px-4 py-3 text-[15px] text-graphite-body placeholder:text-ash-helper transition-shadow focus:border-azure-focus focus:bg-white focus:outline-none focus:ring-2 focus:ring-azure-focus/30";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot anti-spam (invisible) */}
      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {offre ? <input type="hidden" name="offre" value={offre} /> : null}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-graphite-body">
          Nom <span className="text-coral-lost">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Votre nom"
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-coral-lost">{errors.name}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-graphite-body">
            Téléphone <span className="text-coral-lost">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="0465 70 42 15"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-coral-lost">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="trade" className="mb-1.5 block text-sm font-medium text-graphite-body">
            Métier <span className="text-coral-lost">*</span>
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
            <p id="trade-error" className="mt-1.5 text-sm text-coral-lost">{errors.trade}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="ville" className="mb-1.5 block text-sm font-medium text-graphite-body">
          Ville <span className="text-ash-helper">(facultatif)</span>
        </label>
        <input
          id="ville"
          name="ville"
          type="text"
          autoComplete="address-level2"
          placeholder="Mouscron, Tournai, Lille…"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-graphite-body">
          Votre projet <span className="text-ash-helper">(facultatif)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez votre besoin en quelques mots…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "success" && (
        <p role="status" className="rounded-xl bg-mint-win/10 px-4 py-3 text-sm font-medium text-[#0a7a1c]">
          {feedback}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-coral-lost/10 px-4 py-3 text-sm font-medium text-coral-lost">
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal-signal px-8 py-3.5 text-[15px] font-medium text-white transition-all duration-200 ease-out hover:bg-[#1048e0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
