"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale";
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("is-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    "fade-up": "",
    "fade-in": "animate-fade-in",
    scale: "animate-scale",
  }[animation];

  return (
    <div
      ref={ref}
      className={clsx("animate-on-scroll", animationClass, className)}
    >
      {children}
    </div>
  );
}
