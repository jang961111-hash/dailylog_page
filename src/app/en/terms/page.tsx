import { PageCta, PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { termsSectionsEn } from "@/lib/content/legal-content-en";
import { buildMetadata, siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Read the current draft Terms of Service for the Daily Log demo website and demo app.",
  path: "/en/terms",
  locale: "en",
});

export default function EnglishTermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          eyebrow="Terms"
          title="Daily Log Terms of Service draft"
          description="This document is a draft prepared for the demo release and landing site. Once the real service scope, responsibility model, and account policy are finalized, it should be replaced with the production terms."
          aside={
            <div className="grid gap-4">
              <div className="surface-card rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Document Status</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">Draft for demo release</p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  A final legal version is still required before launch.
                  <br />
                  Contact {siteConfig.contactEmail}
                </p>
              </div>
              <div className="surface-card-soft rounded-[1.8rem] p-6 text-sm leading-7 text-[color:var(--color-muted)]">
                The service definition, liability language, usage restrictions, and policy-change notices still need one more pass against the real operating model.
              </div>
            </div>
          }
        />

        <section className="px-6 py-12">
          <div className="mx-auto grid w-full max-w-4xl gap-5">
            <div className="rounded-[1.5rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/72 px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
              This is still a structural draft. The real service definition, usage restrictions, liability limits, and announcement procedures should be reviewed again before launch.
            </div>

            {termsSectionsEn.map((section) => (
              <article key={section.title} className="surface-card rounded-[1.8rem] px-6 py-6">
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-[color:var(--color-muted)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/66 px-4 py-3"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}

            <div className="surface-card rounded-[1.6rem] px-6 py-6 text-sm leading-8 text-[color:var(--color-muted)]">
              Contact:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[color:var(--color-ink)]">
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </section>

        <PageCta
          locale="en"
          eyebrow="Policy Navigation"
          title="The terms page stays connected to privacy and support in the same flow."
          description="After reading the terms, people can move directly into the privacy or support pages without losing the same trust-oriented structure."
          primaryHref="/privacy"
          primaryLabel="Open Privacy"
          secondaryHref="/support"
          secondaryLabel="Open Support"
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
