import type { Metadata } from "next";
import { CalendarDays, Thermometer } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { Checklist, ContactCta, InfoTable, LibraryBackButton, RecentArticles, SummaryBox } from "../bao-duong-article-parts";

const currentHref = "/tin-tuc/mo-to-qua-nhiet-tu-ngat-nguyen-nhan-cach-xu-ly";

export const metadata: Metadata = {
  title: "Mô-tơ ngừng do quá nhiệt: nguyên nhân và cách xử lý",
  description:
    "Máy tạo oxy hoặc máy bơm tự ngắt giữa vụ? Đây là bảy nguyên nhân thường gặp và quy trình tám bước xử lý an toàn trước khi cho máy chạy lại.",
};

const summaryPoints = [
  "Tất cả mô-tơ, máy bơm, máy tạo oxy và quạt của Dolic đều có rơ le bảo vệ nhiệt. Khi mô-tơ quá nóng, rơ le tự ngắt điện để bảo vệ động cơ.",
  "Thiết bị làm mát bằng nước. Tuyệt đối không để máy chạy khô khi không có nước làm mát.",
  "Rơ le tự đóng lại sau khoảng 30 phút đến 2 tiếng - nghĩa là máy có thể tự chạy lại. Phải ngắt điện tại tủ trước khi kiểm tra.",
  "Rơ le ngắt là dấu hiệu có sự cố, không phải chế độ vận hành bình thường. Ngắt nhiều lần thì cả mô-tơ lẫn rơ le đều giảm tuổi thọ.",
];

const causeRows = [
  { cells: ["Thiếu nước làm mát", "Mực nước tụt, máy hở khỏi mặt nước", "Nhìn mực nước và vị trí lắp máy"] },
  { cells: ["Cửa hút hoặc lọc bị tắc", "Lưu lượng yếu hơn bình thường", "Kiểm tra rác, tảo, vỏ tôm, lưới bám ở cửa hút"] },
  { cells: ["Guồng hoặc cánh bị vướng", "Máy kêu khác, quay nặng", "Ngắt điện, quay bằng tay xem có kẹt không"] },
  { cells: ["Bám bẩn, hà bám trên guồng", "Máy nặng dần theo thời gian, tốn điện hơn", "Kiểm tra bề mặt guồng và cánh quạt"] },
  { cells: ["Điện áp thấp hoặc dao động", "Nhiều thiết bị cùng yếu, đèn nhấp nháy", "Đo điện áp tại tủ điện lúc máy đang chạy"] },
  { cells: ["Mất một pha (máy 3 pha)", "Máy kêu ù, không đủ lực, nóng nhanh", "Đo đủ ba pha tại tủ điện"] },
  { cells: ["Ổ bi hoặc bạc mòn", "Tiếng kêu lạ, rung, nóng cục bộ", "Nghe tiếng và sờ vỏ máy sau khi ngắt điện"] },
];

const processItems = [
  "Ngắt điện tại tủ điện. Không chờ rơ le tự đóng lại, vì máy có thể khởi động khi đang có người thao tác.",
  "Kiểm tra nguồn nước làm mát. Mực nước có đủ không, máy có bị hở khỏi mặt nước không.",
  "Kiểm tra cửa hút và lọc. Rác, tảo, lưới hoặc vỏ tôm bám vào là nguyên nhân rất phổ biến.",
  "Quay guồng hoặc cánh bằng tay. Phải quay được nhẹ nhàng và tự do.",
  "Đo điện áp tại tủ điện. Với máy ba pha, kiểm tra đủ cả ba pha và xem có bị lệch nhiều không.",
  "Để máy nguội hoàn toàn. Không cấp điện lại khi vỏ máy còn nóng.",
  "Cho chạy lại và theo dõi sát. Nếu máy ngắt lại lần nữa, dừng hẳn và liên hệ kỹ thuật.",
  "Ghi lại sự việc: thời điểm ngắt, thời tiết, mực nước, hiện tượng kèm theo.",
];

const callTechItems = [
  "Máy ngắt vì quá nhiệt nhiều lần trong cùng một ngày.",
  "Có mùi khét từ mô-tơ hoặc tủ điện.",
  "Vỏ máy nóng bất thường dù nguồn nước làm mát vẫn đủ.",
  "Máy kêu ù, rung mạnh, hoặc không đủ lực như trước.",
  "Đã kiểm tra hết các bước xử lý mà vẫn không tìm ra nguyên nhân.",
  "Thiết bị vừa bị ngập nước hoặc vừa trải qua mưa bão.",
];

export default function MotorOverheatArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Bảo hành / Bảo dưỡng</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">Mô-tơ ngừng do quá nhiệt: nguyên nhân và cách xử lý</h1>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-600">Đội ngũ kỹ thuật Dolic</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                30/07/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Thermometer className="h-4 w-4 text-cyan-700" />
                Rơ le bảo vệ nhiệt
              </span>
            </div>
          </div>

          <SummaryBox points={summaryPoints} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>1. Rơ le bảo vệ nhiệt là gì và nó làm gì</h2>
            <p>Tất cả mô-tơ, máy bơm, máy tạo oxy và quạt của Công ty TNHH Thủy sản Dolic đều được trang bị rơ le bảo vệ nhiệt. Bộ phận này theo dõi nhiệt độ động cơ và cắt điện khi nhiệt độ vượt ngưỡng an toàn.</p>
            <p>Khi máy đột ngột ngừng chạy giữa vụ, việc cần làm trước tiên là tìm ra vì sao máy nóng, vì rơ le đã ngắt nghĩa là đang có thứ gì đó không ổn.</p>
            <h2>2. Vì sao thiết bị ao nuôi dễ quá nhiệt</h2>
            <p>Thiết bị Dolic làm mát bằng nước. Nước là thứ mang nhiệt ra khỏi động cơ. Khi không có nước, động cơ nóng lên rất nhanh, nhanh hơn nhiều so với người vận hành tưởng.</p>
            <blockquote>Tuyệt đối không để máy chạy khô khi không có nước làm mát.</blockquote>
            <h2>3. Rơ le hoạt động thế nào</h2>
            <p>Khi mô-tơ quá nóng, rơ le nhiệt sẽ tự ngắt điện để bảo vệ động cơ. Sau khi động cơ nguội xuống dưới ngưỡng an toàn, rơ le tự đóng lại và máy có thể chạy tiếp.</p>
            <p>Thời gian tự đóng lại của rơ le có thể từ 30 phút đến 2 tiếng, tùy từng thiết bị. Trước khi kiểm tra hoặc sửa chữa, phải ngắt hẳn nguồn điện tại tủ điện.</p>
            <h2>4. Rơ le nhiệt không phải chế độ vận hành bình thường</h2>
            <p>Rơ le nhiệt chỉ là bảo vệ khi có sự cố, không phải chế độ vận hành bình thường. Nếu để mô-tơ quá nóng và rơ le phải ngắt nhiều lần, tuổi thọ mô-tơ và rơ le đều có thể bị giảm.</p>
            <h2>5. Bảy nguyên nhân thường gặp khiến mô-tơ quá nhiệt</h2>
          </div>

          <InfoTable headers={["Nguyên nhân", "Dấu hiệu nhận biết", "Cách kiểm tra nhanh"]} rows={causeRows} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Trong đó, mất pha là nguyên nhân nguy hiểm nhất với động cơ ba pha. Khi mất một pha, hai pha còn lại phải gánh toàn bộ tải, dòng điện tăng vọt và động cơ nóng lên rất nhanh.</p>
            <h2>6. Khi máy ngưng do quá nhiệt làm gì?</h2>
          </div>

          <Checklist items={processItems} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Cố cấp điện liên tục cho một mô-tơ đang quá nhiệt là cách nhanh nhất để biến một sự cố nhỏ thành hỏng hẳn cuộn dây.</p>
            <h2>7. Dấu hiệu cần gọi kỹ thuật ngay</h2>
          </div>

          <Checklist items={callTechItems} />
          <ContactCta title="Máy ngừng giữa vụ mà chưa rõ nguyên nhân?" />
          <RecentArticles currentHref={currentHref} />
        </div>
      </article>
    </PageFrame>
  );
}
