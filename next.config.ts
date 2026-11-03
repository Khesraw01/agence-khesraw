import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    // Version NL retirée pour l'instant + Lille (France) hors zone Belgique.
    // Redirections permanentes pour ne pas perdre le référencement des anciennes URL.
    return [
      { source: "/nl", destination: "/", permanent: true },
      { source: "/nl/tarifs", destination: "/tarifs", permanent: true },
      { source: "/nl/contact", destination: "/contact", permanent: true },
      { source: "/nl/kortrijk", destination: "/", permanent: true },
      { source: "/lille", destination: "/", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
