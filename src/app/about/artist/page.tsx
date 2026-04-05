import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { buildMetadata } from "@/lib/metadata";
import { awards, education, credentials } from "@/data/awards";
import { Award, GraduationCap, Anchor } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "The Artist — Patrick Hunter",
  description:
    "Patrick Hunter is an environmental and community-based mural artist based on Sydney's Northern Beaches, creating large-scale public art that connects communities to nature and to each other.",
  path: "/about/artist",
});

export default function ArtistPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Intro */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <AnimateOnScroll>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.prod.website-files.com/6344ddf77e0ea6f95d2d9fa3/65c98384604a2b9b6b5a6512_PatrickHunter_17.jpg"
                alt="Patrick Hunter — InkHunter artist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div>
              <p className="text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
                The Artist
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ocean-950 mb-6 leading-tight">
                Patrick Hunter
              </h1>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Growing up on Sydney&apos;s Northern Beaches, Patrick Hunter
                  developed a deep connection to the ocean, native landscapes,
                  and the communities that live alongside them. That connection
                  became the foundation of everything InkHunter creates.
                </p>
                <p>
                  Dyslexia shaped Patrick&apos;s creative mind — visual thinking
                  became his superpower, translating complex stories about
                  environment, culture, and community into large-scale works
                  that speak to everyone.
                </p>
                <p>
                  After studying Fine Arts and Graphic Design at ACU and
                  religious symbolism at the Venice Biennale, Patrick carved a
                  unique path through acting and film before finding his true
                  calling in environmental street art — art that lives where
                  people live, that speaks to the places it inhabits.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Philosophy Quote */}
        <AnimateOnScroll>
          <blockquote className="max-w-4xl mx-auto text-center py-16 border-y border-gray-200">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ocean-900 italic leading-relaxed">
              &ldquo;The natural world is not a place we just visit. It is our
              home.&rdquo;
            </p>
            <footer className="mt-4 text-gray-500 font-medium">
              — Patrick Hunter
            </footer>
          </blockquote>
        </AnimateOnScroll>

        {/* Awards, Education, Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-24">
          {/* Awards */}
          <AnimateOnScroll delay={0}>
            <div className="group relative h-full rounded-3xl bg-gradient-to-br from-ochre-50 via-white to-ochre-50/30 border border-ochre-100 p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-ochre-100 text-ochre-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <Award className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl font-bold text-ocean-950 mb-6">
                Awards
              </h2>
              <ul className="space-y-5">
                {awards.map((award) => (
                  <li key={award.title} className="relative pl-4 border-l-2 border-ochre-200">
                    <p className="font-semibold text-ocean-900 leading-snug">{award.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {award.year} — {award.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Education */}
          <AnimateOnScroll delay={100}>
            <div className="group relative h-full rounded-3xl bg-gradient-to-br from-ocean-50 via-white to-ocean-50/30 border border-ocean-100 p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl font-bold text-ocean-950 mb-6">
                Education
              </h2>
              <ul className="space-y-5">
                {education.map((edu) => (
                  <li key={edu.title} className="relative pl-4 border-l-2 border-ocean-200">
                    <p className="font-semibold text-ocean-900 leading-snug">{edu.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Credentials */}
          <AnimateOnScroll delay={200}>
            <div className="group relative h-full rounded-3xl bg-gradient-to-br from-bush-50 via-white to-bush-50/30 border border-bush-100 p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-bush-100 text-bush-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <Anchor className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl font-bold text-ocean-950 mb-6">
                Beyond the Studio
              </h2>
              <ul className="space-y-4">
                {credentials.map((cred) => (
                  <li
                    key={cred}
                    className="text-gray-600 flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-bush-400 mt-1.5 flex-shrink-0" />
                    <span className="leading-snug">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </div>
  );
}
