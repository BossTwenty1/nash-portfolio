// Run after compiling lib/github-calendar.ts to a temporary CommonJS directory.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
const { parseGithubCalendar, calendarPosition, contributionLabel } = await import(pathToFileURL(path.resolve(process.argv[2])).href);

// Synthetic parser fixture only; never imported or rendered by the portfolio.
function fixture(firstDate, length, activeCount = 1) {
  const parts = [];
  for (let index = 0; index < length; index++) {
    const date = new Date(Date.parse(firstDate) + index * 86400000).toISOString().slice(0, 10);
    const id = `contribution-day-component-${index}`;
    const count = index === 12 ? activeCount : 0;
    parts.push(`<td id="${id}" data-date="${date}" data-level="${count ? 4 : 0}"></td>`);
    parts.push(`<tool-tip for="${id}">${count ? count.toLocaleString("en") : "No"} ${count === 1 ? "contribution" : "contributions"} on October 1st.</tool-tip>`);
  }
  return `<h2 id="js-contribution-activity-description">${activeCount.toLocaleString("en")} contributions in the last year</h2>${parts.join("")}`;
}

const html = fixture("2025-10-18", 365);
const calendar = parseGithubCalendar(html);
assert.equal(calendar.days.length, 365);
assert.equal(calendar.total, 1);
assert.equal(calendar.days[12].count, 1);
assert.equal(calendar.days[12].level, 4);
assert.equal(parseGithubCalendar(fixture("2024-01-01", 366, 1234)).total, 1234);
assert.equal(parseGithubCalendar(fixture("2025-01-01", 365, 0)).total, 0);
assert.match(contributionLabel(calendar.days[12]), /^1 contribution on Oct 30, 2025$/);
assert.deepEqual(calendarPosition("2025-10-18", "2025-10-18"), { weekday: 6, week: 0 });
assert.deepEqual(calendarPosition("2025-10-19", "2025-10-18"), { weekday: 0, week: 1 });
assert.throws(() => parseGithubCalendar(html.replace('data-date="2025-10-19"', 'data-date="2025-10-18"')));
assert.throws(() => parseGithubCalendar(html.replace('data-date="2025-10-19"', 'data-date="2025-02-30"')));
assert.throws(() => parseGithubCalendar(html.replace('data-level="4"', 'data-level="9"')));
assert.throws(() => parseGithubCalendar(html.replace('data-level="4"', 'data-level="0"')));
assert.throws(() => parseGithubCalendar(html.replace("1 contribution on", "Unknown activity on")));
assert.throws(() => parseGithubCalendar(html.replace("1 contributions in", "2 contributions in")));
assert.throws(() => parseGithubCalendar(fixture("2025-10-18", 30)));
assert.throws(() => parseGithubCalendar("<script>unavailable</script>"));
assert.throws(() => parseGithubCalendar(" ".repeat(2000001)));

if (process.argv[3]) {
  const live = parseGithubCalendar(fs.readFileSync(process.argv[3], "utf8"));
  assert.equal(live.total, live.days.reduce((sum, day) => sum + day.count, 0));
  for (const day of live.days) {
    const position = calendarPosition(day.date, live.days[0].date);
    assert.equal(position.weekday, new Date(day.date).getUTCDay());
    assert(position.week >= 0 && position.week <= 53);
  }
  console.log(JSON.stringify({ realCalendar: true, total: live.total, days: live.days.length,
    first: live.days[0].date, last: live.days.at(-1).date, activeDays: live.days.filter((day) => day.count > 0) }, null, 2));
}
console.log("GitHub calendar checks passed: real/zero data, dates, totals, levels, leap year, malformed and missing data.");
