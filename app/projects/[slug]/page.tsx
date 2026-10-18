import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/content/portfolio";
import { ProjectActions, ProjectPreview } from "@/components/project-card";
import { Tags } from "@/components/ui";
import { createPageMetadata } from "@/lib/metadata";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return createPageMetadata(`${project.title} — Case Study`, project.summary);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const number = String(index + 1).padStart(2, "0");
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="project-case-study">
      <div className="projects-topline">
        <Link href="/projects" className="back-link"><ArrowLeft size={14} aria-hidden="true" /> Back to Projects</Link>
        <span>project/{number} <i /> Case study</span>
      </div>
      <header className="project-case-hero">
        <div>
          <div className="project-case-index"><span>Project / {number}</span><span>Case study / {number}</span></div>
          <p className="work-category">{project.subtitle}</p>
          <h1>{project.title}</h1>
          <p className="project-case-intro">{project.summary}</p>
          <dl className="project-case-status">
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            <div><dt>Source</dt><dd>GitHub – Private</dd></div>
          </dl>
          <ProjectActions project={project} caseStudy={false} />
        </div>
        <ProjectPreview project={project} />
      </header>
      <div className="project-snapshot">
        <div><span>[project snapshot]</span><p>The project<br /> at a glance</p></div>
        <dl>
          <div><dt>Category</dt><dd>{project.subtitle}</dd></div>
          <div><dt>Project status</dt><dd>{project.status}</dd></div>
          <div><dt>Repository</dt><dd>GitHub – Private</dd></div>
          <div><dt>Core stack</dt><dd>{project.technologies.slice(0, 3).join(" / ")}</dd></div>
        </dl>
      </div>
      <section className="project-case-section" aria-labelledby="project-overview">
        <div className="project-section-heading">
          <span className="project-section-number">01</span>
          <div><span>[overview]</span><h2 id="project-overview">Project overview</h2><p>The context, purpose, and approach behind the work.</p></div>
        </div>
        <div className="project-overview-grid">
          <p className="project-overview-lead">{project.description}</p>
          <dl className="project-context-list">
            <div><dt>Problem</dt><dd>{project.caseStudy.problem}</dd></div>
            <div><dt>Goal</dt><dd>{project.caseStudy.goal}</dd></div>
            <div><dt>Solution</dt><dd>{project.caseStudy.solution}</dd></div>
          </dl>
        </div>
      </section>
      <section className="project-case-section" aria-labelledby="project-features">
        <div className="project-section-heading">
          <span className="project-section-number">02</span>
          <div><span>[scope]</span><h2 id="project-features">Features & technologies</h2></div>
        </div>
        <div className="project-detail-grid">
          <div><h3>Main features</h3><ul className="project-feature-list">
            {project.caseStudy.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul></div>
          <div><h3>Technology stack</h3><Tags items={project.technologies} /><p>{project.caseStudy.development}</p></div>
        </div>
      </section>
      <section className="project-case-section" aria-labelledby="project-development">
        <div className="project-section-heading">
          <span className="project-section-number">03</span>
          <div><span>[development]</span><h2 id="project-development">My contribution</h2></div>
        </div>
        <p className="project-contribution-copy">{project.contribution}</p>
        {project.imageCaption && (
          <figure className="project-case-screenshot">
            <Image src={project.illustration} alt={project.imageAlt ?? project.title}
              width={1889} height={909} sizes="(max-width: 1000px) 90vw, 896px" />
            <figcaption>{project.imageCaption}</figcaption>
          </figure>
        )}
      </section>
      <nav className="project-case-footer" aria-label="Project navigation">
        <Link href="/projects"><ArrowLeft size={14} aria-hidden="true" /> All projects</Link>
        <Link href={`/projects/${nextProject.slug}`}>Next: {nextProject.title} <ArrowRight size={14} aria-hidden="true" /></Link>
      </nav>
    </article>
  );
}
