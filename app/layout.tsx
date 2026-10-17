import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { PortfolioBackground } from "@/components/portfolio-background";
import { profile } from "@/content/portfolio";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata(
    profile.role,
    `Portfolio of ${profile.name}, a ${profile.role} focused on modern web applications, frontend development, backend integrations, and database-driven features.`,
  ),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name} · ${profile.role}`,
  },
  // Keep indexing disabled until the owner explicitly approves the public launch.
  robots: { index: false, follow: false },
};

const themeScript = `
  try {
    var theme = localStorage.getItem('portfolio-theme');
    document.documentElement.dataset.theme =
      theme === 'light' || theme === 'dark' ? theme : 'system';
  } catch (error) {
    document.documentElement.dataset.theme = 'system';
  }
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <PortfolioBackground />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <div className="main-shell">
          <main id="main-content" className="main-content" tabIndex={-1}>
            {children}
            <footer className="site-footer">
              <span>
                © {new Date().getFullYear()} {profile.name}
              </span>
              <span>{profile.role} · {profile.location}</span>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
