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
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1067&fit=crop"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
          {/* Awards */}
          <AnimateOnScroll delay={0}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ochre-50 text-ochre-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-ocean-950">
                  Awards
                </h2>
              </div>
              <ul className="space-y-4">
                {awards.map((award) => (
                  <li key={award.title}>
                    <p className="font-semibold text-ocean-900">{award.title}</p>
                    <p className="text-sm text-gray-500">
                      {award.year} — {award.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Education */}
          <AnimateOnScroll delay={100}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ocean-50 text-ocean-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-ocean-950">
                  Education
                </h2>
              </div>
              <ul className="space-y-4">
                {education.map((edu) => (
                  <li key={edu.title}>
                    <p className="font-semibold text-ocean-900">{edu.title}</p>
                    <p className="text-sm text-gray-500">{edu.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Credentials */}
          <AnimateOnScroll delay={200}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-bush-50 text-bush-600 flex items-center justify-center">
                  <Anchor className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-ocean-950">
                  Beyond the Studio
                </h2>
              </div>
              <ul className="space-y-3">
                {credentials.map((cred) => (
                  <li
                    key={cred}
                    className="text-gray-600 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-bush-400 mt-2 flex-shrink-0" />
                    {cred}
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
