import type { Metadata } from "next";
import { CalendarDays, CheckCircle2, Gauge, Zap } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import {
  ArticleFigure,
  ContactCta,
  InfoTable,
  LibraryBackButton,
  RecentArticles,
} from "../bao-duong-article-parts";

export const metadata: Metadata = {
  title: "Vì sao sục khí treo khí nén tiết kiệm điện?",
  description:
    "Năm cơ chế kỹ thuật giúp máy sục khí treo khí nén giảm điện năng, và cách đo hiệu quả bằng chỉ số kgO2/kWh thay vì chỉ nhìn công suất máy.",
};

const currentHref = "/tin-tuc/vi-sao-suc-khi-treo-khi-nen-tiet-kiem-dien";

const summaryPoints = [
  "Tiền điện của ao không phụ thuộc vào máy mấy kW, mà vào việc mỗi kWh điện đưa được bao nhiêu oxy vào nước.",
  "Chỉ số để so là kgO₂/kWh. Máy công suất nhỏ hơn nhưng chỉ số này cao hơn thì rẻ hơn khi vận hành.",
  "Máy sục khí treo khí nén cải thiện chỉ số đó theo hai đường: giảm tổn thất trong máy, và tăng lượng oxy hòa tan được từ mỗi mét khối khí.",
  "Phần lớn mức tiết kiệm không đến từ động cơ, mà đến từ bọt khí mịn ở đĩa phân phối khí.",
];

const bubbleBenefits = [
  "Tổng diện tích tiếp xúc giữa khí và nước càng lớn - cùng một thể tích khí, chia thành bọt nhỏ sẽ có bề mặt trao đổi lớn hơn nhiều lần.",
  "Bọt nổi lên càng chậm - thời gian nằm trong nước lâu hơn, oxy có thêm thời gian để hòa tan.",
  "Tỷ lệ oxy thực sự tan vào nước càng cao trên mỗi mét khối khí.",
];

const lossFactors = [
  {
    title: "Động cơ hiệu suất cao",
    description: "Động cơ nam châm vĩnh cửu (PMSM) có hiệu suất riêng thường đạt 95-97%, nghĩa là phần lớn điện năng được chuyển thành cơ năng ở trục thay vì thất thoát thành nhiệt trong cuộn dây.",
  },
  {
    title: "Truyền động trực tiếp, không qua trung gian",
    description: "Động cơ truyền động trực tiếp đến trục cánh quạt, không qua dây curoa hay hộp số. Mỗi khâu truyền động trung gian đều làm mất một phần công suất; bỏ được các khâu này thì giữ lại được phần đó.",
  },
  {
    title: "Ổ đỡ khí gần như không ma sát",
    description: "Khi máy chạy ổn định, trục quay lơ lửng trên một lớp màng khí và không tiếp xúc cơ khí với ổ đỡ. Ma sát gần như bằng không, nên phần điện năng thường bị mất do ma sát và sinh nhiệt được giữ lại để tạo khí.",
  },
  {
    title: "Gia công chính xác, cân bằng động tốt",
    description: "Trục và cánh quạt quay ở hàng chục nghìn vòng mỗi phút, nên độ đồng tâm và cân bằng động ảnh hưởng rất lớn. Máy được gia công chính xác sẽ ít rung, ít ma sát, ít hao phí cơ học.",
  },
];

const summaryRows = [
  { cells: ["Bọt khí mịn", "Tăng diện tích tiếp xúc và thời gian lưu của bọt trong nước", "Tăng lượng oxy hòa tan trên mỗi m³ khí - nhóm tác động lớn nhất"] },
  { cells: ["Tổn thất trong máy", "Động cơ PMSM, truyền động trực tiếp, ổ đỡ khí, gia công chính xác", "Tăng lượng khí tạo ra trên mỗi kWh điện"] },
  { cells: ["Khí động học", "Cánh quạt và đường dẫn khí giảm cản dòng, giảm tổn thất áp", "Giảm công suất cần thiết cho cùng lưu lượng khí"] },
  { cells: ["Chọn đúng điểm làm việc", "Vận hành gần BEP theo độ sâu và lưu lượng thực tế", "Giữ hiệu suất ở mức cao nhất của thiết bị"] },
  { cells: ["Điều khiển theo nhu cầu", "Biến tần giảm tốc, điều chỉnh theo oxy hòa tan đo được", "Giảm số giờ chạy không cần thiết"] },
];

const selfCheckSteps = [
  "Gắn một đồng hồ điện riêng cho cụm sục khí, đọc chỉ số đầu và cuối mỗi ngày trong một tuần.",
  "Ghi lại số giờ chạy và mức oxy hòa tan đo được ở các thời điểm cố định trong ngày.",
  "Chia số kWh cho số giờ chạy để biết mức tiêu thụ thực tế, đối chiếu với công suất ghi trên nhãn máy.",
  "Kiểm tra đĩa phân phối khí: nếu bọt nổi lên thành cụm to thay vì mịn và đều, đĩa có thể đã tắc hoặc lão hóa.",
  "Rà lại đường ống: chỗ rò rỉ khí là chỗ đang đốt tiền điện mà không tạo ra oxy nào cho ao.",
];

const relatedLinks = [
  { label: "Máy sục khí treo khí nén hoạt động như thế nào", href: "/tin-tuc/nguyen-ly-hoat-dong-may-suc-khi-treo-khi-nen" },
  { label: "Nguồn gốc máy sục khí treo khí nén Dolic", href: "/tin-tuc/may-suc-khi-treo-khi-nen-nguon-goc" },
];

export default function AirBearingEnergySavingArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Tiết kiệm điện</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Vì sao máy sục khí treo khí nén tiết kiệm điện?
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
                <Gauge className="h-4 w-4 text-cyan-700" />
                kgO₂/kWh
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
            <h2>1. Trước tiên phải đo đúng thứ cần đo</h2>
            <p>
              Khi chọn thiết bị sục khí, câu hỏi thường gặp nhất là “máy này bao nhiêu kW?”. Nhưng công suất không cho biết máy tốn điện hay tiết kiệm điện - nó chỉ cho biết máy ăn bao nhiêu điện mỗi giờ, chứ không cho biết đổi lại được bao nhiêu oxy.
            </p>
          </div>

          <ArticleFigure
            src="/assets/articles/tiet-kiem-dien/van-hanh-ao-tom.webp"
            alt="Máy sục khí treo khí nén Dolic vận hành tại ao nuôi tôm"
            caption="Máy sục khí treo khí nén Dolic vận hành tại ao nuôi tôm"
          />

          <div className="prose prose-slate mt-6 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Thước đo đúng của ngành là hiệu suất sục khí (SAE): số kg oxy hòa tan được vào nước trên mỗi kWh điện tiêu thụ. Đơn vị: kgO₂/kWh. Chỉ số này càng cao thì cùng một lượng oxy cấp cho ao sẽ càng ít tốn điện.
            </p>
            <p>
              Hệ quả rất thực tế: một máy 7,5 kW có SAE cao hơn có thể tốn ít tiền điện hơn một máy 5,5 kW có SAE thấp, vì nó chạy ít giờ hơn để đạt cùng mức oxy trong ao. Nhìn nhãn công suất trên máy không trả lời được câu hỏi tiền điện.
            </p>
          </div>

          <section className="my-8 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6">
            <p className="text-xs font-bold uppercase text-cyan-700">Đọc số SAE cho đúng</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              SAE được đo trong điều kiện chuẩn: nước sạch, nhiệt độ 20°C, oxy hòa tan ban đầu bằng 0, áp suất 1 atm. Đây là điều kiện phòng thí nghiệm, dùng để các thiết bị có thể so sánh được với nhau trên cùng một mặt bằng.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Trong ao thật, hiệu quả luôn thấp hơn con số chuẩn, vì nước ao có độ mặn, chất hữu cơ, nhiệt độ cao hơn và đã có sẵn một lượng oxy. Vì vậy khi đánh giá thiết bị, cần xem cả hai loại số: SAE trong điều kiện chuẩn để so sánh giữa các máy, và số điện thực đo tại ao để biết hiệu quả thật.
            </p>
          </section>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>2. Bọt khí mịn là nơi tiết kiệm được nhiều điện nhất</h2>
            <p>
              Điểm này thường bị bỏ qua, nhưng lại quyết định phần lớn hiệu quả: điện không chỉ tốn ở máy thổi khí, mà tốn ở chỗ bao nhiêu phần trăm lượng khí bơm xuống thật sự tan được vào nước.
            </p>
            <p>
              Một mét khối khí thổi xuống ao mà nổi lên mặt nước quá nhanh thì phần lớn oxy trong đó thoát ra không khí, coi như đã trả tiền điện cho không. Máy sục khí treo khí nén cấp khí qua hệ thống đĩa phân phối tạo bọt khí mịn. Bọt càng nhỏ thì:
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {bubbleBenefits.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Kết quả: để đạt cùng nồng độ oxy hòa tan trong ao, hệ thống cần chạy ít giờ hơn hoặc chạy ở công suất thấp hơn. Đây là cơ chế tiết kiệm điện lớn nhất của cả giải pháp, và nó nằm ở khâu phân phối khí chứ không nằm trong bản thân cái máy.
            </p>
            <p>
              Vì cơ chế này phụ thuộc vào đĩa phân phối khí, việc chọn đúng loại đĩa, đặt đúng độ sâu và bảo dưỡng đĩa định kỳ ảnh hưởng trực tiếp đến tiền điện. Đĩa bị tắc hoặc lão hóa sẽ tạo bọt to hơn, làm hiệu quả giảm dần mà người nuôi khó nhận ra.
            </p>

            <h2>3. Giảm tổn thất bên trong máy</h2>
            <p>
              Phần điện năng không biến thành khí thì biến thành nhiệt, tiếng ồn và độ rung. Máy sục khí treo khí nén giảm các tổn thất này ở bốn chỗ:
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {lossFactors.map((item) => (
              <section key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              </section>
            ))}
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>4. Khí động học: cánh quạt và đường dẫn khí</h2>
            <p>
              Cánh quạt không chỉ có nhiệm vụ hút khí - nó quyết định trực tiếp hiệu suất của máy. Cánh quạt được thiết kế theo nguyên lý khí động học giúp giảm nhiễu loạn dòng khí và giảm tổn thất áp suất, nhờ đó động cơ không phải tiêu hao nhiều công suất để tạo ra cùng một lưu lượng khí.
            </p>
            <p>
              Tương tự, đường hút và đường xả được thiết kế với bán kính chuyển hướng hợp lý sẽ hạn chế hiện tượng cản dòng và xoáy khí. Dòng khí đi mượt thì lưu lượng tăng, áp suất ổn định hơn và động cơ làm việc nhẹ hơn.
            </p>
            <p>
              Điều này cũng đúng với phần đường ống ngoài máy: ống quá nhỏ, quá nhiều khúc gấp hoặc bị rò rỉ sẽ làm mất áp suất và đẩy điện năng tiêu thụ lên, dù máy vẫn tốt. Thiết kế đường ống là một phần của bài toán tiết kiệm điện, không phải chuyện phụ.
            </p>

            <h2>5. Chạy đúng điểm hiệu suất và đúng nhu cầu thực tế</h2>
            <p>
              Mỗi máy thổi khí đều có một điểm hiệu suất tối ưu (BEP - Best Efficiency Point), tức là vùng áp suất và lưu lượng mà tại đó máy chuyển điện thành khí hiệu quả nhất. Chạy lệch khỏi vùng này thì hiệu suất giảm, dù máy vẫn hoạt động bình thường.
            </p>
            <p>
              Vì vậy việc chọn máy phải căn cứ vào độ sâu ao và lưu lượng khí thực tế cần cấp, chứ không phải chọn theo công suất lớn cho “chắc ăn”. Máy quá lớn so với nhu cầu sẽ chạy lệch điểm tối ưu và tốn điện hơn mức cần thiết.
            </p>
            <p>
              Nhân tố còn lại là thời gian chạy. Một hệ thống hiệu suất cao vẫn tốn điện vô ích nếu chạy hết công suất suốt ngày trong khi ao chỉ cần nhiều oxy vào một số thời điểm. Nhờ có biến tần, máy có thể giảm tốc thay vì bật/tắt liên tục - vừa tiết kiệm điện, vừa tránh làm mài mòn ổ đỡ.
            </p>
            <p>
              Khi kết hợp với thiết bị giám sát oxy hòa tan, người nuôi điều chỉnh lượng khí theo số đo thực tế của ao thay vì theo cảm nhận hoặc theo lịch cố định. Đây là phần tiết kiệm mà nhiều trang trại bỏ sót, vì nó không nằm ở thiết bị mà nằm ở cách vận hành.
            </p>

            <h2>6. Cộng lại thành gì</h2>
            <p>Máy sục khí treo khí nén tiết kiệm điện nhờ năm nhóm yếu tố cộng dồn:</p>
          </div>

          <InfoTable headers={["Nhóm yếu tố", "Cơ chế", "Tác động tới kgO₂/kWh"]} rows={summaryRows} />

          <div className="prose prose-slate mt-6 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>
              Số liệu tiết kiệm điện mà Dolic đo được tại các trang trại ở Việt Nam trong khoảng 25,6% đến 48,75% tùy mô hình và điều kiện vận hành được trình bày chi tiết trong bài “Minh chứng thực tế về tiết kiệm điện”, kèm phương pháp đo cụ thể.
            </p>

            <h2>7. Cách người nuôi tự kiểm tra tại ao của mình</h2>
            <p>Không cần thiết bị phòng thí nghiệm để biết hệ thống của mình đang tốn điện thế nào:</p>
            <ol>
              {selfCheckSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              Bốn bước đầu cũng chính là cách Dolic thu số liệu tại các trang trại kiểm chứng. Cách làm được mô tả trong bài “Minh chứng thực tế” để người nuôi có thể tự đối chiếu.
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

          <ContactCta title="Muốn biết ao của mình đang tốn điện ở đâu?" />

          <RecentArticles currentHref={currentHref} />
        </div>
      </article>
    </PageFrame>
  );
}
