import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, LockKeyhole, Video } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";
import { Tags } from "@/components/ui";

export function ProjectActions({ project, caseStudy = true }: {
  project: PortfolioProject;
  caseStudy?: boolean;
}) {
  return (
    <div className="project-actions">
      {project.liveDemo ? (
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
          className="project-action" aria-label={`Live Demo: ${project.title} (opens in a new tab)`}>
          <ArrowUpRight size={14} aria-hidden="true" /> Live Demo
        </a>
      ) : (
        <button type="button" className="project-action" disabled>
          <ArrowUpRight size={14} aria-hidden="true" /> Live Demo – Unavailable
        </button>
      )}
      <button type="button" className="project-action" disabled>
        <LockKeyhole size={14} aria-hidden="true" /> GitHub – Private
      </button>
      <button type="button" className="project-action" disabled>
        <Video size={14} aria-hidden="true" /> Video Unavailable
      </button>
      {caseStudy && (
        <Link href={`/projects/${project.slug}`} className="project-action project-case-action"
          aria-label={`View Case Study: ${project.title}`}>
          <FileText size={14} aria-hidden="true" /> View Case Study
        </Link>
      )}
    </div>
  );
}

export function ProjectPreview({ project }: { project: PortfolioProject }) {
  return (
    <figure className="work-preview">
      <div className="work-preview-bar">
        <span>Product preview</span>
        <span>{project.imageCaption ? "Website / 01" : "Concept / 01"}</span>
      </div>
      <div className="work-preview-image">
        <Image src={project.illustration}
          alt={project.imageAlt ?? `Concept illustration for ${project.title}; not a product screenshot`}
          width={1889} height={909} sizes="(max-width: 767px) 90vw, 450px" />
      </div>
      <figcaption>{project.imageCaption ?? "Concept illustration · Not a product screenshot"}</figcaption>
    </figure>
  );
}

export function ProjectCard({ project, number, featured = false }: {
  project: PortfolioProject;
  number: number;
  featured?: boolean;
}) {
  return (
    <article className={`work-card${featured ? " work-card-featured" : " work-card-archive"}`}>
      <div className="work-card-media">
        {featured && (
          <div className="work-card-index">
            <span>project/{String(number).padStart(2, "0")}</span>
            <span>{project.imageCaption ? "[screenshot]" : "[in progress]"}</span>
          </div>
        )}
        <ProjectPreview project={project} />
      </div>
      <div className="work-card-body">
        {!featured && (
          <div className="work-card-index">
            <span>project/{String(number).padStart(2, "0")}</span>
            <span>[case study]</span>
          </div>
        )}
        <span className="work-category">{project.subtitle}</span>
        <h3>{project.title}</h3>
        <p className="work-summary">{project.summary}</p>
        {!featured && <p className="work-card-status">{project.status}</p>}
        <Tags items={project.technologies} />
        <ProjectActions project={project} />
      </div>
    </article>
  );
}
