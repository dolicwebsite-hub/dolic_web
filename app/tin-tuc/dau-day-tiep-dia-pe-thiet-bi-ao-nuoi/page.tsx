import type { Metadata } from "next";
import { CalendarDays, ShieldCheck } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { Checklist, ContactCta, InfoTable, LibraryBackButton, RecentArticles, SummaryBox } from "../bao-duong-article-parts";

const currentHref = "/tin-tuc/dau-day-tiep-dia-pe-thiet-bi-ao-nuoi";

export const metadata: Metadata = {
  title: "Đấu dây tiếp địa PE đúng cách cho thiết bị ao nuôi",
  description:
    "Dây tiếp địa PE phải đấu vào cọc tiếp địa riêng, không đấu vào dây trung tính. Hướng dẫn đấu nối an toàn cho máy bơm và thiết bị tạo oxy tại ao.",
};

const summaryPoints = [
  "Dây tiếp địa là dây màu xanh lá sọc vàng. Nó không tham gia vào việc chạy máy, chỉ tồn tại để bảo vệ tính mạng người dùng khi máy bị rò điện.",
  "Dây này phải đấu vào một cọc tiếp địa riêng cắm xuống đất, tuyệt đối không đấu vào dây trung tính của điện lực.",
  "Ao nuôi là môi trường nguy hiểm đặc biệt: người đứng chân trần trên đất ẩm, thiết bị ngâm gần nước, điện áp thấp cũng đủ gây tai nạn chết người.",
  "Chỉ tiếp địa thôi là chưa đủ. Cần lắp thêm aptomat chống giật để bảo vệ con người.",
];

const wireRows = [
  { cells: ["Dây pha (L) - dây nóng", "Mang điện tới thiết bị"] },
  { cells: ["Dây trung tính (N) - dây mát", "Dẫn dòng điện làm việc quay về nguồn"] },
  { cells: ["Dây tiếp địa (PE) - xanh lá sọc vàng", "Không mang dòng khi máy chạy bình thường. Chỉ dẫn dòng rò xuống đất khi thiết bị gặp sự cố"] },
];

const protectionRows = [
  { cells: ["Hệ thống tiếp địa", "Tạo đường cho dòng rò đi xuống đất, giữ vỏ thiết bị không mang điện áp nguy hiểm"] },
  { cells: ["Aptomat chống giật (RCD/ELCB)", "Phát hiện dòng điện rò và ngắt điện trong tích tắc, trước khi dòng điện đủ gây nguy hiểm cho người"] },
];

const safetyChecklist = [
  "Dây tiếp địa màu xanh lá sọc vàng đã được đấu vào cọc tiếp địa riêng, không đấu vào dây trung tính.",
  "Vỏ kim loại của tất cả thiết bị, khung giá và tủ điện trong khu vực đã nối chung về hệ thống tiếp địa.",
  "Đầu cốt tiếp địa siết chặt, không han gỉ, không lỏng - kiểm tra lại sau mỗi mùa mưa.",
  "Aptomat chống giật đã lắp cho các đường cấp thiết bị ngoài trời.",
  "Nút test của aptomat chống giật đã được bấm thử và ngắt đúng.",
  "Tủ điện có nắp che, kín nước, đặt cao ráo, không bị nước tạt hoặc ngập.",
  "Dây dẫn không bị nứt vỏ, không bị chuột cắn, không ngâm trong nước.",
  "Các mối nối được bọc kín, không dùng băng keo tạm ở nơi ẩm ướt.",
  "Đã ngắt điện hoàn toàn trước khi vệ sinh hoặc bảo dưỡng thiết bị dưới nước.",
];

export default function GroundingArticlePage() {
  return (
    <PageFrame>
      <article className="bg-white px-4 pb-16 pt-40 text-slate-800 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <LibraryBackButton />
            <p className="text-xs font-bold uppercase text-cyan-700">Bảo hành / Bảo dưỡng</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-5xl">Đấu dây tiếp địa PE đúng cách cho thiết bị ao nuôi</h1>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-600">Đội ngũ kỹ thuật Dolic</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-700" />
                30/07/2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-cyan-700" />
                An toàn điện ao nuôi
              </span>
            </div>
          </div>

          <SummaryBox points={summaryPoints} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Bài viết này cung cấp kiến thức chung để người nuôi hiểu nguyên tắc an toàn. Việc thi công hệ thống điện và tiếp địa phải do thợ điện hoặc kỹ sư điện có chuyên môn thực hiện.</p>
            <h2>1. Vì sao tiếp địa quan trọng đặc biệt ở trang trại nuôi trồng</h2>
            <p>Trong nhà khô ráo, một sự cố rò điện nhẹ có thể chỉ gây tê tay. Ở ao nuôi thì khác hẳn vì người vận hành thường đứng trên nền đất ẩm, thiết bị đặt sát mặt nước và máy chạy liên tục trong môi trường ẩm mặn.</p>
            <p>Trong điều kiện đó, một dòng điện rò rất nhỏ cũng có thể gây tai nạn nghiêm trọng. Tiếp địa ở trang trại không phải là việc làm cho có, mà là điều kiện bắt buộc để vận hành an toàn.</p>
            <h2>2. Dây tiếp địa PE là dây nào</h2>
          </div>

          <InfoTable headers={["Dây", "Nhiệm vụ"]} rows={wireRows} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <p>Dây PE không tham gia vào việc làm cho máy chạy. Máy không có dây tiếp địa vẫn chạy bình thường - và đó chính là điều nguy hiểm, vì người dùng không nhận ra mình đang thiếu lớp bảo vệ.</p>
            <h2>3. Đấu dây tiếp địa vào đâu</h2>
            <p>Dây tiếp địa PE phải được đấu vào một cọc tiếp địa riêng, cắm sâu xuống đất tại khu vực lắp thiết bị. Cọc tiếp địa tạo đường dẫn cho dòng điện rò đi xuống đất thay vì đi qua người.</p>
            <p>Tất cả phần vỏ kim loại của thiết bị, khung giá đỡ và tủ điện trong cùng khu vực nên được nối chung về hệ thống tiếp địa, để không tồn tại chênh lệch điện áp giữa hai vật kim loại mà người vận hành có thể chạm vào cùng lúc.</p>
            <h2>4. Vì sao tuyệt đối không đấu dây tiếp địa vào dây trung tính</h2>
            <p>Dây trung tính có mang dòng điện làm việc, còn dây tiếp địa thì không. Khi đấu chung, chỉ cần dây trung tính bị đứt hoặc tiếp xúc kém, toàn bộ vỏ kim loại của thiết bị sẽ mang điện áp nguy hiểm trong khi máy nhìn bên ngoài vẫn bình thường.</p>
            <p>Nếu trang trại chưa có cọc tiếp địa thì phải làm cọc tiếp địa, không phải đấu tạm vào dây trung tính.</p>
            <h2>5. Tiếp địa thôi chưa đủ, cần thêm aptomat chống giật</h2>
          </div>

          <InfoTable headers={["Lớp bảo vệ", "Làm gì"]} rows={protectionRows} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>6. Danh mục kiểm tra an toàn điện tại ao</h2>
          </div>

          <Checklist items={safetyChecklist} />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-li:leading-8">
            <h2>7. Khi nào phải gọi thợ điện</h2>
            <p>Dừng lại và gọi người có chuyên môn nếu trang trại chưa có hệ thống tiếp địa, chạm vào vỏ máy thấy tê tay, aptomat nhảy liên tục, nút test không ngắt, hoặc thiết bị vừa bị ngập nước hay trải qua mưa bão.</p>
            <p>Cảm giác tê tay khi chạm vỏ máy không bao giờ là chuyện nhỏ. Đó là dấu hiệu đang có dòng rò, và lần sau có thể không chỉ dừng ở tê tay.</p>
          </div>

          <ContactCta title="Cần tư vấn kỹ thuật khi lắp đặt?" />
          <RecentArticles currentHref={currentHref} />
        </div>
      </article>
    </PageFrame>
  );
}
