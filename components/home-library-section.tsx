"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { libraryTopics } from "@/lib/library-data";

export function HomeLibrarySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredTopics = libraryTopics.slice(0, 3);
  const totalSlides = featuredTopics.length;

  useEffect(() => {
    if (totalSlides <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="overflow-hidden border-y border-[#202b50] bg-[#f7f5f1] text-[#202b50]">
      <div className="grid lg:grid-cols-[27vw_minmax(0,1fr)]">
        <div className="flex min-h-[520px] flex-col justify-between border-b border-[#202b50] px-5 py-12 md:px-10 lg:border-b-0 lg:border-r">
          <div>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-normal md:text-7xl">
              Thư viện
              <br />
              Dolic
            </h2>
          </div>
          <Link href="/thu-vien" className="grid h-32 w-32 place-items-center rounded-full bg-[#075BB7] text-center font-serif text-xl leading-tight text-white transition hover:scale-105 md:h-40 md:w-40 md:text-2xl">
            Xem
            <br />
            thư viện
          </Link>
        </div>

        <div className="relative min-h-[520px] border-r border-[#202b50] p-4 md:p-6">
          <div className="overflow-hidden border border-[#202b50]/16 bg-white">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {featuredTopics.map((item) => {
                const heroPost = item.posts[0];
                return (
                  <article key={item.id} className="w-full shrink-0 p-4 md:p-6">
                    <div className="relative aspect-[16/9] overflow-hidden border border-[#202b50]/20 bg-slate-100">
                      <Image src={heroPost.image} alt={item.title} fill sizes="(min-width: 1024px) 72vw, 100vw" className="object-cover" />
                      <span className="absolute left-0 top-0 bg-[#202b50] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white">{item.title}</span>
                    </div>
                    <h3 className="mt-5 text-3xl font-black uppercase leading-tight tracking-normal text-[#202b50]">{item.title}</h3>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-[#202b50]/74">{item.description}</p>
                    <Link href="/thu-vien" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-700">
                      Xem chuyên mục
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Slide trước"
            onClick={goPrev}
            className="absolute left-7 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#202b50] p-2 text-white transition hover:bg-[#0f1a3a]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Slide sau"
            onClick={goNext}
            className="absolute right-7 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#202b50] p-2 text-white transition hover:bg-[#0f1a3a]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2">
            {featuredTopics.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Chuyển đến slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#202b50]" : "w-2.5 bg-[#202b50]/35 hover:bg-[#202b50]/55"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
