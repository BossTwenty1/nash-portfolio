import { createPageMetadata } from "@/lib/metadata";
import { Code2 } from "lucide-react";
import { stack } from "@/content/portfolio";
import { PageIntro } from "@/components/ui";
export const metadata = createPageMetadata(
  "Tech Stack",
  "Languages, frontend technologies, data tools, and development workflows used by Nash A. Mapula in coursework and project development.",
);
export default function StackPage() {
  return (
    <div>
      <PageIntro
        title="stack"
        description="Languages, frameworks, and tools I've used in coursework, personal practice, and project development. Listed technologies do not imply expert-level proficiency."
      />
      <div className="stack-groups enter">
        {stack.map((group) => (
          <section className="stack-group" key={group.category}>
            <h2>{group.category}</h2>
            <div className="stack-grid">
              {group.items.map((item) => (
                <div className="stack-cell" key={item}>
                  <Code2 className="stack-mark" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
