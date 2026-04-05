import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Portfolio of large-scale murals, community art, and environmental public art projects by InkHunter across NSW and Australia.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Large-scale murals, community art, and environmental public works — each with a story of place, people, and purpose."
        />
        <ProjectGrid projects={projects} />
      </Container>
    </div>
  );
}
