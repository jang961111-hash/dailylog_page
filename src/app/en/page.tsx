import Image from "next/image";

import { AppShowcase } from "@/components/app-showcase";
import { HomeDownloadSection } from "@/components/home-download-section";
import { HomeReadingShell } from "@/components/home-reading-shell";
import { MarketingHomePage } from "@/components/marketing-home-page";
import { SiteFooter } from "@/components/site-shell";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "A clearer way to reflect",
  description:
    "Daily Log is a mobile-first journal that turns a short conversational check-in into a readable timeline, mood summary, and next step.",
  path: "/en",
  locale: "en",
});

export default function EnglishHomePage() {
  return (
    <HomeReadingShell>
      <MarketingHomePage
        locale="en"
        hero={{
          eyebrow: "Daily Log",
          title: "Wrap up the day quickly, and leave with something worth reopening.",
          description:
            "Daily Log is a mobile-first journal built around a conversational check-in, a calendar view of the day, and AI summaries that help you return to your notes later. The landing page is designed to make that flow readable at a glance.",
          primaryLabel: "Open Download",
          secondaryLabel: "See the Product Flow",
          pills: ["3-5 min check-in", "Conversational journal", "AI summaries", "Android APK live"],
          cards: [
            { label: "Fast Start", title: "The first screen makes the install route and product story visible at the same time." },
            { label: "Clear State", title: "Release status, guidance, and support live in the same reading flow." },
            { label: "Return Loop", title: "The landing emphasizes why people come back, not just how they arrive." },
          ],
          visual: (
            <AppShowcase
              variant="login"
              alt="Daily Log sign-in and first check-in screen"
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="h-[31rem] w-full rounded-[1.8rem] sm:h-[34rem]"
            />
          ),
        }}
        scenesSection={{
          eyebrow: "Product Story",
          title: "The page explains the app in a few strong scenes instead of a long feature list.",
          description:
            "The structure borrows the easy scanning of Monimo and the device-centered drama of Gemmy, but keeps the overall experience bright and restrained.",
        }}
        scenes={[
          {
            id: "scene-checkin",
            eyebrow: "Scene 01",
            title: "Start lightly, and make the first question feel obvious.",
            description:
              "The first scene is about lowering the barrier to begin. Instead of asking for a long entry, the app opens with a short conversational check-in that feels manageable on mobile.",
            cards: [
              { title: "Short entry point", description: "The app opens directly into the check-in flow without a heavy setup." },
              { title: "Lower pressure", description: "A few prompts help sort the day before any long writing is expected." },
              { title: "Mobile first", description: "The landing and the app share the same tone so the handoff into the product feels natural." },
              { title: "Instant clarity", description: "Even the first product frame tells people what kind of experience Daily Log is." },
            ],
            visual: (
              <AppShowcase
                variant="login"
                alt="Daily Log check-in start screen"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-[28rem] w-full rounded-[1.5rem] sm:h-[32rem]"
              />
            ),
          },
          {
            id: "scene-dashboard",
            eyebrow: "Scene 02",
            title: "The calendar and AI recap bring the day back into view at a glance.",
            description:
              "After the check-in, the app needs to give people a reason to return. The second scene focuses on the calendar home, mood flow, and short AI summary that make the record feel useful later.",
            tone: "dark",
            cards: [
              { title: "Calendar at a glance", description: "The home view makes it easy to see which days are recorded and how the pattern is forming." },
              { title: "Short recap bubble", description: "The current state of the day stays readable in a single sentence without opening a long view." },
              { title: "Restrained glow", description: "A light halo sits behind the device while the rest of the section stays calm." },
              { title: "Built for return", description: "The section emphasizes repeat value instead of treating reflection like a one-time action." },
            ],
            visual: (
              <AppShowcase
                variant="dashboard"
                alt="Daily Log calendar home and AI recap"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-[28rem] w-full rounded-[1.5rem] sm:h-[33rem]"
              />
            ),
          },
          {
            id: "scene-ai",
            eyebrow: "Scene 03",
            title: "As conversations and moments stack up, the journal becomes a library worth reopening.",
            description:
              "Images, text, and AI interpretation should feel like one flow. The third scene highlights the long-term value that builds after installation, rather than stopping at the first interaction.",
            cards: [
              { title: "Photo-based reflection", description: "Images and text can work together so the day stays vivid and easier to revisit." },
              { title: "AI interpretation", description: "Mood changes and key signals are summarized in a form that is easy to scan later." },
              { title: "A next step", description: "The flow does not end at journaling. It continues into one small actionable suggestion." },
              { title: "Calm storage", description: "The design keeps the archive readable instead of overwhelming it with decoration." },
            ],
            visual: (
              <Image
                src="/images/app-diary-photo.webp"
                alt="Daily Log photo-based journal and AI summary screen"
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
          title: "The site keeps the message short, but the value still reads quickly.",
          description:
            "The landing does not attempt to explain every feature. It keeps the focus on the moments that actually affect install confidence, repeat use, trust, and support.",
          cards: [
            {
              title: "Install intent and product understanding live in the same viewport.",
              description:
                "Instead of forcing a hard download push from the first second, the page gives people enough context to understand why the app is worth installing.",
              tone: "accent",
            },
            {
              title: "Short copy, large device scenes.",
              description: "Each scene is reduced to one message and one representative screen so the flow stays easy to scan.",
            },
            {
              title: "A bright site with selective emphasis.",
              description: "Most of the experience stays light and open. Only key scenes use a darker glow treatment to concentrate attention.",
            },
            {
              title: "Support and policy are part of the product story.",
              description: "Install help, roadmap, and policy pages sit in the same system so the site feels more trustworthy from the start.",
            },
          ],
        }}
        finalCta={{
          eyebrow: "Ready To Start",
          title: "The landing is faster to read, and the install or support flow is even faster to follow.",
          description:
            "Daily Log currently ships through a public Android APK. Download guidance, support, and policy pages all continue in the same visual system so the whole journey stays coherent.",
          primaryLabel: "Open Download Page",
          secondaryLabel: "View Support",
          footerLinks: [
            { href: "/roadmap", label: "Roadmap" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
          ],
        }}
      />
      <HomeDownloadSection locale="en" />
      <SiteFooter locale="en" />
    </HomeReadingShell>
  );
}
