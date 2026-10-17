import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";

type SectionHeadingProps = {
  title: string;
  href?: string;
  linkText?: string;
};

export function SectionHeading({
  title,
  href,
  linkText = "view all",
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>
        {title}
      </h2>
      {href && (
        <Link
          className="small-arrow-link"
          href={href}
          aria-label={`${linkText}: ${title}`}
        >
          {linkText} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="page-intro enter">
      <Link href="/" className="back-link">
        <ArrowLeft size={14} aria-hidden="true" /> Back to portfolio
      </Link>
      <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
      <p>{description}</p>
    </header>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          className="project-image"
          src={project.illustration}
          alt={`Abstract illustration for ${project.title}; not a product screenshot`}
          width={760}
          height={350}
          loading="eager"
        />
        <span className="project-image-caption">Concept illustration</span>
      </div>
      <div className="project-body">
        <span className="eyebrow">{project.subtitle}</span>
        <h3>{project.title}</h3>
        <span className="project-status">
          <span aria-hidden="true" />
          {project.status}
        </span>
        <p>{project.description}</p>
        <Tags items={project.technologies} />
        {project.repo && (
          <a
            className="small-arrow-link"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source repository`}
          >
            View source <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="empty-state">
      <span className="empty-dots" aria-hidden="true" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href="/projects" className="small-arrow-link">
        Explore my projects →
      </Link>
    </div>
  );
}
