import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";
import { getBlogPosts } from "@/lib/content";

const BASE_URL = "https://inkhunterartist.com.au";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const posts = await getBlogPosts();

  const staticPages = [
    "",
    "/about/artist",
    "/about/practice",
    "/projects",
    "/services",
    "/impact",
    "/media",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
