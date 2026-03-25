export type TextSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const heroHighlights = [
  "대화형 체크인",
  "감정 분석 리포트",
  "다음 행동 추천",
  "캘린더 회고",
] as const;

export const heroStats = [
  { label: "체크인 시간", value: "3~5분" },
  { label: "핵심 루프", value: "4단계" },
  { label: "현재 배포", value: "Android Demo" },
] as const;

export const problemPoints = [
  {
    title: "첫 문장에서 멈추는 기록",
    description:
      "일기를 쓰려다가도 첫 문장부터 막히는 순간이 많습니다. Daily Log는 질문으로 시작해 기록의 진입 장벽을 낮춥니다.",
  },
  {
    title: "감정이 남지 않는 회고",
    description:
      "무슨 일이 있었는지 적어도 왜 그랬는지 정리되지 않으면 다시 꺼내 보기가 어렵습니다. 감정과 사건을 함께 읽어주는 구조가 필요합니다.",
  },
  {
    title: "행동으로 이어지지 않는 일기",
    description:
      "기록이 쌓이기만 하고 다음 행동이 없으면 변화로 연결되지 않습니다. Daily Log는 오늘의 상태에 맞는 작은 실천까지 이어줍니다.",
  },
] as const;

export const flowSteps = [
  {
    step: "01",
    title: "대화로 가볍게 시작",
    description: "짧은 질문에 답하듯 하루를 말하면, 쓰기 부담 없이 체크인이 시작됩니다.",
  },
  {
    step: "02",
    title: "AI가 감정과 맥락 정리",
    description: "대화 내용에서 감정의 흐름과 핵심 사건을 추려 이해하기 쉬운 구조로 바꿉니다.",
  },
  {
    step: "03",
    title: "일기와 요약으로 저장",
    description: "그날의 기록을 다시 보기 쉬운 카드와 일기 형태로 정리해 남깁니다.",
  },
  {
    step: "04",
    title: "다음 행동까지 연결",
    description: "오늘의 상태를 바탕으로 바로 실천할 수 있는 추천과 회고 포인트를 제안합니다.",
  },
] as const;

export const featureStories = [
  {
    eyebrow: "Check-in",
    title: "말하듯 시작하는 하루 정리",
    description:
      "텍스트를 길게 작성하지 않아도, 질문에 답하는 흐름만으로 하루를 정리할 수 있습니다. 첫 화면부터 기록이 시작되는 제품 경험이 핵심입니다.",
    supportingPoint: "온보딩 이후 곧바로 체크인 플로우로 이어지는 모바일 중심 구조",
    image: "/images/app-runtime.png",
    imageAlt: "Daily Log 체크인 플로우 화면",
  },
  {
    eyebrow: "Insight",
    title: "감정과 사건이 함께 남는 분석",
    description:
      "하루의 기록을 단순한 메모가 아니라, 감정의 흐름과 의미를 읽을 수 있는 요약으로 바꿔줍니다. 사용자는 다시 보기 쉬운 인사이트를 얻습니다.",
    supportingPoint: "AI 분석 결과와 감정 해석이 함께 보이는 일기 상세 화면",
    image: "/images/app-diary-ai.png",
    imageAlt: "Daily Log AI 분석 화면",
  },
  {
    eyebrow: "Review",
    title: "캘린더로 이어지는 회고 루프",
    description:
      "기록을 하루 단위로 끝내지 않고, 일정과 회고 흐름 안에서 다시 꺼내 볼 수 있게 연결합니다. 축적되는 경험이 Daily Log의 차별점입니다.",
    supportingPoint: "히스토리와 일정 맥락을 함께 확인할 수 있는 회고 경험",
    image: "/images/app-home.png",
    imageAlt: "Daily Log 홈 화면",
  },
] as const;

export const previewCards = [
  {
    title: "홈 화면",
    description: "오늘의 상태와 최근 기록을 한 번에 확인하는 시작 화면",
    image: "/images/app-home.png",
    imageAlt: "Daily Log 홈 화면 스크린샷",
  },
  {
    title: "체크인 진행",
    description: "짧은 질문과 답변으로 하루를 정리하는 핵심 흐름",
    image: "/images/app-runtime.png",
    imageAlt: "Daily Log 체크인 진행 화면 스크린샷",
  },
  {
    title: "AI 분석 카드",
    description: "감정 분석과 다음 행동 추천이 함께 보이는 결과 화면",
    image: "/images/app-diary-ai.png",
    imageAlt: "Daily Log AI 분석 결과 화면 스크린샷",
  },
  {
    title: "일기 상세",
    description: "사진과 메모, 분석 결과를 함께 다시 보는 상세 화면",
    image: "/images/app-diary-photo.png",
    imageAlt: "Daily Log 일기 상세 화면 스크린샷",
  },
] as const;

export const trustPoints = [
  {
    title: "모바일 우선 서비스 설계",
    description:
      "핵심 경험은 앱 안에서 일어나고, 웹은 설치 유도와 서비스 신뢰 형성을 돕는 보조 채널로 설계되어 있습니다.",
  },
  {
    title: "권한과 안내를 분리한 온보딩",
    description:
      "알림, 마이크, 개인정보 동의처럼 민감한 항목은 체크인 흐름과 분리해 설명하고, 사용자가 무엇에 동의하는지 명확히 보여줍니다.",
  },
  {
    title: "정책과 지원 허브를 함께 제공",
    description:
      "개인정보처리방침, 이용약관, 설치 지원 페이지를 같은 랜딩 안에서 연결해 설치 직전의 불안을 줄입니다.",
  },
] as const;

export const valueLoopPillars = [
  {
    title: "첫 사용 직후 가치 체감",
    description:
      "첫 체크인 직후 사용자는 오늘 왜 이 앱을 다시 열어야 하는지 이해해야 합니다. 결과 화면은 감정 요약과 다음 행동, 내일 다시 열 이유까지 줘야 합니다.",
  },
  {
    title: "재방문을 만드는 습관 루프",
    description:
      "리마인더, 연속 기록, 지난 기록 다시 보기, 이번 주 감정 변화 같은 회고 장치가 있어야 기록이 쌓일 이유가 생깁니다.",
  },
  {
    title: "쌓일수록 커지는 개인화 가치",
    description:
      "오늘 기록 하나보다 중요한 것은 축적되는 인사이트입니다. 반복 사건, 흔들리는 시간대, 추천 실행 여부를 묶어 나만의 변화 대시보드로 보여줘야 합니다.",
  },
] as const;

export const roadmapPriorities = [
  {
    eyebrow: "Priority 1",
    title: "첫 세션 종료 화면 고도화",
    summary:
      "지금 가장 먼저 필요한 것은 첫 사용 직후의 가치 체감입니다. 결과 화면이 예쁘기만 해서는 안 되고, 오늘의 정리와 다음 행동을 동시에 줘야 합니다.",
    deliverables: [
      "오늘의 감정 한줄 요약",
      "오늘 꼭 해볼 행동 1개",
      "내일 다시 열 이유 1개",
    ],
  },
  {
    eyebrow: "Priority 2",
    title: "재방문 루프 만들기",
    summary:
      "사용자는 기능 때문에가 아니라 습관과 누적 의미 때문에 남습니다. 다시 열 이유를 UI와 데이터 양쪽에서 설계해야 합니다.",
    deliverables: [
      "리마인더와 연속 기록",
      "지난 기록 다시 보기",
      "이번 주 감정 변화와 On this day 회고",
    ],
  },
  {
    eyebrow: "Priority 3",
    title: "추천 품질을 맥락형으로 개선",
    summary:
      "행동 추천이 generic하면 곧바로 신뢰를 잃습니다. 오늘 기록의 맥락을 반영한 짧고 구체적인 제안이 필요합니다.",
    deliverables: [
      "기록 맥락 기반 추천 문장",
      "추천 피드백: 도움 됨 / 별로였음",
      "추천 품질 개선 루프 수집",
    ],
  },
  {
    eyebrow: "Priority 4",
    title: "신뢰와 데이터 소유권 강화",
    summary:
      "일기 앱은 민감한 데이터 서비스입니다. 기능보다 먼저 안전감과 통제권을 줘야 장기 사용과 과금이 가능합니다.",
    deliverables: [
      "정책 최종본과 AI 처리 범위 설명",
      "계정 삭제와 데이터 내보내기",
      "권한 요청 이유를 앱과 웹 모두에 명시",
    ],
  },
  {
    eyebrow: "Priority 5",
    title: "누적 가치 대시보드 설계",
    summary:
      "장기 사용 가치는 오늘 기록이 아니라, 쌓일수록 나를 더 잘 이해해 주는 서비스라는 약속에서 나옵니다.",
    deliverables: [
      "감정 패턴과 반복 사건 추적",
      "자주 흔들리는 시간대 분석",
      "추천 실행 여부를 묶은 개인 변화 대시보드",
    ],
  },
  {
    eyebrow: "Priority 6",
    title: "과금은 누적 가치 뒤에 연다",
    summary:
      "초기에는 무료 구간의 유용함이 먼저입니다. 유료는 고급 인사이트, 리포트, 검색, 동기화, 백업처럼 축적 가치 중심으로 여는 편이 맞습니다.",
    deliverables: [
      "주간·월간 리포트",
      "고급 검색과 멀티디바이스 동기화",
      "백업·내보내기·맞춤 템플릿",
    ],
  },
] as const;

export const validationPlans = [
  {
    title: "첫 사용자 검증",
    metrics: ["체크인 완료율", "추천 만족도", "다음 날 다시 열 의향"],
  },
  {
    title: "3일 유지 검증",
    metrics: ["D1·D3·D7 재방문", "하루 평균 기록 시간", "추천 실행률"],
  },
  {
    title: "질적 인터뷰",
    metrics: ["기분이 정리됐는지", "다음 행동이 명확해졌는지", "다시 열 이유가 생겼는지"],
  },
  {
    title: "신뢰 검증",
    metrics: ["개인정보 안내 이해도", "삭제/내보내기 기대치", "권한 요청에 대한 불안 지점"],
  },
  {
    title: "과금 검증",
    metrics: ["5~7일 사용 후 지불 의향", "무료/유료 경계 인식", "유료 가치로 느끼는 기능"],
  },
] as const;

export const ownershipChecklist = [
  "정책 최종본 공개",
  "계정 삭제 요청 흐름 제공",
  "데이터 내보내기 준비",
  "AI 처리 범위와 저장 범위 설명",
  "권한 요청 이유를 앱과 웹 모두에 명시",
] as const;

export const paidValueTracks = [
  "고급 인사이트와 변화 리포트",
  "주간·월간 회고 리포트",
  "고급 검색과 회고 필터",
  "멀티디바이스 동기화",
  "백업과 데이터 내보내기",
  "맞춤 템플릿과 개인화 설정",
] as const;

export const faqs = [
  {
    question: "웹에서 Daily Log를 바로 사용할 수 있나요?",
    answer:
      "현재 웹은 서비스 소개, 설치 유도, 지원과 정책 안내를 담당합니다. 실제 체크인과 기록, 분석 경험은 모바일 앱에서 제공됩니다.",
  },
  {
    question: "지금 바로 설치 가능한 플랫폼은 무엇인가요?",
    answer:
      "현재는 Android 데모 APK가 준비되어 있습니다. iPhone용 TestFlight 또는 App Store 배포는 준비가 끝나는 대로 연결할 예정입니다.",
  },
  {
    question: "Daily Log에서 가장 중요한 경험은 무엇인가요?",
    answer:
      "짧은 대화형 체크인으로 하루를 정리하고, 감정을 읽고, 다음 행동까지 이어주는 루프가 핵심입니다. 단순 기록보다 변화로 연결되는 경험에 초점을 맞추고 있습니다.",
  },
  {
    question: "개인정보와 권한은 어떻게 다루나요?",
    answer:
      "데모 단계에서도 개인정보처리방침과 이용약관을 별도 페이지로 제공하고, 권한 요청은 체크인 경험과 분리된 안내 흐름으로 설명합니다.",
  },
  {
    question: "APK 설치 중 경고가 보이면 어떻게 해야 하나요?",
    answer:
      "Android에서는 외부 APK 설치 시 보안 안내가 표시될 수 있습니다. 다운로드 페이지의 설치 가이드를 따라 브라우저 또는 파일 앱의 설치 권한을 허용해 주세요.",
  },
  {
    question: "문의나 계정 삭제 요청은 어디로 보내면 되나요?",
    answer:
      "지원 페이지의 안내에 따라 문의 메일로 접수할 수 있습니다. 설치 환경, 기기 정보, 문제 재현 상황을 함께 보내주면 더 빠르게 확인할 수 있습니다.",
  },
] as const;

export const downloadNotes = [
  {
    title: "Android 우선 배포",
    description:
      "현재 데모 체험은 Android APK 중심으로 제공됩니다. 사용자는 가장 짧은 경로로 실제 제품 흐름을 경험할 수 있습니다.",
  },
  {
    title: "Desktop에서는 QR로 연결",
    description:
      "데스크톱 방문자는 QR 코드를 통해 모바일 설치 흐름으로 바로 이동할 수 있습니다. 설명과 설치 경로를 한 화면에 함께 제공합니다.",
  },
  {
    title: "iPhone은 준비 상태를 명확히 안내",
    description:
      "아직 준비되지 않은 플랫폼은 빈 링크 대신 출시 예정 상태로 안내해 혼란을 줄이고, 신뢰를 해치지 않도록 구성합니다.",
  },
] as const;

export const installSteps = [
  {
    title: "1. 다운로드 페이지 열기",
    description: "Android 기기에서 직접 열거나, 데스크톱에서 QR 코드를 스캔해 모바일로 이동합니다.",
  },
  {
    title: "2. APK 내려받기",
    description: "Android 데모 설치 버튼을 눌러 APK 파일을 내려받습니다.",
  },
  {
    title: "3. 설치 권한 허용",
    description:
      "처음 설치하는 경우 브라우저 또는 파일 앱의 알 수 없는 앱 설치 권한을 허용해야 할 수 있습니다.",
  },
  {
    title: "4. 앱 실행 후 체크인 시작",
    description: "앱을 열고 온보딩을 완료하면 곧바로 Daily Log의 체크인 흐름을 체험할 수 있습니다.",
  },
] as const;

export const troubleshooting = [
  {
    title: "파일이 내려받아지지 않아요",
    description:
      "네트워크 상태와 저장 공간을 먼저 확인해 주세요. 모바일 브라우저의 다운로드 권한이 막혀 있지 않은지도 함께 확인하는 것이 좋습니다.",
  },
  {
    title: "설치 버튼이 비활성처럼 보여요",
    description:
      "iPhone이나 준비되지 않은 배포 채널에서는 실제 설치 대신 상태 안내만 노출됩니다. Android 기기에서 다시 접속하면 설치 흐름을 바로 확인할 수 있습니다.",
  },
  {
    title: "설치 후 실행이 되지 않아요",
    description:
      "지원 OS 버전을 확인하고, 기존 데모 빌드가 설치되어 있다면 삭제 후 다시 시도해 주세요. 문제가 계속되면 지원 페이지의 문의 항목을 함께 보내주세요.",
  },
] as const;

export const supportTracks = [
  {
    title: "설치 문제",
    description: "다운로드, APK 권한, 실행 오류처럼 설치 단계에서 자주 발생하는 이슈를 빠르게 안내합니다.",
    bullets: [
      "Android 10 이상인지 확인",
      "브라우저 또는 파일 앱의 설치 권한 허용",
      "기기 저장 공간과 네트워크 상태 점검",
    ],
  },
  {
    title: "계정 및 로그인",
    description: "데모 계정 생성, 로그인 실패, 계정 삭제 요청처럼 계정 관련 문의를 정리합니다.",
    bullets: [
      "가입한 이메일과 로그인 정보 확인",
      "중복 가입 또는 오타 여부 확인",
      "계정 삭제 요청 시 본인 확인 정보 함께 전달",
    ],
  },
  {
    title: "개인정보와 권한",
    description: "알림, 마이크, 개인정보 동의처럼 민감한 항목은 별도 흐름으로 안내하고, 정책 문서와 연결합니다.",
    bullets: [
      "권한 요청의 목적과 사용 시점 안내",
      "정책 문서와 데모 상태를 함께 고지",
      "데이터 삭제 및 문의 채널 명시",
    ],
  },
] as const;

export const privacySections: TextSection[] = [
  {
    title: "1. 문서 안내",
    paragraphs: [
      "이 문서는 Daily Log 데모 랜딩과 데모 앱 이용을 위한 개인정보처리방침 초안입니다.",
      "정식 공개 전에는 실제 운영 환경, 수집 항목, 보관 기간, 외부 서비스 연동 여부에 맞춰 최종 문안으로 교체되어야 합니다.",
    ],
  },
  {
    title: "2. 수집할 수 있는 정보",
    paragraphs: [
      "Daily Log는 계정 생성과 서비스 이용 과정에서 기본 계정 정보, 권한 동의 상태, 기록 생성 과정에서 발생하는 메타데이터를 처리할 수 있습니다.",
    ],
    bullets: [
      "이메일, 닉네임 등 계정 식별 정보",
      "알림, 마이크, 개인정보 동의 여부",
      "체크인 입력 내용, 요약 결과, 감정 분석 결과",
      "기기 정보, 앱 버전, 오류 대응을 위한 기술 정보",
    ],
  },
  {
    title: "3. 이용 목적",
    paragraphs: [
      "수집된 정보는 계정 관리, 체크인 및 일기 생성, 감정 분석, 행동 추천, 캘린더 회고, 고객 지원과 서비스 품질 개선을 위해 사용됩니다.",
    ],
  },
  {
    title: "4. 보관과 보호",
    paragraphs: [
      "데모 단계에서는 최소한의 운영 정보만 유지하는 방향을 기본 원칙으로 삼고 있습니다.",
      "보관 기간, 접근 권한, 외부 위탁 여부는 정식 운영 정책이 확정되면 문서에 명시되어야 합니다.",
    ],
  },
  {
    title: "5. 이용자의 권리",
    paragraphs: [
      "이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를 요청할 수 있으며, 계정 삭제 요청도 지원 채널을 통해 접수할 수 있습니다.",
    ],
  },
  {
    title: "6. 문의",
    paragraphs: [
      "개인정보처리방침에 대한 문의와 삭제 요청은 지원 채널을 통해 접수할 수 있습니다.",
    ],
  },
];

export const termsSections: TextSection[] = [
  {
    title: "1. 문서 안내",
    paragraphs: [
      "이 문서는 Daily Log 데모 랜딩과 데모 앱 제공을 위한 이용약관 초안입니다.",
      "정식 운영 전에는 실제 서비스 범위, 계정 정책, 책임 제한, 유료 기능 여부에 맞춘 최종 약관으로 교체되어야 합니다.",
    ],
  },
  {
    title: "2. 서비스의 성격",
    paragraphs: [
      "Daily Log는 대화형 체크인, 감정 분석, 행동 추천, 회고 경험을 중심으로 하는 모바일 우선 서비스입니다.",
      "현재 공개된 버전은 데모 성격을 가지며 일부 기능이나 화면, 배포 방식은 변경될 수 있습니다.",
    ],
  },
  {
    title: "3. 계정과 보안",
    paragraphs: [
      "이용자는 정확한 계정 정보를 제공해야 하며, 계정 보안 관리 책임은 이용자에게 있습니다.",
    ],
    bullets: [
      "허위 정보 등록 금지",
      "타인의 계정 또는 정보 무단 사용 금지",
      "서비스 운영을 방해하는 행위 금지",
    ],
  },
  {
    title: "4. 이용 제한",
    paragraphs: [
      "비정상적인 사용, 서비스 안정성을 해치는 행위, 다른 이용자에게 피해를 주는 행위가 확인될 경우 서비스 이용이 제한될 수 있습니다.",
    ],
  },
  {
    title: "5. 지식재산권",
    paragraphs: [
      "서비스 화면, 문구, 디자인, 스크린샷, 코드, 기타 결과물에 대한 권리는 Daily Log 또는 정당한 권리자에게 귀속됩니다.",
    ],
  },
  {
    title: "6. 변경과 종료",
    paragraphs: [
      "데모 버전은 사전 고지 없이 변경되거나 중단될 수 있습니다.",
      "정식 운영 전에는 기능, 지원 정책, 배포 채널, 책임 범위가 재정의될 수 있습니다.",
    ],
  },
  {
    title: "7. 문의",
    paragraphs: [
      "이용약관에 대한 문의는 지원 채널을 통해 접수할 수 있습니다.",
    ],
  },
];
