import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { buildMetadata, siteConfig } from "@/lib/site-config";
import { privacySections } from "@/lib/site-content";

export const metadata = buildMetadata({
  title: "개인정보처리방침",
  description: "Daily Log 데모 버전의 개인정보처리방침 초안을 확인할 수 있는 페이지입니다.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <PageIntro
          eyebrow="Privacy"
          title="Daily Log 개인정보처리방침 초안"
          description="이 문서는 데모 버전 공개를 위한 구조와 항목을 정리한 초안입니다. 정식 공개 전에는 실제 운영 환경과 보관 정책, 외부 서비스 연동 여부에 맞춰 최종 문안으로 교체되어야 합니다."
          aside={
            <div className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Draft status</p>
              <p className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">Demo draft</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                기준일 {siteConfig.legalUpdatedAt}
                <br />
                문의 {siteConfig.contactEmail}
              </p>
            </div>
          }
        />

        <section className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-5xl gap-5">
            <div className="rounded-[1.6rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
              이 문서는 법률 검토 완료본이 아닙니다. 정식 운영 전에는 보관 기간, 국외 이전 여부, 위탁 처리, 아동 보호, 삭제 절차 등을 실제 서비스 정책에 맞게 보완해야 합니다.
            </div>

            {privacySections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-white/86 px-6 py-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
              >
                <h2 className="font-display text-4xl leading-none text-[color:var(--color-ink)]">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-[color:var(--color-muted)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-[1rem] bg-[color:var(--color-cream-0)] px-4 py-3">
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
      </main>

      <SiteFooter />
    </div>
  );
}
