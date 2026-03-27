import { createReadStream } from "node:fs";
import { Readable } from "node:stream";

import { NextResponse } from "next/server";

import { findLocalAndroidApk } from "@/lib/apk-release";
import { androidReleaseFallbackAssetUrl, githubReleaseRepo } from "@/lib/site-config";

export const runtime = "nodejs";

const latestReleaseApiUrl = `https://api.github.com/repos/${githubReleaseRepo.owner}/${githubReleaseRepo.name}/releases/latest`;

export async function GET() {
  try {
    const localApk = await findLocalAndroidApk();

    if (localApk) {
      const stream = Readable.toWeb(createReadStream(localApk.fullPath)) as ReadableStream<Uint8Array>;

      return new Response(stream, {
        headers: {
          "Cache-Control": "no-store",
          "Content-Disposition": `attachment; filename="${localApk.filename}"`,
          "Content-Length": String(localApk.size),
          "Content-Type": "application/vnd.android.package-archive",
        },
      });
    }
  } catch (error) {
    console.error("Unable to resolve a local Daily Log APK file.", error);
  }

  try {
    const response = await fetch(latestReleaseApiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "DailyLogLanding",
      },
      cache: "no-store",
    });

    if (response.ok) {
      const release = (await response.json()) as {
        assets?: Array<{
          name?: string;
          browser_download_url?: string;
        }>;
      };
      const androidAsset = release.assets?.find((asset) => asset.name?.toLowerCase().endsWith(".apk"));

      if (androidAsset?.browser_download_url) {
        return NextResponse.redirect(androidAsset.browser_download_url);
      }
    } else {
      console.error(`Failed to fetch latest GitHub release: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Unable to resolve the latest GitHub APK release.", error);
  }

  return NextResponse.redirect(androidReleaseFallbackAssetUrl);
}
