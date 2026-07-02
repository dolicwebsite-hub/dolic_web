import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";

const heroLinks = [
  ["Farm", "/en/farm"],
  ["Products", "/en/products"],
  ["Solutions", "/en/solutions"],
  ["Dealer", "/en/dealer"],
  ["B2B", "/en/b2b"],
  ["Library", "/en/library"],
];

const featurePanels = [
  {
    title: "Experimental farm",
    desc: "120,000 m2 of real ponds where Dolic tests equipment stability, electricity consumption and practical operating conditions.",
    href: "/en/farm",
    image: "/assets/drive/experimental-farm/dolic-farm-real.png",
  },
  {
    title: "Energy-efficient operation",
    desc: "Aerators, pumps and water monitoring devices are selected around real farm needs, not generic product lists.",
    href: "/en/solutions",
    image: "/assets/drive/performance/1JRKM8T8D_5FLBM0.jpg",
  },
  {
    title: "From products to solutions",
    desc: "Dolic works with farmers and dealers through tested equipment, clear process and after-sales support.",
    href: "/en/about-us",
    image: "/assets/drive/exhibition/IMG_6009.PNG",
  },
];

export default function EnglishHomePage() {
  return (
    <PageFrame>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#061B35] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/drive/customer-farm/farm-anh-nam-quang-ninh.mp4"
          poster="/assets/drive/customer-farm/customer-aerator-installed.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,24,0.72)_0%,rgba(2,11,24,0.34)_50%,rgba(2,11,24,0.62)_100%)]" />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-24 pt-28 md:px-10 lg:pb-16">
          <div className="max-w-[900px]">
            <p className="mb-5 max-w-xl text-sm font-bold uppercase tracking-[0.22em] text-cyan-100/86">Farmers understand farmers</p>
            <nav aria-label="Primary English pages" className="grid gap-0.5">
              {heroLinks.map(([label, href]) => (
                <Link key={href} href={href} className="group flex w-fit items-baseline gap-4 font-serif text-[clamp(3rem,9vw,6.8rem)] leading-[0.95] tracking-normal text-white/58 transition duration-300 hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8F7] px-5 py-16 text-[#202b50] md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Our presence</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["120,000 m2", "Experimental farm area"],
              ["Since 1996", "Founder-led aquaculture experience"],
              ["34+ provinces", "Presence across Vietnam"],
            ].map(([value, label]) => (
              <article key={label} className="border-t border-[#202b50]/22 pt-6">
                <p className="font-serif text-[clamp(3.2rem,7vw,6rem)] leading-none tracking-normal text-[#0A2E5C]">{value}</p>
                <p className="mt-5 max-w-sm text-base font-bold leading-7 text-[#202b50]/72">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A2E5C] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.16em]">Dolic vision</p>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <h1 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-normal">
              A trusted part of every aquaculture crop in Vietnam
            </h1>
            <Link href="/en/about-us" className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full border border-white/72 font-serif text-2xl leading-none transition hover:bg-white hover:text-[#0A2E5C] md:h-40 md:w-40">
              Read
              <br />
              more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8F7] px-4 py-16 text-slate-950 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Dolic Vietnam</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl">Aquaculture equipment verified in real ponds</h2>
          </div>
          <div className="mb-8 overflow-hidden rounded-md bg-[#061B35]">
            <div className="relative aspect-[16/8] min-h-[320px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/assets/drive/experimental-farm/dolic-farm-video.mp4"
                poster="/assets/drive/customer-farm/customer-aerator-installed.jpg"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.7),rgba(3,18,38,0.18))]" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featurePanels.map((item) => (
              <Link key={item.href} href={item.href} className="group overflow-hidden rounded-md bg-white shadow-[0_26px_80px_-58px_rgba(15,23,42,0.75)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-700">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
