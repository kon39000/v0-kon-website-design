import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
          color: "#111827",
          padding: "64px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 300px at 0% 0%, rgba(59,130,246,0.10), transparent), radial-gradient(600px 300px at 100% 100%, rgba(16,185,129,0.10), transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 36,
            maxWidth: 1024,
            width: "100%",
          }}
        >
          <div
            style={{
              width: 128,
              height: 128,
              borderRadius: 24,
              background: "linear-gradient(135deg, #111827, #1f2937)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                fontSize: 84,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: -2,
              }}
            >
              K
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: -1.5,
              }}
            >
              KONTOMO
            </div>
            <div style={{ marginTop: 10, fontSize: 36, fontWeight: 600, color: "#374151" }}>
              AIで「人の力」を支える
            </div>
            <div style={{ marginTop: 16, fontSize: 28, color: "#6b7280", lineHeight: 1.3 }}>
              静かな熱量で、AIと人の共創を支援します。
            </div>
          </div>
        </div>
      </div>
    ),
    size
  )
}

