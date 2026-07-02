import Image from "next/image";
import { PageFrame } from "@/components/site-chrome";

const farmStats = [
  ["120.000m²", "diện tích trang trại", "12 hecta ao nuôi thực tế dùng để chạy thử và đo điện năng thiết bị."],
  ["30+ năm", "kinh nghiệm tích lũy", "Từ 1996, người sáng lập Bùi Văn Tới trực tiếp nuôi tôm cá trước khi xây dựng Dolic."],
  ["15.000+", "khách hàng & đại lý", "Dữ liệu vận hành từ trang trại được kiểm chứng qua mạng lưới thực tế trên 34 tỉnh thành."],
];

const farmGallery = [
  ["/assets/drive/experimental-farm/device-on-pond.jpg", "Thiết bị đang vận hành trên ao nuôi thực tế tại Dolic"],
  ["/assets/drive/experimental-farm/comparison-aerator-1.jpg", "Quạt thử nghiệm để so sánh cấu hình tại trang trại"],
  ["/assets/drive/experimental-farm/test-device.jpg", "Thiết bị thử nghiệm tại trang trại thực nghiệm Dolic"],
  ["/assets/drive/experimental-farm/warehouse.png", "Kho thiết bị Dolic phục vụ kiểm chứng và triển khai"],
];

export default function FarmPage() {
  return (
    <PageFrame>
      <section className="relative min-h-[92svh] overflow-hidden bg-[#061B35] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/drive/experimental-farm/dolic-farm-video.mp4"
          poster="/assets/drive/customer-farm/customer-aerator-installed.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.84)_0%,rgba(3,18,38,0.46)_48%,rgba(3,18,38,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,38,0.18)_0%,rgba(3,18,38,0.24)_46%,rgba(3,18,38,0.86)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">Trang trại Dolic</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              Thiết bị thuỷ sản được kiểm chứng bằng ao thật
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-cyan-50/82 md:text-lg">
              Video trang trại được đặt làm lớp mở đầu để người xem thấy môi trường vận hành thật trước khi đọc dữ liệu, hình ảnh và quy trình kiểm chứng bên dưới.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Trang trại thực nghiệm</p>
            <h1 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Kiểm chứng trước khi đưa giải pháp đến tay người nuôi</h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Trang trại 12 hecta (120.000m²) là nền tảng để Dolic kiểm tra cấu hình thiết bị, đo điện năng thực tế và theo dõi độ ổn định vận hành trước khi tư vấn rộng rãi.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {farmStats.map(([value, label, desc]) => (
                <div key={label} className="rounded-lg border border-cyan-100 bg-cyan-50/50 p-4">
                  <p className="text-2xl font-black text-[#0A2E5C]">{value}</p>
                  <p className="mt-1 text-sm font-bold text-cyan-800">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Quy trình", "Đo, thử tải, vận hành và ghi nhận dữ liệu điện năng, oxy thực địa."],
                ["Tham quan", "Đặt lịch để xem cách cấu hình thiết bị trong môi trường ao nuôi thật."],
                ["Đào tạo", "Huấn luyện đại lý và đội kỹ thuật theo tình huống vận hành thực tế."],
                ["Tối ưu", "Điều chỉnh combo theo mùa vụ, quy mô ao và mục tiêu tiết kiệm điện."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#071F3E]">
              <Image src="/assets/drive/experimental-farm/dolic-farm-real.png" alt="Trang trại thực nghiệm Dolic 12 hecta" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Oxy & sục khí", "Bơm nước", "Đo DO/pH", "Tủ điều khiển", "Đào tạo đại lý", "Kiểm chứng thực địa"].map((item) => (
                <span key={item} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Hình ảnh thực địa</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">Thiết bị, ao nuôi và kho vận hành được ghi nhận tại Dolic</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {farmGallery.map(([src, title], index) => (
              <article key={src} className={`group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm ${index === 0 ? "md:col-span-2" : ""}`}>
                <div className={`relative bg-slate-100 ${index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                  <Image src={src} alt={title} fill sizes={index === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
