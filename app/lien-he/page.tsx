import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";

const formFields = [
  "Họ tên",
  "Số điện thoại/Zalo",
  "Tỉnh/Thành",
  "Loài đang nuôi hoặc mô hình kinh doanh",
];

const interestOptions = [
  "Máy sục khí / quạt nước",
  "Máy sục khí bản treo khí nén",
  "Bơm nước lưu lượng lớn",
  "Thiết bị đo nước",
  "Máy cho ăn tự động",
  "Tư vấn đại lý / B2B",
];

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="bg-slate-950 px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Liên hệ Dolic</p>
            <h1 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Gửi thông tin để nhận tư vấn cấu hình phù hợp</h1>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Đừng để chi phí vận hành ăn mòn lợi nhuận của trang trại. Gửi thông tin ao nuôi, thiết bị đang dùng và nhóm sản phẩm quan tâm, đội ngũ Dolic sẽ liên hệ để tính toán cấu hình phù hợp.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["20-50%", "mục tiêu tiết kiệm điện"],
                ["24h", "phản hồi tư vấn"],
                ["12 tháng", "bảo hành hiện hành"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/8 p-4">
                  <p className="text-2xl font-black text-cyan-200">{value}</p>
                  <p className="mt-1 text-xs font-bold text-slate-300">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p className="flex gap-3"><Phone className="h-5 w-5 text-cyan-300" /> 0397 581 028 - 0352 495 893</p>
              <p className="flex gap-3"><MessageCircle className="h-5 w-5 text-cyan-300" /> congtytnhhthuysandolic@gmail.com</p>
              <p className="flex gap-3"><MapPin className="h-5 w-5 text-cyan-300" /> Thôn Dĩnh Bạn, xã Bảo Đài, tỉnh Bắc Ninh, Việt Nam</p>
            </div>
          </div>
          <form className="rounded-lg border border-white/10 bg-white p-5 text-slate-950 shadow-lg">
            <div className="grid gap-4 md:grid-cols-2">
              {formFields.map((field) => (
                <label key={field} className="text-sm font-bold">
                  {field}
                  <input className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-cyan-500" placeholder={field} />
                </label>
              ))}
            </div>
            <label className="mt-4 block text-sm font-bold">
              Nhu cầu cần tư vấn
              <textarea className="mt-2 min-h-32 w-full rounded-md border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-cyan-500" placeholder="Ví dụ: ao tôm 5ha cần combo oxy và đo nước, hoặc muốn tìm hiểu chính sách đại lý tại Cà Mau." />
            </label>
            <fieldset className="mt-4">
              <legend className="text-sm font-bold">Nhóm sản phẩm quan tâm</legend>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {interestOptions.map((option) => (
                  <label key={option} className="flex min-h-10 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700">
                    <input type="checkbox" className="h-4 w-4 accent-cyan-500" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            <button type="button" className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-400">
              Gửi yêu cầu tư vấn
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Form hiện là giao diện Phase 1. Khi tích hợp production, dữ liệu sẽ được ghi về Google Sheet CRM và thông báo realtime cho đội tư vấn.
            </p>
          </form>
        </div>
      </section>
    </PageFrame>
  );
}
