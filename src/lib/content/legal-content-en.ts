import type { TextSection } from "@/lib/content/legal-content";

export const privacySectionsEn: TextSection[] = [
  {
    title: "1. About this document",
    paragraphs: [
      "This document is a draft Privacy Policy for the Daily Log demo landing site and demo app experience.",
      "Before the official launch, it should be replaced with a final version that reflects the real operating environment, data collection scope, retention period, and any third-party integrations.",
    ],
  },
  {
    title: "2. Information that may be collected",
    paragraphs: [
      "Daily Log may process basic account information, consent and permission states, and metadata created during the journaling flow.",
    ],
    bullets: [
      "Account identifiers such as email address and nickname",
      "Consent status for notifications, microphone access, and privacy-related choices",
      "Check-in input, generated summaries, and mood analysis output",
      "Device information, app version, and technical data needed to troubleshoot errors",
    ],
  },
  {
    title: "3. Why the information is used",
    paragraphs: [
      "Collected information may be used for account management, check-ins and journal creation, mood analysis, recommendations, calendar-based reflection, customer support, and service quality improvement.",
    ],
  },
  {
    title: "4. Retention and protection",
    paragraphs: [
      "At the demo stage, the guiding principle is to keep operational data as limited as possible.",
      "Retention periods, access controls, and any outsourcing details should be stated clearly once the production policy is finalized.",
    ],
  },
  {
    title: "5. User rights",
    paragraphs: [
      "Users may request access, correction, deletion, or restriction of their personal data, and account deletion requests can be submitted through the support channel.",
    ],
  },
  {
    title: "6. Contact",
    paragraphs: [
      "Questions about this Privacy Policy or requests related to deletion can be sent through the support channel.",
    ],
  },
];

export const termsSectionsEn: TextSection[] = [
  {
    title: "1. About this document",
    paragraphs: [
      "This document is a draft Terms of Service for the Daily Log demo landing site and demo app.",
      "Before public launch, it should be replaced with a final version that reflects the actual service scope, account policy, limitations of liability, and any paid features.",
    ],
  },
  {
    title: "2. Nature of the service",
    paragraphs: [
      "Daily Log is a mobile-first service centered on conversational check-ins, mood insight, next-step suggestions, and reflection.",
      "The currently published version is a demo release, so parts of the interface, feature set, and distribution method may change.",
    ],
  },
  {
    title: "3. Accounts and security",
    paragraphs: [
      "Users must provide accurate account information, and they are responsible for maintaining the security of their own account.",
    ],
    bullets: [
      "Do not register false information",
      "Do not use another person’s account or information without permission",
      "Do not interfere with normal service operations",
    ],
  },
  {
    title: "4. Restrictions on use",
    paragraphs: [
      "Access may be restricted if the service detects abnormal use, behavior that harms stability, or actions that cause harm to other users.",
    ],
  },
  {
    title: "5. Intellectual property",
    paragraphs: [
      "Rights to the service interface, written copy, design, screenshots, code, and related outputs belong to Daily Log or the appropriate rights holder.",
    ],
  },
  {
    title: "6. Changes and termination",
    paragraphs: [
      "The demo version may change or be discontinued without prior notice.",
      "Before the official launch, features, support policy, distribution channels, and responsibility boundaries may be redefined.",
    ],
  },
  {
    title: "7. Contact",
    paragraphs: [
      "Questions about these Terms of Service can be sent through the support channel.",
    ],
  },
];
