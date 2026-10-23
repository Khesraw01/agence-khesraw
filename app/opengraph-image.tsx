import { ImageResponse } from "next/og";

export const alt = "Khesraw — Sites web pour artisans";
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
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              backgroundColor: "#145aff",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 600,
            }}
          >
            k
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "#14141e",
              letterSpacing: "-0.02em",
            }}
          >
            khesraw
          </div>
        </div>
        <div
          style={{
            fontSize: 74,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.027em",
            color: "#020520",
          }}
        >
          Des sites web qui
        </div>
        <div
          style={{
            fontSize: 74,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.027em",
            color: "#145aff",
          }}
        >
          remplissent votre agenda
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#374151",
            marginTop: 30,
            maxWidth: 760,
          }}
        >
          Rapides et SEO pour plombiers, électriciens et couvreurs.
        </div>
      </div>
    ),
    { ...size }
  );
}
