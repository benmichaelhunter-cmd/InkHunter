import { Leaf, Users, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { pillars } from "@/data/pillars";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="w-7 h-7" strokeWidth={1.5} />,
  users: <Users className="w-7 h-7" strokeWidth={1.5} />,
  heart: <Heart className="w-7 h-7" strokeWidth={1.5} />,
};

const colorMap: Record<
  string,
  { gradient: string; iconBg: string; iconText: string; accent: string }
> = {
  Environment: {
    gradient: "from-bush-50 via-white to-bush-50/50",
    iconBg: "bg-bush-100",
    iconText: "text-bush-600",
    accent: "bg-bush-500",
  },
  Community: {
    gradient: "from-ocean-50 via-white to-ocean-50/50",
    iconBg: "bg-ocean-100",
    iconText: "text-ocean-600",
    accent: "bg-ocean-500",
  },
  Wellbeing: {
    gradient: "from-sunset-50 via-white to-sunset-50/50",
    iconBg: "bg-sunset-100",
    iconText: "text-sunset-600",
    accent: "bg-sunset-500",
  },
};

export default function Pillars() {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ocean-50/30 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="Art with Purpose"
          subtitle="Every project is built on three pillars — environment, community, and wellbeing. Together, they create art that matters."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const colors = colorMap[pillar.title];
            return (
              <AnimateOnScroll key={pillar.title} delay={i * 150}>
                <div className="group relative h-full">
                  {/* Card */}
                  <div
                    className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${colors.gradient} border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden`}
                  >
                    {/* Number badge */}
                    <span className="absolute top-6 right-6 font-display text-5xl font-bold text-ocean-950/5 leading-none select-none">
                      0{i + 1}
                    </span>

                    {/* Accent bar */}
                    <div
                      className={`w-10 h-1 ${colors.accent} rounded-full mb-8 transition-all duration-500 group-hover:w-16`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl ${colors.iconBg} ${colors.iconText} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rounded-xl shadow-sm`}
                    >
                      {iconMap[pillar.icon]}
                    </div>

                    {/* Content */}
                    <h3 className="relative font-display text-2xl font-bold text-ocean-950 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="relative text-gray-600 leading-relaxed text-[0.95rem]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
