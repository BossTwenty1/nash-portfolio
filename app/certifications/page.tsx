import { createPageMetadata } from "@/lib/metadata";
import { publishedCertificates } from "@/content/portfolio";
import { CertificateCard } from "@/components/certificate-card";
import { EmptyState, PageIntro } from "@/components/ui";
export const metadata = createPageMetadata(
  "Certifications & Awards",
  "Nash A. Mapula's HTML Fundamentals certificate and Mind Goblins' third-place Handiong Track recognition, with supplied images and viewing links.",
);
export default function CertificationsPage() {
  return (
    <div>
      <PageIntro
        title="Certifications & Awards"
        description="Certificates and recognition, with original images and external verification links."
      />
      {publishedCertificates.length ? (
        <div className="cert-list enter">
          {publishedCertificates.map((item) => (
            <CertificateCard key={item.id} item={item} headingLevel={2} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No certificates or awards published yet"
          description="Certificate and award cards will appear when their original images and viewing links are available."
        />
      )}
    </div>
  );
}
