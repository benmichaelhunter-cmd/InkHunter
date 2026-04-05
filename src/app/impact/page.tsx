import type { Metadata } from "next";
import { TrendingUp, Users, Leaf, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Impact — Why Public Art Matters",
  description:
    "The evidence for investing in public art — economic uplift, social cohesion, environmental awareness, and community wellbeing. An investment case for councils and government.",
  path: "/impact",
});

const stats = [
  { value: "100+", label: "Metres of mural in Parramatta alone", icon: <TrendingUp className="w-6 h-6" /> },
  { value: "16,000", label: "Km travelled to paint Marion Bay", icon: <Leaf className="w-6 h-6" /> },
  { value: "200+", label: "Community voices in Harris Park", icon: <Users className="w-6 h-6" /> },
  { value: "7+", label: "Laneways transformed in Maitland", icon: <Heart className="w-6 h-6" /> },
];

const impacts = [
  {
    title: "Economic Impact",
    description:
      "Public art increases property values, drives foot traffic, and positions precincts as destinations. Local businesses in Harris Park reported increased patronage within weeks of the Cultural Precinct mural's completion.",
    color: "bg-ochre-50 border-ochre-200",
    iconColor: "text-ochre-600",
  },
  {
    title: "Social Cohesion",
    description:
      "When a community sees itself reflected in the art that surrounds it, something powerful happens — a sense of belonging, pride, and ownership that no amount of infrastructure spending alone can achieve.",
    color: "bg-ocean-50 border-ocean-200",
    iconColor: "text-ocean-600",
  },
  {
    title: "Environmental Awareness",
    description:
      "Murals that respond to ecological crises — from algae blooms to ocean pollution — use visual storytelling to demand political action and inspire behaviour change at scale.",
    color: "bg-bush-50 border-bush-200",
    iconColor: "text-bush-600",
  },
  {
    title: "Wellbeing & Mental Health",
    description:
      "Public art transforms the everyday environment into something that nourishes rather than depletes. A walk past a beautiful mural changes the texture of a day — and the research backs this up.",
    color: "bg-sunset-50 border-sunset-200",
    iconColor: "text-sunset-600",
  },
];

export default function ImpactPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeading
          title="Why Public Art Matters"
          subtitle="The evidence is clear — well-executed public art delivers measurable returns across economic, social, and wellbeing metrics that few other investments can match."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-ocean-50 text-ocean-600 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold text-ocean-950">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Key Quote */}
        <AnimateOnScroll>
          <blockquote className="max-w-3xl mx-auto text-center py-12 mb-24 border-y border-gray-200">
            <p className="font-display text-xl md:text-2xl text-ocean-900 italic leading-relaxed">
              &ldquo;Since the pandemic, people are looking to public spaces as
              a safe, open environment to connect with others. The artworks
              enhance our open spaces, improve walkability and connection,
              encourage day and night activity, and increase footfall.&rdquo;
            </p>
          </blockquote>
        </AnimateOnScroll>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impacts.map((impact, i) => (
            <AnimateOnScroll key={impact.title} delay={i * 100}>
              <div
                className={`p-8 rounded-2xl border ${impact.color} h-full`}
              >
                <h3 className="font-display text-xl font-bold text-ocean-950 mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </div>
  );
}
