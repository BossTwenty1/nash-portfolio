import { certificateGroups } from "@/content/portfolio";
import { CertificateCard } from "@/components/certificate-card";

export function CertificateGroups({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className="certificate-groups">
      {certificateGroups.map((group) => (
        <section className="certificate-group" key={group.title}
          aria-label={group.title}>
          <Heading className="certificate-group-title">{group.title}</Heading>
          <div className="cert-list">
            {group.items.map((item) => (
              <CertificateCard key={item.id} item={item}
                headingLevel={headingLevel === 2 ? 3 : 4} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
