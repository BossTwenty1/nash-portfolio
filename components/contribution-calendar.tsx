"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  calendarPosition, contributionLabel, formatContributionDate,
  type ContributionCalendarData,
} from "@/lib/github-calendar";

export function ContributionCalendar({ data }: { data: ContributionCalendarData }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dayRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(data.days.length - 1);
  const [inspectedIndex, setInspectedIndex] = useState(data.days.length - 1);
  const firstDate = data.days[0].date;
  const lastDate = data.days[data.days.length - 1].date;
  const weeks = calendarPosition(lastDate, firstDate).week + 1;
  const months = data.days.filter((day, index) => index === 0 || day.date.endsWith("-01"));

  useEffect(() => {
    const graph = scrollRef.current;
    if (graph) graph.scrollLeft = graph.scrollWidth - graph.clientWidth;
  }, []);

  function moveFocus(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const offsets: Record<string, number> = {
      ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1,
    };
    let nextIndex: number;
    if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = data.days.length - 1;
    else if (event.key in offsets) nextIndex = index + offsets[event.key];
    else return;
    event.preventDefault();
    nextIndex = Math.max(0, Math.min(nextIndex, data.days.length - 1));
    dayRefs.current[nextIndex]?.focus({ preventScroll: true });
    dayRefs.current[nextIndex]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
  }

  return (
    <>
      <p className="sr-only" id="github-summary">
        {data.total.toLocaleString("en")} contributions from {formatContributionDate(firstDate)}
        {" to "}{formatContributionDate(lastDate)}. Public GitHub calendar for BossTwenty1.
      </p>
      <p className="github-help" id="github-calendar-help">
        Scroll to explore. Use arrow keys to inspect days; Home and End jump to the first and latest day.
      </p>
      <div className="github-calendar-scroll" ref={scrollRef}>
        <div
          className="github-calendar-grid"
          role="group"
          aria-label="Daily GitHub contributions"
          aria-describedby="github-summary github-calendar-help"
          style={{ gridTemplateColumns: `32px repeat(${weeks}, var(--github-cell))` }}
        >
          {months.map((day, index) => {
            const { week } = calendarPosition(day.date, firstDate);
            // The first partial month can share a week with the next month.
            const nextWeek = months[index + 1]
              ? calendarPosition(months[index + 1].date, firstDate).week : weeks;
            if (nextWeek - week < 2) return null;
            return (
              <span key={day.date} className="github-month" aria-hidden="true"
                style={{ gridColumn: week + 2, gridRow: 1 }}>
                {new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(new Date(day.date))}
              </span>
            );
          })}
          {["Mon", "Wed", "Fri"].map((label, index) => (
            <span key={label} className="github-weekday" aria-hidden="true"
              style={{ gridColumn: 1, gridRow: index * 2 + 3 }}>{label}</span>
          ))}
          {data.days.map((day, index) => {
            const { week, weekday } = calendarPosition(day.date, firstDate);
            const label = contributionLabel(day);
            return (
              <button
                key={day.date}
                ref={(element) => { dayRefs.current[index] = element; }}
                type="button"
                className="github-day"
                data-level={day.level}
                style={{ gridColumn: week + 2, gridRow: weekday + 2 }}
                aria-label={label}
                title={label}
                tabIndex={index === activeIndex ? 0 : -1}
                onKeyDown={(event) => moveFocus(event, index)}
                onFocus={() => { setActiveIndex(index); setInspectedIndex(index); }}
                onPointerEnter={() => setInspectedIndex(index)}
                onClick={() => { setActiveIndex(index); setInspectedIndex(index); }}
              />
            );
          })}
        </div>
      </div>
      <p className="github-day-detail" aria-live="polite" aria-atomic="true">
        {contributionLabel(data.days[inspectedIndex])}
      </p>
      <div className="github-calendar-meta">
        <p><strong>{data.total.toLocaleString("en")} contributions</strong> in the displayed period</p>
        <div className="github-legend" aria-label="Activity levels from less to more">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span key={level} className="github-legend-cell" data-level={level} aria-hidden="true" />
          ))}
          <span>More</span>
        </div>
      </div>
      <p className="github-period">{formatContributionDate(firstDate)} – {formatContributionDate(lastDate)}</p>
    </>
  );
}
