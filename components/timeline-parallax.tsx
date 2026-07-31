"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const LERP = 0.07;

export function TimelineParallax({
  children,
  speed = 0.06,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const measureTarget = () => {
      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      targetYRef.current = (elementCenter - viewportCenter) * speed;
    };

    const animate = () => {
      const delta = targetYRef.current - currentYRef.current;
      if (Math.abs(delta) > 0.04) {
        currentYRef.current += delta * LERP;
        setTranslateY(currentYRef.current);
      } else if (currentYRef.current !== targetYRef.current) {
        currentYRef.current = targetYRef.current;
        setTranslateY(currentYRef.current);
      }
      rafRef.current = window.requestAnimationFrame(animate);
    };

    measureTarget();
    rafRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("scroll", measureTarget, { passive: true });
    window.addEventListener("resize", measureTarget);
    return () => {
      window.removeEventListener("scroll", measureTarget);
      window.removeEventListener("resize", measureTarget);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${translateY.toFixed(2)}px, 0)`, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
