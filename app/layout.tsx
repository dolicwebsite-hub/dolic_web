import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolic - Brand & Product Portal",
  description: "Tổng hợp toàn bộ dữ liệu thương hiệu và sản phẩm Dolic"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
