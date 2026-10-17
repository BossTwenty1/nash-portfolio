import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <span className="eyebrow">404 — NOT FOUND</span>
      <h1>page not found.</h1>
      <p>This page doesn&apos;t exist.</p>
      <Link className="small-arrow-link" href="/">
        Back home →
      </Link>
    </div>
  );
}
