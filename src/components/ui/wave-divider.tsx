export function WaveDividerTop({ color = "#F8FAFE", flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} style={{ marginTop: "-1px" }}>
      <svg
        className="w-full h-12 md:h-16"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill={color}
      >
        <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" />
      </svg>
    </div>
  );
}

export function WaveDividerBottom({ color = "#F8FAFE", flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} style={{ marginBottom: "-1px" }}>
      <svg
        className="w-full h-12 md:h-16"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill={color}
      >
        <path d="M0,0 L1440,0 L1440,32 C1200,0 960,64 720,32 C480,0 240,64 0,32 Z" />
      </svg>
    </div>
  );
}

export function CurveDivider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0]" style={{ marginTop: "-1px", marginBottom: "-1px" }}>
      <svg
        className="w-full h-16 md:h-24"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L1440,0 L1440,48 C1200,96 960,0 720,48 C480,96 240,0 0,48 Z" fill={bottomColor} />
      </svg>
    </div>
  );
}
