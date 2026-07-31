"use client";

import { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "left" | "right";

export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const directionClass =
    direction === "left" ? "motion-reveal-left" : direction === "right" ? "motion-reveal-right" : "motion-reveal";

  return (
    <div
      ref={ref}
      className={`${directionClass} ${visible ? "motion-reveal-visible" : ""} ${className}`}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
