import { DeviceDownloadHub } from "@/components/device-download-hub";
import { PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { buildMetadata, siteConfig } from "@/lib/site-config";
import { downloadNotes, faqs, installSteps, troubleshooting } from "@/lib/site-content";

export const metadata = buildMetadata({
  title: "다운로드",
  description: "Android APK 다운로드, QR 연결, 지원 OS, 설치 가이드를 한 번에 확인할 수 있는 Daily Log 다운로드 페이지입니다.",
  path: "/download",
});

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <PageIntro
          eyebrow="Download"
          title="설치 전환에 집중한 Daily Log 다운로드 페이지"
          description="모바일에서는 설치 버튼을 가장 먼저 보여주고, 데스크톱에서는 QR과 설치 안내를 함께 제공합니다. 준비되지 않은 배포 채널은 상태만 명확하게 안내합니다."
          aside={
            <div className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Build info</p>
              <p className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">{siteConfig.release.versionLabel}</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {siteConfig.release.supportedOs}
                <br />
                패키지 크기 {siteConfig.release.fileSize}
                <br />
                업데이트 {siteConfig.release.lastUpdated}
              </p>
            </div>
          }
        />

        <section className="px-6 py-10">
          <div className="mx-auto w-full max-w-7xl">
            <DeviceDownloadHub />
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Before install"
              title="설치 전에 알아두면 좋은 핵심 정보"
              description="이 페이지는 설명을 늘리기보다, 실제 설치 여부에 영향을 주는 정보만 먼저 보여주는 방향으로 구성했습니다."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {downloadNotes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/82 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <h2 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Install guide"
              title="설치 흐름은 짧고 명확해야 합니다."
              description="PC와 모바일 어디에서 들어오더라도 같은 목표로 이어지도록 설치 단계를 4단계로 정리했습니다."
            />

            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {installSteps.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] p-6"
                >
                  <h2 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Troubleshooting"
                title="설치가 막힐 때 가장 먼저 확인할 항목"
                description="데모 단계에서 자주 발생하는 설치 이슈를 중심으로 정리했습니다. 사용자가 스스로 확인할 수 있는 정보부터 먼저 제공합니다."
              />

              <div className="grid gap-4">
                {troubleshooting.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                  >
                    <h2 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-white/86 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Quick answers</p>
              <div className="mt-5 grid gap-4">
                {faqs.slice(0, 4).map((item) => (
                  <details
                    key={item.question}
                    className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] px-5 py-4"
                  >
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
      </main>

      <SiteFooter />
    </div>
  );
}
