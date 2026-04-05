"use client";

import { useState } from "react";
import { clsx } from "clsx";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "mural", label: "Murals" },
  { value: "community", label: "Community" },
  { value: "installation", label: "Installations" },
  { value: "workshop", label: "Workshops" },
];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              filter === cat.value
                ? "bg-ocean-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-16">
          No projects found in this category.
        </p>
      )}
    </div>
  );
}
