import { DeviceDownloadHub } from "@/components/device-download-hub";
import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { findLocalAndroidApk } from "@/lib/apk-release";
import { downloadNotesEn, faqsEn, installStepsEn, troubleshootingEn } from "@/lib/content/support-content-en";
import { buildMetadata, siteConfig, siteLocaleCopy } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Download",
  description:
    "Download the Daily Log Android APK, scan a QR code from desktop, review supported devices, and follow the install guide in one place.",
  path: "/en/download",
  locale: "en",
});

export const dynamic = "force-dynamic";

function formatPackageSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function formatPackageUpdatedAt(mtimeMs: number) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(mtimeMs));
}

export default async function EnglishDownloadPage() {
  const localApk = await findLocalAndroidApk();
  const deliverySource = localApk ? "Served directly from this server" : "GitHub Releases fallback route";
  const deliveryLabel = localApk ? localApk.filename : siteConfig.release.versionLabel;
  const deliveryUpdatedAt = localApk ? formatPackageUpdatedAt(localApk.mtimeMs) : siteConfig.release.lastUpdated;
  const deliverySize = localApk ? formatPackageSize(localApk.size) : siteLocaleCopy.en.fileSize;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          eyebrow="Download"
          title="The install flow and the current release state stay in the same view."
          description="On mobile, this page leads with the install action. On desktop, it keeps the QR handoff and release state together. Channels that are not ready yet are shown clearly as status only."
          actions={
            <>
              <a
                href={siteConfig.downloads.androidApk.href ?? "/en/download"}
                download={siteConfig.downloads.androidApk.download}
                data-cta-id="download-page-hero-apk-en"
                className="button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                Download Android APK
              </a>
              <a
                href="#install-guide"
                className="button-secondary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                View Install Steps
              </a>
            </>
          }
          aside={
            <div className="grid gap-4">
              <div className="surface-card rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Release</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  {siteConfig.release.versionLabel}
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  {siteLocaleCopy.en.supportedOs}
                  <br />
                  Package size {siteLocaleCopy.en.fileSize}
                  <br />
                  Updated {siteConfig.release.lastUpdated}
                </p>
              </div>

              <div className="surface-card-dark rounded-[1.8rem] p-6 text-white">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">Current package</p>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                    {localApk ? "Direct" : "Fallback"}
                  </span>
                </div>
                <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{deliveryLabel}</p>
                <div className="mt-4 grid gap-3 text-sm leading-7 text-white/72">
                  <p>
                    Delivery path
                    <br />
                    <span className="font-medium text-white">{deliverySource}</span>
                  </p>
                  <p>
                    Current file size
                    <br />
                    <span className="font-medium text-white">{deliverySize}</span>
                  </p>
                  <p>
                    Verified at
                    <br />
                    <span className="font-medium text-white">{deliveryUpdatedAt}</span>
                  </p>
                </div>
              </div>
            </div>
          }
        />

        <section className="px-6 py-8">
          <div className="mx-auto w-full max-w-7xl">
            <DeviceDownloadHub locale="en" />
          </div>
        </section>

        <section id="install-guide" className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Before Install"
              title="Only the details that actually affect installation come first."
              description="The page stays focused on what can block installation or change user confidence, and moves the rest of the explanation behind that."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {downloadNotesEn.map((item) => (
                <article key={item.title} className="surface-card-soft rounded-[1.8rem] p-6">
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Install Steps"
              title="The install path should stay short and consistent across devices."
              description="Whether someone arrives from a desktop browser or a phone, the same goal and the same next step stay visible."
            />

            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {installStepsEn.map((item, index) => (
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Troubleshooting"
                title="When installation fails, the first checks should be easy to spot."
                description="This section prioritizes the issues that appear most often during demo distribution and starts with the items people can verify on their own."
              />

              <div className="grid gap-4">
                {troubleshootingEn.map((item) => (
                  <article key={item.title} className="surface-card-soft rounded-[1.6rem] p-5">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Quick Answers</p>
              <div className="mt-5 grid gap-4">
                {faqsEn.slice(0, 4).map((item) => (
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
          title="Support and policy links continue in the same design system after installation."
          description="This page works as more than a download gate. It is also the handoff point into support and policy flows when users need them."
          primaryHref="/support"
          primaryLabel="View Support"
          secondaryHref="/privacy"
          secondaryLabel="View Policies"
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
