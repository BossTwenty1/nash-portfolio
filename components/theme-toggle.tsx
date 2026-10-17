"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "light" | "dark";
const themeOptions = [
  { value: "system", label: "System theme", Icon: Monitor },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

function getTheme(): Theme {
  const theme = document.documentElement.dataset.theme;
  return theme === "light" || theme === "dark" ? theme : "system";
}

function subscribe(onChange: () => void) {
  function syncStorage(event: StorageEvent) {
    if (event.key !== "portfolio-theme" && event.key !== null) return;
    const theme = event.newValue;
    document.documentElement.dataset.theme =
      theme === "light" || theme === "dark" ? theme : "system";
    onChange();
  }
  window.addEventListener("portfolio-theme-change", onChange);
  window.addEventListener("storage", syncStorage);
  return () => {
    window.removeEventListener("portfolio-theme-change", onChange);
    window.removeEventListener("storage", syncStorage);
  };
}

function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("portfolio-theme", next);
  } catch {
    // Theme selection still works when browser storage is unavailable.
  }
  window.dispatchEvent(new Event("portfolio-theme-change"));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "system");

  return (
    <div className="theme-control" role="group" aria-label="Theme">
      {themeOptions.map(({ value, label, Icon }) => (
        <button
          key={value}
          className="theme-option"
          type="button"
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
        >
          <Icon size={14} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
