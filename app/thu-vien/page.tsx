import { MessageCircle } from "lucide-react";
import { PageFrame, SectionHeader } from "@/components/site-chrome";

const libraryItems = [
  ["Cách chọn guồng sục khí theo diện tích ao", "Hướng dẫn kỹ thuật"],
  ["Khi nào nên dùng sục khí khí nén?", "Hỏi kỹ sư Dolic"],
  ["Checklist kiểm tra oxy trước và sau khi cho ăn", "Vận hành ao"],
  ["Tài liệu cho đại lý: tư vấn combo giải pháp", "Đại lý"],
];

export default function LibraryPage() {
  return (
    <PageFrame>
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Thư viện kỹ thuật"
            title="Nội dung để người nuôi và đại lý ra quyết định tốt hơn"
            desc="Khu vực này được tách riêng để sau này phát triển bài viết, catalog tải về và form Hỏi kỹ sư Dolic."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {libraryItems.map(([title, type]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{type}</span>
                <h2 className="mt-4 min-h-16 font-bold leading-6">{title}</h2>
                <a href="/lien-he" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                  Hỏi kỹ sư
                  <MessageCircle className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
