import type { Metadata } from "next";
import { CalendarDays, MapPin, Users, Waves } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { LibraryBackButton, RecentArticles } from "../bao-duong-article-parts";

export const metadata: Metadata = {
  title: "Dolic tại triển lãm VietShrimp Asia 2026",
  description:
    "Dolic tham gia VietShrimp Asia 2026 tại SECC TP.HCM giới thiệu dòng quạt nước biến tần và máy sục khí treo khí nén tiết kiệm điện.",
};

const gallery = [
  {
    src: "/assets/drive/exhibition/IMG_6574.PNG",
    alt: "Không gian gian hàng Dolic tại VietShrimp Asia 2026",
    caption: "Gian hàng Dolic tại VietShrimp Asia 2026 ở SECC, TP.HCM.",
  },
  {
    src: "/assets/drive/exhibition/IMG_6575.PNG",
    alt: "Khách tham quan trao đổi tại gian hàng Dolic ở VietShrimp Asia 2026",
    caption: "Khách tham quan từ các vùng nuôi ngồi lại tư vấn bài toán vận hành.",
  },
  {
    src: "/assets/drive/exhibition/IMG_6576.PNG",
    alt: "Dolic giới thiệu thiết bị tiết kiệm điện tại VietShrimp Asia 2026",
    caption: "Dolic giới thiệu máy sục khí treo khí nén và giải pháp tiết kiệm điện.",
  },
];

export default function VietShrimpAsia2026Page() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Triển lãm / Sự kiện</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Dolic tại triển lãm VietShrimp Asia 2026
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                18-20/03/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <MapPin className="h-4 w-4 text-cyan-700" />
                SECC TP.HCM
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Waves className="h-4 w-4 text-cyan-700" />
                Gian hàng H25
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <img src="/assets/drive/exhibition/IMG_6574.PNG" alt="Gian hàng Dolic tại VietShrimp Asia 2026" className="aspect-[16/9] w-full object-cover" />
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8">
            <p>
              Từ 18 đến 20/3/2026, Triển lãm Quốc tế Công nghệ ngành Tôm VietShrimp Asia 2026 được tổ chức tại Trung tâm Hội chợ & Triển lãm Sài Gòn (SECC), TP.HCM, đồng thời với Aquaculture Vietnam 2026. Sự kiện quy tụ hơn 200 đơn vị trưng bày trên diện tích hơn 8.800 m2, thu hút trên 7.000 khách tham quan chuyên ngành đến từ hơn 30 quốc gia và vùng lãnh thổ.
            </p>
            <p>
              Đây là một bước đi có tính toán của ban tổ chức: đưa thủ phủ tôm miền Tây đến gặp trung tâm công nghiệp, logistics và tài chính lớn nhất cả nước. Dolic có mặt tại sự kiện ở gian hàng H25.
            </p>
          </div>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-cyan-100 bg-cyan-50/60 p-5">
              <Users className="h-5 w-5 text-cyan-700" />
              <h2 className="mt-3 text-lg font-bold text-slate-950">Lượng khách lớn</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">Dolic ghi nhận nhiều đoàn khách từ các tỉnh đồng bằng sông Cửu Long di chuyển xa để đến triển lãm.</p>
            </div>
            <div className="rounded-lg border border-cyan-100 bg-cyan-50/60 p-5">
              <Waves className="h-5 w-5 text-cyan-700" />
              <h2 className="mt-3 text-lg font-bold text-slate-950">Tính khu vực</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">Gian hàng đón cả khách nuôi tôm từ Campuchia và các nước lân cận, tạo không khí trao đổi kỹ thuật sôi động.</p>
            </div>
            <div className="rounded-lg border border-cyan-100 bg-cyan-50/60 p-5">
              <CalendarDays className="h-5 w-5 text-cyan-700" />
              <h2 className="mt-3 text-lg font-bold text-slate-950">Hội thảo chuyên đề</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">Bên cạnh khu trưng bày, Dolic tham gia trình bày trong chuỗi hội thảo kỹ thuật của sự kiện.</p>
            </div>
          </section>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8">
            <p>
              Triển lãm quy tụ các doanh nghiệp trong và ngoài nước, mở ra nhiều cuộc thảo luận trực tiếp về ngành tôm. Trong ba ngày, khách tham quan ngồi lại rất lâu tại bàn tư vấn Dolic, hỏi kỹ từng thông số, từng bài toán chi phí điện và phương án lắp đặt cho ao nuôi.
            </p>
            <h2>Trình bày tại hội thảo chuyên đề</h2>
            <p>
              Bên cạnh khu trưng bày, VietShrimp Asia 2026 tổ chức chuỗi hội thảo kỹ thuật và diễn đàn chuyên ngành, quy tụ chuyên gia trong nước và quốc tế. Dolic tham gia trình bày tại hội thảo chuyên đề trong khuôn khổ sự kiện, tập trung vào các giải pháp thiết bị giúp người nuôi giảm chi phí vận hành.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {gallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <RecentArticles currentHref="/tin-tuc/dolic-tai-vietshrimp-asia-2026" />
        </div>
      </article>
    </PageFrame>
  );
}
