import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { Project } from "@/types";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <Container>
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-ocean-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
                {project.client} &middot; {project.year}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocean-950 mb-4 leading-tight">
                {project.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {project.subtitle}
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {project.brief}
              </p>

              {project.testimonial && (
                <blockquote className="border-l-4 border-ocean-300 pl-5 mb-8">
                  <p className="text-gray-600 italic leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-sm text-gray-500">
                    <strong className="text-gray-700">
                      {project.testimonial.author}
                    </strong>
                    , {project.testimonial.role}
                  </footer>
                </blockquote>
              )}

              <Button href={`/projects/${project.slug}`} variant="primary">
                View Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
