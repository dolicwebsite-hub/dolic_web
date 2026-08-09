import type { Metadata } from "next";
import { CalendarDays, CheckCircle2, MapPin, MessageCircle, Zap } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { ArticleFigure, LibraryBackButton, RecentArticles } from "../bao-duong-article-parts";

export const metadata: Metadata = {
  title: "Máy sục khí treo khí nén Dolic: hành trình kiểm chứng",
  description:
    "Hơn 2 tháng khảo sát tại 4 tỉnh nuôi tôm Trung Quốc và gần một năm chạy kiểm chứng tại Nam Định - hành trình Dolic chọn công nghệ sục khí.",
};

const currentHref = "/tin-tuc/may-suc-khi-treo-khi-nen-nguon-goc";

const summaryPoints = [
  "Dolic không chọn thiết bị qua catalogue - đoàn khảo sát đến gặp người đang dùng trước, gặp nhà máy sau.",
  "Hơn hai tháng làm việc tại Phúc Kiến, Chiết Giang, Quảng Đông và Quảng Tây, ghi nhận trực tiếp từ các trang trại tôm thẻ chân trắng.",
  "Trước khi ký hợp tác, máy được chạy kiểm chứng gần một năm tại một trang trại ở Nam Định, trong điều kiện điện 3 pha có lúc sụt xuống khoảng 285V và đường ống nhỏ hơn tiêu chuẩn.",
  "Kết quả kiểm chứng thực địa là căn cứ để Dolic đàm phán chuyển giao công nghệ.",
];

const surveyQuestions = [
  "Mức độ tiết kiệm điện thực tế",
  "Hiệu quả tăng oxy hòa tan",
  "Độ bền của thiết bị sau nhiều vụ nuôi",
  "Chi phí bảo trì",
  "Mức độ an toàn khi vận hành",
  "Những hỏng hóc thường gặp sau nhiều năm sử dụng",
];

const bearingTypes = [
  {
    title: "Ổ đỡ khí (air bearing)",
    description: "Trục quay được nâng trên một lớp màng khí rất mỏng, gần như không tiếp xúc cơ khí.",
    details: [
      "Không cần dầu bôi trơn, không phải thay dầu định kỳ, độ rung và tiếng ồn thấp.",
      "Nên hạn chế bật/tắt máy liên tục, vì lớp màng khí chỉ hình thành khi trục đạt đủ tốc độ vòng quay.",
    ],
  },
  {
    title: "Ổ đỡ bi gốm (ceramic bearing)",
    description: "Trục quay trên vòng bi làm bằng vật liệu gốm.",
    details: [
      "Cấu tạo quen thuộc, dễ tìm phụ kiện thay thế, chi phí đầu tư ban đầu thường thấp hơn.",
      "Vẫn tồn tại tiếp xúc cơ khí, nên chịu ảnh hưởng của mài mòn theo thời gian sử dụng.",
    ],
  },
];

const verificationConditions = [
  "Nguồn điện 3 pha không ổn định, có thời điểm sụt từ 380V xuống còn khoảng 285V.",
  "Hệ thống đường ống có kích thước nhỏ hơn thiết kế tiêu chuẩn.",
];

const relatedLinks = [
  { label: "Nguyên lý hoạt động của máy sục khí treo khí nén", href: "/tin-tuc/nguyen-ly-hoat-dong-may-suc-khi-treo-khi-nen" },
  { label: "Tại sao sục khí treo khí nén tiết kiệm điện", href: "/tin-tuc/vi-sao-suc-khi-treo-khi-nen-tiet-kiem-dien" },
];

export default function AirBearingOriginArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Tiết kiệm điện</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Máy sục khí treo khí nén Dolic: từ khảo sát thực địa đến kiểm chứng tại Việt Nam
            </h1>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-slate-600">
              Bùi Quý Đôn - Giám đốc Kinh doanh Dolic, Thạc sĩ Nuôi trồng thủy sản
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                30/07/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <MapPin className="h-4 w-4 text-cyan-700" />
                Trung Quốc - Nam Định
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Zap className="h-4 w-4 text-cyan-700" />
                Máy sục khí treo khí nén
              </span>
            </div>
          </div>

          <section className="rounded-lg border border-cyan-100 bg-cyan-50/60 p-5 md:p-6">
            <p className="text-xs font-bold uppercase text-cyan-700">Tóm tắt cho người nuôi</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {summaryPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-lg bg-white/70 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-700" />
                  <p className="text-sm leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>1. Khởi nguồn từ một câu hỏi của người nuôi</h2>
            <p>
              Máy sục khí treo khí nén Dolic bắt đầu từ một câu hỏi rất đơn giản, và cũng rất quen với bất kỳ ai đang nuôi tôm: làm sao để vừa giảm được tiền điện, vừa tăng oxy hòa tan, mà máy lại đỡ ồn và ít phải sửa?
            </p>
            <p>
              Trong quá trình làm việc với các trang trại tại Việt Nam, Dolic nhận thấy điện năng luôn là một trong những khoản chi phí biến đổi lớn nhất của một vụ nuôi. Bên cạnh đó, nhiều hệ thống sục khí đang được sử dụng còn gây tiếng ồn lớn, hiệu quả hòa tan oxy chưa cao và phát sinh chi phí sửa chữa sau một thời gian vận hành.
            </p>
            <p>
              Thay vì tìm một sản phẩm để nhập về bán, ban lãnh đạo Dolic chọn cách khó hơn: đi tìm hiểu trực tiếp những công nghệ đã được thị trường kiểm chứng, ngay tại nơi người ta đang dùng chúng mỗi ngày.
            </p>

            <h2>2. Nguyên tắc khảo sát: gặp người dùng trước, gặp nhà máy sau</h2>
            <p>
              Từ ngày 02/03/2023 đến 15/05/2023, ông Bùi Quý Đôn là Giám đốc Kinh doanh công ty Dolic trực tiếp sang Trung Quốc khảo sát.
            </p>
            <p>
              Trước khi làm việc với bất kỳ nhà sản xuất nào, đoàn thống nhất một nguyên tắc: đến gặp người sử dụng trước, gặp nhà máy sau. Nhà máy nào cũng có tài liệu kỹ thuật đầy đủ; nhưng chỉ người đã vận hành thiết bị qua nhiều vụ mới biết nó thường hỏng ở đâu.
            </p>
            <p>
              Trong hơn hai tháng, đoàn đã đến các vùng nuôi tôm trọng điểm gồm Phúc Kiến, Chiết Giang, Quảng Đông và Quảng Tây, gặp trực tiếp các trang trại nuôi tôm thẻ chân trắng ở cả quy mô lớn và nhỏ.
            </p>
          </div>

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/khao-sat-trung-quoc.webp"
            alt="Máy sục khí treo khí nén tại một vài vùng nuôi tôm ở Trung Quốc trong đợt khảo sát của Dolic"
            caption="Máy sục khí treo khí nén tại một vài vùng nuôi Trung Quốc"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {surveyQuestions.map((question) => (
              <div key={question} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm">
                {question}
              </div>
            ))}
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Điều đáng chú ý là khoảng 70% chủ trang trại mà đoàn tiếp xúc đều chủ động khuyên nên chọn công nghệ sục khí treo khí nén. Lời khuyên này xuất phát hoàn toàn từ kinh nghiệm sử dụng của họ, bởi ngay từ đầu đoàn khảo sát chưa hề đặt câu hỏi so sánh giữa các loại ổ đỡ.
            </p>
            <blockquote>
              “Chúng tôi đã mất rất nhiều học phí mới rút ra được kinh nghiệm này.” - Chia sẻ của một chủ trang trại trong đợt khảo sát.
            </blockquote>

            <h2>3. Hai hướng thiết kế ổ đỡ và đặc điểm của từng loại</h2>
            <p>
              Trong nhóm máy thổi khí ly tâm tốc độ cao hiện nay có hai hướng thiết kế ổ đỡ phổ biến. Mỗi hướng có đặc điểm kỹ thuật riêng, phù hợp với những điều kiện vận hành khác nhau.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {bearingTypes.map((item) => (
              <section key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-700" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Trong đợt khảo sát, phần lớn ý kiến từ người sử dụng nghiêng về hướng ổ đỡ khí, chủ yếu dựa trên trải nghiệm của họ về độ bền và chi phí bảo trì sau nhiều năm vận hành. Đây là ghi nhận từ thực địa trong điều kiện cụ thể của các trang trại được khảo sát, không phải kết luận kỹ thuật áp dụng cho mọi mô hình nuôi.
            </p>

            <h2>4. Người sử dụng nói gì về tiết kiệm điện và độ bền</h2>
            <p>
              Các con số trong phần này là ghi nhận từ khảo sát người sử dụng tại Trung Quốc, không phải số liệu do Dolic đo tại Việt Nam. Số liệu kiểm chứng của Dolic tại các trang trại Việt Nam được trình bày trong bài “Minh chứng thực tế về tiết kiệm điện”.
            </p>
            <p>
              Về tiết kiệm điện, phần lớn trang trại được hỏi có chung nhận định: trong 1-2 năm đầu, mức tiết kiệm điện thường vào khoảng 35% so với hệ thống họ sử dụng trước đó. Sau 3-5 năm, khi tính cả khấu hao và chi phí bảo trì, tổng lợi ích tiết kiệm vẫn duy trì khoảng 25%.
            </p>
            <p>
              Về độ bền, hầu hết cho biết trong khoảng 5 năm đầu, thiết bị gần như chỉ cần thay bông lọc định kỳ và rất ít phát sinh hỏng hóc nếu vận hành đúng hướng dẫn.
            </p>
            <p>
              Song song với việc khảo sát người sử dụng, đoàn còn nghiên cứu 15 thương hiệu máy sục khí treo khí nén khác nhau và chủ động trao đổi với từng nhà sản xuất để tìm hiểu ưu, nhược điểm của công nghệ mà họ đang theo đuổi.
            </p>

            <h2>5. Kiểm chứng tại Việt Nam trước khi ký hợp tác</h2>
            <p>
              Sau khi trở về Việt Nam, Dolic không ký hợp tác ngay. Máy được nhập về để chạy kiểm chứng thực địa trước. Địa điểm đầu tiên được chọn là trang trại của anh Phiến ở Nam Định, chính vì điều kiện vận hành ở đây khắc nghiệt.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {verificationConditions.map((condition) => (
              <div key={condition} className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-7 text-slate-800">
                {condition}
              </div>
            ))}
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Đây đúng là kiểu điều kiện mà nhiều vùng nuôi tại Việt Nam đang gặp phải. Một thiết bị chỉ chạy tốt trong điều kiện lý tưởng thì không có nhiều ý nghĩa với người nuôi.
            </p>
            <p>
              Sau gần một năm vận hành thực tế, hệ thống hoạt động ổn định, giữ được hiệu suất và đáp ứng tốt yêu cầu vận hành của trang trại. Để có thêm cơ sở đánh giá, Dolic đồng thời đưa hai dòng máy khác vào chạy trong cùng điều kiện. Kết quả của đợt kiểm chứng nội bộ này là căn cứ để công ty đi đến quyết định cuối cùng về đối tác công nghệ.
            </p>
            <p>
              Các số liệu tiết kiệm điện cụ thể mà Dolic đo được tại các trang trại Việt Nam trong khoảng 25,6% đến 48,75% tùy mô hình và điều kiện vận hành được trình bày chi tiết trong bài “Minh chứng thực tế về tiết kiệm điện”.
            </p>
          </div>

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/lap-dat-nam-dinh.webp"
            alt="Máy sục khí treo khí nén Dolic chạy kiểm chứng tại trang trại nuôi tôm ở Nam Định"
            caption="Máy sục khí treo khí nén Dolic lắp đặt và chạy kiểm chứng tại trang trại Nam Định"
          />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>6. Từ dữ liệu thực địa đến quyết định chuyển giao công nghệ</h2>
            <p>
              Trên cơ sở dữ liệu thu được từ khảo sát và kiểm chứng thực tế, Dolic tiến hành đàm phán, chuyển giao công nghệ và ký kết hợp đồng hợp tác với nhà sản xuất. Sau đó, sản phẩm tiếp tục được hoàn thiện và kiểm chứng tại nhiều mô hình nuôi tôm khác nhau ở Việt Nam.
            </p>
            <p>
              Với Dolic, một thiết bị được người nuôi tin dùng không phải nhờ lời quảng cáo, mà nhờ bốn điều: hiệu quả vận hành thực tế, khả năng tiết kiệm điện, độ ổn định, và dịch vụ hậu mãi đi cùng người nuôi suốt quá trình sử dụng.
            </p>
          </div>

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/san-xuat-hang-loat.webp"
            alt="Máy nén khí Dolic được sản xuất liên tục phục vụ bà con nuôi trồng thủy sản"
            caption="Máy nén khí Dolic được sản xuất liên tục phục vụ bà con nuôi trồng thủy sản"
          />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8">
            <p>
              Đó cũng chính là lý do máy sục khí treo khí nén Dolic ngày càng được nhiều hộ nuôi và trang trại trên cả nước lựa chọn như một giải pháp cấp khí hiệu quả, an toàn và bền vững.
            </p>
          </div>

          <section className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6">
            <p className="text-xs font-bold uppercase text-cyan-700">Tìm hiểu thêm</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {relatedLinks.map((link) => (
                <a key={link.label} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700">
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-lg bg-[#071F3E] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase text-cyan-200">Cần tư vấn giải pháp cấp khí phù hợp với ao của bạn?</p>
            <h2 className="mt-3 text-2xl font-bold">Liên hệ Dolic để được kỹ thuật viên tư vấn theo điều kiện ao thực tế.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Đội ngũ kỹ thuật sẽ tư vấn dựa trên diện tích, độ sâu và mật độ nuôi thực tế của trang trại. Người nuôi hiểu người nuôi.
            </p>
            <a href="/lien-he" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
              Liên hệ tư vấn
              <MessageCircle className="h-4 w-4" />
            </a>
          </section>

          <RecentArticles currentHref={currentHref} />
        </div>
      </article>
    </PageFrame>
  );
}
