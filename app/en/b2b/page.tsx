import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";

export default function EnglishB2BPage() {
  return (
    <PageFrame>
      <section className="relative overflow-hidden bg-[#061B35] px-5 pb-16 pt-32 text-white md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
            <Handshake className="h-4 w-4" />
            Dolic B2B
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight tracking-normal md:text-6xl">Partnership for aquaculture equipment distribution</h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-cyan-50/78">
            Dolic works with dealers, stores, farm contractors and regional partners through tested products, clear materials and standard support process.
          </p>
          <Link href="/en/contact" className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
            Contact partnership team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
