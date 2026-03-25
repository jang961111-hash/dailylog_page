import type { Metadata } from "next";

export type ReleaseStatus = "live" | "demo" | "comingSoon";

type DownloadTarget = {
  status: ReleaseStatus;
  href: string | null;
  label: string;
  description: string;
  ctaId: string;
  download?: boolean;
};

export const siteConfig = {
  name: "Daily Log",
  shortName: "Daily Log",
  tagline: "대화로 하루를 기록하고, 감정을 읽고, 다음 행동까지 이어주는 AI 라이프로그",
  description:
    "Daily Log는 3~5분 대화형 체크인으로 하루를 정리하고, 감정 분석과 행동 추천까지 연결하는 모바일 중심 서비스입니다.",
  baseUrl: "https://dailylog.app",
  ogImage: "/images/app-home.png",
  qrPath: "/download",
  fallbackQrUrl: "https://dailylog.app/download",
  contactEmail: "support@dailylog.app",
  legalUpdatedAt: "2026-03-25",
  supportResponseTime: "영업일 기준 1~2일",
  releaseStatus: "demo" as ReleaseStatus,
  release: {
    badge: "Android Demo",
    versionLabel: "Demo APK v0.1",
    supportedOs: "Android 10 이상 권장",
    fileSize: "약 42.7MB",
    lastUpdated: "2026-03-25",
  },
  downloads: {
    androidApk: {
      status: "demo",
      href: "/downloads/dailylog-demo.apk",
      label: "Android 데모 설치",
      description: "APK를 바로 내려받아 Daily Log의 핵심 체크인 흐름을 체험합니다.",
      ctaId: "android-apk",
      download: true,
    } satisfies DownloadTarget,
    androidPlay: {
      status: "comingSoon",
      href: null,
      label: "Play Store 준비 중",
      description: "정식 배포 채널은 출시 시점에 연결됩니다.",
      ctaId: "android-play",
    } satisfies DownloadTarget,
    ios: {
      status: "comingSoon",
      href: null,
      label: "iPhone 출시 예정",
      description: "TestFlight 또는 App Store 링크가 준비되면 이곳에 연결됩니다.",
      ctaId: "ios",
    } satisfies DownloadTarget,
  },
  replaceBeforeLaunch: [
    "최종 도메인과 baseUrl",
    "문의 이메일 또는 문의 폼",
    "Play Store / TestFlight / App Store 링크",
    "정식 개인정보처리방침 및 이용약관 문안",
    "최종 OG 이미지와 앱 아이콘",
    "정리된 앱 스크린샷과 브랜드 자산",
  ],
} as const;

function makeTitle(title?: string) {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.baseUrl).toString();
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} 앱 미리보기`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  category: "lifestyle",
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = makeTitle(title);
  const pageDescription = description ?? siteConfig.description;

  return {
    title,
    description: pageDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} 앱 미리보기`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}
