import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export type LocalApkCandidate = {
  filename: string;
  fullPath: string;
  mtimeMs: number;
  size: number;
  versionParts: number[];
};

export const apkAssetsDirectory = path.join(process.cwd(), "release-assets", "apk");
export const localApkPattern = /^DailyLog(?:[_-](\d+(?:\.\d+)*))?\.apk$/i;

export function parseVersionParts(filename: string) {
  const match = filename.match(localApkPattern);

  if (!match?.[1]) {
    return [];
  }

  return match[1]
    .split(".")
    .map((part) => Number.parseInt(part, 10))
    .filter((part) => Number.isFinite(part));
}

function compareVersionParts(left: number[], right: number[]) {
  const length = Math.max(left.length, right.length);

  for (let index = 0; index < length; index += 1) {
    const leftPart = left[index] ?? 0;
    const rightPart = right[index] ?? 0;

    if (leftPart !== rightPart) {
      return leftPart - rightPart;
    }
  }

  return 0;
}

export function compareApkCandidates(left: LocalApkCandidate, right: LocalApkCandidate) {
  const versionCompare = compareVersionParts(left.versionParts, right.versionParts);

  if (versionCompare !== 0) {
    return versionCompare > 0 ? -1 : 1;
  }

  if (left.mtimeMs !== right.mtimeMs) {
    return right.mtimeMs - left.mtimeMs;
  }

  return left.filename.localeCompare(right.filename);
}

export async function findLocalAndroidApk(directory = apkAssetsDirectory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const candidates = await Promise.all(
      entries
        .filter((entry) => entry.isFile() && localApkPattern.test(entry.name))
        .map(async (entry) => {
          const fullPath = path.join(directory, entry.name);
          const stats = await stat(fullPath);

          return {
            filename: entry.name,
            fullPath,
            mtimeMs: stats.mtimeMs,
            size: stats.size,
            versionParts: parseVersionParts(entry.name),
          } satisfies LocalApkCandidate;
        }),
    );

    candidates.sort(compareApkCandidates);

    return candidates[0] ?? null;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }

    throw error;
  }
}
