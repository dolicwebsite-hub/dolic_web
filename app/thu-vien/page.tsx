import { MessageCircle } from "lucide-react";
import { PageFrame, SectionHeader } from "@/components/site-chrome";

const libraryItems = [
  ["Dolic là một trong hơn 200 doanh nghiệp lớn đầu ngành tham gia triển lãm quốc tế công nghệ Nông nghiệp và Môi trường", "Trang thư viện"],
  ["Cách chọn guồng sục khí theo diện tích ao", "Hướng dẫn kỹ thuật"],
  ["Khi nào nên dùng sục khí khí nén?", "Hỏi kỹ sư Dolic"],
  ["Checklist kiểm tra oxy trước và sau khi cho ăn", "Vận hành ao"],
  ["Tài liệu cho đại lý: tư vấn combo giải pháp", "Đại lý"],
];

const exhibitionImages = [
  "/assets/drive/exhibition/IMG_6001.PNG",
  "/assets/drive/exhibition/IMG_6004.PNG",
  "/assets/drive/exhibition/IMG_6574.PNG",
  "/assets/drive/exhibition/IMG_4750.PNG",
];

export default function LibraryPage() {
  return (
    <PageFrame>
      <section className="px-4 pb-16 pt-32 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Thư viện kỹ thuật"
            title="Nội dung để người nuôi và đại lý ra quyết định tốt hơn"
            desc="Khu vực này được tách riêng để sau này phát triển bài viết, catalog tải về và form Hỏi kỹ sư Dolic."
          />
          <div className="mb-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#071F3E] p-7 text-white md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Trang thư viện</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">Dolic tại triển lãm quốc tế công nghệ Nông nghiệp và Môi trường</h2>
              </div>
              <div className="p-7 md:p-9">
                <p className="text-lg font-bold leading-8 text-slate-950">
                  Dolic là một trong hơn 200 doanh nghiệp lớn đầu ngành tham gia triển lãm quốc tế công nghệ Nông nghiệp và Môi trường.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Nội dung này dùng làm bài nổi bật trong thư viện, phục vụ truyền thông năng lực, kết nối đối tác và cập nhật hoạt động công nghệ của Dolic.
                </p>
                <a href="/lien-he" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                  Liên hệ truyền thông
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-px bg-slate-200 md:grid-cols-4">
              {exhibitionImages.map((src, index) => (
                <div key={src} className="relative aspect-square overflow-hidden bg-white">
                  <img src={src} alt={`Hình ảnh Dolic tham gia triển lãm ${index + 1}`} className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {libraryItems.slice(1).map(([title, type]) => (
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
