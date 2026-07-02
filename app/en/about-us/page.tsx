import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/site-chrome";

const timeline = [
  ["1996", "The beginning", "Dolic's story started from real aquaculture work, family resilience and the belief that farmers need practical, tested solutions."],
  ["2019", "Technology on real ponds", "After many farming seasons, Dolic began applying microorganisms, modern equipment and operating data to solve practical pond challenges."],
  ["2024", "Dolic was established", "Dolic Aquaculture Co., Ltd. was founded from a family-rooted brand, built on gratitude, unity and hands-on experience."],
  ["2025", "Dealer network", "From Northern Vietnam, Dolic expanded its presence across farming regions and dealer channels."],
  ["2026", "From products to solutions", "Dolic moved from selling equipment to building energy-efficient, stable and responsible aquaculture solutions."],
];

export default function EnglishAboutPage() {
  return (
    <PageFrame>
      <section className="relative min-h-[86svh] overflow-hidden bg-[#061B35] text-white">
        <Image src="/assets/drive/customer-farm/customer-farm-2.jpg" alt="Dolic experimental farm" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,53,0.18)_0%,rgba(6,27,53,0.38)_44%,rgba(6,27,53,0.88)_100%)]" />
        <div className="relative mx-auto flex min-h-[86svh] max-w-7xl items-end justify-center px-4 pb-16 pt-28 text-center md:px-8 md:pb-24">
          <div className="max-w-5xl">
            <p className="text-base font-bold uppercase tracking-[0.24em] text-cyan-100 md:text-xl">Dolic Vietnam</p>
            <h1 className="mt-5 font-serif text-5xl font-bold uppercase leading-[0.95] tracking-normal sm:text-7xl md:text-8xl">Farmers understand farmers</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-cyan-50/86 md:text-xl md:leading-9">
              From family ponds to sustainable aquaculture solutions, Dolic was built on field experience, gratitude and the ambition to reduce operating costs for Vietnamese farmers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] px-4 py-16 text-slate-950 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal md:text-5xl">The Dolic brand story</h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-5 text-left text-base leading-8 text-slate-700 md:text-center md:text-lg md:leading-9">
            <p>Dolic did not begin as a company profile. It began from real ponds, unstable water, disease risk, electricity cost and the pressure farmers face after every crop.</p>
            <p>From a family foundation, Dolic chose the path of verification: testing equipment at its farm, training dealers through standard process and supporting farmers with practical understanding.</p>
            <p>Dolic is not only selling equipment. It aims to deliver stable, energy-efficient and environmentally responsible operating solutions.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold uppercase leading-tight tracking-normal text-slate-950 md:text-5xl">Company timeline</h2>
          <div className="mt-12 grid gap-8">
            {timeline.map(([year, title, desc]) => (
              <article key={year} className="grid gap-5 border-b border-slate-200 pb-8 md:grid-cols-[180px_1fr]">
                <p className="font-serif text-6xl leading-none text-cyan-700">{year}</p>
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{desc}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/en/contact" className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-[#0A2E5C] px-5 text-sm font-black text-white">
            Talk to Dolic
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
