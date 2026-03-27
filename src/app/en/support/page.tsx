import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { faqsEn, supportTracksEn } from "@/lib/content/support-content-en";
import { buildMetadata, siteConfig, siteLocaleCopy } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Support",
  description:
    "Find help for installation issues, account questions, privacy requests, and demo release guidance on the Daily Log support page.",
  path: "/en/support",
  locale: "en",
});

export default function EnglishSupportPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          eyebrow="Support"
          title="Installation help, account requests, and policy guidance in one support hub."
          description="This page is designed like an extension of the landing flow. It leads with the support paths people need most and keeps the rest of the explanation in the background."
          actions={
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              Email Support
            </a>
          }
          aside={
            <div className="grid gap-4">
              <div className="surface-card rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Contact</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">Support channel</p>
                <a href={`mailto:${siteConfig.contactEmail}`} className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-ink)]">
                  {siteConfig.contactEmail}
                </a>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  Response time {siteLocaleCopy.en.supportResponseTime}
                </p>
              </div>

              <div className="surface-card-dark rounded-[1.8rem] p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">Before you send</p>
                <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                  A little context makes the first reply much more useful.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Device model, Android version, screenshots, and reproduction steps are usually enough to move much faster.
                </p>
              </div>
            </div>
          }
        />

        <section className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Support Tracks"
              title="The page separates the most common support flows so people can find the right one quickly."
              description="Installation, account, and privacy-related requests are split into clear cards instead of being buried in one long document."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {supportTracksEn.map((item, index) => (
                <article
                  key={item.title}
                  className={`${index === 1 ? "surface-card-dark text-white" : "surface-card-soft"} rounded-[1.8rem] p-6`}
                >
                  <h2 className={`font-display text-3xl font-semibold tracking-[-0.04em] ${index === 1 ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {item.title}
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {item.description}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`rounded-[1rem] px-4 py-3 ${
                          index === 1
                            ? "border border-white/10 bg-white/6 text-white/74"
                            : "border border-[color:var(--color-line)] bg-white/76 text-[color:var(--color-muted)]"
                        }`}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="surface-card rounded-[2rem] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Best context to include</p>
              <div className="mt-5 grid gap-4">
                {[
                  "Device model and Android version",
                  "When the issue happened and the reproduction steps",
                  "A screenshot of the install state or error message",
                  "Basic ownership details for account or privacy-related requests",
                ].map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/70 px-5 py-4 text-sm leading-7 text-[color:var(--color-muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">FAQ</p>
              <div className="mt-5 grid gap-4">
                {faqsEn.map((item) => (
                  <details key={item.question} className="rounded-[1.4rem] border border-[color:var(--color-line)] bg-white/80 px-5 py-4">
                    <summary className="cursor-pointer list-none text-base font-semibold text-[color:var(--color-ink)]">
                      {item.question}
                    </summary>
                    <p className="mt-4 border-t border-[color:var(--color-line)] pt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageCta
          locale="en"
          eyebrow="Next Step"
          title="If install issues or account requests happen, the site keeps the next support step obvious."
          description="Support is treated as part of the product and trust journey, not as a detached appendix after the download."
          primaryHref="/download"
          primaryLabel="Back to Download"
          secondaryHref="/privacy"
          secondaryLabel="Open Privacy"
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
