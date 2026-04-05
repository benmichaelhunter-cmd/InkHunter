import type { Metadata } from "next";
import { MessageCircle, Users, Paintbrush, BarChart3 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "The Practice — InkHunter",
  description:
    "InkHunter is a holistic practice combining environmental art, community engagement, therapeutic art, and placemaking to create public art that transforms spaces.",
  path: "/about/practice",
});

const approach = [
  {
    step: "01",
    title: "Community Consultation",
    description:
      "Every project begins with the people who live, work, and gather in the space. We facilitate genuine stakeholder engagement — workshops, conversations, and co-design sessions that ensure the artwork reflects the community it serves.",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "Emerging Artist Collaboration",
    description:
      "We bring emerging artists into every major project — not as assistants, but as creative collaborators. This builds capacity, diversifies perspectives, and creates opportunities for the next generation of public artists.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "Culturally Reflective Delivery",
    description:
      "The artwork is created using sustainable materials and techniques that honour the environment. Every element — from colour palette to composition — is informed by the community's stories, the local ecology, and the character of the place.",
    icon: <Paintbrush className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "Measurable Impact",
    description:
      "We document outcomes — foot traffic, media coverage, community response, and environmental impact. Councils and government bodies receive clear evidence of how the artwork has transformed the space and the community around it.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default function PracticePage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeading
          title="The Practice"
          subtitle="InkHunter is more than murals. It's a holistic practice combining environmental art, community engagement, therapeutic art, and placemaking."
        />

        {/* Intro */}
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-lg text-gray-600 leading-relaxed">
              We partner with councils, developers, and government bodies to
              create public art that does more than beautify — it connects
              communities to place, activates precincts, and delivers measurable
              outcomes for the spaces and people it serves.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Approach Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {approach.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 100}>
              <div className="flex gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-ocean-600 text-white flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-ocean-400 text-sm font-mono font-bold">
                      {step.step}
                    </span>
                    <h3 className="font-display text-xl font-bold text-ocean-950">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Placemaking connection */}
        <AnimateOnScroll>
          <div className="mt-24 max-w-3xl mx-auto text-center p-10 bg-ocean-50 rounded-2xl border border-ocean-100">
            <h2 className="font-display text-2xl font-bold text-ocean-950 mb-4">
              Connected to Future Place Studio
            </h2>
            <p className="text-gray-600 leading-relaxed">
              InkHunter&apos;s approach to public art is deeply informed by
              placemaking principles. Through our connection to Future Place
              Studio, we bring expertise in how art can activate precincts,
              improve walkability, encourage community gathering, and create
              spaces where people feel they belong.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </div>
  );
}
