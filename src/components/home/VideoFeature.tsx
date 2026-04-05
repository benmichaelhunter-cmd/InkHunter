"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function VideoFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-ocean-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-800/30 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          title="As Seen On"
          subtitle="Plastic Free Beaches featured on 7 News Australia."
          className="[&_h2]:text-white [&_p]:text-ocean-200"
        />

        <AnimateOnScroll>
          <div
            ref={ref}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-ocean-800/50"
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {visible && (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/sAWdFiPQErY?autoplay=1&mute=1&loop=1&playlist=sAWdFiPQErY&rel=0&modestbranding=1"
                  title="7 News Australia with Plastic Free Beaches"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
