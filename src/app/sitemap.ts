import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.newhorizonsfoundation.org";

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/programs", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/programs/mental-health", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programs/veterans-first-responders", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programs/cultural-enrichment", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programs/youth-leadership", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/leadership", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/partners", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/support/founders-circle", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/support/sponsorships", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
