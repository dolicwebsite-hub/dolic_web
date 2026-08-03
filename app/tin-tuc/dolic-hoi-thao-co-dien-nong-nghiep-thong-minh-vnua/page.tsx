import type { Metadata } from "next";
import { CalendarDays, GraduationCap, MapPin, Zap } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { LibraryBackButton, RecentArticles } from "../bao-duong-article-parts";

export const metadata: Metadata = {
  title: "Dolic tham dự hội thảo Cơ điện nông nghiệp thông minh tại VNUA",
  description:
    "Dolic tham dự hội thảo khoa học Cơ điện nông nghiệp thông minh do Khoa Cơ - Điện, Học viện Nông nghiệp Việt Nam tổ chức, giới thiệu máy sục khí khí nén tiết kiệm điện cho ngành thủy sản.",
};

const gallery = [
  {
    src: "/assets/drive/exhibition/IMG_4750.PNG",
    alt: "Đại diện Dolic tham dự hội thảo tại Học viện Nông nghiệp Việt Nam",
    caption: "Đại diện Dolic tham dự hội thảo khoa học tại Học viện Nông nghiệp Việt Nam.",
  },
  {
    src: "/assets/drive/exhibition/IMG_4751.PNG",
    alt: "Không gian hội thảo Cơ điện nông nghiệp thông minh tại VNUA",
    caption: "Không gian hội thảo với các nhà khoa học, giảng viên và đại diện doanh nghiệp.",
  },
  {
    src: "/assets/drive/exhibition/IMG_4753.PNG",
    alt: "PGS.TS. Kim Văn Vạn phát biểu tại hội thảo",
    caption: "PGS.TS. Kim Văn Vạn phát biểu trong chương trình hội thảo.",
  },
];

export default function VnuaSmartAgricultureWorkshopPage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Triển lãm / Sự kiện</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Dolic tham dự hội thảo khoa học Cơ điện nông nghiệp thông minh tại Học viện Nông nghiệp Việt Nam
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                05/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <MapPin className="h-4 w-4 text-cyan-700" />
                Hà Nội
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <GraduationCap className="h-4 w-4 text-cyan-700" />
                VNUA
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <img src="/assets/drive/exhibition/IMG_4750.PNG" alt="Đại diện Dolic tại hội thảo Cơ điện nông nghiệp thông minh VNUA" className="aspect-[16/9] w-full object-cover" />
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8">
            <p>
              Tháng 5/2026, tại Hà Nội, Khoa Cơ - Điện, Học viện Nông nghiệp Việt Nam tổ chức hội thảo khoa học “Cơ điện nông nghiệp thông minh: Giải pháp nâng cao hiệu quả & phát triển bền vững”. Dolic có mặt tại hội thảo với tư cách đại biểu khách mời.
            </p>
            <p>
              Thành lập ngày 12/10/1956 với tiền thân là Trường Đại học Nông Lâm, Học viện Nông nghiệp Việt Nam là cơ sở giáo dục đại học công lập hàng đầu trực thuộc Bộ Nông nghiệp và Phát triển nông thôn. Học viện nổi tiếng với khuôn viên xanh rộng gần 200 ha và nhiều viện nghiên cứu chuyên sâu phục vụ ngành nông nghiệp.
            </p>
            <p>
              Phần lớn kỹ sư, nhà khoa học và cán bộ ngành nông nghiệp - thủy sản miền Bắc đều đi qua đây. Ông Bùi Quý Đôn, Giám đốc Kinh doanh Công ty TNHH Thủy sản Dolic, cũng là cựu sinh viên khoa thủy sản và hiện đang theo học thạc sĩ tại trường.
            </p>
          </div>

          <section className="mt-8 rounded-lg border border-cyan-100 bg-cyan-50/60 p-5 md:p-6">
            <div className="flex gap-4">
              <Zap className="mt-1 h-6 w-6 flex-none text-cyan-700" />
              <div>
                <p className="text-xs font-bold uppercase text-cyan-700">Dolic mang gì đến hội thảo</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">Giải pháp sục khí khí nén tiết kiệm điện</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Dolic giới thiệu máy sục khí khí nén, giải pháp giúp bà con nuôi tôm, cá giảm 30-40% chi phí điện theo dữ liệu vận hành tại trang trại thực nghiệm, không cần dầu bôi trơn, vận hành ổn định ngay cả khi điện áp thấp và có tuổi thọ 10-15 năm.
                </p>
              </div>
            </div>
          </section>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8">
            <p>
              Hội thảo quy tụ các giáo sư, tiến sĩ, nhà nghiên cứu và đại diện doanh nghiệp trong lĩnh vực nông nghiệp và thủy sản. Chủ đề xuyên suốt là đưa công nghệ và dữ liệu vào sản xuất, để mỗi vụ nuôi bớt phụ thuộc vào may rủi.
            </p>
            <p>
              Trong các tham luận, PGS.TS. Kim Văn Vạn, Trưởng khoa Thủy sản, Học viện Nông nghiệp Việt Nam, trình bày đề tài “Ứng dụng công nghệ số trong nuôi trồng thủy sản”. Điểm chung giữa những người dự hội thảo, dù là nhà khoa học hay doanh nghiệp, là làm sao tối ưu hiệu quả thật sự cho bà con nông dân Việt.
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

          <RecentArticles currentHref="/tin-tuc/dolic-hoi-thao-co-dien-nong-nghiep-thong-minh-vnua" />
        </div>
      </article>
    </PageFrame>
  );
}
