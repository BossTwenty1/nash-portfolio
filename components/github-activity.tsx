import { ArrowUpRight } from "lucide-react";
import { ContributionCalendar } from "@/components/contribution-calendar";
import { SectionHeading } from "@/components/ui";
import { getGithubContributions, GITHUB_PROFILE } from "@/lib/github-contributions";

export async function GithubActivity() {
  let calendar = null;
  try {
    calendar = await getGithubContributions();
  } catch {
    // Keep the portfolio readable when GitHub or its public HTML format changes.
    console.warn("GitHub contribution calendar unavailable; showing profile fallback.");
  }

  return (
    <section id="github-activity" className="home-section github-section" aria-label="Coding in public.">
      <SectionHeading title="Coding in public." />
      <p className="section-description">A look at my development activity on GitHub.</p>
      <div className="github-activity">
        <h3>Contribution heatmap</h3>
        {calendar ? <ContributionCalendar data={calendar} /> : (
          <p className="github-unavailable">
            GitHub activity is temporarily unavailable. You can view my contributions on GitHub.
          </p>
        )}
        <div className="github-footer">
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer"
            className="small-arrow-link" aria-label="View GitHub profile (opens in a new tab)">
            View GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <span>@BossTwenty1</span>
        </div>
      </div>
    </section>
  );
}
