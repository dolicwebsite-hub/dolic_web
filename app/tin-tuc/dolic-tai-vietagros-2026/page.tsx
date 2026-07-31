import type { Metadata } from "next";
import { CalendarDays, MapPin, MessageCircle, Zap } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { libraryPosts } from "@/lib/library-data";
import { LibraryBackButton } from "../bao-duong-article-parts";

export const metadata: Metadata = {
  title: "Dolic tại VietAgros 2026: tiết kiệm điện lên đến 40% không khó",
  description:
    "Dolic tham gia VietAgros 2026 với vai trò nhà tài trợ, 3 gian hàng A7-A8-A9 và bài trình bày “Tối ưu chi phí điện năng trong nuôi tôm” tại hội thảo chuyên đề.",
};

const fieldResults = [
  {
    location: "Uông Bí, Quảng Ninh",
    farm: "Trại 9 ha, 12 ao",
    result: "Điện năng tiêu thụ giảm từ 24 kWh xuống 11,7 kWh, tương đương 48,75%. Oxy hòa tan ban đêm tăng từ 4,9 lên 5,5 mg/L.",
  },
  {
    location: "Ngọc Hiển, Cà Mau",
    farm: "Trại 15 ha, 10 ao",
    result: "Điện năng giảm từ 25 kWh xuống 18,6 kWh, tương đương 25,6%. Oxy hòa tan tăng từ 4,0 lên 5,0 mg/L, sản lượng giữ nguyên 15 tấn.",
  },
  {
    location: "Móng Cái, Quảng Ninh",
    farm: "Trại 3 ha",
    result: "Điện năng vận hành tăng 31%, nhưng sản lượng tôm tăng từ 4,5 lên 8 tấn, giúp lượng điện tiêu hao trên mỗi kg tôm giảm khoảng một phần tư.",
  },
];

const boothImages = [
  {
    src: "/assets/drive/exhibition/IMG_6001.PNG",
    alt: "Khách tham quan tập trung tại gian hàng Dolic ở VietAgros 2026",
    caption: "Không gian gian hàng Dolic thu hút đông khách tham quan trong ngày triển lãm.",
  },
  {
    src: "/assets/drive/exhibition/IMG_6002.PNG",
    alt: "Khách tham quan ngồi lại tư vấn tại gian hàng Dolic",
    caption: "Nhiều người nuôi ở lại bàn tư vấn để trao đổi bài toán lắp đặt cho ao nhà.",
  },
  {
    src: "/assets/drive/exhibition/IMG_6010.PNG",
    alt: "Toàn cảnh khu trưng bày thiết bị Dolic tại VietAgros 2026",
    caption: "Dàn quạt nước, bơm chìm và thiết bị sục khí được trưng bày trực tiếp tại gian hàng.",
  },
];

const fieldProofImages = [
  {
    src: "/assets/drive/performance/1JRKM8T8D_5FLBM0.jpg",
    alt: "Case study thực địa Uông Bí Quảng Ninh về hiệu quả tiết kiệm điện",
    caption: "Case Study 01 - Farm nuôi tôm Anh Nam, Uông Bí, Quảng Ninh.",
  },
  {
    src: "/assets/drive/performance/1JRKM8TP5_5FLBM0.jpg",
    alt: "Case study thực địa Móng Cái Quảng Ninh về hiệu quả vận hành",
    caption: "Case Study 02 - Farm Quảng, Móng Cái, Quảng Ninh.",
  },
  {
    src: "/assets/drive/performance/1JRKM8URN_5FLBM0.jpg",
    alt: "Case study thực địa Ngọc Hiển Cà Mau về hiệu quả giảm điện",
    caption: "Case Study 03 - Farm Bình, Ngọc Hiển, Cà Mau.",
  },
  {
    src: "/assets/drive/performance/1JRKMAKB2_5FLBM0.jpg",
    alt: "Bảng tổng hợp bằng chứng thực địa về mức giảm điện của máy sục khí Dolic",
    caption: "Bảng tổng hợp bằng chứng thực địa từ ba vùng nuôi.",
  },
  {
    src: "/assets/drive/performance/1JRKM8UH7_5FLBM0.jpg",
    alt: "Hình ảnh lắp đặt thiết bị Dolic tại trại nuôi ở Móng Cái Quảng Ninh",
    caption: "Hình ảnh thực tế tại trại Móng Cái, Quảng Ninh trong quá trình thay thế và vận hành thiết bị.",
  },
  {
    src: "/assets/drive/performance/1JRKM8VBJ_5FLBM0.jpg",
    alt: "Hình ảnh so sánh thiết bị vận hành trước và sau khi lắp đặt giải pháp Dolic",
    caption: "So sánh thực địa trước và sau khi triển khai giải pháp sục khí Dolic.",
  },
];

const recentArticles = libraryPosts.filter((post) => post.href !== "/tin-tuc/dolic-tai-vietagros-2026").slice(0, 3);

export default function VietAgrosArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Triển lãm / Sự kiện</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Dolic tại triển lãm quốc tế VietAgros 2026: tiết kiệm điện lên đến 40% không khó
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                09-11/06/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <MapPin className="h-4 w-4 text-cyan-700" />
                EFC Cần Thơ
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Zap className="h-4 w-4 text-cyan-700" />
                Gian hàng A7-A8-A9
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <img src="/assets/drive/exhibition/IMG_6003.PNG" alt="Kỹ thuật viên Dolic giới thiệu máy sục khí treo khí nén tại VietAgros 2026" className="aspect-[16/9] w-full object-cover" />
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Trong ba ngày từ 9 đến 11/6/2026, Trung tâm Hội chợ Triển lãm Quốc tế Cần Thơ (EFC) trở thành điểm hẹn của ngành nông nghiệp và thủy sản Việt Nam. Triển lãm Quốc tế Công nghệ Nông nghiệp và Môi trường - VietAgros 2026 quy tụ hơn 200 gian hàng trên diện tích hơn 5.000 m2, với chủ đề xuyên suốt: “Nông nghiệp Công nghệ cao”, “Nông nghiệp xanh”.
            </p>
            <p>
              Sự kiện do Công ty TNHH Kết nối Nông nghiệp và Môi trường Việt phối hợp cùng Tạp chí Người Chăn Nuôi tổ chức, với sự tham gia của Cục Thủy sản và Kiểm ngư, Sở Nông nghiệp và Môi trường TP. Cần Thơ, Hiệp hội Thủy sản TP. Cần Thơ cùng nhiều cơ quan, hiệp hội và doanh nghiệp trong nước, quốc tế.
            </p>
          </div>

          <figure className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src="/assets/drive/exhibition/IMG_6004.PNG" alt="Ban lãnh đạo thành phố Cần Thơ ghé thăm gian hàng Dolic tại VietAgros 2026" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm italic leading-6 text-slate-600">Ban lãnh đạo thành phố Cần Thơ ghé thăm gian hàng Dolic.</figcaption>
          </figure>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Với người nuôi tôm miền Tây, “nông nghiệp Công nghệ cao” không phải một khái niệm trừu tượng. Nó bắt đầu từ một câu hỏi rất cụ thể: mỗi vụ, bao nhiêu tiền lãi đã chảy vào hóa đơn tiền điện? Đó chính là câu hỏi mà Dolic mang đến VietAgros 2026.
            </p>

            <h2>Ba gian hàng, một bài toán</h2>
            <p>
              Dolic có mặt tại hội chợ với vai trò nhà tài trợ chương trình và ba gian hàng liền kề A7-A8-A9. Không gian trưng bày trọng tâm vào máy sục khí treo khí nén Dolic, thiết bị ứng dụng công nghệ tuabin hàng không với trục quay lơ lửng trên lớp đệm khí, không ma sát, không cần dầu bôi trơn. Đây là giải pháp Dolic đưa ra để thay thế dòng máy thổi khí Roots vốn phổ biến ở các trại nuôi hiện nay.
            </p>
          </div>

          <figure className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src="/assets/drive/exhibition/IMG_6003.PNG" alt="Kỹ thuật viên Dolic giới thiệu lõi turbo bên trong máy sục khí treo khí nén" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">Kỹ thuật viên Dolic chỉ tận tay lõi turbo bên trong máy sục khí treo khí nén.</figcaption>
          </figure>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Bên cạnh đó là dàn quạt nước truyền động trực tiếp và máy bơm chìm cấp nước, những thiết bị cùng phục vụ một mục tiêu: giảm chi phí vận hành cho trang trại.
            </p>
            <p>
              Tại gian hàng, kỹ thuật viên Dolic chỉ tận tay từng chi tiết cho bà con xem lõi turbo bên trong. Nhiều người nuôi ở lại rất lâu, ngồi vào bàn tư vấn, hỏi từ giá điện mỗi tháng đến chuyện lắp đặt cho ao nhà mình.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {boothImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>Tối ưu chi phí điện năng trong nuôi tôm</h2>
          </div>

          <figure className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src="/assets/drive/exhibition/IMG_6008.PNG" alt="Ông Bùi Quý Đôn trình bày tham luận tối ưu chi phí điện năng trong nuôi tôm tại VietAgros 2026" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">
              Ông Bùi Quý Đôn trình bày tham luận “Tối ưu chi phí điện năng trong nuôi tôm” tại hội thảo chuyên đề.
            </figcaption>
          </figure>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Điểm nhấn của Dolic tại VietAgros 2026 nằm ở khu vực hội thảo. Chiều 9/6, tại Phiên 2 của chuỗi hội thảo chuyên đề “Dinh dưỡng thông minh - Sức khỏe chủ động cho nuôi trồng thủy sản 4.0”, ông Bùi Quý Đôn, Giám đốc Kinh doanh Công ty TNHH Thủy sản Dolic, trình bày tham luận “Tối ưu chi phí điện năng trong nuôi tôm”.
            </p>
            <p>Phần thuyết phục nhất không phải là thông số kỹ thuật, mà là số liệu đo được tại ao thật:</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {fieldResults.map((item) => (
              <section key={item.location} className="rounded-lg border border-cyan-100 bg-cyan-50/60 p-5">
                <p className="text-sm font-bold text-cyan-800">{item.location}</p>
                <h2 className="mt-2 text-lg font-bold text-slate-950">{item.farm}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.result}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fieldProofImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <img src={image.src} alt={image.alt} className="aspect-[16/9] w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8">
            <blockquote>
              “Chúng tôi chứng minh hiệu quả bằng kiểm chứng thực địa.” - Ông Bùi Quý Đôn, Giám đốc Kinh doanh, Công ty TNHH Thủy sản Dolic.
            </blockquote>
            <p>
              Ông Lê Văn Quang, nhà sáng lập Tập đoàn Thủy sản Minh Phú, người được giới truyền thông trong ngành gọi là “vua tôm”, đã dừng lại tại gian hàng và trực tiếp tìm hiểu công nghệ máy sục khí treo khí nén.
            </p>
          </div>

          <figure className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src="/assets/drive/exhibition/IMG_6005.PNG" alt="Ông Lê Văn Quang tìm hiểu công nghệ máy sục khí treo khí nén tại gian hàng Dolic" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">Ông Lê Văn Quang trực tiếp tìm hiểu công nghệ máy sục khí treo khí nén tại gian hàng Dolic.</figcaption>
          </figure>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8">
            <p>
              VietAgros 2026 khép lại, nhưng bài toán chi phí điện của người nuôi tôm thì vẫn còn đó mỗi ngày, mỗi vụ. Dolic sẽ tiếp tục hành trình trở thành mảnh ghép đáng tin cậy trong mỗi vụ nuôi của người Việt.
            </p>
          </div>

          <section className="mt-12">
            <div className="mb-5 border-b border-slate-200 pb-4">
              <p className="text-xs font-bold uppercase text-cyan-700">Thư viện</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Bài viết gần đây</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {recentArticles.map((post) => (
                <article key={post.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-48px_rgba(15,23,42,0.55)]">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{post.date ?? "Cập nhật tuần"}</span>
                    <h3 className="mt-4 min-h-16 font-bold leading-6 text-slate-950">{post.title}</h3>
                    <a href={post.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                      Xem chi tiết
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </PageFrame>
  );
}
