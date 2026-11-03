import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import { professionalServiceSchema } from "@/lib/schema";
import { allPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import { StickyCallBar } from "@/components/buttons";
import JsonLd from "@/components/JsonLd";
import HtmlLang from "@/components/HtmlLang";

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
  title: "Devis automatiques pour artisans du bâtiment | Khesraw",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: site.url,
    siteName: site.brand,
    title: "Devis automatiques pour artisans du bâtiment | Khesraw",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Devis automatiques pour artisans du bâtiment | Khesraw",
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
      <body className="flex min-h-screen flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar blogLinks={allPosts().map((post) => ({ href: `/blog/${post.slug}`, title: post.title }))} />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
        <StickyCallBar />
        <HtmlLang />
        <JsonLd data={professionalServiceSchema} />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        />
      </body>
    </html>
  );
}

