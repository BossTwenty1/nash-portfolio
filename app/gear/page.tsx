import { createPageMetadata } from "@/lib/metadata";
import { gear, gearCategories } from "@/content/portfolio";
import { GearCard } from "@/components/gear-card";
import { PageIntro } from "@/components/ui";

export const metadata = createPageMetadata(
  "Gear",
  "Nash A. Mapula's development workspace, computing equipment, peripherals, and everyday devices, with informational product references.",
);

export default function GearPage() {
  return (
    <div className="gear-page">
      <PageIntro
        title="GEAR"
        description="A collection of the hardware, peripherals, and everyday essentials that make up my development workspace."
      />
      {gearCategories.map((category, index) => (
        <section className="gear-section" key={category} aria-labelledby={`gear-category-${index}`}>
          <h2 id={`gear-category-${index}`}>{category}</h2>
          <div className="gear-grid">
            {gear.filter((item) => item.category === category).map((item) => (
              <GearCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
