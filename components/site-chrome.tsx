import Image from "next/image";
import Link from "next/link";
import { ChevronUp, Mail, MapPin, Menu, Phone } from "lucide-react";
import { navItems } from "@/lib/site-data";

const footerProductLinks = [
  ["Máy sục khí / Quạt nước", "/san-pham#may-suc-khi-quat-nuoc"],
  ["Máy sục khí bản treo", "/san-pham#may-suc-khi-ban-treo-khi-nen"],
  ["Bơm, lọc, xử lý nước", "/san-pham#bom-loc-xu-ly-nuoc"],
  ["Thiết bị đo nước", "/san-pham#thiet-bi-do-nuoc"],
];

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
      className={`motion-interactive pressable lift-hover inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold sm:w-auto ${classes[variant]}`}
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
      <h1 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl md:text-4xl">{title}</h1>
      {desc ? <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p> : null}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="motion-interactive mx-auto mt-3 flex h-14 max-w-7xl items-center justify-between gap-3 rounded-none border border-white/12 bg-[#061B35]/58 px-3 shadow-[0_18px_55px_-34px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:px-4 md:px-6">
        <Link href="/" className="flex h-10 w-32 shrink-0 items-center sm:w-40">
          <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} className="h-auto w-full object-contain brightness-0 invert" priority />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-cyan-50/88 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="motion-interactive nav-link hover:text-white">
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
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="tel:0397581028" aria-label="Gọi Dolic" className="motion-interactive pressable inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-cyan-50 md:hidden">
            <Phone className="h-4 w-4" />
          </Link>
          <details className="group relative">
            <summary className="motion-interactive pressable flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md bg-cyan-400 text-slate-950 marker:hidden">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="motion-interactive absolute right-0 top-12 w-[min(88vw,320px)] overflow-hidden rounded-lg border border-white/10 bg-[#071F3E] p-2 shadow-2xl">
              <nav className="grid">
                {navItems.map(([label, href]) => (
                  <Link key={href} href={href} className="motion-interactive rounded-md px-3 py-3 text-sm font-bold text-cyan-50/90 hover:bg-white/10 hover:text-white">
                    {label}
                  </Link>
                ))}
              </nav>
            <Link href="/lien-he" className="motion-interactive pressable mt-2 flex min-h-11 items-center justify-center rounded-md bg-cyan-400 px-3 text-sm font-black text-slate-950">
                Nhận tư vấn
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#071F3E] px-4 pb-8 pt-10 text-sm text-cyan-50/72 md:px-8 md:pb-10 md:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[1.2fr_0.8fr_1fr_1.05fr]">
          <div>
            <Link href="/" className="flex h-12 w-36 items-center">
              <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} className="h-auto w-full object-contain brightness-0 invert" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7">
              Dolic cung cấp máy móc thiết bị thủy sản hiệu năng cao cho trang trại, đại lý và dự án cần vận hành ổn định, tiết kiệm điện và dễ mở rộng.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ["20-50%", "tiết kiệm điện"],
                ["24/7", "vận hành"],
                ["12 tháng", "bảo hành"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/5 p-3">
                  <p className="text-base font-black text-cyan-200">{value}</p>
                  <p className="mt-1 text-[11px] font-semibold leading-4 text-cyan-50/58">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Điều hướng</h2>
            <nav className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-md px-0 py-1.5 font-semibold text-cyan-50/72 transition hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Sản phẩm chính</h2>
            <nav className="mt-4 grid gap-2">
              {footerProductLinks.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-md py-1.5 font-semibold text-cyan-50/72 transition hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Liên hệ</h2>
            <div className="mt-4 grid gap-3">
              <Link href="tel:0397581028" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-3 font-bold text-cyan-50 transition hover:bg-white/10">
                <Phone className="h-4 w-4 shrink-0 text-cyan-300" />
                0397 581 028
              </Link>
              <Link href="mailto:congtytnhhthuysandolic@gmail.com" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-3 font-bold text-cyan-50 transition hover:bg-white/10">
                <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
                <span className="min-w-0 break-words">congtytnhhthuysandolic@gmail.com</span>
              </Link>
              <div className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-3 font-semibold leading-6 text-cyan-50/78">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                CN1: Thôn Dĩnh Bạn, xã Bảo Đài, tỉnh Bắc Ninh, Việt Nam
              </div>
              <div className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-3 font-semibold leading-6 text-cyan-50/78">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                CN2: Đang cập nhật địa chỉ chính thức
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Link href="https://zalo.me/0397581028" aria-label="Zalo Dolic" className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs font-black text-cyan-100 transition hover:bg-white/10">
                Z
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook Dolic" className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-cyan-100 transition hover:bg-white/10">
                <span className="text-xs font-black">FB</span>
              </Link>
            </div>
            <Link href="/lien-he" className="mt-4 flex min-h-11 items-center justify-center rounded-md bg-cyan-400 px-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
              Nhận tư vấn cấu hình
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs leading-5 text-cyan-50/54 sm:flex-row sm:items-center sm:justify-between">
          <p>Dolic Vietnam - Thương hiệu của sự an tâm.</p>
          <p>Thiết bị thủy sản, giải pháp trang trại và hợp tác B2B.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-slate-50 text-slate-950">{children}</main>;
}

export function BackToTopButton() {
  return (
    <Link
      href="#top"
      aria-label="Quay lại đầu trang"
      title="Quay lại đầu trang"
      className="motion-interactive pressable lift-hover fixed bottom-20 right-3 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100 bg-cyan-500 text-slate-950 shadow-[0_16px_35px_-18px_rgba(8,145,178,0.75)] hover:bg-cyan-400 sm:h-12 sm:w-12 md:bottom-6 md:right-6"
    >
      <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
    </Link>
  );
}
