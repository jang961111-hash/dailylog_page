import Image from "next/image";
import Link from "next/link";

import { DeviceDownloadHub } from "@/components/device-download-hub";
import { Pill, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { buildMetadata, siteConfig } from "@/lib/site-config";
import {
  faqs,
  featureStories,
  flowSteps,
  heroHighlights,
  heroStats,
  previewCards,
  problemPoints,
  roadmapPriorities,
  trustPoints,
  valueLoopPillars,
} from "@/lib/site-content";

export const metadata = buildMetadata();

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pb-20 pt-12 sm:pt-20">
          <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="inline-flex rounded-full border border-[color:var(--color-line)] bg-white/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-700)]">
                  {siteConfig.release.badge}
                </div>
                <h1 className="font-display max-w-4xl text-5xl leading-none tracking-[-0.04em] text-[color:var(--color-ink)] sm:text-6xl lg:text-7xl">
                  대화로 하루를 기록하고,
                  <br />
                  내일의 행동까지 이어가세요.
                </h1>
                <p className="max-w-2xl text-sm leading-8 text-[color:var(--color-muted)] sm:text-base">
                  {siteConfig.description} 웹에서는 서비스 구조와 앱 화면을 먼저 확인하고, 모바일에서는 가장 짧은 경로로 설치까지 이어지도록 설계했습니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.downloads.androidApk.href ?? "/download"}
                  download={siteConfig.downloads.androidApk.download}
                  data-cta-id="hero-android-apk"
                  className="glow-card inline-flex items-center justify-center rounded-full bg-[color:var(--color-ink)] px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--color-sand-700)]"
                >
                  Android APK 다운로드
                </a>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/80 px-6 py-4 text-sm font-medium text-[color:var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  흐름 먼저 보기
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-white/80 px-5 py-5 shadow-[0_18px_44px_rgba(80,57,38,0.06)]"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-sand-600)]">{item.label}</p>
                    <p className="font-display mt-3 text-4xl leading-none text-[color:var(--color-ink)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-4xl">
              <div className="pointer-events-none absolute -left-2 top-10 hidden rounded-[1.5rem] border border-[color:var(--color-line)] bg-white/88 px-5 py-4 shadow-[0_18px_42px_rgba(80,57,38,0.08)] lg:block floating-card">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-sand-600)]">Core loop</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--color-ink)]">
                  대화
                  <br />
                  분석
                  <br />
                  추천
                  <br />
                  회고
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.04fr_0.96fr]">
                <figure className="relative overflow-hidden rounded-[2.2rem] border border-[color:var(--color-line)] bg-white/90 p-3 shadow-[0_28px_70px_rgba(80,57,38,0.12)] sm:row-span-2">
                  <Image
                    src="/images/app-runtime.png"
                    alt="Daily Log 체크인 진행 화면"
                    width={1400}
                    height={2200}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="h-full w-full rounded-[1.6rem] object-cover"
                  />
                </figure>

                <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,240,231,0.96))] p-5 shadow-[0_20px_50px_rgba(80,57,38,0.08)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-sand-600)]">Why it feels different</p>
                  <h2 className="font-display mt-4 text-3xl leading-none text-[color:var(--color-ink)]">
                    기록만 남기지 않고,
                    <br />
                    변화까지 설계합니다.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                    Daily Log는 감정 분석과 다음 행동 추천까지 하나의 루프로 설계해, 일기가 끝이 아니라 다음 하루를 준비하는 도구가 되도록 만듭니다.
                  </p>
                </div>

                <figure className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-white/90 p-3 shadow-[0_20px_50px_rgba(80,57,38,0.08)]">
                  <Image
                    src="/images/app-diary-ai.png"
                    alt="Daily Log AI 분석 결과 화면"
                    width={1200}
                    height={1800}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 24vw"
                    className="h-full w-full rounded-[1.5rem] object-cover object-top"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="why-daily-log" className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Why Daily Log"
              title="처음 만나는 사용자도 바로 이해할 수 있어야 합니다."
              description="Daily Log가 해결하려는 문제는 거창하지 않습니다. 기록은 어렵고, 감정은 정리되지 않고, 일상은 행동으로 잘 이어지지 않는다는 아주 현실적인 문제입니다."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {problemPoints.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-[color:var(--color-line)] bg-white/82 p-7 shadow-[0_18px_48px_rgba(80,57,38,0.06)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">
                    Problem 0{index + 1}
                  </p>
                  <h2 className="font-display mt-4 text-4xl leading-none text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="How it works"
                title="대화에서 분석까지, 앱의 핵심 루프를 짧게 이해할 수 있습니다."
                description="서비스의 설명만으로 끝내지 않고, 실제 앱 화면과 함께 핵심 흐름을 보여줘 사용자가 설치 전에 구조를 이해할 수 있게 합니다."
              />

              <div className="grid gap-4">
                {flowSteps.map((item) => (
                  <article
                    key={item.step}
                    className="rounded-[1.7rem] border border-[color:var(--color-line)] bg-white/80 px-5 py-5 shadow-[0_14px_34px_rgba(80,57,38,0.05)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-sand-100)] text-sm font-semibold text-[color:var(--color-sand-700)]">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <figure className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-white/88 p-3 shadow-[0_22px_60px_rgba(80,57,38,0.08)]">
                <Image
                  src="/images/app-runtime.png"
                  alt="Daily Log 체크인 진행 화면"
                  width={1400}
                  height={2200}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-[32rem] w-full rounded-[1.6rem] object-cover object-top"
                />
              </figure>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-sand-600)]">Product note</p>
                  <h3 className="font-display mt-4 text-3xl leading-none text-[color:var(--color-ink)]">짧은 설명보다 실제 화면이 먼저 보이게</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                    랜딩 첫 인상에서 앱이 어떤 제품인지 바로 드러나도록, 스크린샷과 기능 설명을 함께 묶었습니다.
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-white/82 p-6 shadow-[0_16px_42px_rgba(80,57,38,0.05)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-sand-600)]">Trust signal</p>
                  <h3 className="font-display mt-4 text-3xl leading-none text-[color:var(--color-ink)]">설치 전 불안을 줄이는 정보 구조</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                    다운로드, 정책, 지원을 한 흐름 안에 배치해 사용자가 설치 직전 필요한 정보를 빠르게 찾을 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="preview" className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
            <SectionHeading
              eyebrow="Product proof"
              title="앱 프리뷰를 중심에 두고 제품의 차별점을 설명합니다."
              description="감성적인 분위기만 전달하는 랜딩이 아니라, 실제 화면과 결과 중심 카피로 Daily Log가 어떤 제품인지 명확하게 보여줍니다."
            />

            <div className="grid gap-8">
              {featureStories.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-6 rounded-[2.2rem] border border-[color:var(--color-line)] bg-white/82 p-5 shadow-[0_20px_52px_rgba(80,57,38,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-6"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    <div className="overflow-hidden rounded-[1.8rem] border border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] p-3">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={1400}
                        height={2200}
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 32vw"
                        className="h-[28rem] w-full rounded-[1.4rem] object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className={`space-y-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">
                      {item.eyebrow}
                    </p>
                    <h2 className="font-display text-4xl leading-none text-[color:var(--color-ink)] sm:text-5xl">{item.title}</h2>
                    <p className="text-sm leading-8 text-[color:var(--color-muted)] sm:text-base">{item.description}</p>
                    <div className="rounded-[1.5rem] bg-[color:var(--color-cream-0)] px-5 py-4 text-sm leading-7 text-[color:var(--color-muted)]">
                      <strong className="text-[color:var(--color-ink)]">제품 증거</strong>
                      <p className="mt-2">{item.supportingPoint}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-4">
              {previewCards.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.9rem] border border-[color:var(--color-line)] bg-white/84 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <div className="border-b border-[color:var(--color-line)] px-5 py-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-sand-600)]">App preview</p>
                    <h3 className="font-display mt-3 text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                  </div>
                  <div className="bg-[color:var(--color-cream-0)] p-3">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={1200}
                      height={1800}
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 22vw"
                      className="h-[24rem] w-full rounded-[1.3rem] object-cover object-top"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="value-loop" className="px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Why users come back"
                title="이 서비스가 시간을 계속 받을 수 있으려면 다시 열 이유가 보여야 합니다."
                description="지금의 핵심 훅은 충분히 매력적이지만, 장기 사용과 지불 의향은 결국 반복 사용 루프와 누적 가치에서 결정됩니다."
              />

              <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(43,38,32,0.98),rgba(97,69,46,0.96))] p-7 text-white shadow-[0_24px_60px_rgba(55,36,22,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Current verdict</p>
                <h2 className="font-display mt-4 text-4xl leading-none">
                  한 번은 써볼 만하지만,
                  <br />
                  오래 쓰게 만들 이유는 다음 배치에서 만듭니다.
                </h2>
                <p className="mt-4 text-sm leading-8 text-white/80">
                  Daily Log는 대화형 기록과 감정 해석이라는 훅은 분명합니다. 이제는 첫 세션 가치, 재방문 루프, 데이터 소유권, 누적 인사이트를 더해 실제로 남게 만드는 단계가 필요합니다.
                </p>
                <Link
                  href="/roadmap"
                  className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-cream-0)]"
                >
                  제품 로드맵 보기
                </Link>
              </div>
            </div>

            <div className="grid gap-5">
              {valueLoopPillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-white/82 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <h3 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="Next up"
              title="다음 단계는 웹보다도 제품 재방문성과 추천 품질에 집중합니다."
              description="웹은 계속 설치와 신뢰 허브 역할을 맡고, 제품 투자는 앱의 첫 세션 가치, 반복 사용 루프, 신뢰와 데이터 소유권 강화에 우선 배정합니다."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {roadmapPriorities.slice(0, 3).map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-[color:var(--color-line)] bg-white/84 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-sand-600)]">{item.eyebrow}</p>
                  <h3 className="font-display mt-4 text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.summary}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--color-muted)]">
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
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Trust"
                title="설치 유도만큼 중요한 것은 신뢰를 잃지 않는 정보 설계입니다."
                description="데모 단계라도 서비스처럼 보여야 합니다. 그래서 권한, 정책, 지원 정보를 같은 경험 안에서 자연스럽게 연결했습니다."
              />

              <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(43,38,32,0.98),rgba(97,69,46,0.96))] p-7 text-white shadow-[0_24px_60px_rgba(55,36,22,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Demo status</p>
                <h2 className="font-display mt-4 text-4xl leading-none">정직한 데모 표기와 운영형 구조를 함께 유지합니다.</h2>
                <p className="mt-4 text-sm leading-8 text-white/80">
                  현재는 Android 공개 APK 중심의 배포지만, 정책과 지원, 설치 안내를 정식 서비스처럼 정리해 사용자 신뢰를 해치지 않도록 구성했습니다.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/privacy" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/16">
                    개인정보처리방침
                  </Link>
                  <Link href="/terms" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/16">
                    이용약관
                  </Link>
                  <Link href="/support" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/16">
                    지원 허브
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {trustPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-white/82 p-6 shadow-[0_18px_48px_rgba(80,57,38,0.05)]"
                >
                  <h3 className="font-display text-3xl leading-none text-[color:var(--color-ink)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow="FAQ"
              title="설치 전, 가장 많이 묻는 질문부터 빠르게 정리했습니다."
              description="처음 방문한 사용자도 궁금한 점을 바로 해결할 수 있어야 전환이 이어집니다. 설치, 플랫폼 상태, 정책, 문의 흐름을 한곳에 모았습니다."
              align="center"
            />

            <div className="mx-auto grid w-full max-w-4xl gap-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.5rem] border border-[color:var(--color-line)] bg-white/86 px-5 py-4 shadow-[0_14px_36px_rgba(80,57,38,0.05)]"
                >
                  <summary className="cursor-pointer list-none text-left text-base font-semibold text-[color:var(--color-ink)]">
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

        <section className="px-6 pb-10 pt-8">
          <div className="mx-auto w-full max-w-7xl rounded-[2.6rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,235,223,0.96))] px-6 py-10 shadow-[0_30px_80px_rgba(80,57,38,0.08)] md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-sand-600)]">Final CTA</p>
                <h2 className="font-display text-4xl leading-none text-[color:var(--color-ink)] sm:text-5xl">
                  설명은 충분히 짧게,
                  <br />
                  설치 흐름은 충분히 분명하게.
                </h2>
                <p className="text-sm leading-8 text-[color:var(--color-muted)]">
                  Daily Log의 Android APK 다운로드, 지원 페이지, 정책 문서를 한 번에 확인할 수 있습니다. 지금은 공개 APK 중심 배포 단계이며, 공개형 서비스처럼 다듬은 랜딩 구조를 기준으로 설계했습니다.
                </p>
              </div>
              <DeviceDownloadHub compact className="bg-white/95" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
