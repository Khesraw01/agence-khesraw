"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/nl")
      ? "nl-BE"
      : "fr-BE";
  }, [pathname]);

  return null;
}
