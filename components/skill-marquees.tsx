"use client";

import { useEffect, useRef, useState } from "react";
import {
  Atom, Braces, Code2, Database, FileCode2, GitBranch, Github,
  KeyRound, MapPinned, Navigation, Network,
  Server, ShieldCheck, Terminal, Waves, Zap,
} from "lucide-react";
import { coreSkillGroups } from "@/content/portfolio";

const skillIcons = {
  React: Atom,
  TypeScript: FileCode2,
  JavaScript: Braces,
  "Next.js": Code2,
  "Tailwind CSS": Waves,
  SQL: Database,
  Supabase: Zap,
  Git: GitBranch,
  GitHub: Github,
  "VS Code": Terminal,
  "REST APIs": Network,
  Authentication: KeyRound,
  "Role-based access": ShieldCheck,
  "Backend integration": Server,
  "GIS / Mapping": MapPinned,
  "GPS workflows": Navigation,
};

export function SkillMarquees() {
  const panel = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    setEnhanced(true);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (panel.current) observer.observe(panel.current);
    const syncVisibility = () => setTabVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  return (
    <div
      ref={panel}
      className="skills-marquees"
      role="group"
      aria-label="Technologies and tools. Focus here to pause the moving skills."
      tabIndex={0}
      data-enhanced={enhanced}
      data-running={visible && tabVisible}
    >
      <div className="skills-panel-header">
        <h3>Technologies and tools</h3>
      </div>
      {coreSkillGroups.map((group, index) => (
        <div className="skill-row" key={group.title}>
          <h4>[{group.title}]</h4>
          <div className="skill-viewport">
            <div className={"skill-track" + (index ? " skill-track-reverse" : "")}>
              {[false, true].map((duplicate) => (
                <ul
                  className={"skill-group" + (duplicate ? " skill-group-copy" : "")}
                  key={String(duplicate)}
                  aria-label={duplicate ? undefined : group.title}
                  aria-hidden={duplicate || undefined}
                >
                  {group.items.map((skill) => {
                    const Icon = skillIcons[skill as keyof typeof skillIcons];
                    return (
                      <li className="skill-chip" key={skill}>
                        <Icon size={15} aria-hidden="true" />
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
