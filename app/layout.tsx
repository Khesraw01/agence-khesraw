import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import { FloatingCallButton } from "@/components/buttons";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Sites Web pour Artisans | Khesraw",
  description: site.description,
  keywords: [
    "agence web artisan Belgique",
    "création site web plombier",
    "site internet électricien",
    "site web couvreur",
    "site web artisan Bruxelles",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: site.url,
    siteName: site.brand,
    title: "Sites Web pour Artisans | Khesraw",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites Web pour Artisans | Khesraw",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfcfc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr-BE" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
        <FloatingCallButton />
        <JsonLd data={localBusinessSchema} />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        />
      </body>
    </html>
  );
}

