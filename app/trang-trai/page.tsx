import Image from "next/image";
import { PageFrame } from "@/components/site-chrome";

export default function FarmPage() {
  return (
    <PageFrame>
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Trang trại thử nghiệm</p>
            <h1 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Kiểm chứng trước khi đưa giải pháp đến tay người nuôi</h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Trang trại thử nghiệm là nền tảng để Dolic kiểm tra cấu hình thiết bị, quy trình vận hành và điểm rủi ro trong điều kiện thực tế.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Quy trình", "Đo, thử tải, vận hành và ghi nhận dữ liệu thực địa."],
                ["Tham quan", "Đặt lịch để xem cách cấu hình thiết bị trong môi trường ao nuôi."],
                ["Đào tạo", "Huấn luyện đại lý và đội kỹ thuật theo tình huống thực tế."],
                ["Tối ưu", "Điều chỉnh combo theo mùa vụ, quy mô và ngân sách."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image src="/assets/aquaculture-hero.png" alt="Trang trại thử nghiệm Dolic" fill className="object-cover object-right" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Oxy", "Bơm nước", "Đo DO", "Tủ điều khiển", "Đào tạo đại lý"].map((item) => (
                <span key={item} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
