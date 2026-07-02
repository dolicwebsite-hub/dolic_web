import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageFrame, SectionHeader } from "@/components/site-chrome";
import { productCategories } from "@/lib/site-data";

const categoryNames: Record<string, string> = {
  "may-suc-khi-quat-nuoc": "Aerators / paddle wheels",
  "may-suc-khi-ban-treo-khi-nen": "Air blower systems",
  "bom-loc-xu-ly-nuoc": "Pumps and water treatment",
  "thiet-bi-do-nuoc": "Water monitoring devices",
};

export default function EnglishProductsPage() {
  return (
    <PageFrame>
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product portfolio"
            title="Core equipment for aquaculture operation"
            desc="Explore Dolic's key equipment groups. Final solutions are recommended according to pond size, voltage, water flow and operating goals."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.flatMap((category) =>
              category.products.slice(0, 3).map((product) => (
                <article key={`${category.id}-${product.model}`} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_top,#ffffff_0%,#eef5f9_58%,#e2e8f0_100%)]">
                    <Image src={product.image} alt={product.englishName ?? product.name} fill sizes="(min-width: 1280px) 390px, (min-width: 768px) 50vw, 100vw" className="object-contain p-6" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">{product.model}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">{categoryNames[category.id] ?? category.name}</p>
                    <h2 className="mt-2 text-xl font-black leading-7 text-slate-950">{product.englishName ?? product.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{product.specs}</p>
                    <Link href="/en/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-700">
                      Request consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )),
            )}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
