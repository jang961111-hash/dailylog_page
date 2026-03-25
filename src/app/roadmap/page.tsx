import Link from "next/link";

import { PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { buildMetadata } from "@/lib/site-config";
import {
  ownershipChecklist,
  paidValueTracks,
  roadmapPriorities,
  validationPlans,
} from "@/lib/site-content";

export const metadata = buildMetadata({
  title: "제품 로드맵",
  description: "Daily Log가 반복 사용되는 서비스가 되기 위해 다음 단계에서 집중할 제품 우선순위와 검증 기준을 정리한 페이지입니다.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <PageIntro
          eyebrow="Roadmap"
          title="한 번 써볼 만한 앱에서, 반복 사용되는 도구로 가는 다음 단계"
          description="Daily Log의 핵심 훅은 이미 분명합니다. 이제는 첫 세션 가치, 재방문 루프, 추천 품질, 신뢰와 데이터 소유권, 누적 가치까지 제품 관점에서 끌어올리는 단계가 필요합니다."
          aside={
            <div className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Current judgment</p>
              <p className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">
                Try first,
                <br />
                earn retention next.
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                지금은 체험 의향은 충분하지만, 장기 사용과 지불 의향은 다음 배치의 제품 품질에서 결정됩니다.
              </p>
            </div>
          }
        />

        <section className="px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Diagnosis"
                title="현재 판단은 명확합니다."
                description="대화형 기록과 감정 해석은 충분히 매력적입니다. 하지만 사용자가 계속 시간을 투자하고, 나중에 돈까지 낼 서비스가 되려면 반복 사용과 누적 가치가 더 강하게 보여야 합니다."
              />

              <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(43,38,32,0.98),rgba(97,69,46,0.96))] p-7 text-white shadow-[0_24px_60px_rgba(55,36,22,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">What changes next</p>
                <h2 className="font-display mt-4 text-4xl leading-none">
                  예쁜 일기 앱보다
                  <br />
                  반복 사용되는 AI 회고 도구로 갑니다.
                </h2>
                <p className="mt-4 text-sm leading-8 text-white/80">
                  다음 단계의 핵심 성공 기준은 다운로드 수가 아니라 첫 세션 만족도, 재방문, 추천 실행, 누적 회고 가치입니다.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {roadmapPriorities.slice(0, 3).map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-sand-600)]">{item.eyebrow}</p>
                  <h3 className="font-display mt-4 text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Priorities"
              title="다음 배치에서 해결해야 할 순서는 이미 정해져 있습니다."
              description="웹보다 앱의 재방문성과 추천 품질에 우선 투자해야 합니다. 아래 우선순위는 그 기준을 제품 실행 언어로 정리한 것입니다."
            />

            <div className="grid gap-5 xl:grid-cols-2">
              {roadmapPriorities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-sand-600)]">{item.eyebrow}</p>
                  <h2 className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-[color:var(--color-muted)]">{item.summary}</p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable} className="rounded-[1rem] bg-[color:var(--color-cream-0)] px-4 py-3">
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Validation"
                title="좋아 보이는 기능보다 먼저 검증할 지표"
                description="다음 단계는 감으로 판단하지 않고, 사용자가 정말 가치 있다고 느끼는지 확인할 수 있는 지표와 인터뷰 질문을 함께 가져가야 합니다."
              />

              <div className="grid gap-4">
                {validationPlans.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_16px_40px_rgba(80,57,38,0.05)]"
                  >
                    <h3 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] px-4 py-2 text-sm text-[color:var(--color-muted)]"
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
              <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-sand-600)]">Trust and ownership</p>
                <h3 className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">
                  민감한 기록 서비스는 기능보다 먼저 신뢰를 줘야 합니다.
                </h3>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {ownershipChecklist.map((item) => (
                    <li key={item} className="rounded-[1rem] bg-[color:var(--color-cream-0)] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,235,223,0.96))] p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-sand-600)]">Monetization</p>
                <h3 className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">
                  과금은 누적 가치 뒤에 열어야 합니다.
                </h3>
                <p className="mt-4 text-sm leading-8 text-[color:var(--color-muted)]">
                  초반에는 무료 구간의 유용함이 먼저입니다. 유료는 축적되는 인사이트와 관리 편의처럼 반복 사용 가치가 분명한 영역에서 여는 편이 맞습니다.
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {paidValueTracks.map((item) => (
                    <li key={item} className="rounded-[1rem] border border-[color:var(--color-line)] bg-white/80 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10 pt-8">
          <div className="mx-auto w-full max-w-7xl rounded-[2.6rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,235,223,0.96))] px-6 py-10 shadow-[0_30px_80px_rgba(80,57,38,0.08)] md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-sand-600)]">Next move</p>
                <h2 className="font-display text-4xl leading-none text-[color:var(--color-ink)] sm:text-5xl">
                  웹은 설치와 신뢰 허브,
                  <br />
                  제품 승부는 모바일에서 봅니다.
                </h2>
                <p className="text-sm leading-8 text-[color:var(--color-muted)]">
                  지금 단계에서 가장 높은 우선순위는 웹의 화려함보다도 첫 세션 가치, 재방문, 추천 품질, 데이터 소유권을 실제 제품 안에서 강하게 만드는 것입니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="inline-flex rounded-full bg-[color:var(--color-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--color-sand-700)]"
                >
                  APK 다운로드
                </Link>
                <Link
                  href="/support"
                  className="inline-flex rounded-full border border-[color:var(--color-line)] bg-white px-5 py-3 text-sm font-medium text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-cream-0)]"
                >
                  지원과 정책 보기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
