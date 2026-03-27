import type { HomeNavGroup, HomeSectionId } from "@/lib/site-content";

type ReadingSection = {
  id: HomeSectionId;
  label: string;
  navGroup: HomeNavGroup;
};

export const homeReadingSectionsEn = [
  { id: "hero", label: "Introduction", navGroup: "value" },
  { id: "why-daily-log", label: "Why Daily Log", navGroup: "value" },
  { id: "how-it-works", label: "Check-in Flow", navGroup: "flow" },
  { id: "preview", label: "Product Preview", navGroup: "flow" },
  { id: "value-loop", label: "Why You Come Back", navGroup: "return" },
  { id: "trust", label: "Trust & Guidance", navGroup: "return" },
  { id: "faq", label: "FAQ", navGroup: "faq" },
  { id: "home-cta", label: "Download Guide", navGroup: "faq" },
] as const satisfies readonly ReadingSection[];

export const homeHeroHighlightsEn = [
  "3-5 minute check-ins",
  "Mood summaries",
  "A next step that feels doable",
] as const;

export const homeHeroNoteEn = {
  eyebrow: "Today’s check-in",
  title: "A few gentle prompts are enough to help the day settle into words.",
  description:
    "Instead of dropping you into a blank journal, Daily Log starts with short questions and turns the answer into a clean reflection.",
} as const;

export const homeWhyPointsEn = [
  {
    title: "Start without pressure",
    description:
      "You do not need to open with a perfect sentence. Daily Log begins with prompts, so the first line appears naturally instead of asking you to build momentum alone.",
  },
  {
    title: "See the feeling behind the day",
    description:
      "It is not only about listing what happened. The product helps organize the mood and context behind the day, so the reflection still makes sense when you return later.",
  },
  {
    title: "Leave with a next step",
    description:
      "The goal is not to stop at journaling. Daily Log helps connect the reflection to one small action that still feels realistic for today.",
  },
] as const;

export const homeStoryMomentsEn = [
  {
    eyebrow: "A check-in that starts gently",
    title: "Follow a few short prompts and the day starts to organize itself.",
    description:
      "Daily Log removes the pressure of figuring out where to begin. The prompt flow keeps the first interaction light, so the reflection starts feeling useful before it feels heavy.",
    image: "/images/app-runtime.webp",
    imageAlt: "Daily Log check-in screen",
  },
  {
    eyebrow: "Analysis that keeps the context intact",
    title: "Scattered feelings turn into a summary you can actually revisit.",
    description:
      "Daily Log pulls the emotional thread out of the day and gives it structure. Even after a few days pass, the reflection still reads like something you would want to open again.",
    image: "/images/app-diary-ai.webp",
    imageAlt: "Daily Log mood insight screen",
  },
  {
    eyebrow: "Reflection worth reopening",
    title: "As the days stack up, the journal starts to feel like a calm archive of your own story.",
    description:
      "Photos, notes, and summaries stay together in one place, so each entry becomes easier to revisit. The value comes from a memory that keeps getting more meaningful over time.",
    image: "/images/app-diary-photo.webp",
    imageAlt: "Daily Log detailed journal screen",
  },
] as const;

export const homeFeatureShowcaseEn = {
  eyebrow: "Product Preview",
  title: "The day moves from a short check-in to a reflection you can keep.",
  description:
    "The product flow connects prompts, summaries, reflection, and revisiting without making the interface feel crowded. This page focuses on the core path and keeps deeper setup details for the download and support pages.",
  image: "/images/app-home.webp",
  imageAlt: "Daily Log home screen",
  cards: [
    {
      title: "Automatic organization",
      description: "The main screen keeps today’s state and recent entries easy to scan without asking the user to manage the layout manually.",
    },
    {
      title: "Mood summary",
      description: "The emotional tone of the day is translated into language that feels calm, readable, and useful later.",
    },
    {
      title: "Reflection view",
      description: "Entries stay connected to photos, notes, and summaries so revisiting the day feels intentional instead of messy.",
    },
    {
      title: "Privacy guidance",
      description: "Support and policy pages stay close to the install flow so users can understand the current release state before they commit.",
    },
  ],
} as const;

export const homeValueCardsEn = [
  {
    title: "The real value grows after the first check-in.",
    description:
      "Daily Log matters more when it becomes something you reopen. Weekly patterns, repeated moods, and small changes over time make the product feel more useful with every entry.",
  },
  {
    title: "Weekly reflection rhythm",
    description: "The product should feel like it connects one day to the next instead of leaving each entry isolated.",
  },
  {
    title: "Suggestions that fit real life",
    description: "The next step should feel small, practical, and grounded in the context of today rather than generic motivation.",
  },
  {
    title: "Future improvements stay tied to lasting value",
    description:
      "The roadmap prioritizes return value, trust, and the quality of reflection over surface-level decoration. That keeps the experience honest and easier to grow.",
  },
] as const;

export const homeTrustPointsEn = [
  {
    title: "Direct Android APK access",
    description: "The current release is available through a direct Android APK route so people can try the real product flow without extra detours.",
  },
  {
    title: "Support and policy pages stay visible",
    description:
      "The site does not push install alone. Privacy, terms, and support pages stay close to the main flow so the product feels transparent from the start.",
  },
  {
    title: "Desktop and mobile handoff that makes sense",
    description:
      "Desktop visitors can move to mobile through QR, while mobile users see the install route first. The structure keeps both entry points clear without duplicating the whole page.",
  },
] as const;
