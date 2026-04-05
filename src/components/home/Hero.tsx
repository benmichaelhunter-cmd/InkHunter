"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end justify-end overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://assets.atdw-online.com.au/images/6e0e3b2099fe3bba68ff547ec6040368.jpeg?rect=0%2C607%2C2082%2C1562&w=1600&h=1200&rot=360"
        alt="Large-scale environmental mural artwork"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Bottom gradient for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(7,42,73,0.95) 0%, rgba(7,42,73,0.7) 35%, rgba(7,42,73,0.15) 55%, rgba(7,42,73,0.0) 70%)",
        }}
      />
      {/* Top gradient for header readability */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,42,73,0.7) 0%, rgba(7,42,73,0.0) 100%)",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float-drift ${18 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-6 sm:px-10 md:px-16 pb-24 max-w-3xl">
        <div
          className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-ocean-200 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-6">
            Patrick Hunter &mdash; InkHunter
          </p>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          {["Large-scale", "public art that", "transforms", "communities"].map(
            (word, i) => (
              <span
                key={i}
                className={`inline transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                {word}{" "}
              </span>
            )
          )}
        </h1>

        <div
          className={`transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <p className="mt-6 text-lg sm:text-xl text-ocean-100 max-w-2xl leading-relaxed">
            Environmental murals and placemaking that connect people to place,
            nature, and each other.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-[1100ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <Button href="/contact" variant="secondary" size="lg" className="!bg-white !text-ocean-950 hover:!bg-ocean-50 border-transparent shadow-2xl">
            Commission a Project
          </Button>
          <Button
            href="/projects"
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[1500ms] ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
