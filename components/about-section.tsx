import Image from "next/image";
import { ChevronRight, UserRound } from "lucide-react";
import { about, profile } from "@/content/portfolio";
import { SkillMarquees } from "@/components/skill-marquees";

export function AboutSection() {
  return (
    <div className="about-content">
      <div className="about-grid">
        <figure className="about-portrait">
          <Image
            src={profile.portrait}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 768px) 31vw, calc(100vw - 40px)"
          />
        </figure>
        <article className="about-profile">
          <h3><UserRound size={17} aria-hidden="true" /> A little bit about myself</h3>
          <dl className="profile-facts">
            <div><dt>Name</dt><dd>{profile.name}</dd></div>
            <div><dt>Role</dt><dd>{profile.role}</dd></div>
            <div><dt>Location</dt><dd>{profile.location}</dd></div>
            <div><dt>Degree</dt><dd>{profile.education}</dd></div>
          </dl>
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
      </div>
      <div className="about-details">
        <section className="about-skills" aria-label="Core skills">
          <p className="about-label">[core skills]</p>
          <SkillMarquees />
        </section>
        <section className="about-focus" aria-labelledby="focus-heading">
          <p className="about-label">[current focus]</p>
          <h3 id="focus-heading">Building practical foundations</h3>
          <ul>
            {about.focus.map((focus) => (
              <li key={focus}><ChevronRight size={13} aria-hidden="true" /><span>{focus}</span></li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
