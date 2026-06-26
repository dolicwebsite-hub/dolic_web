"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contactInfo } from "@/lib/site-data";

const regions = [
  {
    label: "Miền Bắc",
    office: contactInfo.offices[1],
    image: "/assets/drive/customer-farm/customer-farm-2.jpg",
  },
  {
    label: "Miền Nam",
    office: contactInfo.offices[0],
    image: "/assets/drive/customer-farm/customer-farm-1.jpg",
  },
];

const productImages = [
  "/assets/products/aerator-6-canh-15kw-hop-so-b.png",
  "/assets/products/aerator-2-canh-075kw-220v.jpg",
  "/assets/products/pump-75kw-380v.png",
  "/assets/products/pump-4kw-380v-bien-tan.png",
  "/assets/products/tam-hoa-co-075kw-220v.jpg",
  "/assets/drive/customer-farm/customer-aerator-installed.jpg",
];

export function HomeRegionProductSection() {
  const [regionIndex, setRegionIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const activeRegion = regions[regionIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProductIndex((current) => (current + 1) % productImages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="grid bg-[#e9e4da] text-[#202b50] lg:grid-cols-2">
      <div className="bg-[#202b50] px-5 py-16 text-white md:px-10 md:py-24 lg:min-h-[780px]">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-5xl leading-none tracking-normal md:text-7xl">Vùng hoạt động</h2>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-lg md:text-2xl">
            {regions.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setRegionIndex(index)}
                className={`relative transition ${regionIndex === index ? "text-white" : "text-white/42 hover:text-white/72"}`}
              >
                {regionIndex === index ? <span className="absolute -top-7 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white" /> : null}
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-12 border-b-2 border-white/82 pb-4">
            <div className="flex items-end justify-between gap-4 text-lg text-white/58 md:text-2xl">
              <span>Chọn văn phòng / vùng nuôi</span>
              <span className="text-white">↓</span>
            </div>
            <div className="mt-5 grid gap-2 text-sm leading-6 text-white/82 md:text-base">
              <p className="font-bold text-white">Văn phòng {activeRegion.office.region}</p>
              <p>{activeRegion.office.address}</p>
              <p className="font-semibold text-cyan-200">Hotline: {activeRegion.office.displayHotline}</p>
            </div>
          </div>

          <Link href="/lien-he" className="group relative mt-10 block aspect-[16/9] overflow-hidden bg-white/10">
            <Image
              key={activeRegion.image}
              src={activeRegion.image}
              alt={`Vùng hoạt động Dolic ${activeRegion.label}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-82 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
            />
            <span className="absolute inset-0 bg-black/24" />
            <span className="absolute inset-0 grid place-items-center font-serif text-3xl uppercase text-white underline underline-offset-8">Liên hệ</span>
          </Link>
        </div>
      </div>

      <div className="px-5 py-16 md:px-10 md:py-24 lg:min-h-[780px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-5xl leading-none tracking-normal md:text-7xl">Danh mục</h2>
          <Link href="/san-pham" className="group relative mx-auto mt-16 block aspect-[4/3] max-w-[720px] overflow-hidden bg-slate-200">
            {productImages.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt="Sản phẩm thật Dolic"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`object-contain p-7 transition duration-700 md:p-10 ${index === productIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
              />
            ))}
            <span className="absolute inset-0 bg-black/8 transition group-hover:bg-black/4" />
            <span className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white font-serif text-xl leading-tight text-[#202b50] shadow-[0_20px_65px_-35px_rgba(0,0,0,0.65)] transition group-hover:scale-105 md:h-44 md:w-44 md:text-3xl">
              Xem
              <br />
              sản phẩm
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
