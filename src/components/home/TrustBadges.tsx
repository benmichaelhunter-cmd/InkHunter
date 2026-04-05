"use client";

import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { trustBadges } from "@/data/trust-badges";
import {
  Building2,
  Landmark,
  Anchor,
  Building,
  Waves,
  Flag,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "NSW Government": <Landmark className="w-4 h-4" />,
  "City of Parramatta": <Building2 className="w-4 h-4" />,
  "Australian National Maritime Museum": <Anchor className="w-4 h-4" />,
  "Maitland City Council": <Building className="w-4 h-4" />,
  "Great Southern Reef Foundation": <Waves className="w-4 h-4" />,
  "Australian Government": <Flag className="w-4 h-4" />,
};

export default function TrustBadges() {
  const doubled = [...trustBadges, ...trustBadges];

  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 overflow-hidden">
      <Container>
        <AnimateOnScroll animation="fade-in">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ocean-400 mb-10">
            Trusted by councils, government &amp; institutions
          </p>
        </AnimateOnScroll>
      </Container>

      {/* Full-width scrolling strip */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left gap-6 items-center w-max">
          {doubled.map((badge, i) => (
            <div
              key={`${badge.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-ocean-200 transition-all duration-300"
            >
              <span className="text-ocean-500">
                {iconMap[badge.name] ?? <Building2 className="w-4 h-4" />}
              </span>
              <span className="text-gray-700 font-semibold text-sm whitespace-nowrap tracking-wide">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
