import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dolic.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/san-pham",
    "/giai-phap",
    "/trang-trai",
    "/dai-ly",
    "/b2b",
    "/thu-vien",
    "/lien-he",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
