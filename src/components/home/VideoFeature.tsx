"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function VideoFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

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
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ocean-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ocean-400/30 to-transparent" />

      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-800/60 border border-ocean-700/50 text-ocean-300 text-xs font-semibold tracking-widest uppercase mb-6">
              As Seen On
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Featured on{" "}
              <span className="bg-gradient-to-r from-ocean-300 to-ocean-100 bg-clip-text text-transparent">
                7 News Australia
              </span>
            </h2>
            <p className="text-ocean-300 text-lg max-w-2xl mx-auto">
              Patrick Hunter&apos;s Plastic Free Beaches campaign — using street
              art to hold big business accountable for plastic pollution on
              Sydney&apos;s Northern Beaches.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div
            ref={ref}
            className="relative max-w-4xl mx-auto mt-12"
          >
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-ocean-500/20 via-ocean-400/10 to-ocean-500/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-ocean-700/40 ring-1 ring-ocean-500/10">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                {playing ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/sAWdFiPQErY?autoplay=1&rel=0&modestbranding=1"
                    title="7 News Australia with Plastic Free Beaches"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer group/play"
                    aria-label="Play video"
                  >
                    {visible && (
                      <Image
                        src="https://i.ytimg.com/vi/sAWdFiPQErY/maxresdefault.jpg"
                        alt="7 News Australia with Plastic Free Beaches"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    )}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/20 transition-colors duration-300" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 group-hover/play:bg-white group-hover/play:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl shadow-black/30">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-ocean-950 ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* 7 NEWS badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-white text-xs font-bold tracking-wide">
                        7 NEWS
                      </span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1">
                      <span className="text-white text-xs font-medium">2:13</span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
