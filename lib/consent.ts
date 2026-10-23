export type Consent = {
  necessary: true;
  analytics: boolean;
};

const COOKIE_NAME = "khesraw_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 an

export function getConsent(): Consent {
  if (typeof document === "undefined") {
    return { necessary: true, analytics: false };
  }

  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!raw) {
    return { necessary: true, analytics: false };
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    return { necessary: true, analytics: parsed.analytics === true };
  } catch {
    return { necessary: true, analytics: false };
  }
}

export function setConsent(analytics: boolean): void {
  const value = JSON.stringify({ necessary: true, analytics });
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    value
  )}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure`;
  window.dispatchEvent(
    new CustomEvent("khesraw:consent-updated", { detail: { analytics } })
  );
}
