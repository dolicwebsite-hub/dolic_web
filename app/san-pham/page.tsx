import { ProductBrowser } from "@/components/product-browser";
import { PageFrame, SectionHeader } from "@/components/site-chrome";

export default function ProductsPage() {
  return (
    <PageFrame>
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Danh mục sản phẩm"
            title="Thiết bị cốt lõi cho vận hành ao nuôi"
            desc="Danh mục hiện có được trích từ file sản phẩm và bảng báo giá Dolic. Giá chỉ là tham khảo, cấu hình cuối cùng sẽ được tư vấn theo thực tế trang trại."
          />
          <ProductBrowser />
        </div>
      </section>
    </PageFrame>
  );
}
