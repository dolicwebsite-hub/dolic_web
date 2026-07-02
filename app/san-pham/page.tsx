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
            desc="Chọn nhóm thiết bị để xem thông tin chi tiết và nhận tư vấn giải pháp phù hợp theo mô hình ao."
          />
          <ProductBrowser />
        </div>
      </section>
    </PageFrame>
  );
}
