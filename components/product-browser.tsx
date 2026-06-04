"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Factory, ListMusic, PackageCheck, X } from "lucide-react";
import { productCategories, type Product } from "@/lib/site-data";
import { PrimaryButton } from "@/components/site-chrome";

export function ProductBrowser() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const [openedCategoryIndex, setOpenedCategoryIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const activeCategory = activeCategoryIndex === null ? null : productCategories[activeCategoryIndex];
  const openedCategory = openedCategoryIndex === null ? null : productCategories[openedCategoryIndex];
  const featuredProduct = activeCategory?.products[0];

  const chooseCategory = (index: number) => {
    setActiveCategoryIndex(index);
    setOpenedCategoryIndex(index);
  };

  return (
    <>
      <section className="relative mb-10 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
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

        <div className="relative grid gap-6 p-4 md:p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
          <div className="rounded-lg border border-white/16 bg-white/12 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-md">
            <div className="flex items-center gap-3 text-white">
              <Factory className="h-6 w-6" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">Danh mục đang chọn</p>
                <h2 className="text-2xl font-black">{activeCategory?.name ?? "Chọn một danh mục"}</h2>
              </div>
            </div>

            <div className="mt-5 rounded-lg bg-white/14 p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white">
                <Image
                  src={activeCategory?.image ?? "/assets/aquaculture-hero.png"}
                  alt={activeCategory?.name ?? "Chọn danh mục sản phẩm Dolic"}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-contain p-5"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 rounded-md border border-white/20 bg-white/14 p-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold">{activeCategory ? featuredProduct?.name ?? "Danh mục sắp ra mắt" : "Chưa hiển thị sản phẩm"}</p>
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

          <div className="rounded-lg border border-white/16 bg-white/12 p-4 backdrop-blur-md md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-3">
                <ListMusic className="h-6 w-6" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">ProductBox</p>
                  <h2 className="text-2xl font-black">Danh mục sản phẩm Dolic</h2>
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
                  className={`group grid min-h-16 grid-cols-[56px_1fr_auto] items-center gap-3 rounded-md border px-3 py-2 transition ${
                    index === activeCategoryIndex
                      ? "border-cyan-200 bg-white/24 text-white shadow-[0_18px_45px_-32px_rgba(34,211,238,0.7)]"
                      : "border-white/10 bg-white/8 text-cyan-50/86 hover:border-cyan-200/60 hover:bg-white/16"
                  }`}
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-md bg-white">
                    <Image src={category.image} alt={category.name} fill sizes="48px" className="object-contain p-1.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black md:text-base">{category.name}</p>
                    <p className="mt-0.5 truncate text-xs text-cyan-50/68">{category.summary}</p>
                  </div>
                  <div className="flex items-center gap-3">
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
                <h2 className="mt-2 text-2xl font-bold text-slate-950">{openedCategory.name}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{openedCategory.summary}</p>
              </div>
              <span className="text-sm font-black text-[#0A2E5C]">
                {openedCategory.products.length > 0 ? `${openedCategory.products.length} sản phẩm` : "Sắp ra mắt"}
              </span>
            </div>

            {openedCategory.products.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {openedCategory.products.map((product) => (
                  <article key={`${product.model}-${product.name}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-cyan-300 hover:shadow-lg">
                    <button type="button" onClick={() => setSelectedProduct(product)} className="block h-full w-full text-left">
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <Image src={product.image} alt={product.name} fill className="object-contain p-4 transition duration-500 group-hover:scale-105" sizes="(min-width: 1280px) 390px, (min-width: 768px) 50vw, 100vw" />
                        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">{product.model}</span>
                      </div>
                      <div className="p-5">
                        <h3 className="min-h-14 text-base font-bold leading-7 text-slate-950">{product.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{product.specs}</p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <p className="text-sm font-black text-[#0A2E5C]">{product.price} VND</p>
                          <span className="inline-flex items-center gap-1 text-sm font-bold text-cyan-700">
                            Xem nhanh
                            <ChevronRight className="h-4 w-4" />
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-lg bg-white shadow-2xl">
            <button
              type="button"
              aria-label="Đóng popup sản phẩm"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/92 text-slate-700 shadow transition hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-80 bg-slate-100">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain p-6" sizes="(min-width: 1024px) 520px, 100vw" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Chi tiết sản phẩm</p>
                <h2 className="mt-3 text-2xl font-bold">{selectedProduct.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{selectedProduct.specs}</p>
                <p className="mt-5 text-lg font-black text-[#0A2E5C]">{selectedProduct.price} VND</p>
                <div className="mt-5 grid gap-2">
                  {[
                    ["Model", selectedProduct.model],
                    ["Xuất xứ / Hãng", selectedProduct.origin],
                    ["Tình trạng dữ liệu", selectedProduct.status],
                    ["Ưu tiên", selectedProduct.priority ?? "Theo danh mục hiện hành"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      <span className="font-bold text-slate-950">{label}: </span>
                      {value}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="button" onClick={() => setSelectedProduct(null)} className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-400">
                    Chọn sản phẩm này
                  </button>
                  <PrimaryButton href="/lien-he" variant="outline">Nhận báo giá</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
