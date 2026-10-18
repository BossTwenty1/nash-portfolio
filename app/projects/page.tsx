import { createPageMetadata } from "@/lib/metadata";
import { projects } from "@/content/portfolio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
export const metadata = createPageMetadata(
  "Projects",
  "Academic and collaborative projects by Nash A. Mapula, including GraveNav, S.A.F.E, and TILEMATCH, with current statuses and contribution disclosures.",
);
export default function ProjectsPage() {
  return (
    <div className="projects-archive">
      <div className="projects-topline">
        <Link href="/#projects" className="back-link"><ArrowLeft size={14} aria-hidden="true" /> Back to portfolio</Link>
        <span>projects/{String(projects.length).padStart(2, "0")} <i /> Project archive</span>
      </div>
      <header className="projects-archive-intro">
        <span className="project-log">[projects.log]</span>
        <p className="project-kicker">Selected work / archive</p>
        <h1>Projects</h1>
        <p>Academic and collaborative work across mapping, commerce, and connected systems, with current statuses and contributions.</p>
      </header>
      <div className="project-archive-strip">
        <span><i /> Project archive</span>
        <span><strong>{String(projects.length).padStart(2, "0")}</strong> projects</span>
      </div>
      <section className="project-archive-list" aria-labelledby="all-projects-title">
        <div className="project-section-heading">
          <span className="project-section-number">01</span>
          <div><span>[work]</span><h2 id="all-projects-title">All projects</h2></div>
          <span className="project-section-count">{String(projects.length).padStart(2, "0")} projects</span>
        </div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} number={index + 1} />
        ))}
      </section>
    </div>
  );
}
