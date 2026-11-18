const BLOG_API_URL =
  "https://backend-jamichek-weight-loss-tampa.vercel.app/site/blog";

/**
 * Fetches dynamic blog posts from the backend CMS API.
 * Defaults to 200s ISR revalidation; callers like sitemap.ts can override with cache: "no-store".
 */
export default async function GetAllPostData(options?: RequestInit) {
  const fetchOptions: RequestInit = options?.cache
    ? options
    : {
        next: { revalidate: 200 },
        ...options,
      };

  const response = await fetch(BLOG_API_URL, fetchOptions);
  if (!response.ok) {
    throw new Error(`Blog API responded with status ${response.status}`);
  }

  return response.json();
}
