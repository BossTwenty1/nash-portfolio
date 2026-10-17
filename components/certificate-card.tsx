import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PublishedCertificate } from "@/content/portfolio";

export function CertificateCard({ item, headingLevel = 3 }: {
  item: PublishedCertificate;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const action = item.kind === "award" ? "View Award" : "View Certificate";
  const label = `${action}: ${item.title} (opens in a new tab)`;

  return (
    <article className="cert-item">
      <a className="certificate-image-link" href={item.verify}
        target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Image
          src={item.image.src}
          alt={item.image.alt}
          unoptimized={item.image.src.startsWith("https://drive.google.com/")}
          fill
          sizes="(min-width: 1200px) 432px, (min-width: 640px) 45vw, calc(100vw - 40px)"
          className="certificate-image"
        />
      </a>
      <div className="certificate-body">
        <Heading>{item.title}</Heading>
        {item.issuer && <p>{item.issuer}</p>}
        {item.event && <p>{item.event}</p>}
        {item.team && <p>Team: {item.team}</p>}
        {item.year && <p>{item.year}</p>}
        <a className="certificate-action" href={item.verify}
          target="_blank" rel="noopener noreferrer" aria-label={label}>
          {action} <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
