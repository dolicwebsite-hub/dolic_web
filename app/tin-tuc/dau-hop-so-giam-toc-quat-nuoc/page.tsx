import type { Metadata } from "next";
import { CalendarDays, Wrench } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { Checklist, ContactCta, InfoTable, LibraryBackButton, RecentArticles, SummaryBox } from "../bao-duong-article-parts";

const currentHref = "/tin-tuc/dau-hop-so-giam-toc-quat-nuoc";

export const metadata: Metadata = {
  title: "Đừng đổ dầu xe máy vào hộp số giảm tốc quạt nước",
  description:
    "Dầu xe máy và dầu hộp số giảm tốc khác nhau hoàn toàn. Dùng sai loại làm mòn bánh răng và hỏng hộp số sớm - đây là cách chọn và thay dầu đúng.",
};

const summaryPoints = [
  "Dầu xe máy và dầu hộp số giảm tốc là hai loại hoàn toàn khác nhau, không thay thế cho nhau được.",
  "Dầu xe máy phải làm ba việc cùng lúc nên xuống cấp nhanh. Dầu hộp số chuyên dụng chỉ lo bảo vệ bánh răng, dùng được lâu hơn nhiều.",
  "Đổ nhầm thì hộp số vẫn chạy, nhưng bánh răng mòn dần, kêu to lên và hỏng sớm.",
  "Cách đúng: dùng loại dầu ghi trên nhãn hộp số hoặc loại Dolic cấp kèm máy. Đừng chọn theo cảm tính.",
];

const damageRows = [
  { cells: ["Vài tuần đầu", "Không có dấu hiệu gì", "Màng dầu mỏng hơn mức cần, bề mặt răng bắt đầu xước vi mô"] },
  { cells: ["Sau vài tháng", "Hộp số kêu to dần, vỏ nóng hơn bình thường", "Bề mặt răng mòn, khe hở ăn khớp tăng, ma sát sinh nhiệt nhiều hơn"] },
  { cells: ["Muộn hơn", "Rung, rò dầu ở phớt, có mạt kim loại trong dầu", "Răng mòn nặng, ổ bi chịu tải lệch, phớt hỏng do nhiệt"] },
  { cells: ["Cuối cùng", "Kẹt hoặc gãy răng, phải thay cả hộp số", "Chi phí lớn hơn nhiều lần so với tiền mua đúng loại dầu"] },
];

const checkItems = [
  "Đã đổ đúng loại dầu, đúng mức quy định, kiểm tra trước lần chạy đầu tiên.",
  "Nút xả dầu và nút thông hơi đã siết đúng, không có dấu hiệu rò.",
  "Trục và khớp nối thẳng hàng, không lệch tâm.",
  "Bu-lông chân đế và giá đỡ đã siết chặt.",
  "Guồng quạt quay tự do bằng tay, không kẹt, không cọ vào khung.",
  "Không có vật lạ vướng trong guồng hoặc quanh trục.",
  "Nguồn điện đúng điện áp, dây tiếp địa đã đấu.",
  "Chạy thử không tải một khoảng ngắn, nghe tiếng và kiểm tra độ rung trước khi cho chạy tải.",
];

export default function GearOilArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Bảo hành / Bảo dưỡng</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">Đừng đổ nhầm dầu xe máy vào hộp số giảm tốc quạt nước</h1>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-600">Đội ngũ kỹ thuật Dolic</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                30/07/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Wrench className="h-4 w-4 text-cyan-700" />
                Hộp số giảm tốc quạt nước
              </span>
            </div>
          </div>

          <SummaryBox points={summaryPoints} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>1. Một sai lầm rất dễ gặp ngoài ao</h2>
            <p>Nhiều người nghĩ dầu nào cũng là dầu bôi trơn nên dùng thay cho nhau được. Ngoài thực địa lại càng dễ xảy ra: hộp số cạn dầu, quanh đó chỉ có can dầu xe máy, thế là đổ tạm cho máy chạy.</p>
            <p>Nhưng hai loại dầu này được thiết kế cho hai nhiệm vụ khác hẳn nhau. Hậu quả của việc dùng sai không hiện ra ngay, mà xuất hiện sau vài tháng, khi hộp số bắt đầu kêu và bánh răng đã mòn.</p>

            <h2>2. Vì sao dầu xe máy không dùng được cho hộp số giảm tốc</h2>
            <p>Dầu động cơ xe máy 4 thì phải làm ba việc cùng lúc: bôi trơn động cơ, bôi trơn hộp số và giữ cho bộ ly hợp ướt bám đúng mức. Vì phải cân bằng cả ba, nó không thể tối ưu riêng cho việc bảo vệ bánh răng.</p>
            <p>Dầu hộp số giảm tốc chuyên dụng chỉ có một nhiệm vụ duy nhất: bảo vệ bánh răng khi ăn khớp dưới tải trọng lớn trong thời gian dài. Dầu hộp số có độ nhớt cao hơn và chứa phụ gia chịu cực áp để bảo vệ bề mặt răng.</p>

            <h2>3. Đổ nhầm thì chuyện gì xảy ra</h2>
            <p>Điều khiến sai lầm này nguy hiểm là hộp số vẫn chạy bình thường ngay sau khi đổ. Hư hỏng tích lũy dần và thường chỉ được phát hiện khi đã muộn.</p>
          </div>

          <InfoTable headers={["Giai đoạn", "Dấu hiệu bên ngoài", "Đang xảy ra gì bên trong"]} rows={damageRows} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Ngoài chi phí sửa chữa, hộp số mòn còn làm tăng tiền điện: bánh răng mòn và ma sát cao khiến mô-tơ phải kéo nặng hơn để quay cùng một guồng quạt.</p>
            <h2>4. Vậy dùng dầu gì cho đúng</h2>
            <p>Nguyên tắc số một: dùng đúng loại dầu ghi trên nhãn hộp số hoặc trong tài liệu kỹ thuật kèm máy. Nếu nhãn đã mờ hoặc mất, hỏi lại nhà cung cấp trước khi đổ bất cứ thứ gì vào.</p>
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Dolic trang bị sẵn dầu hộp số chuyên dụng và tặng kèm theo sản phẩm, để khách hàng dùng đúng loại ngay từ đầu mà không phải tự đi tìm.</p>
            <p>Ba thứ tuyệt đối không đổ vào hộp số giảm tốc: dầu động cơ xe máy hoặc ô tô; dầu thủy lực, dầu máy nén khí hoặc dầu không rõ nguồn gốc; dầu cũ đã qua sử dụng.</p>
            <h2>5. Kiểm tra và thay dầu thế nào</h2>
            <p>Kiểm tra mức dầu qua mắt thăm hoặc que thăm, quan sát màu và trạng thái dầu, nghe tiếng hộp số khi vận hành và kiểm tra rò rỉ quanh phớt, mặt bích.</p>
            <p>Trong môi trường nuôi trồng thủy sản, hộp số làm việc trong điều kiện ẩm và có hơi nước mặn, nên cần kiểm tra thường xuyên hơn so với hộp số dùng trong nhà xưởng khô ráo. Có thể dùng 3-5 năm nếu vận hành và bảo dưỡng đúng khuyến cáo.</p>
            <h2>6. Danh mục kiểm tra trước khi vận hành</h2>
          </div>

          <Checklist items={checkItems} />
          <ContactCta title="Cần tư vấn kỹ thuật hoặc bảo dưỡng?" />
          <RecentArticles currentHref={currentHref} />
        </div>
      </article>
    </PageFrame>
  );
}
