import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Shivam Mathur — LATTICE Developer & Aerospace Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0e1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            border: "1px solid rgba(0,212,255,0.3)",
            background: "rgba(0,212,255,0.06)",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#00d4ff",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#00d4ff",
              fontSize: 14,
              letterSpacing: "0.1em",
              display: "flex",
            }}
          >
            LATTICE Developer · Anduril Industries
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#e6edf3" }}>Shivam&nbsp;</span>
          <span style={{ color: "#00d4ff" }}>Mathur</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#8b949e",
            lineHeight: 1.5,
            maxWidth: 800,
            marginBottom: 48,
          }}
        >
          Aerospace Engineer · Defense Researcher · Hypersonic Systems · Robotics
        </div>

        {/* Bottom divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 48,
              height: 3,
              background: "#00d4ff",
              borderRadius: 2,
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#8b949e",
              fontSize: 14,
              letterSpacing: "0.08em",
              display: "flex",
            }}
          >
            shivammathur.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
