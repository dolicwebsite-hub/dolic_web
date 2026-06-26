import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Zap } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { contactInfo } from "@/lib/site-data";

const formFields = [
  "Họ tên",
  "Số điện thoại/Zalo",
  "Tỉnh/Thành",
  "Diện tích ao hoặc mô hình",
];

const serviceCards = [
  {
    title: "Tư vấn tối ưu điện",
    desc: "Đánh giá thiết bị đang chạy, điện năng tiêu thụ và đề xuất cấu hình phù hợp theo diện tích ao.",
  },
  {
    title: "Cấu hình combo thiết bị",
    desc: "Chọn quạt nước, bơm, sục khí, đo nước và máy cho ăn theo mục tiêu năng suất từng vụ.",
  },
  {
    title: "Tư vấn đại lý / B2B",
    desc: "Thiết kế danh mục hàng, chính sách nhập, đào tạo tư vấn và quy trình triển khai cho đối tác.",
  },
];

const processSteps = [
  ["01", "Tiếp nhận thông tin", "Ghi nhận khu vực, diện tích ao, thiết bị đang dùng và mục tiêu vận hành."],
  ["02", "Đề xuất cấu hình", "Đội kỹ thuật Dolic chọn phương án dựa trên dữ liệu trang trại thực nghiệm."],
  ["03", "Báo giá rõ ràng", "Tách chi phí thiết bị, lắp đặt, bảo hành và phương án mở rộng nếu cần."],
  ["04", "Đồng hành vận hành", "Hỗ trợ sau bán, hướng dẫn đại lý/người nuôi xử lý tình huống ngoài ao."],
];

const interestOptions = [
  "Quạt nước / sục khí",
  "Bơm nước",
  "Máy sục khí khí nén",
  "Thiết bị đo nước",
  "Máy cho ăn tự động",
  "Chính sách đại lý",
];

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="relative overflow-hidden bg-[#061B35] px-5 pb-16 pt-28 text-white md:px-10 md:pb-24 md:pt-36">
        <Image
          src="/assets/drive/customer-farm/customer-aerator-installed.jpg"
          alt="Thiết bị Dolic vận hành trên ao nuôi"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.94)_0%,rgba(3,18,38,0.82)_48%,rgba(3,18,38,0.58)_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              <Zap className="h-4 w-4" />
              Tư vấn giải pháp Dolic
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal md:text-6xl">
              Tối ưu chi phí điện và cấu hình thiết bị cho ao nuôi của bạn
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-cyan-50/78">
              Gửi thông tin ao, thiết bị đang dùng và mục tiêu vụ nuôi. Dolic sẽ tư vấn cấu hình dựa trên kinh nghiệm thực địa, trang trại thử nghiệm và dữ liệu vận hành thật.
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                ["30+ năm", "kinh nghiệm nuôi thực địa"],
                ["120.000m²", "trang trại thực nghiệm"],
                ["34 tỉnh", "mạng lưới phục vụ"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-cyan-300/35 pl-4">
                  <p className="text-3xl font-black text-cyan-200">{value}</p>
                  <p className="mt-1 text-sm font-bold text-cyan-50/65">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`tel:${contactInfo.offices[0].hotline}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
                <Phone className="h-4 w-4" />
                Gọi tư vấn ngay
              </Link>
              <Link href="#tu-van-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/22 px-5 text-sm font-black text-white transition hover:bg-white/10">
                Điền thông tin
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <form id="tu-van-form" className="rounded-lg bg-white p-5 text-slate-950 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.55)] md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Nhận tư vấn miễn phí</p>
            <h2 className="mt-2 text-2xl font-black">Dolic sẽ liên hệ trong 24h</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {formFields.map((field) => (
                <label key={field} className="text-sm font-bold">
                  {field}
                  <input className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white" placeholder={field} />
                </label>
              ))}
            </div>
            <fieldset className="mt-4">
              <legend className="text-sm font-bold">Nhu cầu quan tâm</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {interestOptions.map((option) => (
                  <label key={option} className="flex min-h-10 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700">
                    <input type="checkbox" className="h-4 w-4 accent-cyan-500" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="mt-4 block text-sm font-bold">
              Mô tả nhanh tình trạng hiện tại
              <textarea className="mt-2 min-h-28 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white" placeholder="Ví dụ: ao cá 3ha đang dùng quạt 6 cánh, muốn giảm điện và tăng oxy ban đêm." />
            </label>
            <button type="button" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0A2E5C] px-4 text-sm font-black text-white transition hover:bg-[#061B35]">
              Gửi yêu cầu tư vấn
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-xs leading-5 text-slate-500">Thông tin được dùng để đội Dolic tư vấn cấu hình, không chia sẻ cho bên thứ ba.</p>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-slate-950 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Dịch vụ tư vấn</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">Chọn đúng thiết bị trước khi đầu tư</h2>
            </div>
            <p className="max-w-3xl text-base font-semibold leading-8 text-slate-600">
              Bố cục tư vấn tập trung vào việc giúp khách hàng hiểu nhanh Dolic làm gì, vì sao đáng tin và cần để lại thông tin nào để đội ngũ đưa ra cấu hình sát thực tế.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {serviceCards.map((item) => (
              <article key={item.title} className="border-t-4 border-cyan-500 bg-slate-50 p-6">
                <CheckCircle2 className="h-8 w-8 text-cyan-600" />
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1E8] px-5 py-16 text-slate-950 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#071F3E]">
            <Image src="/assets/drive/experimental-farm/dolic-farm-real.png" alt="Trang trại thực nghiệm Dolic" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Quy trình làm việc</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">Từ thông tin ao nuôi đến cấu hình vận hành</h2>
            <div className="mt-8 grid gap-4">
              {processSteps.map(([step, title, desc]) => (
                <article key={step} className="grid gap-4 border-b border-slate-300 pb-4 sm:grid-cols-[76px_1fr]">
                  <p className="font-serif text-5xl leading-none text-cyan-700">{step}</p>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071F3E] px-5 py-16 text-white md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          {contactInfo.offices.map((office) => (
            <article key={office.region} className="border border-white/12 p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Văn phòng {office.region}</p>
              <p className="mt-4 flex gap-3 text-base font-semibold leading-8 text-cyan-50/76">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                {office.address}
              </p>
              <Link href={`tel:${office.hotline}`} className="mt-5 inline-flex items-center gap-2 text-xl font-black text-cyan-200 transition hover:text-white">
                <Phone className="h-5 w-5" />
                {office.displayHotline}
              </Link>
            </article>
          ))}
          <div className="lg:col-span-2">
            <Link href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-200 transition hover:text-white">
              <MessageCircle className="h-5 w-5" />
              {contactInfo.email}
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
