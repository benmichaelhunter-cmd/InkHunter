import type { Metadata } from "next";
import {
  Paintbrush,
  Building2,
  MessageCircle,
  Sparkles,
  TreePine,
  HeartHandshake,
  Monitor,
  GraduationCap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Large-scale murals, community consultation, emerging artist programs, environmental advocacy art, and more. InkHunter partners with councils and government to transform spaces.",
  path: "/services",
});

const iconMap: Record<string, React.ReactNode> = {
  paintbrush: <Paintbrush className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />,
  "message-circle": <MessageCircle className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  trees: <TreePine className="w-6 h-6" />,
  "heart-handshake": <HeartHandshake className="w-6 h-6" />,
  monitor: <Monitor className="w-6 h-6" />,
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeading
          title="Services"
          subtitle="From large-scale murals to community workshops — we bring the full scope of public art practice to every engagement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 80}>
              <div className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-ocean-200 hover:shadow-lg transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-xl bg-ocean-50 text-ocean-600 flex items-center justify-center mb-5 group-hover:bg-ocean-600 group-hover:text-white transition-colors duration-300">
                  {iconMap[service.icon] ?? <Paintbrush className="w-6 h-6" />}
                </div>
                <h3 className="font-display text-xl font-bold text-ocean-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-sm text-ocean-600 font-medium">
                  Typical clients: {service.clients}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </div>
  );
}
