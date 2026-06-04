import { ArrowRight, BookOpen, ShieldCheck, SlidersHorizontal, Wrench } from "lucide-react";
import { PageFrame, PrimaryButton } from "@/components/site-chrome";

export default function DealerPage() {
  return (
    <PageFrame>
      <section className="bg-[#071F3E] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Cơ hội đại lý</p>
            <h1 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Trở thành đại lý chuyên gia ngành thuỷ sản cùng Dolic</h1>
            <p className="mt-5 text-base leading-8 text-cyan-50/78">
              Dolic ưu tiên đại lý hiểu vùng nuôi, có năng lực tư vấn và muốn xây dựng kênh bán bền vững thay vì cạnh tranh bằng máy giá rẻ.
            </p>
            <PrimaryButton href="/lien-he">
              Đăng ký tìm hiểu chính sách
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [SlidersHorizontal, "Sản phẩm khác biệt", "Danh mục thiết bị theo combo, dễ tư vấn theo mô hình trang trại."],
              [BookOpen, "Tài liệu marketing", "Catalog, nội dung kỹ thuật và bộ tư vấn được chuẩn hóa theo brand."],
              [Wrench, "Đào tạo kỹ thuật", "Hỗ trợ đại lý hiểu cấu hình, vận hành và lỗi thường gặp."],
              [ShieldCheck, "Chính sách ổn định", "Bảo hành, giá và quy trình xử lý lead được thiết kế để mở rộng lâu dài."],
            ].map(([Icon, title, desc]) => (
              <div key={String(title)} className="rounded-lg border border-white/10 bg-white/8 p-5">
                <Icon className="h-6 w-6 text-cyan-300" />
                <h2 className="mt-4 font-bold">{title as string}</h2>
                <p className="mt-2 text-sm leading-6 text-cyan-50/72">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
