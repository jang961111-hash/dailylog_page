import { PageCta, PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
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

      <main className="reading-surface flex-1">
        <PageIntro
          eyebrow="Privacy"
          title="Daily Log 개인정보처리방침 초안"
          description="문서 페이지는 설치와 지원 흐름과 분리되지 않도록 같은 디자인 시스템 안에 두었습니다. 현재 문서는 데모 공개용 초안이며, 실제 운영 정책에 맞춘 최종 검토가 필요합니다."
          aside={
            <div className="grid gap-4">
              <div className="surface-card rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">Document Status</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">데모 초안</p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  기준일 {siteConfig.legalUpdatedAt}
                  <br />
                  문의 {siteConfig.contactEmail}
                </p>
              </div>
              <div className="surface-card-soft rounded-[1.8rem] p-6 text-sm leading-7 text-[color:var(--color-muted)]">
                정식 공개 전에는 실제 보관 기간, 외부 연동, 삭제 절차, 국외 이전 여부를 반영해 문안을 최종화해야 합니다.
              </div>
            </div>
          }
        />

        <section className="px-6 py-12">
          <div className="mx-auto grid w-full max-w-4xl gap-5">
            <div className="rounded-[1.5rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/72 px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
              이 문서는 법률 검토 완료본이 아닙니다. 실제 운영 전에는 보관 기간, 위탁 처리, 삭제 절차, 아동 보호 항목 등을 서비스 정책에 맞게 보완해야 합니다.
            </div>

            {privacySections.map((section) => (
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
          eyebrow="Policy Navigation"
          title="법적 문서도 설치와 신뢰 흐름의 일부로 읽히게 유지합니다."
          description="개인정보처리방침을 확인한 뒤 이용약관이나 지원 페이지로 자연스럽게 이어질 수 있도록 구조를 맞췄습니다."
          primaryHref="/terms"
          primaryLabel="이용약관 보기"
          secondaryHref="/support"
          secondaryLabel="지원 보기"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
