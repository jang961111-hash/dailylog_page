import type { Viewport } from "next";
import localFont from "next/font/local";

import { baseMetadata } from "@/lib/site-config";
import "./globals.css";

const headingFont = localFont({
  src: "../assets/fonts/cormorant-garamond-variable.ttf",
  variable: "--font-heading",
  display: "swap",
  weight: "300 700",
});

const bodyFont = localFont({
  src: "../assets/fonts/gowun-batang-regular.ttf",
  variable: "--font-body",
  display: "swap",
});

const accentFont = localFont({
  src: "../assets/fonts/preahvihear-regular.ttf",
  variable: "--font-accent",
  display: "swap",
});

export const metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#F7F1E8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(249,234,215,0.88),transparent_48%),radial-gradient(circle_at_top_right,rgba(209,164,122,0.14),transparent_30%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
