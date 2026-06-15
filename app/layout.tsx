import type { Metadata } from "next";
import { MaintenancePage } from "@/components/maintenance-page";
import { BackToTopButton, SiteFooter, SiteHeader } from "@/components/site-chrome";
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
            <SiteHeader />
            <div id="top" />
            {children}
            <SiteFooter />
            <VerticalMenu />
            <BackToTopButton />
          </>
        )}
      </body>
    </html>
  );
}
