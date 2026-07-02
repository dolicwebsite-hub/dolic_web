import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Droplets, Handshake, Headphones } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";

const packages = [
  {
    title: "Dolic Farm",
    desc: "For farm owners who need equipment solutions based on pond area, species, voltage and energy-saving goals.",
    image: "/assets/drive/experimental-farm/dolic-farm-real.png",
    icon: Droplets,
    href: "/en/contact",
  },
  {
    title: "Dolic Dealer",
    desc: "For aquaculture supply stores and regional dealers who want standard training and clear product materials.",
    image: "/assets/drive/exhibition/IMG_6001.PNG",
    icon: Handshake,
    href: "/en/dealer",
  },
  {
    title: "Dolic Support",
    desc: "For customers who need warranty lookup, technical support or an upgrade path for existing equipment.",
    image: "/assets/drive/customer-farm/customer-aerator-installed.jpg",
    icon: Headphones,
    href: "/en/contact",
  },
];

export default function EnglishSolutionsPage() {
  return (
    <PageFrame>
      <section className="relative overflow-hidden bg-[#082A52] text-white">
        <video className="absolute inset-0 h-full w-full object-cover" src="/assets/drive/experimental-farm/dolic-farm-video.mp4" poster="/assets/drive/customer-farm/customer-aerator-installed.jpg" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,82,0.96)_0%,rgba(8,42,82,0.82)_42%,rgba(8,42,82,0.28)_78%)]" />
        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl gap-8 px-5 pb-14 pt-36 md:min-h-[680px] md:px-8 md:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-100">Dolic solution platform</p>
            <h1 className="mt-5 max-w-3xl text-[2.55rem] font-bold leading-[1.12] tracking-normal sm:text-5xl md:text-6xl">Equipment solutions for aquaculture farms</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-50/88">
              Based on pond model, voltage and operating goals, Dolic recommends aeration, pumping and water-monitoring solutions for stable, energy-efficient and environmentally responsible operation.
            </p>
            <Link href="/en/contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
              Request consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Deployment paths</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-4xl">Dolic designs solutions around your role</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map(({ title, desc, image, icon: Icon, href }) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:border-cyan-300">
                <div className="relative h-64 bg-slate-100">
                  <Image src={image} alt={title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,42,82,0.08)_0%,rgba(8,42,82,0.62)_100%)]" />
                </div>
                <div className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-[#0A2E5C] p-6 text-white">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-cyan-200" />
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-cyan-100">Consulting based on real farm data</p>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-cyan-50/78">Share your pond information and Dolic will recommend equipment groups and operating solutions before quotation.</p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
