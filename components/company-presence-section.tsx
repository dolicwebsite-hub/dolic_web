"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 120000, suffix: " m2", label: "Diện tích trang trại thực nghiệm" },
  { value: 1996, eyebrow: "Từ năm", label: "người sáng lập Ông Bùi Văn Tới bắt đầu từ thực địa nuôi trồng thuỷ sản" },
  { value: 34, suffix: "+", label: "Có mặt trên 34 tỉnh thành" },
];

function AnimatedNumber({ value, suffix = "", active }: { value: number; suffix?: string; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1200;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span>
      {current.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}

export function CompanyPresenceSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#F6F8F7] px-5 py-16 text-[#202b50] md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Sự có mặt của chúng tôi</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <article key={item.label} className="min-w-0 border-t border-[#202b50]/22 pt-6">
              {"eyebrow" in item ? <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">{item.eyebrow}</p> : null}
              <p className="max-w-full break-words font-serif text-[clamp(3.2rem,5vw,5rem)] leading-none tracking-normal text-[#0A2E5C]">
                <AnimatedNumber active={active} value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-5 max-w-sm text-base font-bold leading-7 text-[#202b50]/72">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
