import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Cab Way - City and Outstation Cab Booking in Bihar";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#fbbf24",
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            CW
          </div>
          <span style={{ fontSize: 32, fontWeight: 700 }}>Cab Way Services</span>
        </div>
        <h1
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            margin: 0,
            maxWidth: 1000,
          }}
        >
          Book one-way & outstation cabs in Bihar.
        </h1>
        <p style={{ fontSize: 28, color: "#cbd5e1", marginTop: 24 }}>
          Mini, Sedan, SUV - verified drivers, fixed fares, 24x7 booking.
        </p>
      </div>
    ),
    { ...size },
  );
}
