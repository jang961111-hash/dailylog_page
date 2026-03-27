export type HomeSectionId =
  | "hero"
  | "why-daily-log"
  | "how-it-works"
  | "preview"
  | "value-loop"
  | "trust"
  | "faq"
  | "home-cta";

export type HomeNavGroup = "value" | "flow" | "return" | "faq";

export const homeReadingSections = [
  { id: "hero", label: "소개", navGroup: "value" },
  { id: "why-daily-log", label: "왜 Daily Log인가", navGroup: "value" },
  { id: "how-it-works", label: "사용 흐름", navGroup: "flow" },
  { id: "preview", label: "제품 미리보기", navGroup: "flow" },
  { id: "value-loop", label: "다시 열 이유", navGroup: "return" },
  { id: "trust", label: "신뢰 설계", navGroup: "return" },
  { id: "faq", label: "자주 묻는 질문", navGroup: "faq" },
  { id: "home-cta", label: "다운로드 안내", navGroup: "faq" },
] as const;

export const homeHeroHighlights = [
  "3~5분 체크인",
  "감정 요약",
  "다음 행동 제안",
] as const;

export const homeHeroNote = {
  eyebrow: "오늘의 체크인",
  title: "기록이 막히지 않도록, 질문이 먼저 말을 꺼냅니다.",
  description: "빈 화면 대신 짧은 질문으로 시작해 감정과 맥락, 다음 행동까지 자연스럽게 정리합니다.",
} as const;

export const homeWhyPoints = [
  {
    title: "부담 없이 시작합니다",
    description: "긴 글을 쓰지 않아도 됩니다. Daily Log는 질문으로 대화를 시작해 기록의 첫 문장을 대신 열어줍니다.",
  },
  {
    title: "감정과 맥락을 함께 남깁니다",
    description: "무슨 일이 있었는지뿐 아니라 왜 그렇게 느꼈는지를 함께 정리해, 나중에 다시 읽을 때도 흐름이 이어집니다.",
  },
  {
    title: "다음 행동까지 연결합니다",
    description: "기록에서 멈추지 않고 오늘의 상태에 맞는 작은 실천으로 이어지게 도와줍니다.",
  },
] as const;

export const homeStoryMoments = [
  {
    eyebrow: "부담 없이 시작하는 체크인",
    title: "짧은 질문만 따라가도 하루가 정리됩니다.",
    description:
      "Daily Log는 사용자가 무엇부터 써야 할지 고민하지 않도록 질문으로 대화를 이끕니다. 기록이 막히는 순간을 줄이고, 가볍게 시작할 수 있게 돕습니다.",
    image: "/images/app-runtime.webp",
    imageAlt: "Daily Log 체크인 진행 화면",
  },
  {
    eyebrow: "감정과 맥락이 정리되는 분석",
    title: "흩어진 감정을 요약해 다시 읽기 쉬운 기록으로 남깁니다.",
    description:
      "대화 내용을 바탕으로 감정과 사건의 맥락을 함께 정리해 줍니다. 하루를 한 번 더 들여다볼 때도 무엇이 남았는지 빠르게 이해할 수 있습니다.",
    image: "/images/app-diary-ai.webp",
    imageAlt: "Daily Log 감정 분석 화면",
  },
  {
    eyebrow: "다시 꺼내보게 되는 회고",
    title: "하루가 지나도 다시 열어볼 만한 회고로 정돈됩니다.",
    description:
      "사진과 메모, 요약을 한 장면처럼 묶어 주기 때문에 기록이 쌓일수록 다시 읽는 경험도 더 좋아집니다. 하루를 흘려보내지 않고, 축적되는 감각을 남깁니다.",
    image: "/images/app-diary-photo.webp",
    imageAlt: "Daily Log 기록 상세 화면",
  },
] as const;

export const homeFeatureShowcase = {
  eyebrow: "제품 미리보기",
  title: "하루의 기록이 한 장면씩 정돈됩니다.",
  description:
    "질문으로 시작한 기록이 요약, 회고, 다시 보기까지 이어지도록 화면 흐름을 정리했습니다. 홈에서는 제품의 핵심 구조만 짧게 보여주고, 자세한 설치와 지원 안내는 별도 페이지로 연결합니다.",
  image: "/images/app-home.webp",
  imageAlt: "Daily Log 홈 화면",
  cards: [
    {
      title: "자동 정리",
      description: "오늘의 상태와 최근 기록을 한눈에 볼 수 있게 홈 화면을 정리합니다.",
    },
    {
      title: "감정 요약",
      description: "하루의 감정을 다시 읽기 쉬운 언어로 정리해 줍니다.",
    },
    {
      title: "회고",
      description: "하루가 지나도 다시 꺼내볼 수 있도록 기록을 장면처럼 묶습니다.",
    },
    {
      title: "개인정보 보호",
      description: "정책과 지원 안내를 함께 두어 설치 전에도 신뢰를 확인할 수 있습니다.",
    },
  ],
} as const;

export const homeValueCards = [
  {
    title: "하루가 쌓일수록 다시 열 이유가 많아집니다.",
    description:
      "Daily Log의 가치는 첫 기록보다 반복해서 다시 열어보는 경험에서 더 커집니다. 주간 흐름과 감정의 변화, 다시 읽을 만한 장면이 남아야 서비스의 의미가 생깁니다.",
  },
  {
    title: "주간 흐름 요약",
    description: "기록이 하루 단위에 머물지 않고, 며칠의 흐름으로 이어지게 설계합니다.",
  },
  {
    title: "생활 맥락과 맞는 제안",
    description: "오늘의 기분과 상황을 바탕으로 무리 없는 다음 행동을 제안합니다.",
  },
  {
    title: "다음 배치는 재방문 경험에 집중",
    description: "로드맵도 첫 인상보다 다시 열게 만드는 구조와 누적 가치에 우선순위를 둡니다.",
  },
] as const;

export const homeTrustPoints = [
  {
    title: "Android APK로 바로 체험",
    description: "현재는 Android APK를 가장 짧은 경로로 제공해 실제 제품 흐름을 바로 확인할 수 있게 했습니다.",
  },
  {
    title: "정책과 지원을 함께 안내",
    description: "설치만 강조하지 않고 개인정보처리방침, 이용약관, 지원 페이지를 같은 흐름 안에서 함께 보여줍니다.",
  },
  {
    title: "모바일 중심 안내 구조",
    description: "데스크톱에서는 QR로 연결하고, 모바일에서는 설치 버튼을 먼저 보여 주는 방식으로 경로를 단순화했습니다.",
  },
] as const;
