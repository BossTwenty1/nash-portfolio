import type { PublishedCertificate } from "@/content/portfolio";
import { CertificateCard } from "@/components/certificate-card";

export function CertificatePreview({ items }: { items: PublishedCertificate[] }) {
  return (
    <div className="cert-list certificate-preview">
      {items.map((item) => <CertificateCard key={item.id} item={item} />)}
    </div>
  );
}
