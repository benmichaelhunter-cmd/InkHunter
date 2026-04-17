import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Category badge */}
      {project.category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-ocean-800 text-[0.65rem] font-bold rounded-full uppercase tracking-widest shadow-sm">
            {project.category}
          </span>
        </div>
      )}

      {/* Arrow icon — desktop hover reveal */}
      <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden md:flex">
        <ArrowUpRight className="w-5 h-5 text-ocean-800" strokeWidth={2.5} />
      </div>

      {/* Always-visible gradient base */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ocean-950/85 via-ocean-950/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <span className="text-ocean-200 text-[0.7rem] font-semibold uppercase tracking-[0.15em] drop-shadow-md">
          {project.client} &middot; {project.year}
        </span>
        <h3 className="text-white font-display text-lg md:text-2xl font-bold mt-1.5 leading-tight drop-shadow-md">
          {project.title}
        </h3>
        <p className="text-ocean-100/90 text-sm mt-2 line-clamp-2 max-h-0 opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 transition-all duration-500 drop-shadow-md">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
}
