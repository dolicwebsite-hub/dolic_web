"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Handshake, Sprout, Tractor } from "lucide-react";
import { SocialLinks } from "@/components/social-links";

const menuItems = [
  { label: "Giải pháp", href: "/giai-phap", icon: Sprout },
  { label: "B2B", href: "/b2b", icon: Handshake },
  { label: "Trang trại", href: "/trang-trai", icon: Tractor },
  { label: "Thư viện", href: "/thu-vien", icon: Bell },
];

export function VerticalMenu() {
  const pathname = usePathname();
  const hideMobileQuickNav = pathname.startsWith("/giai-phap");

  return (
    <>
      <nav
        aria-label="Điều hướng nhanh"
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-[18px] bg-[#1E2A39] px-3 py-4 shadow-[0_24px_55px_-28px_rgba(15,23,42,0.85)] ring-1 ring-white/10 md:flex md:flex-col md:gap-3"
      >
        {menuItems.map(({ label, href, icon: Icon }) => {
          const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              title={label}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-xl transition ${
                isActive
                  ? "bg-cyan-400 text-slate-950 shadow-[0_16px_32px_-18px_rgba(34,211,238,0.85)]"
                  : "text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="pointer-events-none absolute left-[calc(100%+10px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:block group-hover:opacity-100">
                {label}
              </span>
            </Link>
          );
        })}
        <span className="mx-auto my-1 h-px w-7 bg-white/12" aria-hidden="true" />
        <SocialLinks variant="vertical" tone="light" />
      </nav>

      {hideMobileQuickNav ? null : (
        <nav
          aria-label="Điều hướng nhanh mobile"
          className="fixed bottom-3 left-1/2 z-40 flex -translate-x-1/2 gap-1 rounded-[18px] bg-[#1E2A39]/96 p-1.5 shadow-[0_18px_42px_-24px_rgba(15,23,42,0.9)] ring-1 ring-white/10 backdrop-blur md:hidden"
        >
          {menuItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                title={label}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                  isActive ? "bg-cyan-400 text-slate-950" : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
