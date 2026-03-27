export const faqsEn = [
  {
    question: "Can I use Daily Log directly on the web?",
    answer:
      "The website is currently focused on product introduction, download guidance, support, and policy pages. The actual check-in, journaling, and analysis experience lives in the mobile app.",
  },
  {
    question: "Which platform can I install right now?",
    answer:
      "The public Android APK is available today. TestFlight or App Store distribution for iPhone will be added as soon as the release path is ready.",
  },
  {
    question: "What is the core experience of Daily Log?",
    answer:
      "The heart of Daily Log is a short conversational check-in that helps you organize the day, understand the emotional pattern, and leave with a clear next step.",
  },
  {
    question: "How do you handle privacy and permissions?",
    answer:
      "Even in this demo phase, privacy and terms live on separate pages and permission-related guidance is kept distinct from the install flow so the product feels more transparent.",
  },
  {
    question: "What should I do if Android shows an installation warning?",
    answer:
      "Android may show a security notice when you install an external APK. Follow the install guide on the download page and allow installation permissions for your browser or file manager if needed.",
  },
  {
    question: "Where do I send support requests or account deletion requests?",
    answer:
      "You can contact the support email listed on the support page. It helps to include the install environment, device information, and the steps to reproduce the issue.",
  },
] as const;

export const downloadNotesEn = [
  {
    title: "Android-first release",
    description:
      "The public hands-on build is currently centered on the Android APK. That keeps the path to the real product as short as possible.",
  },
  {
    title: "Desktop hands off through QR",
    description:
      "Desktop visitors can move straight to mobile through a QR code while still seeing the install notes and release status on the same page.",
  },
  {
    title: "Unavailable platforms stay explicit",
    description:
      "If a platform is not ready, the page shows that status clearly instead of presenting an empty or misleading install button.",
  },
] as const;

export const installStepsEn = [
  {
    title: "1. Open the download page",
    description: "Open it directly on your Android device, or scan the QR code on desktop to continue on mobile.",
  },
  {
    title: "2. Download the APK",
    description: "Use the Android APK button to download the current Daily Log build.",
  },
  {
    title: "3. Allow installation permissions",
    description: "On first install, Android may ask you to allow installs from your browser or file manager.",
  },
  {
    title: "4. Launch the app and start the first check-in",
    description: "Once the brief onboarding is complete, you can move right into the Daily Log check-in flow.",
  },
] as const;

export const troubleshootingEn = [
  {
    title: "The file will not download",
    description:
      "Check your network connection and available storage first. It is also worth confirming that your mobile browser still has permission to download files.",
  },
  {
    title: "The install button looks inactive",
    description:
      "On iPhone or on release channels that are not ready yet, the page shows status guidance instead of a real install action. Visit again from Android to see the live install flow.",
  },
  {
    title: "The app does not open after installation",
    description:
      "Check the supported Android version first. If an older demo build is already installed, remove it and try again. If the issue continues, send the details through the support page.",
  },
] as const;

export const supportTracksEn = [
  {
    title: "Installation issues",
    description: "This covers the most common problems during download, APK permissions, and first launch.",
    bullets: [
      "Confirm that the device is running Android 10 or later",
      "Allow installation permissions for the browser or file manager",
      "Check storage space and the network connection",
    ],
  },
  {
    title: "Account and sign-in",
    description: "Questions around demo account creation, sign-in errors, and account deletion requests are handled here.",
    bullets: [
      "Double-check the email address and sign-in method",
      "Look for duplicate sign-up attempts or input mistakes",
      "Include account details when requesting account deletion",
    ],
  },
  {
    title: "Privacy and permissions",
    description: "Sensitive topics such as notifications, microphone access, and privacy consent should stay easy to follow and clearly documented.",
    bullets: [
      "Explain why each permission is requested and when it is used",
      "Keep policy documents visible alongside the demo release status",
      "Make deletion requests and contact channels easy to find",
    ],
  },
] as const;
