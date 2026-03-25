"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import QRCode from "react-qr-code";

import { siteConfig, type ReleaseStatus } from "@/lib/site-config";

type DeviceKind = "android" | "ios" | "desktop" | "compact";

function detectDevice(userAgent: string, viewportWidth: number): DeviceKind {
  const normalized = userAgent.toLowerCase();

  if (normalized.includes("android")) {
    return "android";
  }

  if (normalized.includes("iphone") || normalized.includes("ipad") || normalized.includes("ipod")) {
    return "ios";
  }

  if (viewportWidth < 768) {
    return "compact";
  }

  return "desktop";
}

function statusLabel(status: ReleaseStatus) {
  if (status === "live") {
    return "Live";
  }

  if (status === "demo") {
    return "Demo";
  }

  return "Coming soon";
}

function ActionCard({
  href,
  label,
  description,
  buttonId,
  status,
  priority = "secondary",
  download = false,
}: {
  href: string | null;
  label: string;
  description: string;
  buttonId: string;
  status: ReleaseStatus;
  priority?: "primary" | "secondary";
  download?: boolean;
}) {
  const classes =
    priority === "primary"
      ? "border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-white shadow-[0_18px_40px_rgba(43,38,32,0.22)]"
      : "border-[color:var(--color-line)] bg-white text-[color:var(--color-ink)]";

  if (!href) {
    return (
      <div aria-disabled="true" className={`rounded-[1.5rem] border px-5 py-4 opacity-80 ${classes}`}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">{label}</p>
          <span className="rounded-full bg-black/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-current/75">
            {statusLabel(status)}
          </span>
        </div>
        <p className="mt-2 text-xs leading-6 text-current/75">{description}</p>
      </div>
    );
  }

  return (
    <a
      href={href}
      download={download}
      data-cta-id={buttonId}
      className={`block rounded-[1.5rem] border px-5 py-4 transition hover:-translate-y-0.5 ${classes}`}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold">{label}</p>
        <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-current/75">
          {statusLabel(status)}
        </span>
      </div>
      <p className="mt-2 text-xs leading-6 text-current/80">{description}</p>
    </a>
  );
}

export function DeviceDownloadHub({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  const device = useSyncExternalStore<DeviceKind>(
    (onStoreChange) => {
      window.addEventListener("resize", onStoreChange);
      return () => window.removeEventListener("resize", onStoreChange);
    },
    () => detectDevice(window.navigator.userAgent, window.innerWidth),
    () => "desktop",
  );
  const qrValue = useSyncExternalStore<string>(
    () => () => undefined,
    () => `${window.location.origin}${siteConfig.qrPath}`,
    () => siteConfig.fallbackQrUrl,
  );

  const primaryCta =
    device === "ios"
      ? {
          label: "iPhone 출시 예정",
          description: "현재는 Android 공개 APK 중심으로 제공되며, iPhone 배포 채널은 준비 중입니다.",
          status: siteConfig.downloads.ios.status,
          href: siteConfig.downloads.ios.href,
          buttonId: siteConfig.downloads.ios.ctaId,
          download: false,
        }
      : {
          label: device === "android" ? "이 기기에서 바로 설치" : siteConfig.downloads.androidApk.label,
          description:
            device === "android"
              ? `${siteConfig.release.versionLabel} · ${siteConfig.release.supportedOs}`
              : siteConfig.downloads.androidApk.description,
          status: siteConfig.downloads.androidApk.status,
          href: siteConfig.downloads.androidApk.href,
          buttonId: siteConfig.downloads.androidApk.ctaId,
          download: siteConfig.downloads.androidApk.download,
        };

  const deviceSummary =
    device === "android"
      ? "Android 기기에서 접속 중입니다. 지금 바로 APK를 내려받아 체크인 흐름을 체험할 수 있습니다."
      : device === "ios"
        ? "iPhone에서 접속 중입니다. 현재는 설치 대신 출시 준비 상태를 안내하고, 정식 링크는 추후 연결할 예정입니다."
        : device === "compact"
          ? "좁은 화면에서는 모바일 설치 흐름이 먼저 보이도록 구성했습니다. 데스크톱 브라우저에서도 모바일 전환 구조를 미리 확인할 수 있습니다."
        : "데스크톱에서 접속 중입니다. 설치 설명과 QR 코드를 함께 확인해 모바일로 자연스럽게 이어갈 수 있습니다.";

  return (
    <div
      className={`grid gap-6 rounded-[2.1rem] border border-[color:var(--color-line)] bg-white/90 p-6 shadow-[0_28px_70px_rgba(80,57,38,0.08)] backdrop-blur md:grid-cols-[1.12fr_0.88fr] ${compact ? "md:p-7" : "md:p-8"} ${className}`}
    >
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="inline-flex rounded-full bg-[color:var(--color-sand-100)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-700)]">
            {device === "android"
              ? "Android detected"
              : device === "ios"
                ? "iPhone detected"
                : device === "compact"
                  ? "Mobile-sized view"
                  : "Desktop mode"}
          </div>
          <h3 className="font-display text-3xl leading-none tracking-[-0.02em] text-[color:var(--color-ink)]">
            설치 흐름은 짧게, 안내는 분명하게 구성했습니다.
          </h3>
          <p className="text-sm leading-7 text-[color:var(--color-muted)]">{deviceSummary}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <ActionCard
            href={primaryCta.href}
            label={primaryCta.label}
            description={primaryCta.description}
            buttonId={primaryCta.buttonId}
            status={primaryCta.status}
            priority="primary"
            download={primaryCta.download}
          />
          <ActionCard
            href={siteConfig.downloads.androidPlay.href}
            label={siteConfig.downloads.androidPlay.label}
            description={siteConfig.downloads.androidPlay.description}
            buttonId={siteConfig.downloads.androidPlay.ctaId}
            status={siteConfig.downloads.androidPlay.status}
          />
          <ActionCard
            href={siteConfig.downloads.ios.href}
            label={siteConfig.downloads.ios.label}
            description={siteConfig.downloads.ios.description}
            buttonId={siteConfig.downloads.ios.ctaId}
            status={siteConfig.downloads.ios.status}
          />
          <div className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] px-5 py-4">
            <p className="text-sm font-semibold text-[color:var(--color-ink)]">설치가 막힐 때</p>
            <p className="mt-2 text-xs leading-6 text-[color:var(--color-muted)]">
              OS 버전, 설치 권한, 저장 공간을 먼저 확인해 주세요. 해결되지 않으면 지원 페이지에서 설치 가이드를 확인할 수 있습니다.
            </p>
            <Link
              href="/support"
              className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-sand-700)]"
            >
              Support guide
            </Link>
          </div>
        </div>

        <div className="grid gap-3 rounded-[1.5rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-cream-0)] p-4 text-sm text-[color:var(--color-muted)] sm:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-sand-600)]">Build</p>
            <p className="mt-1 font-semibold text-[color:var(--color-ink)]">{siteConfig.release.versionLabel}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-sand-600)]">Support</p>
            <p className="mt-1 font-semibold text-[color:var(--color-ink)]">{siteConfig.release.supportedOs}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-sand-600)]">Package</p>
            <p className="mt-1 font-semibold text-[color:var(--color-ink)]">{siteConfig.release.fileSize}</p>
          </div>
        </div>
      </div>

      {device === "desktop" ? (
        <div className="flex flex-col gap-4 rounded-[1.8rem] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,242,234,0.98))] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">
            Desktop assist
          </p>
          <div className="flex flex-1 items-center justify-center rounded-[1.5rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(217,190,155,0.6)]">
            <div className="w-full max-w-[190px]">
              <QRCode size={256} value={qrValue} className="h-auto w-full" bgColor="transparent" fgColor="#2B2620" />
            </div>
          </div>
          <div className="space-y-2 text-sm leading-7 text-[color:var(--color-muted)]">
            <p className="font-semibold text-[color:var(--color-ink)]">모바일로 바로 넘기기</p>
            <p>
              QR 코드는 현재 사이트의 <span className="font-semibold">/download</span> 페이지로 연결됩니다. 설치 가이드와 APK 버튼을 같은 흐름 안에서 볼 수 있습니다.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-[1.8rem] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,242,234,0.98))] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand-600)]">
            Mobile note
          </p>
          <p className="mt-4 font-semibold text-[color:var(--color-ink)]">모바일에서는 설치 경로를 가장 먼저 보여줍니다.</p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
            복잡한 설명보다 실제 설치 버튼과 현재 배포 상태를 먼저 확인할 수 있도록 구성했습니다. 준비되지 않은 플랫폼은 상태만 안내하고 빈 링크는 노출하지 않습니다.
          </p>
        </div>
      )}
    </div>
  );
}
