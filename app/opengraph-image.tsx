import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Cab Way - City and Outstation Cab Booking in Bihar";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #fef3c7 0%, #fde68a 35%, #f59e0b 100%)",
          color: "#111827",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#111827",
              color: "#fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            CW
          </div>
          <span style={{ fontSize: 38, fontWeight: 700, letterSpacing: -1 }}>
            Cab Way Services
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#78350f",
            }}
          >
            City • Outstation • Airport Transfer
          </span>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              margin: 0,
              maxWidth: 1000,
            }}
          >
            Affordable cab booking across Bihar.
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "#374151",
              margin: 0,
              maxWidth: 980,
            }}
          >
            One-way, round-trip & airport rides. Mini, Sedan, SUV - verified
            drivers, transparent fares, 24x7 support.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#1f2937",
          }}
        >
          <span style={{ fontWeight: 600 }}>www.cabway.in</span>
          <span>Call: +91 94308 56366</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
