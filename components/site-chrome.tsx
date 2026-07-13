"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, ChevronUp, Phone, ShoppingCart } from "lucide-react";
import { HomeMenuButton } from "@/components/home-menu-button";
import { SocialLinks } from "@/components/social-links";
import { getLocaleFromPath } from "@/lib/i18n";
import { contactInfo, navItems } from "@/lib/site-data";

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
  const primaryOffice = contactInfo.offices[0];

  return (
    <header className="site-global-header fixed inset-x-0 top-0 z-[90] px-5 py-6 text-white md:px-10">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} priority className="h-auto w-36 brightness-0 invert md:w-44" />
          <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-white/78 sm:inline">Vietnam</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.1em] text-white/88 lg:flex">
          <Link className="transition hover:text-white" href="/about-us">
            Về chúng tôi
          </Link>
          <Link className="inline-flex items-center gap-2 transition hover:text-white" href="/lien-he">
            <Phone className="h-4 w-4" />
            Tư vấn
          </Link>
          <Link className="inline-flex items-center gap-2 transition hover:text-white" href="/san-pham">
            <ShoppingCart className="h-4 w-4" />
            Sản phẩm
          </Link>
          <Link className="inline-flex items-center gap-2 transition hover:text-white" href="/dai-ly">
            <BriefcaseBusiness className="h-4 w-4" />
            Đại lý
          </Link>
          <Link className="transition hover:text-white" href={`tel:${primaryOffice.hotline}`}>
            {primaryOffice.displayHotline}
          </Link>
        </nav>

        <HomeMenuButton />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const isEnglish = locale === "en";
  const homeHref = isEnglish ? "/en" : "/";
  const quickLinks = isEnglish
    ? [
        ["About", "/en/about-us"],
        ["Products", "/en/products"],
        ["Dealer", "/en/dealer"],
        ["Contact", "/en/contact"],
      ]
    : navItems.filter(([label]) => label !== "Sản phẩm");

  return (
    <footer className="bg-[#071F3E] px-5 py-8 text-sm text-cyan-50/70 md:px-10 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-7 md:grid-cols-[0.8fr_0.9fr_1.2fr] lg:gap-14">
          <div>
            <Link href={homeHref} className="flex h-12 w-36 items-center md:w-40">
              <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} className="h-auto w-full object-contain brightness-0 invert" />
            </Link>
          </div>

          <div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">Liên kết nhanh</h2>
              <nav className="mt-4 grid gap-2">
                {quickLinks.map(([label, href]) => (
                  <Link key={href} href={href} className="w-fit font-semibold text-cyan-50/70 transition hover:text-white">
                    {label}
                  </Link>
                ))}
                <Link href="/chinh-sach-cookie" className="w-fit font-semibold text-cyan-50/70 transition hover:text-white">
                  Chính sách bảo mật
                </Link>
              </nav>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">CÔNG TY TNHH THUỶ SẢN DOLIC</h2>
            <div className="mt-4 grid gap-2.5">
              <p className="font-semibold text-cyan-50/80">Hotline miền Nam: {contactInfo.offices[0].displayHotline}</p>
              <p className="font-semibold text-cyan-50/80">Hotline miền Bắc: {contactInfo.offices[1].displayHotline}</p>
              <p className="pt-1 text-sm font-semibold leading-6 text-cyan-50/70">Cơ sở chính: {contactInfo.offices[1].address}</p>
              <Link href="/#vung-hoat-dong" className="inline-flex w-fit items-center gap-2 pt-1 text-sm font-bold text-cyan-200 transition hover:text-white">
                Cơ sở khác
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-5">
              <p className="mb-3 font-serif text-xl text-white">Follow Us!</p>
              <SocialLinks variant="footer" tone="light" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-5 text-xs font-semibold leading-5 text-cyan-50/50 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Email liên hệ: {contactInfo.email}</span>
            <span>Email góp ý: feedback@dolic.vn</span>
          </div>
          <p className="md:text-right">© 2026 Dolic Vietnam</p>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-slate-50 text-slate-950">{children}</main>;
}

export function BackToTopButton() {
  const pathname = usePathname();
  const isEnglish = getLocaleFromPath(pathname) === "en";

  return (
    <Link
      href="#top"
      aria-label={isEnglish ? "Back to top" : "Quay lại đầu trang"}
      title={isEnglish ? "Back to top" : "Quay lại đầu trang"}
      className="motion-interactive pressable lift-hover fixed bottom-20 right-3 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100 bg-cyan-500 text-slate-950 shadow-[0_16px_35px_-18px_rgba(8,145,178,0.75)] hover:bg-cyan-400 sm:h-12 sm:w-12 md:bottom-6 md:right-6"
    >
      <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
    </Link>
  );
}
