import { MetadataRoute } from "next";
import GetAllPostData from "@/lib/GetPostData";
import { empowerTreatments } from "@/lib/empowerTreatments";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.medicalweightlosstampa.com";

  // Static routes
  const staticRoutes = [
    "",
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

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic empower treatments (filtering out 'evolve-tone' to avoid duplicate url)
  const empowerRoutes = empowerTreatments
    .filter((treatment) => treatment.slug !== "evolve-tone")
    .map((treatment) => ({
      url: `${baseUrl}/empower/${treatment.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Static wellness journal blogs
  const staticBlogSlugs = [
    "common-myths-about-weight-loss",
    "muscle-pain-relief-for-active-adults",
    "the-science-behind-regenerative-medicine-therapy",
    "understanding-arthritis-medication",
    "prp-injection-joint-pain-long-term-relief",
    "are-anti-aging-treatments-right-for-you",
    "chronic-pain-management-interventional-therapies",
    "weight-loss-plateau-12-medical-reasons-you-are-stuck",
    "why-do-some-people-lose-weight-faster-than-others",
  ];

  const staticBlogRoutes = staticBlogSlugs.map((slug) => ({
    url: `${baseUrl}/the-wellness-journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic wellness journal blogs from API
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogPostData = await GetAllPostData();
    const dynamicBlogs = blogPostData?.data || [];
    dynamicBlogRoutes = dynamicBlogs.map((blog: any) => {
      const date = blog.updatedAt || blog.createdAt || new Date();
      return {
        url: `${baseUrl}/the-wellness-journal/${blog.slug}`,
        lastModified: new Date(date),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error("Error fetching dynamic blogs for sitemap:", error);
  }

  return [
    ...staticSitemap,
    ...empowerRoutes,
    ...staticBlogRoutes,
    ...dynamicBlogRoutes,
  ];
}
