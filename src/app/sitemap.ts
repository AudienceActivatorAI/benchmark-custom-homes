import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const portfolioProjectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/process`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cost-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/financing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/areas/ellensburg`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/cle-elum`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/kittitas-county`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/yakima-valley`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...portfolioProjectEntries,
  ];
}
