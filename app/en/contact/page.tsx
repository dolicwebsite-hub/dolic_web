import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Zap } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { contactInfo } from "@/lib/site-data";

export default function EnglishContactPage() {
  return (
    <PageFrame>
      <section className="relative overflow-hidden bg-[#061B35] px-5 pb-16 pt-28 text-white md:px-10 md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.94)_0%,rgba(3,18,38,0.82)_48%,rgba(3,18,38,0.58)_100%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              <Zap className="h-4 w-4" />
              Dolic solution consulting
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal md:text-6xl">Optimize electricity cost and equipment solutions for your farm</h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-cyan-50/78">
              Share your pond area, existing equipment and operating goals. Dolic will recommend suitable solutions based on field experience and real farm data.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 text-slate-950 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.55)] md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Free consultation</p>
            <h2 className="mt-2 text-2xl font-black">Dolic will contact you within 24 hours</h2>
            <div className="mt-5 grid gap-3">
              {["Full name", "Phone/Zalo", "Province/City", "Pond area or farm model"].map((field) => (
                <input key={field} className="h-12 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white" placeholder={field} />
              ))}
              <textarea className="min-h-28 rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white" placeholder="Briefly describe your current equipment and operating goals." />
            </div>
            <button type="button" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0A2E5C] px-4 text-sm font-black text-white transition hover:bg-[#061B35]">
              Send request
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#071F3E] px-5 py-16 text-white md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          {contactInfo.offices.map((office) => {
            const region = office.region === "Miền Nam" ? "South" : office.region === "Miền Bắc" ? "North" : office.region;

            return (
            <article key={office.region} className="border border-white/12 p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{region} office</p>
              <p className="mt-4 flex gap-3 text-base font-semibold leading-8 text-cyan-50/76">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                {office.address}
              </p>
              <Link href={`tel:${office.hotline}`} className="mt-5 inline-flex items-center gap-2 text-xl font-black text-cyan-200 transition hover:text-white">
                <Phone className="h-5 w-5" />
                {office.displayHotline}
              </Link>
            </article>
          )})}
          <Link href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-200 transition hover:text-white">
            <Mail className="h-5 w-5" />
            {contactInfo.email}
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
