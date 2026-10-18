import { createPageMetadata } from "@/lib/metadata";
import { publishedCertificates } from "@/content/portfolio";
import { CertificateGroups } from "@/components/certificate-groups";
import { EmptyState, PageIntro } from "@/components/ui";
export const metadata = createPageMetadata(
  "Certifications & Awards",
  "Nash A. Mapula's HackerRank, OneRoadmap and CodeCred certificates, and hackathon recognition, with original images and credential links.",
);
export default function CertificationsPage() {
  return (
    <div>
      <PageIntro
        title="Certifications & Awards"
        description="Certificates and recognition, with original images and external verification links."
      />
      {publishedCertificates.length ? (
        <CertificateGroups />
      ) : (
        <EmptyState
          title="No certificates or awards published yet"
          description="Certificate and award cards will appear when their original images and viewing links are available."
        />
      )}
    </div>
  );
}
