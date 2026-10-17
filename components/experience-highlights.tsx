import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/content/portfolio";

export function ExperienceHighlights({ item }: { item: Experience }) {
  if (!item.team && !item.event && !item.recognition && !item.galleryUrl) return null;

  return (
    <div className="experience-highlights">
      {item.team && <p>Team: {item.team}</p>}
      {item.event && <p>{item.event}</p>}
      {item.recognition && <span className="experience-recognition">{item.recognition}</span>}
      {item.galleryUrl && (
        <a className="small-arrow-link experience-gallery" href={item.galleryUrl}
          target="_blank" rel="noopener noreferrer"
          aria-label={`View Event Gallery for ${item.organization} (opens in a new tab)`}>
          View Event Gallery <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
