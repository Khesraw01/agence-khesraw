import { NextResponse, type NextRequest } from "next/server";

const SECURITY_HEADERS: Record<string, string> = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
};

export function proxy(request: NextRequest) {
  // Forcer HTTPS en production. Les plateformes type Vercel le font déjà ;
  // ceci sert de filet de sécurité pour tout autre hébergement.
  if (process.env.NODE_ENV === "production") {
    const proto = request.headers.get("x-forwarded-proto");
    const host = request.headers.get("host");
    if (proto && proto !== "https" && host) {
      const url = request.nextUrl.clone();
      url.protocol = "https:";
      return NextResponse.redirect(url, 308);
    }
  }

  const response = NextResponse.next();
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  // Exclure les fichiers statiques, les images optimisées et l'API interne.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
