import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Project, BlogPost, PressItem } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");

function getMarkdownFiles(dir: string): string[] {
  const fullPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((f) => f.endsWith(".md"));
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

export async function getProjects(): Promise<Project[]> {
  const files = getMarkdownFiles("projects");
  const projects = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      return getProjectBySlug(slug);
    })
  );
  return projects
    .filter((p): p is Project => p !== null)
    .sort((a, b) => b.year - a.year);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fullPath = path.join(contentDirectory, "projects", `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    title: data.title ?? "",
    subtitle: data.subtitle ?? "",
    category: data.category ?? "mural",
    location: data.location ?? "",
    year: data.year ?? 2024,
    client: data.client ?? "",
    featured: data.featured ?? false,
    coverImage: data.coverImage ?? "/images/placeholder-project.jpg",
    galleryImages: data.galleryImages ?? [],
    brief: data.brief ?? "",
    testimonial: data.testimonial ?? undefined,
    tags: data.tags ?? [],
    content: htmlContent,
  };
}

export async function getFeaturedProject(): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.featured) ?? projects[0] ?? null;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = getMarkdownFiles("blog");
  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      return getBlogPostBySlug(slug);
    })
  );
  return posts
    .filter((p): p is BlogPost => p !== null && p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(contentDirectory, "blog", `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "/images/placeholder-project.jpg",
    tags: data.tags ?? [],
    published: data.published ?? true,
    content: htmlContent,
  };
}

export async function getPressItems(): Promise<PressItem[]> {
  const files = getMarkdownFiles("press");
  const items = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(contentDirectory, "press", `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? "",
        publication: data.publication ?? "",
        date: data.date ?? "",
        url: data.url ?? undefined,
        excerpt: data.excerpt ?? "",
        coverImage: data.coverImage ?? undefined,
      } as PressItem;
    })
  );
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
