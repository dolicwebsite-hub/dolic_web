"use client";

import { usePathname, useRouter } from "next/navigation";
import { getAlternateLocalePath, getLocaleFromPath, type Locale } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = getLocaleFromPath(pathname);

  const chooseLocale = (locale: Locale) => {
    if (locale === activeLocale) return;
    router.push(getAlternateLocalePath(pathname, locale));
  };

  return (
    <div className={`flex items-center gap-1 rounded-full border border-current/22 bg-black/10 p-1 text-sm font-black uppercase backdrop-blur ${className}`}>
      <button
        type="button"
        onClick={() => chooseLocale("vi")}
        className={`min-w-11 rounded-full px-3 py-2 transition ${activeLocale === "vi" ? "bg-[#0A2E5C] text-white" : "text-current hover:bg-white/12"}`}
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => chooseLocale("en")}
        className={`min-w-11 rounded-full px-3 py-2 transition ${activeLocale === "en" ? "bg-[#0A2E5C] text-white" : "text-current hover:bg-white/12"}`}
      >
        EN
      </button>
    </div>
  );
}
