import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import {
  ownershipChecklistEn,
  paidValueTracksEn,
  roadmapPrioritiesEn,
  validationPlansEn,
} from "@/lib/content/roadmap-content-en";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Product roadmap",
  description:
    "See the next product priorities, validation criteria, and trust-related work that Daily Log should focus on after the current demo release.",
  path: "/en/roadmap",
  locale: "en",
});

export default function EnglishRoadmapPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          eyebrow="Roadmap"
          title="The next step is not a prettier demo, but a product people return to."
          description="This roadmap focuses on repeat value and accumulated reflection instead of surface polish. The page is organized so the reason behind the sequence is visible before the feature list itself."
          aside={
            <div className="grid gap-4">
              <div className="surface-card rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Current View</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  First make it worth trying.
                  <br />
                  Then make it worth reopening.
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  At this stage, first-session satisfaction and repeat value matter more than raw download counts.
                </p>
              </div>

              <div className="surface-card-dark rounded-[1.8rem] p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">Focus</p>
                <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                  Improve the repeated value of the AI reflection experience first.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  The website acts as the install and trust hub, while the real product leverage is measured on mobile.
                </p>
              </div>
            </div>
          }
        />

        <section className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Current Diagnosis"
                title="The current diagnosis is already fairly clear."
                description="Conversational reflection and mood interpretation are compelling. What needs to grow next is the reason to come back and the value that accumulates with repeated use."
              />

              <div className="surface-card-dark rounded-[1.8rem] p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">What changes next</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-white">
                  Move beyond a journal demo
                  <br />
                  and become a reflection tool people reopen.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  The next success criteria are repeat usage, recommendation follow-through, and the felt value of accumulated notes.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {roadmapPrioritiesEn.slice(0, 3).map((item) => (
                <article key={item.title} className="surface-card-soft rounded-[1.8rem] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">{item.eyebrow}</p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Priorities"
              title="The next batch is organized in the order that strengthens repeat use and trust."
              description="Instead of expanding everything at once, the roadmap follows the sequence most likely to make the product feel stronger over time."
            />

            <div className="grid gap-5 xl:grid-cols-2">
              {roadmapPrioritiesEn.map((item, index) => (
                <article
                  key={item.title}
                  className={`${index === 0 ? "surface-card-dark text-white" : "surface-card-soft"} rounded-[1.8rem] p-6`}
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${index === 0 ? "text-white/62" : "text-[color:var(--color-primary)]"}`}>
                    {item.eyebrow}
                  </p>
                  <h2 className={`mt-4 font-display text-4xl font-semibold tracking-[-0.05em] ${index === 0 ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {item.title}
                  </h2>
                  <p className={`mt-4 text-sm leading-8 ${index === 0 ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {item.summary}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7">
                    {item.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className={`rounded-[1rem] px-4 py-3 ${
                          index === 0
                            ? "border border-white/10 bg-white/6 text-white/76"
                            : "border border-[color:var(--color-line)] bg-white/76 text-[color:var(--color-muted)]"
                        }`}
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Validation"
                title="These are the signals worth validating before adding more polish."
                description="The next stage should be measured with metrics and interviews, not just instinct. The key question is whether people actually feel more clarity and more reason to return."
              />

              <div className="grid gap-4">
                {validationPlansEn.map((item) => (
                  <article key={item.title} className="surface-card-soft rounded-[1.6rem] p-5">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-[color:var(--color-line)] bg-white/76 px-4 py-2 text-sm text-[color:var(--color-muted)]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <article className="surface-card rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Trust & Ownership</p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  A sensitive reflection product has to earn trust before anything else.
                </h3>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {ownershipChecklistEn.map((item) => (
                    <li key={item} className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/70 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface-card-soft rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Paid Direction</p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  Paid features should open only after the long-term value is unmistakable.
                </h3>
                <p className="mt-4 text-sm leading-8 text-[color:var(--color-muted)]">
                  The free experience needs to feel genuinely useful first. Deeper insights and accumulated value are the more natural place to introduce payment later.
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {paidValueTracksEn.map((item) => (
                    <li key={item} className="rounded-[1rem] border border-[color:var(--color-line)] bg-white/80 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <PageCta
          locale="en"
          eyebrow="Next Step"
          title="The website stays the trust hub, while the real product test happens on mobile."
          description="The higher-leverage work now is strengthening first-session value, repeat use, recommendation quality, and user control inside the product itself."
          primaryHref="/download"
          primaryLabel="Download APK"
          secondaryHref="/support"
          secondaryLabel="Open Support"
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
