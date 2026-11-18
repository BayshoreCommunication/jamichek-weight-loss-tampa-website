import fs from "node:fs";
import path from "node:path";
import { MetadataRoute } from "next";
import GetAllPostData from "@/lib/GetPostData";
import { empowerTreatments } from "@/lib/empowerTreatments";
import { staticBlogs } from "@/lib/staticBlogs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BASE_URL = "https://www.medicalweightlosstampa.com";
const PAGE_FILE_NAMES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js"]);
const API_TIMEOUT_MS = 8000;

const FALLBACK_STATIC_ROUTES = [
  "/",
  "/contact",
  "/empower",
  "/empower/evolve-tone",
  "/empower/evolvex",
  "/empower/morpheus8",
  "/empower/vtone",
  "/medical-weight-loss",
  "/meet-the-team",
  "/our-purpose",
  "/our-services",
  "/peptides",
  "/regenerative-medicine",
  "/skincare",
  "/team",
  "/the-wellness-journal",
  "/vitamins-peptides",
];

type DiscoveredRoute = {
  routePath: string;
  lastModified: Date;
};

type DynamicBlogRecord = {
  slug?: unknown;
  published?: unknown;
  updatedAt?: unknown;
  createdAt?: unknown;
};

/** Escapes XML-reserved characters in URLs because Next 14 outputs <loc> verbatim. */
function toXmlSafeUrl(routePath: string): string {
  const normalized = routePath === "/" ? "" : routePath;
  const encoded = encodeURI(`${BASE_URL}${normalized}`);
  return encoded
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function toValidDate(input: unknown, fallback = new Date()): Date {
  if (input instanceof Date) {
    return Number.isNaN(input.getTime()) ? fallback : input;
  }
  if (typeof input === "string" || typeof input === "number") {
    const parsed = new Date(input);
    return Number.isNaN(parsed.getTime()) ? fallback : parsed;
  }
  return fallback;
}

function isRouteGroup(segment: string): boolean {
  return segment.startsWith("(") && segment.endsWith(")");
}

function isDynamicOrInternalSegment(segment: string): boolean {
  return (
    segment.startsWith("[") ||
    segment.startsWith("_") ||
    segment.startsWith("@")
  );
}

/** Walks the Next.js app directory to discover all static page routes automatically. */
function scanAppDirectory(
  dir: string,
  segments: string[],
  results: DiscoveredRoute[],
) {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (entry.isFile() && PAGE_FILE_NAMES.has(entry.name)) {
      const publicSegments = segments.filter((seg) => !isRouteGroup(seg));
      const routePath =
        publicSegments.length === 0 ? "/" : `/${publicSegments.join("/")}`;
      let lastModified = new Date();
      try {
        lastModified = fs.statSync(path.join(dir, entry.name)).mtime;
      } catch {
        // Keep current timestamp if stat fails.
      }
      results.push({ routePath, lastModified });
      continue;
    }

    if (!entry.isDirectory()) continue;
    if (entry.name === "api" && segments.length === 0) continue;
    if (isDynamicOrInternalSegment(entry.name)) continue;

    scanAppDirectory(
      path.join(dir, entry.name),
      [...segments, entry.name],
      results,
    );
  }
}

/** Fallback route discovery from Next.js build manifests when app/ sources are absent at runtime. */
function discoverRoutesFromBuildManifest(): DiscoveredRoute[] {
  const manifestCandidates = [
    path.join(process.cwd(), ".next", "app-path-routes-manifest.json"),
    path.join(process.cwd(), ".next", "server", "app-paths-manifest.json"),
  ];

  for (const manifestPath of manifestCandidates) {
    try {
      if (!fs.existsSync(manifestPath)) continue;
      const raw = fs.readFileSync(manifestPath, "utf8");
      const parsed = JSON.parse(raw) as Record<string, string>;
      const routes: DiscoveredRoute[] = [];

      for (const [appKey, publicVal] of Object.entries(parsed)) {
        if (!appKey.endsWith("/page")) continue;
        if (appKey.includes("/api/") || appKey.includes("/_not-found")) continue;

        const candidate =
          typeof publicVal === "string" && publicVal.startsWith("/")
            ? publicVal
            : appKey.replace(/\/page$/, "") || "/";

        if (candidate.includes("[")) continue;
        const normalized = candidate === "" ? "/" : candidate;
        routes.push({ routePath: normalized, lastModified: new Date() });
      }

      if (routes.length > 0) return routes;
    } catch {
      // Try next manifest candidate.
    }
  }

  return [];
}

function discoverStaticAppRoutes(): DiscoveredRoute[] {
  const appDir = path.join(process.cwd(), "app");
  const fromAppDir: DiscoveredRoute[] = [];

  if (fs.existsSync(appDir)) {
    scanAppDirectory(appDir, [], fromAppDir);
  }

  if (fromAppDir.length > 0) {
    return fromAppDir;
  }

  const fromManifest = discoverRoutesFromBuildManifest();
  if (fromManifest.length > 0) {
    return fromManifest;
  }

  return FALLBACK_STATIC_ROUTES.map((routePath) => ({
    routePath,
    lastModified: new Date(),
  }));
}

async function fetchPublishedDynamicBlogs(): Promise<DynamicBlogRecord[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  try {
    const response = await GetAllPostData({
      cache: "no-store",
      signal: controller.signal,
    });
    const list = Array.isArray(response?.data) ? response.data : [];
    return list.filter(
      (item: DynamicBlogRecord) =>
        item?.published === true &&
        typeof item?.slug === "string" &&
        item.slug.trim().length > 0,
    );
  } catch (error) {
    console.error("Error fetching dynamic blogs for sitemap:", error);
    return [];
  } finally {
    clearTimeout(timer);
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entriesByPath = new Map<string, MetadataRoute.Sitemap[number]>();

  const registerEntry = (
    routePath: string,
    options: Omit<MetadataRoute.Sitemap[number], "url">,
  ) => {
    const normalizedPath =
      routePath === "/" ? "/" : `/${routePath.replace(/^\/+|\/+$/g, "")}`;
    if (entriesByPath.has(normalizedPath)) return;

    entriesByPath.set(normalizedPath, {
      url: toXmlSafeUrl(normalizedPath),
      ...options,
    });
  };

  // 1. Auto-discovered static App Router pages
  const staticAppRoutes = discoverStaticAppRoutes().sort((a, b) =>
    a.routePath.localeCompare(b.routePath),
  );
  for (const { routePath, lastModified } of staticAppRoutes) {
    registerEntry(routePath, {
      lastModified,
      changeFrequency: routePath === "/the-wellness-journal" ? "daily" : "monthly",
      priority: routePath === "/" ? 1.0 : 0.8,
    });
  }

  // 2. Empower treatments (deduplicated against dedicated static pages such as /empower/evolve-tone)
  for (const treatment of empowerTreatments) {
    if (!treatment.slug) continue;
    registerEntry(`/empower/${treatment.slug}`, {
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // 3. Registered static Wellness Journal blogs from lib/staticBlogs.ts
  for (const blog of staticBlogs) {
    if (!blog.meta.slug) continue;
    registerEntry(`/the-wellness-journal/${blog.meta.slug}`, {
      lastModified: toValidDate(blog.meta.updatedAt ?? blog.meta.publishedAt),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // 4. Live published Wellness Journal blogs from backend CMS API
  const dynamicBlogs = await fetchPublishedDynamicBlogs();
  for (const blog of dynamicBlogs) {
    const slug = String(blog.slug).trim();
    registerEntry(`/the-wellness-journal/${slug}`, {
      lastModified: toValidDate(blog.updatedAt ?? blog.createdAt),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return Array.from(entriesByPath.values());
}
