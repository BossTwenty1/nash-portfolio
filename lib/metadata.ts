import type { Metadata } from "next";
import { profile } from "@/content/portfolio";

export function createPageMetadata(title: string, description: string): Metadata {
  const socialTitle = `${title} — ${profile.name}`;

  return {
    title,
    description,
    openGraph: {
      title: socialTitle,
      description,
      siteName: `${profile.name} — ${profile.role}`,
      type: "website",
      locale: "en_PH",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
