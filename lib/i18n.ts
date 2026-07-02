export type Locale = "vi" | "en";

export const routePairs = [
  { vi: "/", en: "/en" },
  { vi: "/trang-trai", en: "/en/farm" },
  { vi: "/san-pham", en: "/en/products" },
  { vi: "/giai-phap", en: "/en/solutions" },
  { vi: "/about-us", en: "/en/about-us" },
  { vi: "/dai-ly", en: "/en/dealer" },
  { vi: "/lien-he", en: "/en/contact" },
  { vi: "/thu-vien", en: "/en/library" },
  { vi: "/b2b", en: "/en/b2b" },
] as const;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "vi";
}

export function getAlternateLocalePath(pathname: string, targetLocale: Locale) {
  const hashIndex = pathname.indexOf("#");
  const cleanPath = hashIndex >= 0 ? pathname.slice(0, hashIndex) : pathname;
  const hash = hashIndex >= 0 ? pathname.slice(hashIndex) : "";
  const pair = routePairs.find((item) => item.vi === cleanPath || item.en === cleanPath);

  if (!pair) return targetLocale === "en" ? "/en" : "/";

  return `${targetLocale === "en" ? pair.en : pair.vi}${hash}`;
}
