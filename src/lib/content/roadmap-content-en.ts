export const roadmapPrioritiesEn = [
  {
    eyebrow: "Priority 1",
    title: "Improve the first-session wrap-up screen",
    summary:
      "The first thing that needs to feel stronger is the value right after the first use. The result screen cannot only look polished. It has to offer a clear summary of today and a realistic next step at the same time.",
    deliverables: [
      "A one-line mood summary for today",
      "One action worth trying before the day ends",
      "One reason to come back tomorrow",
    ],
  },
  {
    eyebrow: "Priority 2",
    title: "Build the return loop",
    summary:
      "People stay because of habit and accumulated meaning, not because a feature list looks impressive. The reason to reopen the app has to be designed in both the interface and the data model.",
    deliverables: [
      "Notifications and consecutive entry flows",
      "A better way to reopen past entries",
      "Weekly mood changes and a daily reflection prompt",
    ],
  },
  {
    eyebrow: "Priority 3",
    title: "Make recommendations more contextual",
    summary:
      "If the suggested next action feels generic, trust drops immediately. The product needs short, specific recommendations that are grounded in the context of today’s entry.",
    deliverables: [
      "Context-aware recommendation copy",
      "Feedback on each recommendation: helpful or not helpful",
      "Signals that help improve recommendation quality",
    ],
  },
  {
    eyebrow: "Priority 4",
    title: "Strengthen trust and data ownership",
    summary:
      "A journaling app handles sensitive information. Users need a feeling of safety and control before they are willing to build a long-term habit or pay for the product later.",
    deliverables: [
      "Final policy pages and a clearer explanation of AI processing",
      "Account deletion and data export",
      "Permission rationale shown in both the app and the website",
    ],
  },
  {
    eyebrow: "Priority 5",
    title: "Design the accumulated value view",
    summary:
      "Long-term value is not about today’s entry alone. It comes from the promise that the service understands you better as more reflections collect over time.",
    deliverables: [
      "Mood patterns and repeated-event tracking",
      "Time-of-day patterns that appear regularly",
      "A personal progress view tied to recommendation follow-through",
    ],
  },
  {
    eyebrow: "Priority 6",
    title: "Open paid features after value is proven",
    summary:
      "At the early stage, the free experience has to feel useful first. Paid features make more sense around accumulated value such as deeper insights, reports, search, sync, and backup.",
    deliverables: [
      "Weekly and monthly reports",
      "Advanced search and multi-device sync",
      "Backup, export, and custom templates",
    ],
  },
] as const;

export const validationPlansEn = [
  {
    title: "First-user validation",
    metrics: ["Check-in completion rate", "Recommendation satisfaction", "Intent to reopen the next day"],
  },
  {
    title: "Early retention validation",
    metrics: ["D1, D3, and D7 return rate", "Average daily journaling time", "Recommendation follow-through rate"],
  },
  {
    title: "Qualitative interviews",
    metrics: ["Did the day feel clearer?", "Did the next step feel more concrete?", "Was there a reason to come back?"],
  },
  {
    title: "Trust validation",
    metrics: ["Understanding of privacy guidance", "Expectations around deletion and export", "Anxiety around permissions"],
  },
  {
    title: "Monetization validation",
    metrics: ["Willingness to pay after 5-7 days", "How the free vs. paid line is perceived", "Which features feel premium"],
  },
] as const;

export const ownershipChecklistEn = [
  "Publish the final policy pages",
  "Provide a clear account deletion flow",
  "Prepare data export",
  "Explain AI processing scope and storage scope",
  "Show the permission rationale in both the app and the website",
] as const;

export const paidValueTracksEn = [
  "Deeper insights and change reports",
  "Weekly and monthly reflection reports",
  "Advanced search and reflection filters",
  "Multi-device sync",
  "Backup and data export",
  "Custom templates and personalization",
] as const;
