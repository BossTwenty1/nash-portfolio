import { createPageMetadata } from "@/lib/metadata";
import { experience, profile } from "@/content/portfolio";
import { PageIntro, SectionHeading, Tags } from "@/components/ui";
import { ExperienceHighlights } from "@/components/experience-highlights";
export const metadata = createPageMetadata(
  "Experience",
  "Nash A. Mapula's academic and collaborative project experience, LakbayAlbay hackathon prototype, and Information Technology education.",
);
export default function ExperiencePage() {
  return (
    <div>
      <PageIntro
        title="experience"
        description="Hands-on academic and collaborative development work. These are project contributions, not claims of formal employment."
      />
      <div className="experience-list detailed enter">
        {experience.map((item) => (
          <article className="experience-detail" key={item.title}>
            <span className="eyebrow">{item.period} · {item.kind ? "HACKATHON PROTOTYPE" : "PROJECT EXPERIENCE"}</span>
            <h2>{item.title}</h2>
            <p className="experience-org">{item.organization}</p>
            <ExperienceHighlights item={item} />
            {[item.description, ...(item.additionalParagraphs ?? [])].map((paragraph) => (
              <p className="experience-description" key={paragraph}>{paragraph}</p>
            ))}
            {item.skills.length > 0 && <Tags items={item.skills} />}
          </article>
        ))}
      </div>
      <section className="home-section enter">
        <SectionHeading title="Education" />
        <p className="section-description">{profile.education}</p>
      </section>
    </div>
  );
}
