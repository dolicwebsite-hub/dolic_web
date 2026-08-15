 "use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

type SocialLinksProps = {
  variant?: "inline" | "vertical" | "footer";
  tone?: "light" | "dark";
};

const baseItems = [
  { label: "Facebook", href: contactInfo.socials.facebook, external: true, iconUrl: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000" },
  { label: "Zalo OA", href: contactInfo.socials.zalo, external: true, iconUrl: "https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000" },
];

export function SocialLinks({ variant = "inline", tone = "dark" }: SocialLinksProps) {
  const [open, setOpen] = useState(false);
  const containerClass =
    variant === "vertical"
      ? "grid justify-items-center gap-5"
      : variant === "footer"
        ? "flex flex-wrap items-center gap-3"
        : "flex items-center gap-7";

  const colorClass = tone === "light" ? "text-cyan-50" : "text-[#202b50]";
  const itemClass =
    variant === "footer"
      ? "inline-flex h-10 min-w-12 items-center justify-center px-2 transition hover:opacity-70"
      : "inline-flex min-h-8 min-w-8 items-center justify-center transition hover:opacity-60";

  if (variant === "vertical") {
    return (
      <div className={colorClass} aria-label="Liên kết mạng xã hội">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Mở mạng xã hội"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-200 transition hover:bg-white/10 hover:text-white"
        >
          <Share2 className="h-5 w-5" />
        </button>

        <div className={`grid justify-items-center gap-5 overflow-hidden transition-all duration-200 ${open ? "mt-3 max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          {baseItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="inline-flex min-h-8 min-w-8 items-center justify-center transition hover:opacity-60"
            >
              <img src={item.iconUrl} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerClass} ${colorClass}`} aria-label="Liên kết mạng xã hội">
      {baseItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className={itemClass}
        >
          <img src={item.iconUrl} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
        </a>
      ))}
    </div>
  );
}
