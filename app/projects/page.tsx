import { createPageMetadata } from "@/lib/metadata";
import { projects } from "@/content/portfolio";
import { PageIntro, ProjectCard } from "@/components/ui";
export const metadata = createPageMetadata(
  "Projects",
  "Academic and collaborative projects by Nash A. Mapula, including GraveNav and S.A.F.E, with current development statuses and contribution disclosures.",
);
export default function ProjectsPage() {
  return (
    <div>
      <PageIntro
        title="projects"
        description="A selection of academic and collaborative applications I've worked on. Projects are labeled with their current development status."
      />
      <div className="project-list enter">
        <h2 className="sr-only">All projects</h2>
        {projects.map((p) => (
          <div key={p.slug}>
            <ProjectCard project={p} />
            <div className="project-contribution">
              <span className="eyebrow">MY CONTRIBUTION</span>
              <p>{p.contribution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
