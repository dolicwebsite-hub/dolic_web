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
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const platformBenefits = [
  ["20-50%", "mục tiêu tiết kiệm điện", "Tư vấn lại công suất, số lượng máy và lịch vận hành theo ao thực tế."],
  ["12 tháng", "bảo hành thiết bị", "Áp dụng cho lỗi nhà sản xuất theo chính sách Dolic hiện hành."],
  ["24/7", "đồng hành vận hành", "Hỗ trợ ca vận hành, xử lý rủi ro oxy, bơm và đo nước."],
];

const energyComparison = [
  ["Thiết bị", "Máy nén khí"],
  ["Hiệu quả ghi nhận", "Giảm điện năng tiêu thụ lên đến 30%"],
  ["Cơ sở so sánh", "So sánh thực tế trong file page 5 tại drive"],
];

const solutionPackages = [
  {
    title: "Dolic Farm",
    subtitle: "Gói trang trại và cụm ao",
    desc: "Dành cho chủ trại cần cấu hình thiết bị theo diện tích ao, mật độ nuôi, điện áp và mục tiêu tiết kiệm chi phí.",
    image: "/assets/drive/experimental-farm/dolic-farm-real.png",
    icon: Droplets,
    tags: ["Khảo sát tận ao", "Combo oxy", "Bơm nước", "Đo DO"],
    href: "/lien-he",
  },
  {
    title: "Dolic Dealer",
    subtitle: "Gói đại lý thiết bị thủy sản",
    desc: "Dành cho cửa hàng vật tư, đại lý vùng nuôi và đối tác muốn được đào tạo đại lý theo quy trình chuẩn.",
    image: "/assets/drive/exhibition/IMG_6001.PNG",
    icon: Handshake,
    tags: ["Chính sách khu vực", "Đào tạo kỹ thuật", "Tài liệu bán hàng", "Hỗ trợ sau bán"],
    href: "/dai-ly",
  },
  {
    title: "Dolic Support",
    subtitle: "Gói hỗ trợ khách đang vận hành",
    desc: "Dành cho khách đã dùng thiết bị Dolic cần tra cứu bảo hành, hỏi kỹ thuật hoặc nâng cấp cấu hình.",
    image: "/assets/drive/customer-farm/customer-aerator-installed.jpg",
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
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/drive/experimental-farm/dolic-farm-video.mp4"
          poster="/assets/drive/customer-farm/customer-aerator-installed.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,42,82,0.94)_0%,rgba(8,42,82,0.82)_50%,rgba(8,42,82,0.62)_100%)] md:bg-[linear-gradient(90deg,rgba(8,42,82,0.96)_0%,rgba(8,42,82,0.82)_42%,rgba(8,42,82,0.28)_78%)]" />
        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl gap-8 px-5 pb-14 pt-36 md:min-h-[680px] md:px-8 md:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="hero-enter inline-flex max-w-full rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-100">
              Dolic Solution Platform
            </p>
            <h1 className="hero-enter hero-enter-1 mt-5 max-w-3xl text-[2.55rem] font-bold leading-[1.12] tracking-normal sm:text-5xl md:text-6xl">
              Nền tảng cấu hình giải pháp cho trang trại thủy sản
            </h1>
            <p className="hero-enter hero-enter-2 mt-5 max-w-2xl text-base leading-8 text-cyan-50/88">
              Từ mô hình ao, điện áp và mục tiêu vận hành, Dolic đề xuất giải pháp thiết bị sục khí, bơm, đo nước và hỗ trợ sau bán để người nuôi vận hành ổn định, tiết kiệm điện và thân thiện với môi trường.
            </p>
            <div className="hero-enter hero-enter-3 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/lien-he">
                Đăng ký khảo sát
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <PrimaryButton href="/san-pham" variant="light">
                Xem thiết bị
              </PrimaryButton>
            </div>
          </div>

          <div className="hero-enter hero-enter-2 rounded-lg border border-white/15 bg-white/12 p-3 shadow-[0_34px_90px_-48px_rgba(0,0,0,0.78)] backdrop-blur-md sm:p-5">
            <div className="rounded-lg bg-white p-4 text-slate-950 sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Bảng cấu hình nhanh</p>
                  <h2 className="mt-2 text-xl font-bold sm:text-2xl">Ao tôm/cá thương phẩm</h2>
                </div>
                <Calculator className="h-8 w-8 text-cyan-600" />
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ["Diện tích", "2-10ha"],
                  ["Mục tiêu", "Oxy ổn định, giảm điện, giảm rủi ro"],
                  ["Giải pháp gợi ý", "Quạt nước + bơm + máy đo DO"],
                  ["Hỗ trợ", "Khảo sát, báo giá, bảo hành"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-md bg-slate-50 px-3 py-3">
                    <span className="text-sm font-medium text-slate-500">{label}</span>
                    <span className="text-right text-sm font-bold text-slate-950">{value}</span>
                  </div>
                ))}
              </div>
              <Link href="/lien-he" className="motion-interactive pressable lift-hover mt-5 flex min-h-12 items-center justify-center rounded-md bg-cyan-500 px-5 text-sm font-bold text-slate-950 hover:bg-cyan-400">
                Nhận tư vấn giải pháp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll>
      <section className="border-b border-slate-200 bg-white px-4 py-5 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {platformBenefits.map(([value, label, desc], index) => (
            <div key={label} className="motion-interactive lift-hover grid grid-cols-[82px_minmax(0,1fr)] gap-4 rounded-lg border border-cyan-100 bg-cyan-50/50 p-4" style={{ transitionDelay: `${index * 40}ms` }}>
              <div>
                <p className="text-2xl font-bold text-[#0A2E5C]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">{label}</p>
              </div>
              <p className="text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={30}>
      <section className="bg-[#071F3E] px-4 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Bằng chứng hiệu quả</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Giảm điện năng tiêu thụ lên đến 30% cho sản phẩm máy nén khí.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cyan-50/74 md:text-base md:leading-8">
              Kết quả được trình bày dưới dạng bảng so sánh thực tế trong file page 5 tại drive, dùng làm cơ sở tư vấn giải pháp tiết kiệm điện cho người nuôi.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/12 bg-white/8">
            <div className="relative aspect-[16/9] border-b border-white/12 bg-white">
              <Image src="/assets/drive/performance/1JRKM8T8D_5FLBM0.jpg" alt="Bảng so sánh hiệu quả giảm điện năng Dolic" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
            </div>
            {energyComparison.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-white/12 p-5 last:border-b-0 md:grid-cols-[190px_minmax(0,1fr)] md:p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{label}</p>
                <p className="text-lg font-bold leading-7 text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={40}>
      <section className="bg-[linear-gradient(180deg,#f7fbfc_0%,#ffffff_100%)] px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Chọn hướng triển khai</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-slate-950 md:text-4xl">
                Dolic thiết kế giải pháp theo vai trò của bạn
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Chọn nhu cầu, xem quyền lợi, gửi thông tin và nhận giải pháp rõ ràng trước khi đầu tư.
              </p>
            </div>
            <PrimaryButton href="/lien-he" variant="outline">
              Gửi thông tin ao
            </PrimaryButton>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {solutionPackages.map(({ title, subtitle, desc, image, icon: Icon, tags, href }, index) => (
              <Link key={title} href={href} className="motion-interactive pressable lift-hover group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:border-cyan-300 hover:shadow-[0_28px_70px_-42px_rgba(8,145,178,0.38)]" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="relative h-64 bg-slate-100">
                  <Image src={image} alt={title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.04]" />
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
                      <span key={tag} className="motion-interactive rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="motion-interactive mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 group-hover:gap-3">
                    Tìm hiểu gói
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={60}>
      <section className="bg-white px-5 py-14 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Hệ thống vận hành</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-normal text-slate-950 sm:text-3xl md:text-4xl">
              Từ một ao đến cả cụm trang trại
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
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
            {operatingSystems.map(({ title, desc, metric, metricLabel, image, icon: Icon }, index) => (
              <article key={title} className="motion-interactive lift-hover grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-[180px_minmax(0,1fr)] md:grid-cols-[220px_minmax(0,1fr)]" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="relative h-48 bg-slate-100 sm:h-auto sm:min-h-52">
                  <Image src={image} alt={title} fill sizes="(min-width: 768px) 220px, 100vw" className="object-contain p-5" />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-3 sm:flex sm:items-start sm:justify-between sm:gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 text-left sm:text-right">
                      <p className="text-2xl font-bold leading-none text-[#0A2E5C]">{metric}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">{metricLabel}</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-6 text-slate-950 sm:mt-5 sm:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={80}>
      <section className="bg-[linear-gradient(180deg,#eef8fb_0%,#ffffff_100%)] px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-700">Quy trình platform</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">
              Từ thông tin ao đến báo giá có cơ sở
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map(([step, title, desc], index) => (
              <article key={step} className="motion-interactive lift-hover rounded-lg border border-cyan-100 bg-white p-5 shadow-sm" style={{ transitionDelay: `${index * 35}ms` }}>
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
      </RevealOnScroll>
    </PageFrame>
  );
}
