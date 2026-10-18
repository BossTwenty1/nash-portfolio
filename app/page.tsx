import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import {
  profile, experience, stack,
  gear, featuredCertificates,
} from "@/content/portfolio";
import { Hero } from "@/components/hero";
import { ScrollReveals } from "@/components/scroll-reveals";
import { AboutSection } from "@/components/about-section";
import { GearCard } from "@/components/gear-card";
import { CertificatePreview } from "@/components/certificate-preview";
import { ExperienceHighlights } from "@/components/experience-highlights";
import { GithubActivity } from "@/components/github-activity";
import { SectionHeading, Tags } from "@/components/ui";
import { SelectedProjects } from "@/components/selected-projects";

export const revalidate = 21600;

const contactLinks = [
  { label: "Instagram", href: profile.instagram, Icon: Instagram },
  { label: "Facebook", href: profile.facebook, Icon: Facebook },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "Email", href: "mailto:" + profile.email, Icon: Mail },
];

type HomeSectionProps = {
  id: string;
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
  children: ReactNode;
};

function HomeSection({
  id, title, description, href, linkText = "View all", children,
}: HomeSectionProps) {
  return (
    <section id={id} className="home-section" aria-label={title}>
      <SectionHeading title={title} />
      {description && <p className="section-description">{description}</p>}
      {children}
      {href && (
        <div className="section-link">
          <Link href={href} className="button button-secondary">
            {linkText} <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="home-page">
      <ScrollReveals />
      <Hero />

      <HomeSection id="about" title="About">
        <AboutSection />
      </HomeSection>

      <SelectedProjects />

      <HomeSection
        id="experience"
        title="Experience & Education"
        description="Hands-on project contributions and my academic background."
        href="/experience"
        linkText="View Full Experience"
      >
        <div className="career-grid">
          <article className="career-panel">
            <h3>Project experience</h3>
            {experience.map((item) => (
              <div className="career-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.organization}</p>
                <span className="career-period">{item.period}</span>
                <ExperienceHighlights item={item} />
              </div>
            ))}
          </article>
          <article className="career-panel">
            <h3>Education</h3>
            <p className="education-title">{profile.education}</p>
            <p className="section-description">
              Applying technical skills through coursework, capstone development,
              and collaborative projects.
            </p>
            <span className="small-arrow-link">
              <MapPin size={13} aria-hidden="true" />{profile.location}
            </span>
          </article>
        </div>
      </HomeSection>

      <HomeSection
        id="stack"
        title="Technical Stack"
        description="Languages, frameworks, and tools used in coursework and project development."
        href="/stack"
        linkText="Explore Technical Stack"
      >
        <div className="home-stack">
          {stack.map((group) => (
            <section className="home-stack-group" key={group.category} aria-label={group.category}>
              <h3>{group.category}</h3>
              <Tags items={group.items} />
            </section>
          ))}
        </div>
      </HomeSection>

      <HomeSection id="gear" title="Gear" href="/gear" linkText="View All Gear">
        <div className="gear-grid">
          {gear.slice(0, 3).map((item) => <GearCard key={item.id} item={item} />)}
        </div>
      </HomeSection>

      <HomeSection id="certifications" title="Certifications & Awards" href="/certifications" linkText="View All Certificates & Awards">
        {featuredCertificates.length ? (
          <CertificatePreview items={featuredCertificates} />
        ) : (
          <div className="collection-preview">
            <h3>No certificates or awards published yet</h3>
            <p>Certificate and award cards will appear when their original images and viewing links are available.</p>
          </div>
        )}
      </HomeSection>

      <GithubActivity />

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <h2 id="contact-title">Let’s connect</h2>
        <p>
          Interested in project collaboration and conversations about web
          development, application design, and practical software solutions.
        </p>
        <nav className="contact-actions" aria-label="Social and email links">
          {contactLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              className={"contact-social contact-" + label.toLowerCase()}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label === "Email" ? "Email " + profile.email : label + " (opens in a new tab)"}
              title={label === "Email" ? profile.email : label}
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
    </div>
  );
}
