import { MessageCircle } from "lucide-react";
import { PageFrame, SectionHeader } from "@/components/site-chrome";
import { exhibitionImages } from "@/lib/library-data";

const englishPosts = [
  {
    title: "How to select paddle wheel aerators by pond area",
    type: "Technical guide",
    image: "/assets/drive/experimental-farm/device-on-pond.jpg",
  },
  {
    title: "When should farms use air blower systems?",
    type: "Ask Dolic",
    image: "/assets/products/air-blower-treo-khi-nen.jpg",
  },
  {
    title: "Oxygen checklist before and after feeding",
    type: "Farm operation",
    image: "/assets/products/meter-do-oxy-2001.jpg",
  },
  {
    title: "Dealer materials for solution-based consulting",
    type: "Dealer",
    image: "/assets/drive/exhibition/IMG_6009.PNG",
  },
];

export default function EnglishLibraryPage() {
  return (
    <PageFrame>
      <section className="px-4 pb-16 pt-32 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Technical library"
            title="Content for farmers and dealers to make better decisions"
            desc="Dolic's library is prepared for technical articles, catalog downloads and future updates from the team."
          />
          <div className="mb-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#071F3E] p-7 text-white md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Featured story</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">Dolic at an international agriculture and environment technology exhibition</h2>
              </div>
              <div className="p-7 md:p-9">
                <p className="text-lg font-bold leading-8 text-slate-950">Dolic joined more than 200 leading companies at an international technology exhibition.</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">This section supports brand communication, partner connection and updates on Dolic's technology activities.</p>
              </div>
            </div>
            <div className="grid gap-px bg-slate-200 md:grid-cols-6">
              {exhibitionImages.map((src, index) => (
                <div key={src} className="relative aspect-square overflow-hidden bg-white">
                  <img src={src} alt={`Dolic exhibition image ${index + 1}`} className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {englishPosts.map((post) => (
              <article key={post.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{post.type}</span>
                  <h2 className="mt-4 min-h-16 font-bold leading-6">{post.title}</h2>
                  <a href="/en/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                    Ask Dolic
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
