import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { getProjects, getProjectBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.brief,
    path: `/projects/${slug}`,
    image: project.coverImage,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/40 to-transparent" />
        <Container className="relative z-10 pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-ocean-200 hover:text-white text-sm font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-ocean-100 text-lg md:text-xl max-w-2xl">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-ocean-200">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {project.client}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />

            {/* Testimonial */}
            {project.testimonial && (
              <blockquote className="mt-16 p-8 bg-ocean-50 rounded-2xl border border-ocean-100">
                <p className="text-lg md:text-xl text-ocean-900 italic leading-relaxed">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-ocean-600">
                  <strong className="text-ocean-800">
                    {project.testimonial.author}
                  </strong>
                  <br />
                  {project.testimonial.role}
                </footer>
              </blockquote>
            )}

            {/* Gallery */}
            {project.galleryImages.length > 0 && (
              <div className="mt-16">
                <h2 className="font-display text-2xl font-bold text-ocean-950 mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} gallery image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
