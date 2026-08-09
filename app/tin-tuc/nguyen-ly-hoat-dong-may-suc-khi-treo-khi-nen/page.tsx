import type { Metadata } from "next";
import { CalendarDays, CheckCircle2, Cog, Zap } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import {
  ArticleFigure,
  ContactCta,
  InfoTable,
  LibraryBackButton,
  RecentArticles,
} from "../bao-duong-article-parts";

export const metadata: Metadata = {
  title: "Nguyên lý hoạt động máy sục khí treo khí nén",
  description:
    "Máy sục khí treo khí nén hoạt động thế nào? Giải thích ổ đỡ khí, động cơ nam châm vĩnh cửu và cách khí nén được tạo ra, bằng ngôn ngữ người nuôi.",
};

const currentHref = "/tin-tuc/nguyen-ly-hoat-dong-may-suc-khi-treo-khi-nen";

const summaryPoints = [
  "Máy hút không khí ngoài trời, dùng cánh quạt quay cực nhanh để nén khí, rồi đẩy xuống đĩa phân phối khí dưới ao.",
  "Trục quay không nằm trên vòng bi mà “lơ lửng” trên một lớp màng khí - nên không cần dầu, không phải thay dầu, máy chạy êm.",
  "Vì gần như không có ma sát, phần lớn điện năng được dùng để tạo khí thay vì biến thành nhiệt và tiếng ồn.",
  "Một lưu ý quan trọng khi vận hành: hạn chế bật/tắt máy liên tục. Lý do được giải thích ở mục 3.",
];

const bearingSteps = [
  "Khi khởi động, trục bắt đầu quay và vẫn còn tiếp xúc với bề mặt ổ đỡ.",
  "Khi đạt khoảng 8.000-12.000 vòng/phút, một lớp màng khí cực mỏng - chỉ vài micromet - hình thành giữa trục và ổ đỡ.",
  "Từ thời điểm này, trục “lơ lửng” trên lớp đệm khí đó và không còn tiếp xúc cơ khí nữa.",
];

const bearingResults = [
  "Gần như không có ma sát khi máy chạy ổn định",
  "Không cần dầu bôi trơn, không phải thay dầu định kỳ",
  "Độ rung và tiếng ồn thấp",
  "Ít chi tiết mài mòn nên ít phát sinh hỏng hóc",
];

const motorAdvantages = [
  "Hiệu suất động cơ thường đạt 95-97%",
  "Tiêu thụ điện thấp hơn ở cùng công suất đầu ra",
  "Điều chỉnh tốc độ mượt, phù hợp với việc thay đổi lượng khí theo giai đoạn nuôi",
];

const specRows = [
  { cells: ["Áp suất đầu ra", "10-30 kPa", "Tương đương cột nước khoảng 1,0-3,1 m. Độ sâu lắp đặt thực tế thấp hơn, vì còn phải trừ tổn thất qua đường ống và đĩa phân phối khí."] },
  { cells: ["Tốc độ vòng quay", "20.000-40.000 v/ph (một số dòng cao hơn)", "Tốc độ cao cho phép máy nhỏ gọn hơn ở cùng lưu lượng khí."] },
  { cells: ["Ngưỡng hình thành màng khí", "8.000-12.000 v/ph", "Dưới ngưỡng này ổ đỡ còn tiếp xúc cơ khí - đây là lý do không nên bật/tắt liên tục."] },
  { cells: ["Hiệu suất động cơ", "95-97%", "Chỉ tính riêng động cơ, không phải hiệu suất toàn hệ thống."] },
  { cells: ["Bảo trì thường kỳ", "Thay bông lọc theo định kỳ", "Không có dầu bôi trơn nên không có lịch thay dầu."] },
];

const relatedLinks = [
  { label: "Tại sao sục khí treo khí nén tiết kiệm điện", href: "/tin-tuc/vi-sao-suc-khi-treo-khi-nen-tiet-kiem-dien" },
  { label: "Nguồn gốc máy sục khí treo khí nén Dolic: hành trình kiểm chứng", href: "/tin-tuc/may-suc-khi-treo-khi-nen-nguon-goc" },
];

export default function AirBearingPrincipleArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Tiết kiệm điện</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Máy sục khí treo khí nén hoạt động như thế nào?
            </h1>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-slate-600">
              Bùi Quý Đôn - Giám đốc Kinh doanh Dolic, Thạc sĩ Thủy sản Học viện Nông nghiệp Việt Nam
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                30/07/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Cog className="h-4 w-4 text-cyan-700" />
                Nguyên lý hoạt động
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
            <h2>1. Máy sục khí treo khí nén là loại máy gì?</h2>
            <p>
              Về bản chất, đây là một máy thổi khí ly tâm tốc độ cao (high-speed centrifugal blower). Máy không tạo bọt khí trực tiếp mà tạo ra một dòng khí nén liên tục, sau đó dẫn khí này qua đường ống xuống hệ thống đĩa phân phối khí đặt dưới đáy ao. Bọt khí mịn được sinh ra ở đĩa, chứ không phải ở máy.
            </p>
            <p>
              Điểm khác biệt lớn nhất so với các loại máy thổi khí thông dụng nằm ở hai chi tiết: cách đỡ trục quay và loại động cơ. Hai chi tiết này quyết định phần lớn hiệu suất và độ bền của máy, nên phần dưới sẽ nói kỹ về chúng.
            </p>
          </div>

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/cau-tao-cat-bo.webp"
            alt="Mô hình cắt bổ thể hiện cấu tạo bên trong một máy sục khí treo khí nén Dolic"
            caption="Cấu tạo bên trong một máy sục khí treo khí nén Dolic"
          />

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/cum-canh-quat-ben-trong.webp"
            alt="Cụm cánh quạt ly tâm và buồng xoắn bên trong máy sục khí treo khí nén"
            caption="Cụm cánh quạt ly tâm và buồng xoắn bên trong máy - nơi khí được tăng tốc và nén"
          />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>2. Chu trình hoạt động: bốn bước</h2>
          </div>

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/so-do-nguyen-ly.webp"
            alt="Sơ đồ cấu tạo và nguyên lý hoạt động của máy sục khí treo khí nén Dolic"
            caption="Sơ đồ cắt dọc: đường đi của không khí (mũi tên xanh) và khí nén thoát ra (mũi tên đỏ)"
          />

          <div className="prose prose-slate mt-6 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h3>Bước 1 - Hút không khí vào</h3>
            <p>
              Không khí từ môi trường được hút qua cửa hút, đi qua bộ lọc để loại bỏ bụi bẩn trước khi vào buồng máy. Bộ lọc này là chi tiết cần bảo dưỡng thường xuyên nhất của cả cụm máy - thay bông lọc đúng định kỳ gần như là toàn bộ công việc bảo trì trong những năm đầu.
            </p>
            <h3>Bước 2 - Cánh quạt quay ở tốc độ rất cao</h3>
            <p>
              Động cơ truyền động trực tiếp đến trục, không qua dây curoa hay hộp số. Trục quay ở tốc độ thông thường 20.000-40.000 vòng/phút, một số dòng công suất lớn đạt 60.000-100.000 vòng/phút.
            </p>
            <p>
              Cánh quạt ly tâm (impeller) hút không khí vào tâm rồi văng mạnh ra mép ngoài nhờ lực ly tâm. Ở bước này khí có tốc độ rất cao nhưng áp suất còn thấp.
            </p>
            <h3>Bước 3 - Chuyển tốc độ thành áp suất</h3>
            <p>
              Sau khi rời cánh quạt, khí đi vào buồng xoắn (volute) - một khoang có tiết diện mở rộng dần. Khi dòng khí chậm lại trong khoang này, động năng của nó được chuyển thành áp suất. Đây chính là bước tạo ra áp lực cần thiết để đẩy khí xuống đáy ao. Áp suất đầu ra thường nằm trong khoảng 10-30 kPa tùy thiết kế.
            </p>
            <h3>Bước 4 - Khí nén đi ra hệ thống</h3>
            <p>
              Khí nén được dẫn qua cửa xả vào đường ống cấp khí, đi tới các đĩa phân phối khí đặt dưới ao hoặc tới hệ thống xử lý nước.
            </p>

            <h2>3. Ổ đỡ khí - bộ phận quyết định</h2>
            <p>
              Đây là chi tiết làm nên tên gọi “treo khí nén”, và cũng là điểm khác biệt lớn nhất của dòng máy này. Ở máy thông thường, trục quay tựa lên vòng bi - có tiếp xúc cơ khí, có ma sát, cần bôi trơn. Ở máy dùng ổ đỡ khí, cơ chế hoàn toàn khác:
            </p>
            <ol>
              {bearingSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {bearingResults.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <section className="my-8 rounded-lg border border-amber-200 bg-amber-50 p-5 md:p-6">
            <p className="text-xs font-bold uppercase text-amber-700">Lưu ý vận hành quan trọng</p>
            <p className="mt-3 text-sm leading-7 text-slate-800">
              Nên hạn chế bật/tắt máy liên tục. Lớp màng khí chỉ hình thành khi trục đạt đủ tốc độ vòng quay, nghĩa là mỗi lần khởi động và mỗi lần dừng đều có một khoảng ngắn trục còn tiếp xúc cơ khí. Bật/tắt càng nhiều lần thì tổng thời gian tiếp xúc này càng lớn, làm tăng tốc độ mài mòn của ổ đỡ theo thời gian.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-800">
              Nếu cần điều chỉnh lượng khí cấp cho ao, nên giảm tốc độ máy qua biến tần thay vì tắt hẳn rồi bật lại.
            </p>
          </section>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>4. Động cơ nam châm vĩnh cửu và biến tần</h2>
            <p>
              Máy sử dụng động cơ nam châm vĩnh cửu (PMSM - Permanent Magnet Synchronous Motor). Cấu tạo gồm phần cuộn dây stato ở ngoài và roto nam châm vĩnh cửu ở giữa.
            </p>
            <p>
              Biến tần cấp cho stato dòng điện xoay chiều có tần số thay đổi được, tạo ra từ trường quay kéo roto quay theo. Nhờ điều khiển được tần số, người vận hành điều chỉnh được tốc độ máy một cách linh hoạt.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {motorAdvantages.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Cần hiểu đúng con số 95-97%: đây là hiệu suất của riêng động cơ, tức tỷ lệ điện năng được chuyển thành cơ năng ở trục. Hiệu suất của cả hệ thống sục khí - tính từ điện vào cho tới oxy thực sự hòa tan trong nước ao - thấp hơn con số này, vì còn tổn thất ở cánh quạt, đường ống và ở khâu hòa tan oxy tại đĩa phân phối khí. Cách đo hiệu suất của cả hệ thống được trình bày trong bài “Vì sao sục khí treo khí nén tiết kiệm điện”.
            </p>

            <h2>5. Làm mát bằng chính luồng khí hút vào</h2>
            <p>
              Máy không dùng quạt làm mát riêng hay hệ thống nước làm mát. Một phần không khí sạch sau khi hút vào được dẫn dọc theo thân động cơ, lấy nhiệt từ stato, roto và ổ đỡ, rồi thoát ra ngoài.
            </p>
            <p>
              Cách làm mát này giúp nhiệt độ động cơ luôn ở mức thấp trong quá trình vận hành. Động cơ mát thì giữ được hiệu suất cao và tuổi thọ dài hơn - vì phần lớn hư hỏng của động cơ điện đều bắt nguồn từ nhiệt.
            </p>
          </div>

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/render-duong-khi-lam-mat.webp"
            alt="Đường khí làm mát động cơ trong máy sục khí treo khí nén Dolic"
            caption="Đường khí làm mát chạy dọc thân motor - lấy nhiệt từ stato, roto và ổ đỡ rồi thoát ra ngoài"
          />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>6. Thông số kỹ thuật quy đổi sang điều kiện ao nuôi</h2>
            <p>Các con số kỹ thuật chỉ có ý nghĩa khi biết chúng tương ứng với điều kiện ao thực tế thế nào:</p>
          </div>

          <InfoTable headers={["Thông số", "Giá trị", "Nghĩa là gì với ao nuôi"]} rows={specRows} />

          <div className="prose prose-slate mt-6 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Lưu ý: các con số trên là dải thông số chung của nhóm máy thổi khí ly tâm tốc độ cao. Thông số cụ thể của từng dòng máy Dolic được ghi trong tài liệu kỹ thuật kèm theo sản phẩm.
            </p>

            <h2>7. Những điều này có ý nghĩa gì với người nuôi</h2>
            <p>
              Tóm lại chu trình: hút khí từ môi trường → động cơ nam châm vĩnh cửu quay cánh quạt ở tốc độ rất cao → cánh quạt tăng tốc dòng khí → buồng xoắn chuyển tốc độ thành áp suất → khí nén ra đường ống cấp cho ao.
            </p>
            <p>
              Ba đặc điểm cấu tạo ở trên - ổ đỡ khí không ma sát, động cơ nam châm vĩnh cửu hiệu suất cao, và làm mát bằng chính luồng khí hút vào - không chỉ là chi tiết kỹ thuật. Chúng là lý do trực tiếp khiến dòng máy này tiêu thụ ít điện hơn cho cùng một lượng oxy cấp vào ao. Cơ chế tiết kiệm điện được phân tích cụ thể trong bài tiếp theo.
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

          <ContactCta title="Chưa rõ máy nào phù hợp với ao của mình?" />

          <RecentArticles currentHref={currentHref} />
        </div>
      </article>
    </PageFrame>
  );
}
