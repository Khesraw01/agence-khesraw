import { NextResponse, type NextRequest } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const ALLOWED_TRADES = ["Plombier", "Électricien", "Couvreur", "Autre"];

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function sanitize(value: unknown): string {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  // Anti-spam : limitation du nombre de requêtes par adresse IP.
  if (!rateLimit(`contact:${ip}`, MAX_REQUESTS, WINDOW_MS)) {
    return NextResponse.json(
      { error: "Trop de demandes. Veuillez réessayer plus tard." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot : si le champ caché est rempli, c'est un robot → on fait semblant de réussir.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json(
      { message: "Merci, votre demande a bien été envoyée." },
      { status: 200 }
    );
  }

  const name = sanitize(body.name);
  const phone = sanitize(body.phone);
  const trade = sanitize(body.trade);
  const ville = sanitize(body.ville);
  const message = sanitize(body.message);
  const offre = sanitize(body.offre);

  // Validation côté serveur (les données ne font jamais confiance au client).
  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Nom invalide.";
  if (!isValidPhone(phone)) errors.phone = "Numéro de téléphone invalide.";
  if (!ALLOWED_TRADES.includes(trade)) errors.trade = "Métier invalide.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Certains champs sont invalides.", fields: errors },
      { status: 422 }
    );
  }

  console.log("[contact] Nouvelle demande :", { name, phone, trade, ville, message, offre });

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, trade, ville, message, offre, ip }),
      });
    } catch {
      // Échec silencieux : on ne bloque pas la réponse utilisateur.
    }
  }

  return NextResponse.json(
    { message: "Merci, votre demande a bien été envoyée." },
    { status: 200 }
  );
}

