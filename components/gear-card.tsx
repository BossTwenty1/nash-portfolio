import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { GearItem } from "@/content/portfolio";

export function GearCard({ item }: { item: GearItem }) {
  return (
    <article className="gear-item">
      <div className="gear-thumb">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 288px, (min-width: 640px) 45vw, calc(100vw - 40px)"
          className="gear-image"
        />
      </div>
      <div className="gear-body">
        <span className="gear-category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a
          className="gear-reference"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={item.referenceNote}
          aria-label={`${item.referenceLabel ?? "Product reference"} for ${item.name} (opens in a new tab)`}
        >
          {item.referenceLabel ?? "Product reference"}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
