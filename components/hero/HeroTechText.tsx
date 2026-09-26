"use client";

import dynamic from "next/dynamic";

// TechText is a canvas-heavy component — lazy load to keep first paint fast
const TechText = dynamic(
  () => import("@/components/react-bits/TechText"),
  { ssr: false }
);

export function HeroTechText() {
  return (
    <TechText
      text="SYNEREOS"
      fontSize={150}
      fontWeight={600}
      letterSpacing={-0.02}
      color="#F5F7FA"
      accentColor="#38BDF8"
      reveal="letter"
      reach={180}
      softness={0.7}
      dashLength={4}
      dashGap={2}
      strokeWidth={1.2}
      lineStyle="dashed"
      specks={10}
      selection={true}
      labels={false}
      draggable={true}
      sweep={true}
      speed={0.8}
      className="h-full w-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
