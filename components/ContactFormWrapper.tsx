"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const offre = searchParams.get("offre") ?? "";
  return <ContactForm offre={offre} />;
}
