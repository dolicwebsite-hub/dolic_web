import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Droplets,
  Gauge,
  Handshake,
  Headphones,
  MapPinned,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import { PageFrame, PrimaryButton } from "@/components/site-chrome";

const platformBenefits = [
  ["20-50%", "mục tiêu tiết kiệm điện", "Tư vấn lại công suất, số lượng máy và lịch vận hành theo ao thực tế."],
  ["12 tháng", "bảo hành thiết bị", "Áp dụng cho lỗi nhà sản xuất theo chính sách Dolic hiện hành."],
  ["24/7", "đồng hành vận hành", "Hỗ trợ ca vận hành, xử lý rủi ro oxy, bơm và đo nước."],
];

const solutionPackages = [
  {
    title: "Dolic Farm",
    subtitle: "Gói trang trại và cụm ao",
    desc: "Dành cho chủ trại cần cấu hình thiết bị theo diện tích ao, mật độ nuôi, điện áp và mục tiêu tiết kiệm chi phí.",
    image: "/assets/aquaculture-hero.png",
    icon: Droplets,
    tags: ["Khảo sát tận ao", "Combo oxy", "Bơm nước", "Đo DO"],
    href: "/lien-he",
  },
  {
    title: "Dolic Dealer",
    subtitle: "Gói đại lý thiết bị thủy sản",
    desc: "Dành cho cửa hàng vật tư, đại lý vùng nuôi và đối tác muốn phân phối nhóm thiết bị có tài liệu bán hàng rõ ràng.",
    image: "/assets/products/aerator-6-canh-15kw-hop-so-b.png",
    icon: Handshake,
    tags: ["Chính sách khu vực", "Đào tạo kỹ thuật", "Tài liệu bán hàng", "Hỗ trợ sau bán"],
    href: "/dai-ly",
  },
  {
    title: "Dolic Support",
    subtitle: "Gói hỗ trợ khách đang vận hành",
    desc: "Dành cho khách đã dùng thiết bị Dolic cần tra cứu bảo hành, hỏi kỹ thuật hoặc nâng cấp cấu hình.",
    image: "/assets/products/meter-do-oxy-2001.jpg",
    icon: Headphones,
    tags: ["Hotline kỹ thuật", "Bảo hành", "Nâng cấp thiết bị", "Hướng dẫn vận hành"],
    href: "/lien-he",
  },
];

const operatingSystems = [
  {
    title: "Hệ oxy và sục khí",
    desc: "Guồng quạt, tam hoa và sục khí khí nén theo diện tích, mật độ và giai đoạn nuôi.",
    metric: "7.5-30kW",
    metricLabel: "sục khí khí nén",
    image: "/assets/products/air-blower-treo-khi-nen.jpg",
    icon: Wind,
  },
  {
    title: "Cấp thoát nước",
    desc: "Chọn bơm theo lưu lượng, họng ra, điện áp và thời gian vận hành để tránh thiếu tải hoặc quá tải.",
    metric: "380m3/h",
    metricLabel: "lưu lượng tham khảo",
    image: "/assets/products/pump-75kw-380v.png",
    icon: Waves,
  },
  {
    title: "Đo nước và rủi ro ao",
    desc: "Máy đo oxy và quy trình kiểm tra giúp phát hiện sớm điểm rủi ro trước khi ảnh hưởng đàn nuôi.",
    metric: "DO",
    metricLabel: "kiểm tra nhanh",
    image: "/assets/products/meter-do-oxy-2001.jpg",
    icon: Gauge,
  },
];

const processSteps = [
  ["01", "Khảo sát", "Diện tích ao, loài nuôi, điện áp, thiết bị đang dùng và vấn đề vận hành."],
  ["02", "Dự toán", "Tính nhóm máy, công suất, số lượng, chi phí đầu tư và mục tiêu tiết kiệm."],
  ["03", "Lắp đặt", "Bàn giao thiết bị, hướng dẫn vận hành và lịch kiểm tra định kỳ."],
  ["04", "Đồng hành", "Theo dõi hiệu quả, hỗ trợ bảo hành và đề xuất nâng cấp khi mở rộng trại."],
];

export default function SolutionsPage() {
  return (
    <PageFrame>
      <section className="relative overflow-hidden bg-[#082A52] text-white">
        <Image
          src="/assets/aquaculture-hero.png"
          alt="Trang trại thủy sản sử dụng giải pháp Dolic"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,42,82,0.94)_0%,rgba(8,42,82,0.82)_50%,rgba(8,42,82,0.62)_100%)] md:bg-[linear-gradient(90deg,rgba(8,42,82,0.96)_0%,rgba(8,42,82,0.82)_42%,rgba(8,42,82,0.28)_78%)]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-cyan-100">
              Dolic Solution Platform
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl md:text-6xl">
              Nền tảng cấu hình giải pháp cho trang trại thủy sản
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-50/88 md:text-lg">
              Từ mô hình ao, điện áp và mục tiêu vận hành, Dolic đề xuất combo thiết bị sục khí, bơm, đo nước và hỗ trợ sau bán để người nuôi đầu tư đúng ngay từ đầu.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/lien-he">
                Đăng ký khảo sát
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <PrimaryButton href="/san-pham" variant="light">
                Xem thiết bị
              </PrimaryButton>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/12 p-4 shadow-[0_34px_90px_-48px_rgba(0,0,0,0.78)] backdrop-blur-md sm:p-5">
            <div className="rounded-lg bg-white p-4 text-slate-950 sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Bảng cấu hình nhanh</p>
                  <h2 className="mt-2 text-2xl font-bold">Ao tôm/cá thương phẩm</h2>
                </div>
                <Calculator className="h-8 w-8 text-cyan-600" />
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ["Diện tích", "2-10ha"],
                  ["Mục tiêu", "Oxy ổn định, giảm điện, giảm rủi ro"],
                  ["Thiết bị gợi ý", "Quạt nước + bơm + máy đo DO"],
                  ["Hỗ trợ", "Khảo sát, báo giá, bảo hành"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-md bg-slate-50 px-3 py-3">
                    <span className="text-sm font-medium text-slate-500">{label}</span>
                    <span className="text-right text-sm font-bold text-slate-950">{value}</span>
                  </div>
                ))}
              </div>
              <Link href="/lien-he" className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-cyan-500 px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400">
                Nhận cấu hình chi tiết
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {platformBenefits.map(([value, label, desc]) => (
            <div key={label} className="grid grid-cols-[82px_minmax(0,1fr)] gap-4 rounded-lg border border-cyan-100 bg-cyan-50/50 p-4">
              <div>
                <p className="text-2xl font-bold text-[#0A2E5C]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">{label}</p>
              </div>
              <p className="text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f7fbfc_0%,#ffffff_100%)] px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Chọn hướng triển khai</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-4xl">
                Dolic thiết kế giải pháp theo vai trò của bạn
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Cách tiếp cận giống platform: chọn nhu cầu, xem quyền lợi, gửi thông tin và nhận cấu hình rõ ràng trước khi đầu tư.
              </p>
            </div>
            <PrimaryButton href="/lien-he" variant="outline">
              Gửi thông tin ao
            </PrimaryButton>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {solutionPackages.map(({ title, subtitle, desc, image, icon: Icon, tags, href }) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_28px_70px_-42px_rgba(8,145,178,0.38)]">
                <div className="relative h-64 bg-slate-100">
                  <Image src={image} alt={title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,42,82,0.08)_0%,rgba(8,42,82,0.62)_100%)]" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-100">{title}</p>
                    <h3 className="mt-1 text-2xl font-bold">{subtitle}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                    Tìm hiểu gói
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="sticky top-28">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Hệ thống vận hành</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-4xl">
              Từ một ao đến cả cụm trang trại
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Mỗi nhóm thiết bị được xem như một module. Dolic ghép module theo mục tiêu: tạo oxy, cấp thoát nước, đo môi trường và giảm chi phí vận hành.
            </p>
            <div className="mt-6 rounded-lg bg-[#0A2E5C] p-5 text-white">
              <div className="flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-cyan-200" />
                <p className="font-bold">Khảo sát theo vùng nuôi</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-cyan-50/78">
                Dolic ưu tiên cấu hình theo điều kiện thực tế: điện áp, nguồn nước, mật độ nuôi và thiết bị sẵn có.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {operatingSystems.map(({ title, desc, metric, metricLabel, image, icon: Icon }) => (
              <article key={title} className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="relative min-h-52 bg-slate-100">
                  <Image src={image} alt={title} fill sizes="(min-width: 768px) 220px, 100vw" className="object-contain p-5" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#0A2E5C]">{metric}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">{metricLabel}</p>
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eef8fb_0%,#ffffff_100%)] px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Quy trình platform</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">
              Từ thông tin ao đến báo giá có cơ sở
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map(([step, title, desc]) => (
              <article key={step} className="rounded-lg border border-cyan-100 bg-white p-5 shadow-sm">
                <p className="text-4xl font-bold text-cyan-700">{step}</p>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-lg bg-[#0A2E5C] p-5 text-white md:grid-cols-[1fr_auto] md:items-center md:p-7">
            <div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-cyan-200" />
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-cyan-100">Dolic cam kết tư vấn đúng nhu cầu</p>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-normal">Cần cấu hình theo diện tích ao?</h2>
              <p className="mt-2 text-sm leading-6 text-cyan-50/78">
                Gửi thông tin trang trại, Dolic sẽ đề xuất nhóm thiết bị và combo phù hợp trước khi báo giá.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
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
