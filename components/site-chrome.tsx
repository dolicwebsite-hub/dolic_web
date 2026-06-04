import Image from "next/image";
import Link from "next/link";
import { ChevronUp, Phone } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function PrimaryButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
}) {
  const classes = {
    solid: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    outline: "border border-slate-300 bg-white text-slate-950 hover:border-cyan-500 hover:text-cyan-700",
    light: "border border-white/30 bg-white/10 text-white hover:bg-white/18",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition ${classes[variant]}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">{title}</h1>
      {desc ? <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p> : null}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#082A52]/92 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link href="/" className="flex h-11 w-40 items-center justify-center rounded-md bg-white px-3 shadow-sm ring-1 ring-white/30">
          <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} className="h-auto w-full object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-cyan-50/85 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <PrimaryButton href="tel:0397581028" variant="light">
            <Phone className="h-4 w-4" />
            0397 581 028
          </PrimaryButton>
        </div>
        <Link href="/lien-he" className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-400 px-3 text-sm font-bold text-slate-950 md:hidden">
          Liên hệ
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#071F3E] px-4 py-8 text-sm text-cyan-50/70 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex h-12 w-36 items-center justify-center rounded-md bg-white px-3">
            <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} className="h-auto w-full object-contain" />
          </div>
          <p className="mt-3">Dolic - Thương hiệu của sự an tâm.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-slate-50 pt-16 text-slate-950">{children}</main>;
}

export function BackToTopButton() {
  return (
    <Link
      href="#top"
      aria-label="Quay lại đầu trang"
      title="Quay lại đầu trang"
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-100 bg-cyan-500 text-slate-950 shadow-[0_16px_35px_-18px_rgba(8,145,178,0.75)] transition hover:-translate-y-1 hover:bg-cyan-400 md:bottom-6 md:right-6"
    >
      <ChevronUp className="h-6 w-6" />
    </Link>
  );
}
