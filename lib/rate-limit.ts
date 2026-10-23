type Bucket = { count: number; resetAt: number };

// Limiteur en mémoire (suffisant pour un trafic raisonnable).
// Pour une montée en charge, remplacer par Redis ou un stockage distribué.
const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= max) {
    return false;
  }

  bucket.count += 1;
  return true;
}
