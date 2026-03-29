import Image from "next/image";

import { AppShowcase } from "@/components/app-showcase";
import { HomeDownloadSection } from "@/components/home-download-section";
import { HomeReadingShell } from "@/components/home-reading-shell";
import { MarketingHomePage } from "@/components/marketing-home-page";
import { SiteFooter } from "@/components/site-shell";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata();

export default function HomePage() {
  return (
    <HomeReadingShell>
      <MarketingHomePage
        hero={{
          eyebrow: "Daily Log",
          title: "하루를 쉽게 정리하고, 다시 열고 싶은 기록으로 남겨드릴게요.",
          description:
            "Daily Log는 AI음성으로 대화를 통해 하루를 정리하고, 감정 분석을 통해 사용자의 감정 흐름을 한눈에 보여주는 모바일 중심 AI 기록 서비스입니다.",
          primaryLabel: "다운로드 보기",
          secondaryLabel: "제품 흐름 보기",
          pills: ["3~5분 체크인", "대화형 기록", "AI 요약", "Android APK 제공"],
          cards: [
            { label: "Fast Start", title: "첫 화면에서 바로 설치와 제품 흐름을 읽을 수 있게 구성했습니다." },
            { label: "Clear State", title: "배포 상태와 지원 경로를 같은 화면에서 확인할 수 있습니다." },
            { label: "Return Loop", title: "예쁜 소개보다 다시 열 이유가 남는 구조를 우선합니다." },
          ],
          visual: (
            <AppShowcase
              variant="login"
              alt="Daily Log 로그인과 첫 체크인 화면"
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="h-[31rem] w-full rounded-[1.8rem] sm:h-[34rem]"
            />
          ),
        }}
        scenesSection={{
          eyebrow: "Product Story",
          title: "한 장면씩 읽히는 구조로 앱의 흐름을 빠르게 이해하게 만듭니다.",
          description:
            "Monimo처럼 시야를 넓게 주고, Gemmy처럼 디바이스 장면을 중심에 두되 과한 효과는 줄였습니다. 각 섹션은 메시지 하나와 대표 화면 하나만 강하게 전달합니다.",
        }}
        scenes={[
          {
            id: "scene-checkin",
            eyebrow: "Scene 01",
            title: "시작은 가볍게, 질문은 명확하게.",
            description:
              "하루를 기록해야 한다는 부담보다 먼저, 짧은 대화 흐름으로 들어가게 만드는 것이 중요합니다. 첫 장면은 시작 장벽을 낮추는 체크인 경험에 집중합니다.",
            cards: [
              { title: "짧은 진입", description: "앱을 열고 바로 대화형 체크인을 시작할 수 있게 구성합니다." },
              { title: "낮은 부담", description: "긴 글을 쓰기 전에 질문 한두 개로 오늘의 상태를 정리합니다." },
              { title: "모바일 우선", description: "설치 이후 가장 먼저 보는 장면이 자연스럽게 이어지도록 랜딩과 앱 톤을 맞춥니다." },
              { title: "즉시 이해", description: "로그인 화면에서도 제품이 어떤 흐름인지 바로 읽히게 합니다." },
            ],
            visual: (
              <AppShowcase
                variant="login"
                alt="Daily Log 체크인 시작 화면"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-[28rem] w-full rounded-[1.5rem] sm:h-[32rem]"
              />
            ),
          },
          {
            id: "scene-dashboard",
            eyebrow: "Scene 02",
            title: "달력과 AI가 오늘의 기록을 한눈에 다시 정리합니다.",
            description:
              "체크인 후에는 쌓인 기록이 다시 열 이유가 되어야 합니다. 달력 홈, 감정 흐름, 말풍선 요약처럼 핵심 회고 장면을 하나의 집중 섹션으로 보여줍니다.",
            tone: "dark",
            cards: [
              { title: "한눈에 보는 달력", description: "날짜별 기록 여부와 흐름이 즉시 보이도록 메인 홈을 설계합니다." },
              { title: "말풍선 요약", description: "오늘 남지 않은 기록이나 핵심 상태를 짧은 문장으로 바로 확인합니다." },
              { title: "가벼운 glow", description: "디바이스 뒤쪽에만 약한 halo를 넣어 시선을 집중시키고, 나머지는 절제합니다." },
              { title: "반복 사용 유도", description: "다음 체크인보다 먼저 누적된 기록의 가치를 느끼게 합니다." },
            ],
            visual: (
              <AppShowcase
                variant="dashboard"
                alt="Daily Log 달력 홈과 AI 말풍선 화면"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-[28rem] w-full rounded-[1.5rem] sm:h-[33rem]"
              />
            ),
          },
          {
            id: "scene-ai",
            eyebrow: "Scene 03",
            title: "대화와 장면이 쌓이면, 기록은 다시 꺼내볼 자산이 됩니다.",
            description:
              "사진과 문장, AI 분석이 분리되지 않고 한 흐름에서 이어질 때 회고의 밀도가 높아집니다. 세 번째 장면은 설치 이후 쌓이는 가치와 기록 보관 경험을 강조합니다.",
            cards: [
              { title: "사진 기반 회고", description: "이미지와 텍스트를 함께 남겨 하루의 장면을 더 또렷하게 저장합니다." },
              { title: "AI 해석", description: "감정 변화와 요약 포인트를 사람이 다시 읽기 쉬운 방식으로 정리합니다." },
              { title: "다음 행동", description: "기록이 끝나고 나면 다음에 무엇을 할지까지 자연스럽게 연결합니다." },
              { title: "차분한 보관", description: "불필요한 장식보다 다시 꺼내보기 쉬운 밀도와 구조를 우선합니다." },
            ],
            visual: (
              <Image
                src="/images/app-diary-photo.webp"
                alt="Daily Log 사진 기반 일기와 AI 정리 화면"
                width={1400}
                height={2200}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-[28rem] w-full rounded-[1.5rem] object-cover object-top sm:h-[33rem]"
              />
            ),
          },
        ]}
        values={{
          eyebrow: "Why It Works",
          title: "한 번에 다 설명하지 않아도, 핵심 가치가 빠르게 읽히는 구조입니다.",
          description:
            "홈은 제품의 모든 기능을 나열하지 않습니다. 대신 설치, 반복 사용, 신뢰, 지원 흐름처럼 실제 전환과 재방문에 영향을 주는 요소만 짧게 압축합니다.",
          cards: [
            {
              title: "설치와 이해를 같은 시야 안에 둡니다.",
              description:
                "첫 화면에서 바로 다운로드로 밀어붙이기보다, 설치 이유와 제품 흐름이 함께 읽히는 구성을 만들어 전환의 부담을 줄입니다.",
              tone: "accent",
            },
            {
              title: "메시지는 짧게, 디바이스는 크게.",
              description: "각 장면이 전달하는 메시지를 하나로 줄이고 대표 스크린을 크게 보여주어 정보가 흩어지지 않게 합니다.",
            },
            {
              title: "밝은 베이스 위에 선택적 집중만 더합니다.",
              description: "사이트 전체는 밝고 가벼운 톤을 유지하고, 핵심 장면에만 dark glow를 써서 시선을 모읍니다.",
            },
            {
              title: "지원과 정책도 제품 흐름의 일부로 둡니다.",
              description: "설치 후 막히는 지점, 정책 확인, 로드맵 확인을 모두 같은 네비게이션 안에 배치해 신뢰를 높입니다.",
            },
          ],
        }}
        finalCta={{
          eyebrow: "Ready To Start",
          title: "랜딩은 짧게 읽히고, 실제 설치와 지원은 더 빠르게 이어지게 했습니다.",
          description:
            "지금은 Android APK를 중심으로 가장 짧은 설치 경로를 제공합니다. 더 자세한 가이드, 지원, 정책 문서는 각각의 페이지에서 같은 디자인 흐름으로 이어집니다.",
          primaryLabel: "다운로드 페이지",
          secondaryLabel: "지원 보기",
          footerLinks: [
            { href: "/roadmap", label: "로드맵" },
            { href: "/privacy", label: "개인정보처리방침" },
            { href: "/terms", label: "이용약관" },
          ],
        }}
      />
      <HomeDownloadSection />
      <SiteFooter />
    </HomeReadingShell>
  );
}
