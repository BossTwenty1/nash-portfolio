"use client";

import { useState, useSyncExternalStore } from "react";
import type { PublishedCertificate } from "@/content/portfolio";
import CardSwap, { Card } from "@/components/react-bits/CardSwap";
import { CertificateCard } from "@/components/certificate-card";

function subscribeMotion(onChange: () => void) {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  motion.addEventListener("change", onChange);
  return () => motion.removeEventListener("change", onChange);
}

function subscribeViewport(onChange: () => void) {
  const viewport = window.matchMedia("(max-width: 639px)");
  viewport.addEventListener("change", onChange);
  return () => viewport.removeEventListener("change", onChange);
}

export function CertificatePreview({ items }: { items: PublishedCertificate[] }) {
  const animated = useSyncExternalStore(subscribeMotion,
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => false);

  return (
    <div className="certificate-preview" data-animated={animated || undefined}>
      {animated ? <CertificateSwap items={items} /> : (
        <div className="cert-list certificate-preview-static">
          {items.map((item) => <CertificateCard key={item.id} item={item} />)}
        </div>
      )}
    </div>
  );
}

function CertificateSwap({ items }: { items: PublishedCertificate[] }) {
  const narrow = useSyncExternalStore(subscribeViewport,
    () => window.matchMedia("(max-width: 639px)").matches, () => false);
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);

  return (
    <div
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}>
      <div className="certificate-swap">
        <CardSwap width={narrow ? 280 : 420} height={narrow ? 360 : 300}
          visibleCards={narrow ? 1 : 4}
          cardDistance={120} verticalDistance={12} depth={0} delay={4250}
          speed={1.4} bounce={0.55} hoverSpread={0.19}
          autoplay={!focused} pauseOnHover={false} draggable={false}
          parallax={0} skewAmount={0} cardRadius={1}
          intro={false} onChange={setActive}>
          {items.map((item, index) => (
            <Card key={item.id} inert={index !== active}>
              <CertificateCard item={item} compact />
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  );
}
