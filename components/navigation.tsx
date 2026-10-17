"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowUpRight, Award, BriefcaseBusiness, Code2, FolderCode,
  House, Laptop, Mail, Menu, UserRound, X,
} from "lucide-react";
import { profile } from "@/content/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { href: "/", label: "Home", Icon: House },
  { href: "/#about", label: "About me", Icon: UserRound },
  { href: "/projects", label: "Projects", Icon: FolderCode },
  { href: "/experience", label: "Experience", Icon: BriefcaseBusiness },
  { href: "/stack", label: "Technical stack", Icon: Code2 },
  { href: "/gear", label: "Gear", Icon: Laptop },
  { href: "/certifications", label: "Certifications & Awards", Icon: Award },
  { href: "/#contact", label: "Contact", Icon: Mail },
];

const sections = [
  { id: "projects", label: "Featured projects" },
  { id: "experience", label: "Experience & education" },
  { id: "stack", label: "Technical stack" },
];

function NavLinks({ activeHref, onNavigate }: {
  activeHref: string;
  onNavigate: (href: string) => void;
}) {
  return (
    <nav aria-label="Main navigation" className="nav-links">
      {navigation.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          onNavigate={() => onNavigate(href)}
          className={"nav-link" + (activeHref === href ? " active" : "")}
          aria-label={label}
          aria-current={activeHref === href ? (href.includes("#") ? "location" : "page") : undefined}
        >
          <Icon size={20} aria-hidden="true" />
          <span className="nav-label">{label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const panel = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const syncScroll = () => {
      document.body.toggleAttribute("data-home-scrolled", window.scrollY > 24);
    };
    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", syncScroll);
      document.body.removeAttribute("data-home-scrolled");
    };
  }, [pathname]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  const activeHref = pathname === "/" && (hash === "#about" || hash === "#contact")
    ? pathname + hash
    : pathname;

  function navigate(href: string) {
    setHash(href.includes("#") ? href.slice(href.indexOf("#")) : "");
    setOpen(false);
  }

  useEffect(() => {
    if (!open || !panel.current) return;
    const dialog = panel.current;
    const opener = menuButton.current;
    const previousOverflow = document.body.style.overflow;
    const desktop = window.matchMedia("(min-width: 1200px)");
    function closeOnDesktop() {
      if (desktop.matches) setOpen(false);
    }
    dialog.showModal();
    document.body.style.overflow = "hidden";
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      if (!desktop.matches) opener?.focus();
    };
  }, [open]);

  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const items = panel.current?.querySelectorAll<HTMLElement>("a, button");
    if (!items?.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <aside className="navigation-dock" aria-label="Portfolio navigation dock">
        <NavLinks activeHref={activeHref} onNavigate={navigate} />
      </aside>
      <div className="desktop-theme"><ThemeToggle /></div>
      <button
        ref={menuButton}
        type="button"
        className="mobile-navigation-trigger icon-button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
      >
        <Menu size={22} aria-hidden="true" />
      </button>
      <dialog
        id="mobile-navigation"
        className="mobile-navigation-panel"
        aria-label="Navigation menu"
        ref={panel}
        onCancel={() => setOpen(false)}
        onKeyDown={trapFocus}
      >
        <div className="mobile-navigation-header">
          <span>{profile.name}<span className="navigation-caption">Navigation</span></span>
          <button
            type="button"
            className="icon-button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            autoFocus
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="mobile-navigation-body">
          <NavLinks activeHref={activeHref} onNavigate={navigate} />
          {pathname === "/" && (
            <nav aria-label="Homepage sections" className="section-navigation">
              {sections.map(({ id, label }) => (
                <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>
          )}
          <div className="navigation-elsewhere">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
          <ThemeToggle />
        </div>
      </dialog>
    </>
  );
}
