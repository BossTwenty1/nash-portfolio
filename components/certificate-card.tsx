import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PublishedCertificate } from "@/content/portfolio";

export function CertificateCard({ item, headingLevel = 3, compact = false }: {
  item: PublishedCertificate;
  headingLevel?: 2 | 3 | 4;
  compact?: boolean;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  const action = item.kind === "award" ? "View Award" : "View Credential";
  const label = `${action}: ${item.title} (opens in a new tab)`;

  return (
    <article className="cert-item">
      {compact && (
        <div className="certificate-preview-heading">
          <Heading>{item.title}</Heading>
          <p>{item.issuer || item.event}</p>
        </div>
      )}
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
        {!compact && <Heading>{item.title}</Heading>}
        {!compact && item.issuer && <p>{item.issuer}</p>}
        {!compact && item.event && <p>{item.event}</p>}
        {!compact && item.team && <p>Team: {item.team}</p>}
        {!compact && item.year && <p>{item.year}</p>}
        {!compact && item.issuedOn && (
          <p><time dateTime={item.issuedOn}>
            {new Intl.DateTimeFormat("en-GB", {
              day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
            }).format(new Date(item.issuedOn))}
          </time></p>
        )}
        <a className="certificate-action" href={item.verify}
          target="_blank" rel="noopener noreferrer" aria-label={label}>
          {action} <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
