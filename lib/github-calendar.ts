export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type ContributionCalendarData = {
  days: ContributionDay[];
  total: number;
};

const DAY_MS = 86_400_000;

function attribute(attributes: string, name: string) {
  return attributes.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
}

// GitHub's public calendar is HTML, not a versioned API. Reject format drift.
export function parseGithubCalendar(html: string): ContributionCalendarData {
  if (html.length > 2_000_000) throw new Error("Calendar response too large");

  const counts = new Map<string, number>();
  for (const match of html.matchAll(/<tool-tip\b([^>]*)>([^<]*)<\/tool-tip>/g)) {
    const id = attribute(match[1], "for");
    if (!id?.startsWith("contribution-day-component-")) continue;
    const label = match[2].trim().match(/^(No|\d[\d,]*) contributions? on [\w\s,]+\.$/);
    if (!label || counts.has(id)) throw new Error("Invalid daily contribution label");
    const count = label[1] === "No" ? 0 : Number(label[1].replaceAll(",", ""));
    if (!Number.isSafeInteger(count) || count < 0) throw new Error("Invalid daily count");
    counts.set(id, count);
  }

  const days: ContributionDay[] = [];
  for (const match of html.matchAll(/<td\b([^>]*)>/g)) {
    const date = attribute(match[1], "data-date");
    if (date === undefined) continue;
    const id = attribute(match[1], "id");
    const levelText = attribute(match[1], "data-level");
    const timestamp = Date.parse(`${date}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(timestamp)
      || new Date(timestamp).toISOString().slice(0, 10) !== date
      || !levelText || !/^[0-4]$/.test(levelText) || !id || !counts.has(id)) {
      throw new Error("Invalid contribution day");
    }
    const count = counts.get(id)!;
    const level = Number(levelText);
    if ((count === 0) !== (level === 0)) throw new Error("Inconsistent contribution level");
    days.push({ date, count, level });
  }

  days.sort((a, b) => a.date.localeCompare(b.date));
  if (days.length < 350 || days.length > 378 || counts.size !== days.length) {
    throw new Error("Incomplete contribution calendar");
  }
  for (let index = 1; index < days.length; index++) {
    if (Date.parse(days[index].date) - Date.parse(days[index - 1].date) !== DAY_MS) {
      throw new Error("Missing or duplicate contribution date");
    }
  }

  const totalText = html.match(/<h2\b[^>]*id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contributions?\s/);
  const total = totalText ? Number(totalText[1].replaceAll(",", "")) : NaN;
  if (!Number.isSafeInteger(total) || total !== days.reduce((sum, day) => sum + day.count, 0)) {
    throw new Error("Contribution total does not match daily counts");
  }
  return { days, total };
}

export function calendarPosition(date: string, firstDate: string) {
  const weekday = new Date(`${date}T00:00:00Z`).getUTCDay();
  const firstWeekday = new Date(`${firstDate}T00:00:00Z`).getUTCDay();
  const offset = Math.round((Date.parse(date) - Date.parse(firstDate)) / DAY_MS);
  return { weekday, week: Math.floor((offset + firstWeekday) / 7) };
}

export function formatContributionDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function contributionLabel(day: ContributionDay) {
  return `${day.count.toLocaleString("en")} ${day.count === 1 ? "contribution" : "contributions"} on ${formatContributionDate(day.date)}`;
}
