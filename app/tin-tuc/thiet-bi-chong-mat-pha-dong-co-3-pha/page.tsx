import type { Metadata } from "next";
import { CalendarDays, Gauge } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { Checklist, ContactCta, InfoTable, LibraryBackButton, RecentArticles, SummaryBox } from "../bao-duong-article-parts";

const currentHref = "/tin-tuc/thiet-bi-chong-mat-pha-dong-co-3-pha";

export const metadata: Metadata = {
  title: "Vì sao cần thiết bị chống mất pha cho động cơ 3 pha",
  description:
    "Mất pha khiến động cơ vẫn quay nhưng nóng lên rất nhanh và cháy cuộn dây. Thiết bị chống mất pha ngắt điện ngay khi nguồn bất thường.",
};

const summaryPoints = [
  "Khi mất một pha, động cơ ba pha vẫn quay tiếp - đó chính là điều nguy hiểm, vì người vận hành không nhận ra có sự cố.",
  "Hai pha còn lại phải gánh toàn bộ tải, dòng điện tăng vọt và cuộn dây nóng lên rất nhanh.",
  "Rơ le nhiệt phản ứng theo nhiệt độ, tức là sau khi động cơ đã nóng. Thiết bị chống mất pha phản ứng ngay theo nguồn điện, tức là trước khi hư hỏng bắt đầu.",
  "Dolic khuyến nghị lắp thiết bị chống mất pha cho tất cả sản phẩm dùng động cơ ba pha 380V.",
];

const faultRows = [
  { cells: ["Mất pha", "Một trong ba pha bị đứt hoặc mất điện", "Hai pha còn lại gánh toàn bộ tải, dòng tăng mạnh, cuộn dây nóng nhanh"] },
  { cells: ["Lệch pha", "Điện áp giữa ba pha chênh lệch nhau", "Dòng điện giữa các pha mất cân bằng, sinh nhiệt không đều trong cuộn dây"] },
  { cells: ["Sụt áp", "Điện áp xuống thấp hơn mức định mức", "Để giữ cùng công suất, động cơ phải kéo dòng cao hơn, dẫn tới quá nhiệt"] },
  { cells: ["Đảo pha", "Thứ tự pha bị đổi sau khi sửa điện", "Động cơ quay ngược chiều - bơm không lên nước, guồng quạt đảo chiều"] },
];

const protectionRows = [
  { cells: ["Rơ le bảo vệ nhiệt", "Theo nhiệt độ của động cơ. Chỉ ngắt sau khi động cơ đã nóng lên tới ngưỡng - nghĩa là hư hỏng đã bắt đầu tích lũy"] },
  { cells: ["Thiết bị chống mất pha", "Theo tình trạng nguồn điện. Ngắt ngay khi phát hiện mất pha, lệch pha hoặc sụt áp - trước khi động cơ kịp nóng"] },
];

const functions = [
  "Mất một hoặc nhiều pha.",
  "Điện áp giữa các pha lệch nhau vượt ngưỡng cho phép.",
  "Điện áp thấp hơn hoặc cao hơn dải làm việc an toàn.",
  "Thứ tự pha bị đảo - bảo vệ động cơ khỏi quay ngược chiều.",
];

const installNotes = [
  "Kiểm tra thiết bị tác động đúng bằng cách thử theo hướng dẫn của nhà sản xuất.",
  "Cài đặt ngưỡng phù hợp với điều kiện điện áp thực tế của vùng.",
  "Kiểm tra lại sau mỗi lần thợ điện can thiệp vào tủ điện hoặc đường dây.",
  "Kiểm tra định kỳ cùng lịch bảo dưỡng chung của trang trại.",
];

const warningSigns = [
  "Mô-tơ kêu ù nhưng không khởi động được.",
  "Máy chạy yếu hơn bình thường, không đủ lực.",
  "Mô-tơ nóng bất thường dù nguồn nước làm mát vẫn đủ.",
  "Rơ le nhiệt ngắt lặp lại nhiều lần trong ngày.",
  "Nhiều thiết bị trong trang trại cùng yếu vào một khung giờ nhất định.",
  "Máy bơm quay nhưng không lên nước sau khi thợ điện vừa sửa tủ.",
];

export default function PhaseLossArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Bảo hành / Bảo dưỡng</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">Vì sao phải dùng thiết bị chống mất pha cho động cơ ba pha</h1>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-600">Đội ngũ kỹ thuật Dolic</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                30/07/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Gauge className="h-4 w-4 text-cyan-700" />
                Động cơ ba pha 380V
              </span>
            </div>
          </div>

          <SummaryBox points={summaryPoints} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>1. Vấn đề nằm ở chỗ động cơ vẫn quay</h2>
            <p>Động cơ ba pha 380V được dùng rộng rãi trong máy tạo oxy, máy bơm và nhiều thiết bị công nghiệp khác tại trang trại. Khi nguồn điện gặp sự cố như mất pha, lệch pha hoặc sụt áp, động cơ vẫn có thể quay tiếp.</p>
            <p>Vì nó vẫn quay, mọi thứ nhìn bên ngoài như bình thường - trong khi bên trong, cuộn dây đang bị nung nóng từng phút. Sự cố chỉ lộ ra khi mô-tơ đã cháy.</p>
            <h2>2. Bốn dạng sự cố nguồn điện thường gặp</h2>
          </div>

          <InfoTable headers={["Dạng sự cố", "Nghĩa là gì", "Ảnh hưởng tới động cơ"]} rows={faultRows} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>3. Chuyện gì xảy ra bên trong động cơ khi mất pha</h2>
            <p>Động cơ ba pha được thiết kế để ba cuộn dây cùng chia nhau tải. Khi một pha mất, phần tải đó không biến mất mà dồn sang hai cuộn còn lại.</p>
            <p>Nhiệt sinh ra trong cuộn dây tăng theo bình phương của dòng điện, nên chỉ cần dòng tăng vừa phải là nhiệt độ đã tăng rất mạnh. Lớp cách điện xuống cấp và không hồi phục được.</p>
            <p>Một chi tiết cần biết: động cơ ba pha đang chạy mà mất một pha thì vẫn quay tiếp, nhưng nếu đã dừng hẳn rồi thì sẽ không khởi động được - nó chỉ kêu ù và đứng yên.</p>
            <h2>4. Vì sao rơ le nhiệt thôi là chưa đủ</h2>
          </div>

          <InfoTable headers={["Loại bảo vệ", "Phản ứng theo cái gì"]} rows={protectionRows} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Rơ le nhiệt xử lý hậu quả, thiết bị chống mất pha xử lý nguyên nhân. Hai thứ bổ sung cho nhau chứ không thay thế nhau.</p>
            <h2>5. Thiết bị chống mất pha làm gì</h2>
            <p>Thiết bị chống mất pha có chức năng giám sát liên tục nguồn điện, tự động ngắt khi phát hiện bất thường, giúp hạn chế hư hỏng động cơ và giảm chi phí sửa chữa.</p>
          </div>

          <Checklist items={functions} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>6. Nên lắp cho thiết bị nào</h2>
            <p>Công ty TNHH Thủy sản Dolic khuyến nghị lắp thiết bị chống mất pha cho tất cả sản phẩm dùng động cơ ba pha 380V để tăng an toàn, nhất là máy tạo oxy, máy sục khí, máy bơm cấp thoát nước và thiết bị chạy liên tục nhiều giờ mỗi ngày.</p>
            <h2>7. Lắp đặt và kiểm tra</h2>
            <p>Thiết bị chống mất pha được lắp trong tủ điện, đấu vào mạch điều khiển của khởi động từ. Việc thi công cần do thợ điện có chuyên môn thực hiện.</p>
          </div>

          <Checklist items={installNotes} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Nếu thiết bị chống mất pha liên tục ngắt, đó là dấu hiệu nguồn điện đang có vấn đề thật, không phải thiết bị bị lỗi. Không nên tháo bỏ hoặc vô hiệu hóa nó để cho máy chạy tiếp.</p>
            <h2>8. Dấu hiệu nghi ngờ nguồn điện đang có vấn đề</h2>
          </div>

          <Checklist items={warningSigns} />
          <ContactCta title="Cần tư vấn giải pháp bảo vệ cho thiết bị của bạn?" />
          <RecentArticles currentHref={currentHref} />
        </div>
      </article>
    </PageFrame>
  );
}
