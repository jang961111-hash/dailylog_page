import { PageCta, PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { privacySectionsEn } from "@/lib/content/legal-content-en";
import { buildMetadata, siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read the current draft Privacy Policy for the Daily Log demo website and demo app experience.",
  path: "/en/privacy",
  locale: "en",
});

export default function EnglishPrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          eyebrow="Privacy"
          title="Daily Log Privacy Policy draft"
          description="The document pages stay inside the same design system as the install and support flow. This version is still a demo draft and should be replaced with final production-aligned legal copy before launch."
          aside={
            <div className="grid gap-4">
              <div className="surface-card rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Document Status</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">Draft for demo</p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  Updated {siteConfig.legalUpdatedAt}
                  <br />
                  Contact {siteConfig.contactEmail}
                </p>
              </div>
              <div className="surface-card-soft rounded-[1.8rem] p-6 text-sm leading-7 text-[color:var(--color-muted)]">
                Before launch, the wording still needs to reflect real retention windows, third-party integrations, deletion procedures, and any cross-border transfers.
              </div>
            </div>
          }
        />

        <section className="px-6 py-12">
          <div className="mx-auto grid w-full max-w-4xl gap-5">
            <div className="rounded-[1.5rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/72 px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
              This is not the final legally reviewed document. Retention periods, processors, deletion procedures, and child-protection language still need to be aligned with the actual service policy.
            </div>

            {privacySectionsEn.map((section) => (
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
          </div>
        </section>

        <PageCta
          locale="en"
          eyebrow="Policy Navigation"
          title="Legal pages stay connected to the same trust and support flow."
          description="After reading the privacy document, people can move directly into the terms or support pages without leaving the same overall structure."
          primaryHref="/terms"
          primaryLabel="Open Terms"
          secondaryHref="/support"
          secondaryLabel="Open Support"
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
