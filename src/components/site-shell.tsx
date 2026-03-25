import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site-config";

const navigationItems = [
  { label: "가치", href: "/#why-daily-log" },
  { label: "사용 흐름", href: "/#how-it-works" },
  { label: "다시 열 이유", href: "/#value-loop" },
  { label: "로드맵", href: "/roadmap" },
  { label: "FAQ", href: "/#faq" },
  { label: "다운로드", href: "/download" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--color-surface)]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f5e7d4,#fffdf8)] shadow-[0_16px_36px_rgba(91,63,37,0.12)] ring-1 ring-[color:var(--color-line)]">
            <span className="font-display text-xl leading-none text-[color:var(--color-ink)]">DL</span>
          </span>
          <span className="flex flex-col gap-1">
            <span className="flex items-center gap-2">
              <span className="font-display text-[1.75rem] leading-none text-[color:var(--color-ink)]">
                {siteConfig.name}
              </span>
              <span className="hidden rounded-full bg-[color:var(--color-sand-100)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-sand-700)] sm:inline-flex">
                {siteConfig.release.badge}
              </span>
            </span>
            <span className="hidden text-xs tracking-[0.16em] text-[color:var(--color-muted)] md:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[color:var(--color-muted)] xl:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[color:var(--color-ink)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/support"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-[color:var(--color-muted)] transition hover:bg-white/70 hover:text-[color:var(--color-ink)] md:inline-flex"
          >
            지원
          </Link>
          <a
            href={siteConfig.downloads.androidApk.href ?? "/download"}
            download={siteConfig.downloads.androidApk.download}
            data-cta-id="header-android-apk"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-ink)] px-4 py-2.5 text-sm font-medium text-white shadow-[0_18px_36px_rgba(43,38,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-sand-700)]"
          >
            Android 설치
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white/75">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="inline-flex rounded-full bg-[color:var(--color-sand-100)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-700)]">
              {siteConfig.release.badge}
            </div>
            <h2 className="font-display text-4xl leading-none text-[color:var(--color-ink)]">{siteConfig.name}</h2>
            <p className="max-w-xl text-sm leading-8 text-[color:var(--color-muted)]">
              {siteConfig.tagline}. 웹은 서비스 소개와 설치 유도, 정책과 지원 허브에 집중하고, 실제 승부는 모바일 앱의 재방문성과 누적 가치에서 만들어집니다.
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] px-4 py-4 text-sm leading-7 text-[color:var(--color-muted)]">
            <strong className="text-[color:var(--color-ink)]">정식 공개 전 교체 예정 항목</strong>
            <p className="mt-2">
              도메인, 문의 채널, 배포 링크, 정책 최종 문구, OG 이미지와 앱 아이콘은 실제 운영 값으로 교체해야 합니다.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Explore</p>
          <div className="flex flex-col gap-3 text-sm text-[color:var(--color-muted)]">
            <Link href="/download">다운로드</Link>
            <Link href="/roadmap">제품 로드맵</Link>
            <Link href="/support">지원</Link>
            <Link href="/privacy">개인정보처리방침</Link>
            <Link href="/terms">이용약관</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">Operations</p>
          <div className="space-y-3 text-sm leading-7 text-[color:var(--color-muted)]">
            <p>
              문의 채널
              <br />
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-[color:var(--color-ink)]">
                {siteConfig.contactEmail}
              </a>
            </p>
            <p>
              지원 응답 시간
              <br />
              <span className="font-medium text-[color:var(--color-ink)]">{siteConfig.supportResponseTime}</span>
            </p>
            <p>
              정책 초안 기준일
              <br />
              <span className="font-medium text-[color:var(--color-ink)]">{siteConfig.legalUpdatedAt}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl items-center text-center"
      : "max-w-3xl items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-sand-600)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none tracking-[-0.02em] text-[color:var(--color-ink)] sm:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-8 text-[color:var(--color-muted)] sm:text-base">{description}</p>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-8 pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[22rem] bg-[radial-gradient(circle_at_top_left,rgba(249,234,215,0.95),transparent_55%),radial-gradient(circle_at_top_right,rgba(207,160,117,0.18),transparent_34%)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-5">
          <div className="inline-flex rounded-full border border-[color:var(--color-line)] bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--color-sand-700)]">
            {eyebrow}
          </div>
          <h1 className="font-display text-5xl leading-none tracking-[-0.03em] text-[color:var(--color-ink)] sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-sm leading-8 text-[color:var(--color-muted)] sm:text-base">{description}</p>
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--color-line)] bg-white/85 px-4 py-2 text-xs tracking-[0.16em] text-[color:var(--color-sand-700)] shadow-[0_12px_28px_rgba(96,67,43,0.05)]">
      {children}
    </span>
  );
}
