import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { Project } from "@/types";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-ocean-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-ochre-100/30 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-ocean-800 text-[0.7rem] font-bold rounded-full uppercase tracking-[0.15em] shadow-lg">
                  <span className="w-1.5 h-1.5 bg-ochre-500 rounded-full animate-pulse" />
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-ocean-300" />
                <p className="text-ocean-600 font-bold text-xs uppercase tracking-[0.2em]">
                  {project.client} &middot; {project.year}
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-950 mb-5 leading-[1.1] tracking-tight">
                {project.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-4 font-medium leading-relaxed">
                {project.subtitle}
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {project.brief}
              </p>

              {project.testimonial && (
                <blockquote className="relative bg-white/60 backdrop-blur-sm border border-ocean-100 rounded-2xl p-6 md:p-7 mb-8 shadow-sm">
                  <Quote className="absolute -top-3 -left-2 w-10 h-10 text-ocean-200 fill-ocean-100" />
                  <p className="relative text-gray-700 italic leading-relaxed">
                    {project.testimonial.quote}
                  </p>
                  <footer className="mt-4 text-sm text-gray-600">
                    <strong className="text-ocean-900 not-italic">
                      {project.testimonial.author}
                    </strong>
                    <span className="block text-gray-500 text-xs mt-0.5">
                      {project.testimonial.role}
                    </span>
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
