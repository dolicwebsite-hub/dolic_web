"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, Phone, ShoppingCart } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { HomeMenuButton } from "@/components/home-menu-button";
import { getLocaleFromPath } from "@/lib/i18n";
import { contactInfo } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const primaryOffice = contactInfo.offices[0];
  const solidAtTopPages = ["/san-pham", "/trang-trai", "/thu-vien", "/en/products", "/en/farm", "/en/library"];
  const solidHeader = scrolled || solidAtTopPages.includes(pathname) || pathname.startsWith("/tin-tuc/");
  const locale = getLocaleFromPath(pathname);
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

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > window.innerHeight - 120);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={`site-global-header fixed inset-x-0 top-0 z-[90] px-5 py-6 transition duration-300 md:px-10 ${
        solidHeader ? "bg-white text-[#202b50] shadow-[0_18px_55px_-42px_rgba(15,23,42,0.45)]" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <Link href={homeHref} className="flex items-center gap-4">
          <Image
            src="/Logo-Dolic.png"
            alt="Dolic"
            width={2867}
            height={842}
            priority
            className={`h-auto w-36 transition md:w-44 ${solidHeader ? "" : "brightness-0 invert"}`}
          />
          <span className="hidden text-xs font-bold uppercase tracking-[0.24em] opacity-78 sm:inline">Vietnam</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.1em] opacity-88 lg:flex">
          <Link className="transition hover:opacity-70" href={navCopy.aboutHref}>
            {navCopy.about}
          </Link>
          <Link className="inline-flex items-center gap-2 transition hover:opacity-70" href={navCopy.consultHref}>
            <Phone className="h-4 w-4" />
            {navCopy.consult}
          </Link>
          <Link className="inline-flex items-center gap-2 transition hover:opacity-70" href={navCopy.productsHref}>
            <ShoppingCart className="h-4 w-4" />
            {navCopy.products}
          </Link>
          <Link className="inline-flex items-center gap-2 transition hover:opacity-70" href={navCopy.dealerHref}>
            <BriefcaseBusiness className="h-4 w-4" />
            {navCopy.dealer}
          </Link>
          <Link className="transition hover:opacity-70" href={`tel:${primaryOffice.hotline}`}>
            {primaryOffice.displayHotline}
          </Link>
          <LanguageToggle className="text-xs" />
        </nav>

        <HomeMenuButton tone={solidHeader ? "dark" : "light"} />
      </div>
    </header>
  );
}
