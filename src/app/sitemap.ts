import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/download",
  "/roadmap",
  "/support",
  "/privacy",
  "/terms",
  "/en",
  "/en/download",
  "/en/roadmap",
  "/en/support",
  "/en/privacy",
  "/en/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
