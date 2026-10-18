"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/portfolio";
import { ProjectCard } from "@/components/project-card";

export function SelectedProjects() {
  const [selected, setSelected] = useState("tilematch");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const selectedIndex = projects.findIndex((project) => project.slug === selected);

  function selectProject(index: number) {
    const nextIndex = (index + projects.length) % projects.length;
    setSelected(projects[nextIndex].slug);
    cardRefs.current[nextIndex]?.focus({ preventScroll: true });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    let nextIndex: number;
    switch (event.key) {
      case "ArrowLeft": nextIndex = selectedIndex - 1; break;
      case "ArrowRight": nextIndex = selectedIndex + 1; break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = projects.length - 1; break;
      default: return;
    }
    event.preventDefault();
    selectProject(nextIndex);
  }

  return (
    <section id="projects" className="home-section selected-projects" aria-labelledby="selected-projects-title">
      <header className="selected-projects-heading">
        <h2 id="selected-projects-title">Selected projects</h2>
        <p>Academic and collaborative work across mapping,<br className="projects-desktop-break" /> commerce, and connected systems.</p>
      </header>
      <p id="project-carousel-help" className="sr-only">
        Select a side card to bring it to the center. Use the Left and Right arrow keys
        to browse, or Home and End to select the first and last project.
      </p>
      <div className="project-deck" role="group" aria-roledescription="carousel"
        aria-label="Selected projects" aria-describedby="project-carousel-help"
        onKeyDown={handleKeyDown}>
        {projects.map((project, index) => {
          const offset = (index - selectedIndex + projects.length) % projects.length;
          const position = offset === 0 ? "center" : offset === 1 ? "right" : "left";
          return (
            <div key={project.slug} className="project-deck-item" data-position={position}
              ref={(element) => { cardRefs.current[index] = element; }} tabIndex={-1}
              role="group" aria-roledescription="slide"
              aria-label={`${project.title}, project ${index + 1} of ${projects.length}`}>
              {position !== "center" && (
                <button type="button" className="project-side-select"
                  aria-label={`Select ${project.title} project`}
                  onClick={() => selectProject(index)} />
              )}
              <div className="project-deck-card" inert={position !== "center"}>
                <ProjectCard project={project} number={index + 1} featured />
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/projects" className="button button-secondary projects-more">
        View More Projects <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
