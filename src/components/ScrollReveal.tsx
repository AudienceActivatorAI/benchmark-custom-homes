"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale" | "stagger";
  delay?: number;
  threshold?: number;
  style?: React.CSSProperties;
  as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("visible"), delay);
          } else {
            el.classList.add("visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "scale"
        ? "reveal-scale"
        : variant === "stagger"
          ? "stagger-children"
          : "reveal";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className}`}
      style={{ transitionDelay: delay > 0 ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
