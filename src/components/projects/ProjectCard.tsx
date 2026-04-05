import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-ocean-200 text-xs font-semibold uppercase tracking-wider">
          {project.client} &middot; {project.year}
        </span>
        <h3 className="text-white font-display text-xl font-bold mt-1">
          {project.title}
        </h3>
        <p className="text-ocean-100 text-sm mt-1 line-clamp-2">
          {project.subtitle}
        </p>
      </div>
      {/* Always-visible title on mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-950/70 to-transparent p-4 md:hidden">
        <h3 className="text-white font-display text-lg font-bold">
          {project.title}
        </h3>
        <span className="text-ocean-200 text-xs">
          {project.client} &middot; {project.year}
        </span>
      </div>
    </Link>
  );
}
