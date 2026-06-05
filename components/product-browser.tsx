"use client";

import Image from "next/image";
import { useState } from "react";
import { BadgeCheck, ChevronRight, Factory, Gauge, Info, ListMusic, PackageCheck, Plus, ShieldCheck, X } from "lucide-react";
import { productCategories, type Product } from "@/lib/site-data";
import { PrimaryButton } from "@/components/site-chrome";

export function ProductBrowser() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const [openedCategoryIndex, setOpenedCategoryIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [expandedFeatureId, setExpandedFeatureId] = useState("specs");

  const activeCategory = activeCategoryIndex === null ? null : productCategories[activeCategoryIndex];
  const openedCategory = openedCategoryIndex === null ? null : productCategories[openedCategoryIndex];
  const featuredProduct = activeCategory?.products[0];

  const chooseCategory = (index: number) => {
    setActiveCategoryIndex(index);
    setOpenedCategoryIndex(index);
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setExpandedFeatureId("specs");
  };

  const selectedSpecs = selectedProduct?.specs.split(" - ").filter(Boolean) ?? [];
  const selectedFeatures = selectedProduct
    ? [
        {
          id: "specs",
          title: "Thông số vận hành",
          description: selectedProduct.specs,
          icon: Gauge,
        },
        {
          id: "origin",
          title: "Model & xuất xứ",
          description: `Model ${selectedProduct.model}. Xuất xứ: ${selectedProduct.origin}.`,
          icon: Info,
        },
        {
          id: "status",
          title: "Dữ liệu sản phẩm",
          description: selectedProduct.status,
          icon: BadgeCheck,
        },
        {
          id: "support",
          title: "Bảo hành & tư vấn",
          description: "Dolic tư vấn cấu hình theo diện tích ao, điện áp, lưu lượng vận hành và chính sách bảo hành hiện hành.",
          icon: ShieldCheck,
        },
      ]
    : [];
  const expandedFeature = selectedFeatures.find((feature) => feature.id === expandedFeatureId) ?? selectedFeatures[0];

  return (
    <>
      <section className="relative mb-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm md:mb-10">
        <div className="absolute inset-0">
          <Image
            src={activeCategory?.image ?? "/assets/aquaculture-hero.png"}
            alt=""
            fill
            sizes="100vw"
            className="scale-105 object-cover opacity-45 blur-[2px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,82,0.86),rgba(8,42,82,0.58),rgba(8,42,82,0.42))]" />
        </div>

        <div className="relative grid gap-4 p-3 sm:p-4 md:gap-6 md:p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
          <div className="rounded-lg border border-white/16 bg-white/12 p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-md sm:p-4">
            <div className="flex items-center gap-3 text-white">
              <Factory className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">Danh mục đang chọn</p>
                <h2 className="text-xl font-black leading-tight sm:text-2xl">{activeCategory?.name ?? "Chọn một danh mục"}</h2>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-white/14 p-2.5 sm:mt-5 sm:p-3">
              <div className="relative aspect-[5/3] overflow-hidden rounded-md bg-white sm:aspect-[4/3]">
                <Image
                  src={activeCategory?.image ?? "/assets/aquaculture-hero.png"}
                  alt={activeCategory?.name ?? "Chọn danh mục sản phẩm Dolic"}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-contain p-3 sm:p-5"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 rounded-md border border-white/20 bg-white/14 p-3 text-white sm:mt-4 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="min-w-0 text-sm font-bold leading-5">{activeCategory ? featuredProduct?.name ?? "Danh mục sắp ra mắt" : "Chưa hiển thị sản phẩm"}</p>
                <span className="shrink-0 text-sm font-black text-cyan-100">
                  {activeCategory ? activeCategory.products.length > 0 ? `${activeCategory.products.length} SP` : "Soon" : "0 SP"}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-cyan-50/80">
                {activeCategory?.summary ?? "Bấm một danh mục ở danh sách bên phải để xem nhóm sản phẩm tương ứng."}
              </p>
              {activeCategoryIndex !== null ? (
                <button
                  type="button"
                  onClick={() => chooseCategory(activeCategoryIndex)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-100"
                >
                  Xem sản phẩm
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : null}
            </div>
          </div>

          <div className="rounded-lg border border-white/16 bg-white/12 p-3 backdrop-blur-md sm:p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-3">
                <ListMusic className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">ProductBox</p>
                  <h2 className="text-xl font-black leading-tight sm:text-2xl">Danh mục sản phẩm Dolic</h2>
                </div>
              </div>
              <span className="hidden rounded-full bg-white/14 px-3 py-1 text-xs font-bold text-cyan-50 md:inline-flex">
                {productCategories.length} nhóm
              </span>
            </div>

            <div className="grid gap-2">
              {productCategories.map((category, index) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => chooseCategory(index)}
                  className={`group grid min-h-14 grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-2 rounded-md border px-2.5 py-2 text-left transition sm:min-h-16 sm:grid-cols-[56px_minmax(0,1fr)_auto] sm:gap-3 sm:px-3 ${
                    index === activeCategoryIndex
                      ? "border-cyan-200 bg-white/24 text-white shadow-[0_18px_45px_-32px_rgba(34,211,238,0.7)]"
                      : "border-white/10 bg-white/8 text-cyan-50/86 hover:border-cyan-200/60 hover:bg-white/16"
                  }`}
                >
                  <div className="relative h-11 w-11 overflow-hidden rounded-md bg-white sm:h-12 sm:w-12">
                    <Image src={category.image} alt={category.name} fill sizes="48px" className="object-contain p-1.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="line-clamp-1 text-sm font-black leading-5 md:text-base">{category.name}</p>
                    <p className="mt-0.5 line-clamp-1 text-xs leading-4 text-cyan-50/68 sm:line-clamp-2">{category.summary}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="hidden text-sm font-bold text-cyan-50/82 sm:inline">
                      {category.products.length > 0 ? `${category.products.length} SP` : "Soon"}
                    </span>
                    <PackageCheck className={`h-4 w-4 ${index === activeCategoryIndex ? "text-cyan-100" : "text-cyan-200/70"}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10">
        {openedCategory ? (
          <section id={openedCategory.id} className="scroll-mt-24">
            <div className="mb-4 flex flex-col gap-2 border-b border-slate-200 pb-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Danh mục sản phẩm</p>
                <h2 className="mt-2 text-xl font-bold leading-tight text-slate-950 sm:text-2xl">{openedCategory.name}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{openedCategory.summary}</p>
              </div>
              <span className="text-sm font-black text-[#0A2E5C]">
                {openedCategory.products.length > 0 ? `${openedCategory.products.length} sản phẩm` : "Sắp ra mắt"}
              </span>
            </div>

            {openedCategory.products.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {openedCategory.products.map((product) => (
                  <article key={`${product.model}-${product.name}`} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fb_100%)] shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_28px_70px_-38px_rgba(8,145,178,0.45)]">
                    <button type="button" onClick={() => openProduct(product)} className="block h-full w-full text-left">
                      <div className="relative aspect-[5/3] overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#eef5f9_58%,#e2e8f0_100%)] sm:aspect-[4/3]">
                        <Image src={product.image} alt={product.name} fill className="object-contain p-5 transition duration-500 group-hover:scale-[1.06] sm:p-7" sizes="(min-width: 1280px) 390px, (min-width: 768px) 50vw, 100vw" />
                        <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">{product.model}</span>
                        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_16px_35px_-20px_rgba(15,23,42,0.85)] transition group-hover:bg-cyan-500 group-hover:text-slate-950">
                          <ChevronRight className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="p-4 sm:p-5">
                        <h3 className="text-base font-black leading-6 text-slate-950 sm:min-h-14 sm:leading-7">{product.name}</h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{product.specs}</p>
                        <div className="mt-4 flex items-end justify-between gap-3">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Giá tham khảo</p>
                            <p className="mt-1 text-base font-black text-[#0A2E5C]">{product.price} VND</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-black text-cyan-700">
                            Chi tiết
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-6 text-slate-600">
                Nhóm vi sinh và chế phẩm đang ở trạng thái sắp ra mắt trong file danh mục. Khi có mã sản phẩm chính thức, phần này có thể thêm sản phẩm ngay theo cùng cấu trúc.
              </div>
            )}
          </section>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-sm leading-6 text-slate-600">
            Chọn một danh mục trong ProductBox để xem danh sách sản phẩm tương ứng.
          </div>
        )}
      </div>

      {selectedProduct ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/72 px-3 py-5 backdrop-blur-md sm:px-4 sm:py-6" role="dialog" aria-modal="true">
          <div className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[30px] bg-[#070b12] text-white shadow-[0_32px_110px_-38px_rgba(0,0,0,0.95)] sm:rounded-[38px]">
            <button
              type="button"
              aria-label="Đóng popup sản phẩm"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/12 text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[92vh] overflow-auto lg:grid lg:grid-cols-[390px_1fr]">
              <aside className="relative z-10 border-b border-white/10 bg-[#101723] p-4 sm:p-6 lg:min-h-[680px] lg:border-b-0 lg:border-r lg:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Dolic product</p>
                <h2 className="mt-3 text-2xl font-black leading-tight tracking-normal text-white sm:text-3xl">{selectedProduct.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {selectedProduct.model} | {selectedProduct.origin}
                </p>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Giá tham khảo</p>
                  <p className="mt-2 text-3xl font-black text-white">{selectedProduct.price} VND</p>
                  <span className="mt-3 inline-flex rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-slate-950">
                    {selectedProduct.priority ?? "Theo danh mục"}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedFeatures.map(({ id, title, description, icon: Icon }) => {
                    const isExpanded = expandedFeatureId === id;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setExpandedFeatureId(id)}
                        className={`group w-full rounded-[22px] border p-4 text-left transition duration-300 ${
                          isExpanded
                            ? "border-cyan-300/70 bg-white/[0.12] shadow-[0_22px_55px_-42px_rgba(34,211,238,0.95)]"
                            : "border-white/10 bg-white/[0.05] hover:border-white/24 hover:bg-white/[0.08]"
                        }`}
                      >
                        <span className="flex items-start justify-between gap-4">
                          <span className="flex min-w-0 items-center gap-3">
                            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${isExpanded ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-cyan-200"}`}>
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0 text-base font-black leading-6 text-white">{title}</span>
                          </span>
                          <Plus className={`mt-2 h-5 w-5 shrink-0 text-slate-300 transition duration-300 ${isExpanded ? "rotate-45 text-cyan-200" : "group-hover:text-white"}`} />
                        </span>
                        <span className={`grid transition-all duration-300 ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <span className="overflow-hidden">
                            <span className="block pt-3 text-sm leading-6 text-slate-300">{description}</span>
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {selectedSpecs.length > 0 ? (
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {selectedSpecs.slice(0, 4).map((spec) => (
                      <div key={spec} className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 text-center">
                        <p className="text-sm font-black text-cyan-50">{spec}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-col gap-3">
                  <PrimaryButton href="/lien-he">Nhận báo giá sản phẩm</PrimaryButton>
                  <button type="button" onClick={() => setSelectedProduct(null)} className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-black text-white transition hover:border-cyan-300 hover:bg-white/[0.1]">
                    Xem tiếp sản phẩm
                  </button>
                </div>
              </aside>

              <section className="relative min-h-[430px] overflow-hidden bg-[radial-gradient(circle_at_50%_18%,rgba(34,211,238,0.24),rgba(7,11,18,0)_38%),linear-gradient(145deg,#030712_0%,#07111f_48%,#000_100%)] sm:min-h-[560px] lg:min-h-[680px]">
                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                  {selectedProduct.model}
                </div>
                <div className="absolute inset-x-4 bottom-4 z-10 rounded-[24px] border border-white/10 bg-black/28 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-200">{expandedFeature?.title}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">{expandedFeature?.description}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16">
                  <div className="relative aspect-square w-full max-w-[640px] transition duration-500 ease-out">
                    <Image
                      key={`${selectedProduct.model}-${expandedFeatureId}`}
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-contain drop-shadow-[0_40px_75px_rgba(0,0,0,0.55)] transition duration-500 hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 760px, 100vw"
                      priority
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
