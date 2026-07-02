import Image from "next/image";
import { PageFrame } from "@/components/site-chrome";

const farmStats = [
  ["120,000 m2", "experimental farm area", "Real ponds used to test equipment stability, electricity consumption and operating conditions."],
  ["Since 1996", "hands-on aquaculture experience", "Dolic's founder started from real farming before building the Dolic equipment platform."],
  ["34+ provinces", "market presence", "Dolic serves farmers, dealers and partners across major aquaculture regions in Vietnam."],
];

const farmGallery = [
  ["/assets/drive/experimental-farm/device-on-pond.jpg", "Equipment operating on a real Dolic pond"],
  ["/assets/drive/experimental-farm/comparison-aerator-1.jpg", "Aerators tested for configuration comparison"],
  ["/assets/drive/experimental-farm/test-device.jpg", "Prototype equipment at Dolic's experimental farm"],
  ["/assets/drive/experimental-farm/warehouse.png", "Dolic equipment warehouse for verification and deployment"],
];

export default function EnglishFarmPage() {
  return (
    <PageFrame>
      <section className="relative min-h-[92svh] overflow-hidden bg-[#061B35] text-white">
        <video className="absolute inset-0 h-full w-full object-cover" src="/assets/drive/experimental-farm/dolic-farm-video.mp4" poster="/assets/drive/customer-farm/customer-aerator-installed.jpg" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.84)_0%,rgba(3,18,38,0.46)_48%,rgba(3,18,38,0.74)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">Dolic experimental farm</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">Aquaculture equipment verified in real ponds</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-cyan-50/82 md:text-lg">
              Dolic tests equipment in real farm conditions before recommending solutions to farmers and dealers.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Experimental farm</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Verification before every recommendation</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The 120,000 m2 farm is Dolic's base for checking equipment configuration, measuring power consumption and observing operational stability in real aquaculture conditions.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {farmStats.map(([value, label, desc]) => (
                <div key={label} className="rounded-lg border border-cyan-100 bg-cyan-50/50 p-4">
                  <p className="text-2xl font-black text-[#0A2E5C]">{value}</p>
                  <p className="mt-1 text-sm font-bold text-cyan-800">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#071F3E]">
              <Image src="/assets/drive/experimental-farm/dolic-farm-real.png" alt="Dolic experimental farm" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Field images</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">Equipment, ponds and operating data captured at Dolic</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {farmGallery.map(([src, title], index) => (
              <article key={src} className={`group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm ${index === 0 ? "md:col-span-2" : ""}`}>
                <div className={`relative bg-slate-100 ${index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                  <Image src={src} alt={title} fill sizes={index === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
