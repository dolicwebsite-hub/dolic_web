"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, Phone, ShoppingCart, X } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { SocialLinks } from "@/components/social-links";
import { getLocaleFromPath } from "@/lib/i18n";
import { contactInfo } from "@/lib/site-data";

const viMenuColumns = [
  [
    ["Trang trại", "/trang-trai"],
    ["Sản phẩm", "/san-pham"],
    ["Giải pháp", "/giai-phap"],
    ["Đại lý", "/dai-ly"],
  ],
  [
    ["B2B", "/b2b"],
    ["Thư viện", "/thu-vien"],
    ["Liên hệ", "/lien-he"],
  ],
];

const viSmallLinks = [
  ["Cookie Policy", "/chinh-sach-cookie"],
  ["Sản phẩm", "/san-pham"],
  ["Đại lý", "/dai-ly"],
];

export function HomeMenuButton({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const primaryOffice = contactInfo.offices[0];
  const homeHref = locale === "en" ? "/en" : "/";
  const navCopy =
    locale === "en"
      ? {
          about: "About",
          consult: "Consulting",
          products: "Products",
          dealer: "Dealer",
          aboutHref: "/en/about-us",
          consultHref: "/en/contact",
          productsHref: "/en/products",
          dealerHref: "/en/dealer",
        }
      : {
          about: "Về chúng tôi",
          consult: "Tư vấn",
          products: "Sản phẩm",
          dealer: "Đại lý",
          aboutHref: "/about-us",
          consultHref: "/lien-he",
          productsHref: "/san-pham",
          dealerHref: "/dai-ly",
        };
  const menuColumns =
    locale === "en"
      ? [
          [
            ["Farm", "/en/farm"],
            ["Products", "/en/products"],
            ["Solutions", "/en/solutions"],
            ["Dealer", "/en/dealer"],
          ],
          [
            ["B2B", "/en/b2b"],
            ["Library", "/en/library"],
            ["Contact", "/en/contact"],
          ],
        ]
      : viMenuColumns;
  const smallLinks = locale === "en" ? [["Products", "/en/products"], ["Dealer", "/en/dealer"], ["Contact", "/en/contact"]] : viSmallLinks;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Mở menu"
        onClick={() => setOpen(true)}
        className={`home-menu-trigger flex h-[52px] w-[52px] cursor-pointer list-none items-center justify-center transition marker:hidden md:h-16 md:w-16 ${tone === "dark" ? "text-[#202b50]" : "text-white"}`}
      >
        <span className="home-menu-icon" aria-hidden="true">
          <span className="home-menu-line home-menu-line-top" />
          <span className="home-menu-line home-menu-line-mid" />
          <span className="home-menu-line home-menu-line-bot" />
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="home-menu-spoke" style={{ transform: `rotate(${index * 45}deg)` }} />
          ))}
        </span>
      </button>

      {open ? (
      <div className="fixed inset-0 z-[95] h-[100svh] overflow-hidden bg-[#f7f5f1] text-[#202b50]">
        <header className="px-5 py-5 md:px-10 md:py-6">
          <div className="flex items-center justify-between gap-6">
            <Link href={homeHref} onClick={() => setOpen(false)} className="flex items-center gap-4">
              <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} priority className="h-auto w-32 md:w-44" />
              <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-[#202b50]/78 sm:inline">Vietnam</span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.1em] text-[#202b50] lg:flex">
              <Link onClick={() => setOpen(false)} className="transition hover:opacity-65" href={navCopy.aboutHref}>
                {navCopy.about}
              </Link>
              <Link onClick={() => setOpen(false)} className="inline-flex items-center gap-2 transition hover:opacity-65" href={navCopy.consultHref}>
                <Phone className="h-4 w-4" />
                {navCopy.consult}
              </Link>
              <Link onClick={() => setOpen(false)} className="inline-flex items-center gap-2 transition hover:opacity-65" href={navCopy.productsHref}>
                <ShoppingCart className="h-4 w-4" />
                {navCopy.products}
              </Link>
              <Link onClick={() => setOpen(false)} className="inline-flex items-center gap-2 transition hover:opacity-65" href={navCopy.dealerHref}>
                <BriefcaseBusiness className="h-4 w-4" />
                {navCopy.dealer}
              </Link>
              <Link className="transition hover:opacity-65" href={`tel:${primaryOffice.hotline}`}>
                {primaryOffice.displayHotline}
              </Link>
              <LanguageToggle className="text-xs" />
            </nav>

            <button
              type="button"
              aria-label="Đóng menu"
              onClick={() => setOpen(false)}
              className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-full border border-[#202b50] text-[#202b50] transition marker:hidden hover:bg-[#202b50] hover:text-white md:h-14 md:w-14"
            >
              <X className="h-6 w-6 md:h-7 md:w-7" />
            </button>
          </div>
        </header>

        <div className="mx-auto flex h-[calc(100svh-88px)] max-w-7xl flex-col justify-between gap-4 px-5 pb-5 pt-5 md:h-[calc(100svh-104px)] md:px-10 md:pb-10 md:pt-10 lg:grid lg:content-end lg:gap-16 lg:grid-cols-[1fr_1fr_0.55fr] lg:items-end">
          <div className="lg:col-span-2">
            <div className="mb-6 inline-flex items-center gap-8 border-b-2 border-[#202b50] pb-2 text-lg md:mb-14 lg:mb-20">
              <span>Vietnam</span>
              <span className="text-2xl leading-none">↓</span>
            </div>
            <LanguageToggle className="mb-5 w-fit text-sm" />
            <div className="grid gap-0 md:grid-cols-2 md:gap-8">
              {menuColumns.map((column, index) => (
                <nav key={index} className="grid gap-0 md:gap-1">
                  {column.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-[clamp(2.35rem,10.5vw,3.1rem)] leading-[0.98] tracking-normal transition hover:opacity-55 md:text-[clamp(3rem,7vw,5.2rem)] md:leading-[1.05]"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              ))}
            </div>
          </div>

          <aside className="grid gap-4 text-[#202b50] lg:gap-14">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold lg:grid lg:gap-4 lg:text-base">
              {smallLinks.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="transition hover:opacity-60">
                  {label}
                </Link>
              ))}
            </nav>
            <div>
              <p className="font-serif text-2xl lg:text-3xl">Follow Us!</p>
              <div className="mt-3 lg:mt-5">
                <SocialLinks tone="dark" />
              </div>
            </div>
          </aside>
        </div>
      </div>
      ) : null}
    </>
  );
}
