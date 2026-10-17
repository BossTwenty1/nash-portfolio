import "server-only";
import { unstable_cache } from "next/cache";
import { parseGithubCalendar } from "./github-calendar";

export const GITHUB_PROFILE = "https://github.com/BossTwenty1";
export const GITHUB_CALENDAR_SOURCE = "https://github.com/users/BossTwenty1/contributions";
export const GITHUB_REFRESH_SECONDS = 21_600;

export const getGithubContributions = unstable_cache(async () => {
  const response = await fetch(GITHUB_CALENDAR_SOURCE, {
    headers: { Accept: "text/html", "Accept-Language": "en" },
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) {
    throw new Error("GitHub calendar unavailable");
  }
  return parseGithubCalendar(await response.text());
}, ["github-public-calendar-BossTwenty1-v1"], { revalidate: GITHUB_REFRESH_SECONDS });
