import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";

const principles = [
  ["Not just a sales channel", "Dolic treats dealers as local trust partners who consult responsibly with farmers.", Users],
  ["Standard Dolic training", "Dealers receive product knowledge, operation guidance and solution-based selling process.", BookOpen],
  ["Field-tested standards", "Products are verified through Dolic's experimental farm before entering the recommended portfolio.", ShieldCheck],
];

export default function EnglishDealerPage() {
  return (
    <PageFrame>
      <section className="relative min-h-[88svh] overflow-hidden bg-[#061B35] px-5 pb-16 pt-32 text-white md:px-10 md:pb-24 md:pt-40">
        <Image src="/assets/drive/customer-farm/customer-farm-1.jpg" alt="Dolic dealer network" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,42,0.94)_0%,rgba(4,20,42,0.78)_48%,rgba(4,20,42,0.44)_100%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Dolic dealer opportunity</p>
          <h1 className="mt-6 max-w-6xl font-serif text-[clamp(3.2rem,7.5vw,7.2rem)] leading-[1.08] tracking-normal">Growing with trusted local dealers</h1>
          <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-cyan-50/78">
            Dolic builds its dealer network through verified solutions, standard training and shared responsibility with farmers.
          </p>
          <Link href="/en/contact" className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 text-sm font-black uppercase tracking-[0.08em] text-slate-950 transition hover:bg-cyan-300">
            Become a dealer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-16 text-[#202b50] md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-[clamp(3.4rem,7vw,7rem)] leading-[0.96] tracking-normal">Farmers trust dealers. Dealers trust Dolic.</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {principles.map(([title, desc, Icon]) => (
              <article key={title as string} className="border-t border-[#202b50]/25 pt-6">
                <Icon className="h-8 w-8 text-cyan-700" />
                <h3 className="mt-5 text-2xl font-black">{title as string}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#202b50]/68">{desc as string}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-px bg-[#202b50]/20 sm:grid-cols-2">
            {["Aquaculture supply stores", "Regional farm dealers", "Farm technical teams", "Farm construction partners", "Equipment distributors", "B2B aquaculture partners"].map((item) => (
              <div key={item} className="flex min-h-24 items-center gap-3 bg-[#F7F5F1] p-5 text-lg font-black">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-700" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
