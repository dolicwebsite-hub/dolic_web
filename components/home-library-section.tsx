"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { libraryPosts } from "@/lib/library-data";

export function HomeLibrarySection() {
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className="overflow-hidden">
          <div className="flex w-full">
            {libraryPosts.slice(0, 4).map((item, index) => {
              const active = activeIndex === index;

              return (
                <article
                  key={item.title}
                  className={`group flex min-h-[520px] min-w-0 flex-col justify-center border-r border-[#202b50] px-4 py-12 transition-[flex-grow,flex-basis,background-color] duration-500 ease-out md:px-6 ${
                    active ? "basis-[54%] grow-[8] bg-[#f7f5f1]" : "basis-[11%] grow hover:bg-white"
                  }`}
                >
                  <div className={`relative overflow-hidden bg-slate-200 transition-all duration-500 ${active ? "aspect-[4/3]" : "aspect-[3/5]"}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={active ? "(min-width: 1024px) 42vw, 82vw" : "(min-width: 1024px) 14vw, 45vw"}
                      className={`object-cover transition duration-500 ${active ? "opacity-100" : "opacity-68 group-hover:opacity-92"}`}
                    />
                    <button
                      type="button"
                      aria-label={`Mở rộng ${item.title}`}
                      onClick={() => setActiveIndex(index)}
                      className="absolute inset-0 z-10"
                    />
                    <span className="absolute left-0 top-0 z-20 bg-[#202b50] px-3 py-1 text-sm font-bold text-white">{item.type}</span>
                    {active ? (
                      <Link href={item.href} className="absolute inset-0 z-30 grid place-items-center bg-black/0 text-white opacity-0 transition hover:bg-black/24 hover:opacity-100">
                        <span className="grid h-28 w-28 place-items-center rounded-full bg-white text-center font-serif text-xl leading-tight text-[#202b50] shadow-[0_18px_55px_-28px_rgba(0,0,0,0.65)]">
                          Chi tiết
                        </span>
                      </Link>
                    ) : null}
                  </div>
                  <button type="button" onClick={() => setActiveIndex(index)} className="text-left">
                    <h3 className={`mt-6 uppercase leading-tight tracking-normal transition ${active ? "text-2xl md:text-3xl" : "line-clamp-5 break-words text-sm text-[#202b50]/52 group-hover:text-[#202b50] md:text-base"}`}>
                      {item.title}
                    </h3>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
