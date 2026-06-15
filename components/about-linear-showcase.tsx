"use client";

import Image from "next/image";
import { useState } from "react";
import { BadgeCheck, Factory, MapPin, PackageCheck, ShieldCheck } from "lucide-react";
import { PrimaryButton } from "@/components/site-chrome";

const aboutCards = [
  {
    id: "operation",
    label: "Vận hành",
    title: "Thiết bị thủy sản bám sát mô hình ao Việt Nam",
    description:
      "Dolic tập trung vào các nhóm thiết bị tác động trực tiếp đến oxy, cấp thoát nước, đo môi trường và nhịp vận hành hằng ngày của trang trại.",
    metric: "6+",
    metricLabel: "nhóm thiết bị",
    image: "/assets/aquaculture-hero.png",
    icon: Factory,
  },
  {
    id: "catalog",
    label: "Danh mục",
    title: "Sản phẩm có mã, thông số và giá tham khảo rõ ràng",
    description:
      "Danh mục được tổ chức theo nhóm quạt nước, bơm, đo nước, máy cho ăn và thiết bị sục khí để đội bán hàng tư vấn nhanh hơn.",
    metric: "28+",
    metricLabel: "mã sản phẩm",
    image: "/assets/products/aerator-6-canh-15kw-hop-so-b.png",
    icon: PackageCheck,
  },
  {
    id: "support",
    label: "Hỗ trợ",
    title: "Tư vấn cấu hình theo điện áp, diện tích ao và mục tiêu nuôi",
    description:
      "Mỗi cấu hình được gắn với nhu cầu thực tế: tăng oxy, cấp thoát nước, kiểm tra DO hoặc tối ưu chi phí vận hành cho từng vùng nuôi.",
    metric: "12",
    metricLabel: "tháng bảo hành",
    image: "/assets/products/pump-75kw-380v.png",
    icon: ShieldCheck,
  },
  {
    id: "location",
    label: "Địa chỉ",
    title: "Điểm liên hệ tại Bắc Ninh cho đại lý và trang trại",
    description:
      "Dolic tiếp nhận tư vấn, báo giá và hỗ trợ sau bán qua hotline, email và địa chỉ công ty để khách hàng dễ kết nối.",
    metric: "0397",
    metricLabel: "hotline chính",
    image: "/Logo-Dolic.png",
    icon: MapPin,
  },
];

export function AboutLinearShowcase() {
  const [activeCardId, setActiveCardId] = useState(aboutCards[0].id);
  const activeCard = aboutCards.find((card) => card.id === activeCardId) ?? aboutCards[0];

  return (
    <section className="bg-[#f6f8fb] px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Về chúng tôi</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-normal text-slate-950 md:text-5xl">
            Công ty TNHH Thủy Sản Dolic
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Dolic cung cấp thiết bị vận hành cho trang trại thủy sản Việt Nam, tập trung vào sục khí, bơm nước, đo môi trường và cấu hình máy móc phù hợp từng mô hình nuôi.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.42)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-slate-950 md:min-h-[560px]">
            <Image
              key={activeCard.id}
              src={activeCard.image}
              alt={activeCard.title}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className={`object-cover transition duration-500 ${activeCard.id === "location" ? "object-contain p-10" : "scale-[1.02]"}`}
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.1)_0%,rgba(3,7,18,0.72)_100%)]" />
            <div className="absolute left-4 top-4 flex h-16 w-52 items-center justify-center rounded-md bg-white px-4 shadow-sm sm:left-6 sm:top-6">
              <Image src="/Logo-Dolic.png" alt="Logo Dolic" width={2867} height={842} className="h-auto w-full object-contain" />
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-md border border-white/15 bg-slate-950/58 p-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{activeCard.label}</p>
              <h2 className="mt-2 text-2xl font-black leading-tight tracking-normal md:text-3xl">{activeCard.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-200">{activeCard.description}</p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 lg:p-7">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">Dolic profile</p>
                <h2 className="mt-2 text-2xl font-black tracking-normal text-slate-950">Nền tảng công ty</h2>
              </div>
              <BadgeCheck className="h-7 w-7 shrink-0 text-cyan-600" />
            </div>

            <div className="space-y-3">
              {aboutCards.map((card, index) => {
                const Icon = card.icon;
                const isActive = activeCardId === card.id;

                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setActiveCardId(card.id)}
                    className={`group grid w-full grid-cols-[44px_minmax(0,1fr)_auto] gap-3 rounded-md border p-3 text-left transition duration-300 sm:p-4 ${
                      isActive
                        ? "border-cyan-300 bg-cyan-50 shadow-[0_20px_50px_-36px_rgba(8,145,178,0.7)]"
                        : "border-slate-200 bg-white hover:border-cyan-200 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-md transition ${isActive ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-600 group-hover:text-cyan-700"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
                        0{index + 1} / {card.label}
                      </span>
                      <span className="mt-1 block text-base font-black leading-6 text-slate-950">{card.title}</span>
                      <span className={`grid transition-all duration-300 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <span className="overflow-hidden">
                          <span className="block pt-2 text-sm leading-6 text-slate-600">{card.description}</span>
                        </span>
                      </span>
                    </span>
                    <span className="text-right">
                      <span className="block text-xl font-black text-[#0A2E5C]">{card.metric}</span>
                      <span className="mt-1 block max-w-20 text-xs font-bold leading-4 text-slate-500">{card.metricLabel}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {aboutCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  aria-label={card.label}
                  onClick={() => setActiveCardId(card.id)}
                  className={`h-1.5 rounded-full transition ${activeCardId === card.id ? "bg-cyan-500" : "bg-slate-200 hover:bg-slate-300"}`}
                />
              ))}
            </div>

            <div className="mt-7 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
              <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <p className="font-black text-slate-950">Hotline</p>
                <p className="mt-1">0397 581 028 - 0352 495 893</p>
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <p className="font-black text-slate-950">Email</p>
                <p className="mt-1 break-words">congtytnhhthuysandolic@gmail.com</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/san-pham">Xem sản phẩm</PrimaryButton>
              <PrimaryButton href="/lien-he" variant="outline">
                Nhận tư vấn
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
