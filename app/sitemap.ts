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
    "/tin-tuc/dolic-tai-vietagros-2026",
    "/tin-tuc/may-suc-khi-treo-khi-nen-nguon-goc",
    "/tin-tuc/dau-hop-so-giam-toc-quat-nuoc",
    "/tin-tuc/dau-day-tiep-dia-pe-thiet-bi-ao-nuoi",
    "/tin-tuc/mo-to-qua-nhiet-tu-ngat-nguyen-nhan-cach-xu-ly",
    "/tin-tuc/thiet-bi-chong-mat-pha-dong-co-3-pha",
    "/lien-he",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
