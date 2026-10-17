import type { CSSProperties } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/content/portfolio";

export function Hero() {
  const letters = Array.from(profile.heroName);

  return (
    <section
      id="top"
      className="hero"
      aria-labelledby="profile-heading"
      style={{
        "--hero-characters": letters.filter((letter) => letter !== " ").length,
        "--hero-word-breaks": letters.filter((letter) => letter === " ").length,
      } as CSSProperties}
    >
      <div className="hero-content">
        <p className="hero-focus">
          <span className="availability-dot" aria-hidden="true" />
          {profile.availability}
        </p>
        <h1 id="profile-heading" aria-label={profile.heroName}>
          <span className="hero-name" aria-hidden="true">
            {letters.map((letter, index) => {
              const wordBreaks = letters.slice(0, index).filter((character) => character === " ").length;
              const caretHold = index === letters.length - 1
                ? "calc(var(--hero-character-duration) + 240ms)"
                : letters[index + 1] === " "
                  ? "calc(var(--hero-character-step) + var(--hero-word-pause))"
                  : "var(--hero-character-step)";

              return (
                <span
                  key={index}
                  className="hero-character"
                  style={{
                    "--character": index - wordBreaks,
                    "--word-breaks": wordBreaks,
                    "--caret-hold": caretHold,
                  } as CSSProperties}
                >
                  {letter === " " ? "\u00a0" : letter}
                  {letter !== " " && <span className="hero-cursor" />}
                </span>
              );
            })}
          </span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          {profile.resume ? (
            <a href={profile.resume} download className="button button-primary">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          ) : (
            <button
              type="button"
              className="button button-primary"
              disabled
              aria-describedby="cv-pending"
              title="CV not uploaded yet"
            >
              <Download size={16} aria-hidden="true" /> Download CV
            </button>
          )}
          <a href="#contact" className="button button-secondary">
            <Mail size={16} aria-hidden="true" /> Contact Me
          </a>
        </div>
        {!profile.resume && <p id="cv-pending" className="sr-only">CV not uploaded yet.</p>}
      </div>
      <a className="hero-scroll-cue" href="#about">
        Explore <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
