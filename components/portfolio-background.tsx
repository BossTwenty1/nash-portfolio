"use client";

import ShapeGrid from "@/components/react-bits/ShapeGrid";

export function PortfolioBackground() {
  return (
    <div className="portfolio-background" aria-hidden="true">
      <ShapeGrid
        shape="square"
        direction="diagonal"
        lineColor="#2a2734"
        hoverColor="#ffffff"
        hoverFillColor="#ffffff"
        fillOpacity={0.15}
        cellSize={40}
        speed={0.5}
        tiltX={0}
        tiltY={0}
        rainbow={false}
      />
    </div>
  );
}
