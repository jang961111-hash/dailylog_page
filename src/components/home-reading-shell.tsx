"use client";

import type { ReactNode } from "react";

import { SiteHeaderClient } from "@/components/site-header-client";

export function HomeReadingShell({
  children,
}: {
  children: ReactNode;
  sections?: readonly unknown[];
}) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeaderClient />
      {children}
    </div>
  );
}
