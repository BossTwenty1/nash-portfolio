"use client";

import { useEffect } from "react";

export function ScrollReveals() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>(
      ".home-page > section:not(.hero)",
    ));
    const badge = document.querySelector<HTMLElement>(".hero-focus");
    let badgeVisible = false;
    const syncOrbit = () => badge?.toggleAttribute(
      "data-orbit-running", badgeVisible && !document.hidden && !motion.matches,
    );
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === badge) {
          badgeVisible = entry.isIntersecting;
          syncOrbit();
          continue;
        }
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.reveal = "visible";
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    if (badge) observer.observe(badge);

    for (const section of sections) {
      if (section.getBoundingClientRect().top < window.innerHeight) continue;
      Array.from(section.children).forEach((child, index) => {
        (child as HTMLElement).style.setProperty("--reveal-order", String(Math.min(index, 3)));
      });
      section.dataset.reveal = "pending";
      observer.observe(section);
    }

    function revealImmediately(section: HTMLElement) {
      section.dataset.reveal = "instant";
      observer.unobserve(section);
    }
    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const section = event.target.closest<HTMLElement>("[data-reveal]");
      if (section) revealImmediately(section);
    }
    function onHashChange() {
      const section = sections.find((item) => "#" + item.id === window.location.hash);
      if (section) revealImmediately(section);
    }
    function onMotionChange() {
      syncOrbit();
      if (!motion.matches) return;
      sections.forEach(revealImmediately);
    }
    document.addEventListener("focusin", onFocus);
    window.addEventListener("hashchange", onHashChange);
    motion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", syncOrbit);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("hashchange", onHashChange);
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", syncOrbit);
      badge?.removeAttribute("data-orbit-running");
      for (const section of sections) {
        delete section.dataset.reveal;
        Array.from(section.children).forEach((child) => {
          (child as HTMLElement).style.removeProperty("--reveal-order");
        });
      }
    };
  }, []);

  return null;
}
