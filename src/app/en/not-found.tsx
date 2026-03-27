import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function EnglishNotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main
        lang="en"
        className="reading-surface mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-sand-600)]">404</p>
        <h1 className="mt-5 font-display text-6xl leading-none text-[color:var(--color-ink)]">We couldn&apos;t find that page.</h1>
        <p className="mt-5 max-w-2xl text-sm leading-8 text-[color:var(--color-muted)]">
          The current landing site focuses on the product overview, download flow, support, and policy pages. Use one of the
          links below to get back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/en"
            className="rounded-full bg-[color:var(--color-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--color-sand-700)]"
          >
            Go to Home
          </Link>
          <Link
            href="/en/download"
            className="rounded-full border border-[color:var(--color-line)] bg-white px-5 py-3 text-sm font-medium text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-cream-0)]"
          >
            Open Download
          </Link>
        </div>
      </main>
      <SiteFooter locale="en" />
    </div>
  );
}
