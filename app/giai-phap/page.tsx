import { ArrowRight, ChevronRight, Droplets, Gauge, Handshake, Headphones, Waves, Wind, Zap } from "lucide-react";
import { PageFrame, PrimaryButton, SectionHeader } from "@/components/site-chrome";

const solutionPaths = [
  {
    title: "Tôi nuôi tôm/cá",
    desc: "Khảo sát quy mô ao, chọn cấu hình oxy, bơm, đo nước và vận hành phù hợp từng vụ nuôi.",
    cta: "Đặt lịch khảo sát",
    href: "/lien-he",
    icon: Droplets,
  },
  {
    title: "Tôi muốn làm đại lý",
    desc: "Nhận bộ sản phẩm khác biệt, tài liệu marketing, đào tạo kỹ thuật và chính sách hỗ trợ rõ ràng.",
    cta: "Tìm hiểu đại lý",
    href: "/dai-ly",
    icon: Handshake,
  },
  {
    title: "Tôi đang dùng Dolic",
    desc: "Tra cứu bảo hành, hướng dẫn vận hành, hotline kỹ thuật và đặt câu hỏi cho kỹ sư Dolic.",
    cta: "Nhận hỗ trợ",
    href: "/lien-he",
    icon: Headphones,
  },
];

const solutionCards = [
  {
    title: "Oxy và sục khí cho ao nuôi",
    desc: "Cấu hình guồng quạt, tam hoa và sục khí khí nén theo diện tích, mật độ và giai đoạn nuôi.",
    items: ["Tôm thẻ 2-10ha", "Ao cá tra", "Trại ươm"],
  },
  {
    title: "Bơm, lọc và xử lý nước",
    desc: "Tối ưu cấp thoát nước, lưu lượng và độ ổn định để giảm rủi ro khi thay nước hoặc xử lý ao.",
    items: ["Bơm chìm", "Bơm nổi", "Xử lý dòng chảy"],
  },
  {
    title: "Đo nước và giám sát",
    desc: "Theo dõi oxy hòa tan, pH và các điểm rủi ro để ra quyết định nhanh hơn trong ca vận hành.",
    items: ["Máy đo DO", "Quy trình kiểm tra", "Cảnh báo vận hành"],
  },
  {
    title: "Combo thiết bị và vi sinh",
    desc: "Đóng gói giải pháp trọn bộ từ thiết bị đến chế phẩm, ưu tiên kiểm chứng tại thực địa trước khi nhân rộng.",
    items: ["Combo oxy", "Combo giám sát", "Vi sinh sắp ra mắt"],
  },
];

const strategicSolutions = [
  {
    title: "Giảm chi phí điện cho hệ oxy",
    desc: "Đánh giá thiết bị đang dùng, điện áp thực tế và mật độ nuôi để chọn guồng, tam hoa hoặc sục khí khí nén phù hợp.",
    icon: Zap,
    metric: "20-50%",
    metricLabel: "mục tiêu tiết kiệm điện",
  },
  {
    title: "Ổn định cấp thoát nước",
    desc: "Chọn bơm theo lưu lượng, họng ra, điện áp và thời gian vận hành để tránh thiếu tải hoặc quá tải.",
    icon: Waves,
    metric: "380m3/h",
    metricLabel: "lưu lượng tham khảo",
  },
  {
    title: "Kiểm soát rủi ro ao nuôi",
    desc: "Bổ sung máy đo oxy và quy trình kiểm tra giúp phát hiện sớm điểm rủi ro trước khi ảnh hưởng đến đàn nuôi.",
    icon: Gauge,
    metric: "24/7",
    metricLabel: "theo dõi vận hành",
  },
  {
    title: "Sục khí công suất lớn",
    desc: "Máy sục khí bản treo khí nén dành cho cụm ao hoặc trang trại cần lượng oxy ổn định, vận hành dài hạn.",
    icon: Wind,
    metric: "7.5-30kW",
    metricLabel: "dải công suất",
  },
];

export default function SolutionsPage() {
  return (
    <PageFrame>
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Giải pháp theo nhu cầu"
            title="Bắt đầu từ mô hình của bạn, không bắt đầu từ máy lẻ"
            desc="Dolic thiết kế cấu hình theo loài nuôi, quy mô ao và mục tiêu vận hành để người nuôi chọn đúng trước khi đầu tư."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {solutionPaths.map(({ title, desc, cta, href, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{desc}</p>
                <a href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                  {cta}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {solutionCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-6 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Tư vấn theo hiệu quả</p>
              <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 md:text-3xl">Dolic không bắt đầu bằng model máy, mà bắt đầu bằng chi phí vận hành của ao</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Các nhóm giải pháp dưới đây được dùng để trao đổi với chủ trại trước khi lên báo giá, giúp chọn đúng cấu hình và tránh đầu tư dàn trải.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {strategicSolutions.map(({ title, desc, icon: Icon, metric, metricLabel }) => (
                <article key={title} className="rounded-lg border border-cyan-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-[#0A2E5C]">{metric}</p>
                      <p className="text-[11px] font-bold uppercase text-slate-500">{metricLabel}</p>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-[#0A2E5C] p-6 text-white md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h2 className="text-xl font-bold">Cần cấu hình theo diện tích ao?</h2>
              <p className="mt-2 text-sm leading-6 text-cyan-50/78">Gửi thông tin trang trại, Dolic sẽ đề xuất nhóm thiết bị và combo phù hợp trước khi báo giá.</p>
            </div>
            <div className="mt-5 flex gap-3 md:mt-0">
              <PrimaryButton href="/lien-he">Nhận tư vấn</PrimaryButton>
              <PrimaryButton href="/san-pham" variant="light">
                Xem sản phẩm
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
