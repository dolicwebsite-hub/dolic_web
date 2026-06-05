import type { Metadata } from "next";
import { BackToTopButton, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { VerticalMenu } from "@/components/vertical-menu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolic - Giải pháp trọn bộ cho trang trại thuỷ sản",
  description: "Dolic cung cấp thiết bị, giám sát và vi sinh theo combo giải pháp cho trang trại thuỷ sản Việt Nam",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <SiteHeader />
        <div id="top" />
        {children}
        <SiteFooter />
        <VerticalMenu />
        <BackToTopButton />
      </body>
    </html>
  );
}
