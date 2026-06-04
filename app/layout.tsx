import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolic - Giải pháp trọn bộ cho trang trại thuỷ sản",
  description: "Dolic cung cấp thiết bị, giám sát và vi sinh theo combo giải pháp cho trang trại thuỷ sản Việt Nam"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
