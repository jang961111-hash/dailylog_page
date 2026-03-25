import { PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { buildMetadata, siteConfig } from "@/lib/site-config";
import { faqs, supportTracks } from "@/lib/site-content";

export const metadata = buildMetadata({
  title: "지원",
  description: "설치 문제, 계정 문의, 개인정보 요청, 데모 운영 안내를 확인할 수 있는 Daily Log 지원 페이지입니다.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <PageIntro
          eyebrow="Support"
          title="설치부터 계정까지, 필요한 지원 정보를 한곳에 모았습니다."
          description="Daily Log 웹은 단순한 소개 페이지가 아니라 지원 허브 역할도 함께 담당합니다. 설치 문제, 계정 문의, 개인정보 요청처럼 자주 필요한 흐름을 이 페이지에서 바로 확인할 수 있습니다."
          aside={
            <div className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Contact</p>
              <p className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">지원 채널</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-4 inline-flex text-sm font-medium text-[color:var(--color-ink)]"
              >
                {siteConfig.contactEmail}
              </a>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                응답 시간 {siteConfig.supportResponseTime}
              </p>
            </div>
          }
        />

        <section className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Support tracks"
              title="문제 유형별로 빠르게 찾을 수 있게 정리했습니다."
              description="설치, 계정, 개인정보와 권한 흐름을 분리해 사용자가 지금 필요한 안내만 바로 확인할 수 있도록 구성했습니다."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {supportTracks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <h2 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--color-muted)]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-[1rem] bg-[color:var(--color-cream-0)] px-4 py-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,235,223,0.96))] p-7 shadow-[0_20px_52px_rgba(80,57,38,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Before you contact us</p>
              <h2 className="font-display text-4xl leading-none text-[color:var(--color-ink)]">
                문의 전에 이 정보만 함께 보내주셔도 해결 속도가 훨씬 빨라집니다.
              </h2>
              <p className="text-sm leading-8 text-[color:var(--color-muted)]">
                설치 문제, 계정 삭제 요청, 정책 문의는 모두 지원 메일로 접수할 수 있습니다. 다만 문제 상황을 정확히 확인할 수 있도록 기본 정보를 함께 보내는 것이 좋습니다.
              </p>
              <div className="rounded-[1.4rem] bg-white/80 px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
                <strong className="text-[color:var(--color-ink)]">함께 보내면 좋은 정보</strong>
                <p className="mt-3">사용 기기명, Android 버전, 문제 발생 시점, 설치 화면 캡처, 재현 순서를 함께 보내주세요.</p>
              </div>
              <div className="rounded-[1.4rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
                계정 삭제나 개인정보 요청은 본인 확인이 가능한 기본 계정 정보와 함께 접수해 주세요.
              </div>
            </div>

            <div className="grid gap-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-white/86 px-5 py-4"
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
