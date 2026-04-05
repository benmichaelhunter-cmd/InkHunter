import type { Metadata } from "next";
import { TrendingUp, Users, Leaf, Heart, ArrowUpRight } from "lucide-react";
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
    gradient: "from-ochre-50 via-white to-ochre-50/30",
    border: "border-ochre-100",
    iconBg: "bg-ochre-100",
    iconColor: "text-ochre-600",
    accent: "bg-ochre-500",
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    title: "Social Cohesion",
    description:
      "When a community sees itself reflected in the art that surrounds it, something powerful happens — a sense of belonging, pride, and ownership that no amount of infrastructure spending alone can achieve.",
    gradient: "from-ocean-50 via-white to-ocean-50/30",
    border: "border-ocean-100",
    iconBg: "bg-ocean-100",
    iconColor: "text-ocean-600",
    accent: "bg-ocean-500",
    icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    title: "Environmental Awareness",
    description:
      "Murals that respond to ecological crises — from algae blooms to ocean pollution — use visual storytelling to demand political action and inspire behaviour change at scale.",
    gradient: "from-bush-50 via-white to-bush-50/30",
    border: "border-bush-100",
    iconBg: "bg-bush-100",
    iconColor: "text-bush-600",
    accent: "bg-bush-500",
    icon: <Leaf className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    title: "Wellbeing & Mental Health",
    description:
      "Public art transforms the everyday environment into something that nourishes rather than depletes. A walk past a beautiful mural changes the texture of a day — and the research backs this up.",
    gradient: "from-sunset-50 via-white to-sunset-50/30",
    border: "border-sunset-100",
    iconBg: "bg-sunset-100",
    iconColor: "text-sunset-600",
    accent: "bg-sunset-500",
    icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
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
          <blockquote className="relative max-w-3xl mx-auto text-center py-14 mb-24">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ocean-50/60 via-white to-ocean-50/40 border border-ocean-100" />
            <div className="relative px-8 md:px-12">
              <span className="font-display text-6xl text-ocean-200 leading-none select-none">&ldquo;</span>
              <p className="font-display text-xl md:text-2xl text-ocean-900 italic leading-relaxed -mt-6">
                Since the pandemic, people are looking to public spaces as a
                safe, open environment to connect with others. The artworks
                enhance our open spaces, improve walkability and connection,
                encourage day and night activity, and increase footfall.
              </p>
              <footer className="mt-6 text-sm text-gray-500 font-medium">
                — Patrick Hunter
              </footer>
            </div>
          </blockquote>
        </AnimateOnScroll>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {impacts.map((impact, i) => (
            <AnimateOnScroll key={impact.title} delay={i * 100}>
              <div
                className={`group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${impact.gradient} border ${impact.border} h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
              >
                <div className={`w-10 h-1 ${impact.accent} rounded-full mb-6 transition-all duration-500 group-hover:w-16`} />
                <div className={`w-12 h-12 rounded-2xl ${impact.iconBg} ${impact.iconColor} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110`}>
                  {impact.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-ocean-950 mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
                <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-gray-300 transition-all duration-500 group-hover:text-gray-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </div>
  );
}
