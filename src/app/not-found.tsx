import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-sand-600)]">404</p>
        <h1 className="font-display mt-5 text-6xl leading-none text-[color:var(--color-ink)]">
          요청하신 페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-8 text-[color:var(--color-muted)]">
          현재 랜딩에서는 서비스 소개, 다운로드, 지원, 정책 페이지를 중심으로 제공하고 있습니다. 필요한 페이지로 다시 이동해 주세요.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[color:var(--color-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--color-sand-700)]"
          >
            홈으로 이동
          </Link>
          <Link
            href="/download"
            className="rounded-full border border-[color:var(--color-line)] bg-white px-5 py-3 text-sm font-medium text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-cream-0)]"
          >
            다운로드 보기
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
