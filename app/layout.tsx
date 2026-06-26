import type { Metadata } from "next";
import { CookiePolicyBanner } from "@/components/cookie-policy-banner";
import { MaintenancePage } from "@/components/maintenance-page";
import { SiteHeader } from "@/components/site-header";
import { BackToTopButton, SiteFooter } from "@/components/site-chrome";
import { SiteLoader } from "@/components/site-loader";
import { VerticalMenu } from "@/components/vertical-menu";
import { isMaintenanceMode } from "@/lib/maintenance";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolic - Giải pháp tối ưu điện năng cho nuôi trồng thuỷ sản",
  description: "Dolic cung cấp máy móc, thiết bị và cấu hình vận hành giúp trang trại thuỷ sản tối ưu điện năng, chi phí và độ bền.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const maintenanceMode = isMaintenanceMode();

  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body>
        {maintenanceMode ? (
          <MaintenancePage />
        ) : (
          <>
            <SiteLoader />
            <SiteHeader />
            <div id="top" />
            {children}
            <SiteFooter />
            <VerticalMenu />
            <BackToTopButton />
            <CookiePolicyBanner />
          </>
        )}
      </body>
    </html>
  );
}
