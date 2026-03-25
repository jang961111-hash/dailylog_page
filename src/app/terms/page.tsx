import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { buildMetadata, siteConfig } from "@/lib/site-config";
import { termsSections } from "@/lib/site-content";

export const metadata = buildMetadata({
  title: "이용약관",
  description: "Daily Log 데모 버전의 이용약관 초안을 확인할 수 있는 페이지입니다.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <PageIntro
          eyebrow="Terms"
          title="Daily Log 이용약관 초안"
          description="이 문서는 데모 버전과 랜딩 사이트 공개를 위해 구성한 이용약관 초안입니다. 정식 운영 전에는 실제 서비스 범위, 계정 정책, 책임 제한, 배포 조건에 맞춘 최종 약관으로 교체되어야 합니다."
          aside={
            <div className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Draft status</p>
              <p className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">Demo only</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                최종 공개 전 정식 약관으로 교체가 필요합니다.
              </p>
            </div>
          }
        />

        <section className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-5xl gap-5">
            <div className="rounded-[1.6rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
              서비스 성격, 이용 제한, 책임 범위, 정책 변경 고지 방식 등은 실제 운영 형태에 맞춰 재검토가 필요합니다. 현재 문서는 구조와 항목을 먼저 정리한 초안입니다.
            </div>

            {termsSections.map((section) => (
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

            <div className="rounded-[1.6rem] border border-[color:var(--color-line)] bg-white/86 px-6 py-6 text-sm leading-8 text-[color:var(--color-muted)] shadow-[0_18px_48px_rgba(80,57,38,0.05)]">
              문의 메일:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-[color:var(--color-ink)]">
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
