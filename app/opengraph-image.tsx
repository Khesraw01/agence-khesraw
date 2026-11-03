import { ImageResponse } from "next/og";

export const alt = "Khesraw — Devis automatiques pour artisans du bâtiment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          backgroundColor: "#fcfcfc",
          backgroundImage:
            "linear-gradient(150deg, rgba(182,203,253,0.4) 0%, rgba(252,252,252,1) 62%)",
          fontFamily: "Inter, 'Segoe UI', system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            marginBottom: 56,
          }}
        >
          <svg width="68" height="68" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" rx="16" fill="#145aff" />
            <path
              d="M22 20h14l8 8v16a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M26 36l4 4 8-8" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "#14141e",
              letterSpacing: "-0.02em",
            }}
          >
            Khesraw
          </div>
        </div>
        <div
          style={{
            fontSize: 70,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.027em",
            color: "#020520",
          }}
        >
          Vos devis se préparent
        </div>
        <div
          style={{
            fontSize: 70,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.027em",
            color: "#145aff",
          }}
        >
          tout seuls
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#374151",
            marginTop: 30,
            maxWidth: 820,
          }}
        >
          Pour les artisans du bâtiment. Appel manqué, relance, avis Google : automatisés.
        </div>
      </div>
    ),
    { ...size }
  );
}
