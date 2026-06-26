import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ClipboardCheck,
  Factory,
  HandCoins,
  Handshake,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { contactInfo, productCategories } from "@/lib/site-data";

const packages = [
  {
    eyebrow: "DOLIC DEALER",
    title: "Gói đại lý thiết bị thủy sản",
    desc: "Dành cho cửa hàng vật tư thủy sản, đại lý vùng nuôi và đối tác muốn phân phối nhóm thiết bị sục khí, bơm nước, đo môi trường.",
    image: "/assets/drive/exhibition/IMG_6001.PNG",
    tags: ["Chính sách theo khu vực", "Tài liệu bán hàng", "Đào tạo kỹ thuật"],
    details: [
      "Tư vấn bộ sản phẩm ưu tiên theo vùng nuôi và phân khúc khách hàng.",
      "Cung cấp thông số, hình ảnh, bảng giá và cách tư vấn cấu hình cơ bản.",
      "Hỗ trợ đại lý xử lý câu hỏi kỹ thuật trước và sau bán.",
    ],
  },
  {
    eyebrow: "DOLIC FARM",
    title: "Gói trang trại và cụm ao quy mô lớn",
    desc: "Dành cho chủ trại cần cấu hình thiết bị theo diện tích ao, mật độ nuôi, điện áp, lưu lượng nước và mục tiêu vận hành.",
    image: "/assets/drive/customer-farm/customer-aerator-installed.jpg",
    tags: ["Khảo sát tận ao", "Combo thiết bị", "Bảo hành 12 tháng"],
    details: [
      "Khảo sát hiện trạng ao, thiết bị đang dùng và điểm nghẽn oxy hoặc cấp thoát nước.",
      "Đề xuất combo guồng, tam hoa, bơm và máy đo phù hợp ngân sách.",
      "Hướng dẫn vận hành, bảo trì và kế hoạch mở rộng theo mùa vụ.",
    ],
  },
  {
    eyebrow: "DOLIC PROJECT",
    title: "Gói dự án và nhà thầu tích hợp",
    desc: "Dành cho đơn vị setup trại mới, cải tạo ao hoặc tích hợp thiết bị cần báo giá, thông số và phương án triển khai rõ ràng.",
    image: "/assets/drive/experimental-farm/warehouse.png",
    tags: ["Báo giá dự án", "Thông số kỹ thuật", "Hỗ trợ nghiệm thu"],
    details: [
      "Cung cấp danh mục thiết bị, model, công suất và giá tham khảo để lập phương án.",
      "Phối hợp chọn cấu hình theo bản vẽ, diện tích và tiến độ triển khai.",
      "Hỗ trợ hậu mãi, bảo hành và đào tạo vận hành sau bàn giao.",
    ],
  },
];

const whyChoose = [
  {
    title: "Ngân sách linh hoạt",
    desc: "Có thể bắt đầu bằng nhóm thiết bị ưu tiên hoặc triển khai theo cụm ao/dự án, tránh mua dàn trải khi chưa cần.",
    icon: HandCoins,
  },
  {
    title: "Danh mục thực chiến",
    desc: "Danh mục tập trung vào nhóm thiết bị cốt lõi: sục khí, bơm nước, đo oxy và các cấu hình hỗ trợ vận hành ao.",
    icon: BadgeCheck,
  },
  {
    title: "Quy trình tư vấn rõ",
    desc: "Từ tiếp nhận nhu cầu, khảo sát, cấu hình, báo giá đến hậu mãi đều có đầu việc cụ thể để đối tác dễ theo dõi.",
    icon: ClipboardCheck,
  },
  {
    title: "Hỗ trợ kỹ thuật sau bán",
    desc: "Đối tác không chỉ nhận máy mà còn có đầu mối hỗ trợ cách vận hành, bảo trì và xử lý câu hỏi từ người nuôi.",
    icon: Wrench,
  },
];

const partnerStats = [
  ["40%", "giảm chi phí điện năng", "Tư vấn cấu hình theo hướng giảm hao phí trong vận hành dài hạn."],
  ["1000+", "farm tham khảo mô hình", "Định vị Dolic cho đại lý và trang trại cần giải pháp thực chiến."],
  ["24h", "phản hồi kỹ thuật", "Ưu tiên xử lý nhanh nhu cầu báo giá, vận hành và bảo hành."],
  ["12 tháng", "bảo hành chính hãng", "Chính sách bảo hành theo bảng báo giá và điều kiện hiện hành."],
];

const processSteps = [
  ["01", "Ghi nhận nhu cầu", "Xác định vai trò đối tác, khu vực, quy mô ao hoặc nhóm sản phẩm cần phân phối."],
  ["02", "Khảo sát và chọn cấu hình", "Đề xuất thiết bị theo loài nuôi, diện tích, điện áp, lưu lượng và ngân sách."],
  ["03", "Chốt chính sách", "Thống nhất giá, điều kiện giao hàng, bảo hành, tài liệu bán hàng và lịch triển khai."],
  ["04", "Đồng hành sau bán", "Hỗ trợ đào tạo, vận hành, xử lý bảo hành và tối ưu cấu hình theo phản hồi thực địa."],
];

const faqItems = [
  ["Dolic B2B phù hợp với ai?", "Đại lý vật tư thủy sản, chủ trang trại quy mô lớn, nhà thầu setup ao nuôi và đơn vị tích hợp thiết bị thủy sản."],
  ["Có chính sách riêng cho đại lý không?", "Có. Chính sách được tư vấn theo khu vực, năng lực bán hàng, nhóm sản phẩm và mức cam kết hợp tác."],
  ["Có hỗ trợ khảo sát trang trại không?", "Có. Với nhu cầu dự án hoặc cụm ao lớn, Dolic ưu tiên khảo sát hiện trạng trước khi đề xuất cấu hình."],
  ["Giá trên website có phải giá cuối cùng không?", "Giá là tham khảo từ bảng báo giá hiện hành. Giá cuối cùng phụ thuộc số lượng, vận chuyển và chính sách hợp tác."],
];

export default function B2BPage() {
  return (
    <PageFrame>
      <div id="top" />

      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative h-[220px] md:h-[340px]">
          <Image
            src="/assets/drive/customer-farm/customer-aerator-installed.jpg"
            alt="Dolic B2B banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,82,0.72)_0%,rgba(8,42,82,0.34)_38%,rgba(8,42,82,0.04)_72%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,rgba(8,42,82,0.48),rgba(8,42,82,0))]" />
          <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl items-end justify-between gap-6 px-4 pb-6 text-white md:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-100 drop-shadow-[0_2px_8px_rgba(8,42,82,0.6)]">Dolic business</p>
              <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight drop-shadow-[0_4px_18px_rgba(8,42,82,0.72)] md:text-5xl">
                B2B cho đại lý, trang trại và dự án thủy sản
              </h1>
            </div>
            <div className="hidden rounded-lg bg-white p-3 shadow-lg md:block">
              <Image src="/Logo-Dolic.png" alt="Dolic" width={2867} height={842} className="h-auto w-44 object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eef8fb_54%,#ffffff_100%)] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase text-cyan-700">giới thiệu</p>
            <p className="mx-auto mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-200 bg-white/90 px-4 py-3 text-[11px] font-bold text-cyan-700 shadow-[0_20px_40px_-28px_rgba(8,145,178,0.45)] backdrop-blur-sm sm:px-6 sm:text-sm md:px-8 md:py-4 md:text-base">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 sm:h-3 sm:w-3" />
              <span className="truncate">DOLIC FOR BUSINESS</span>
            </p>
            <h2 className="mb-6 text-2xl font-bold text-[#0A2E5C] sm:text-3xl md:text-4xl">
              Để đại lý bán đúng kỹ thuật. <br />
              Để trang trại đầu tư đúng cấu hình.
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-slate-700 sm:text-[18px]">
              Dolic B2B là giải pháp hợp tác thiết bị thủy sản cho đối tác cần danh mục rõ, tư vấn thực địa, báo giá minh bạch và hậu mãi có trách nhiệm.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#goi-hop-tac" className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-500 px-8 text-sm font-black text-slate-950 transition hover:bg-cyan-400">
                Khám phá gói B2B
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#booking-b2b" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-sm font-black text-slate-800 shadow-[0_18px_35px_-24px_rgba(15,23,42,0.22)] transition hover:border-cyan-500 hover:text-cyan-700">
                Đặt lịch tư vấn
              </Link>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(320px,520px)_minmax(0,1fr)] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(207,250,254,0.72)_44%,rgba(34,211,238,0.22)_70%,transparent_100%)] blur-3xl" />
              <Image
                src="/assets/drive/customer-farm/customer-aerator-installed.jpg"
                alt="Thiết bị sục khí Dolic"
                width={1537}
                height={1023}
                priority
                sizes="(max-width: 1024px) 80vw, 520px"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_40px_rgba(8,42,82,0.18)]"
              />
            </div>

            <div className="rounded-[34px] bg-[linear-gradient(180deg,#0A2E5C_0%,#071F3E_100%)] p-3 shadow-[0_28px_70px_-30px_rgba(8,42,82,0.8)] sm:p-4 md:rounded-[42px] md:p-5">
              <div className="rounded-[28px] bg-white p-4 md:p-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["28", "sản phẩm"],
                    [String(productCategories.length), "danh mục"],
                    ["12 tháng", "bảo hành"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[18px] bg-cyan-50 p-4 text-center">
                      <p className="text-3xl font-black text-[#0A2E5C]">{value}</p>
                      <p className="mt-1 text-xs font-bold text-cyan-800">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 overflow-hidden rounded-[24px] bg-slate-50 p-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    {productCategories.slice(0, 6).map((category) => (
                      <div key={category.id} className="flex items-center gap-3 rounded-[16px] bg-white p-3 shadow-sm">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-slate-100">
                          <Image src={category.image} alt={category.name} fill sizes="56px" className="object-contain p-1.5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-950">{category.name}</p>
                          <p className="text-xs font-semibold text-slate-500">{category.products.length || "Sắp ra mắt"} sản phẩm</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="goi-hop-tac" className="relative z-20 scroll-mt-24 bg-gradient-to-b from-cyan-50 via-white to-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto w-full max-w-[1480px]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase text-cyan-700 md:text-base">Khám phá</p>
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">3 gói hợp tác B2B</h2>
          </div>

          <div className="grid gap-8 pt-6">
            {packages.map((item, index) => (
              <article key={item.eyebrow} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg border border-cyan-200/70 bg-white/95 shadow-[0_18px_40px_-26px_rgba(8,145,178,0.26)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300 group-hover:shadow-[0_22px_48px_-28px_rgba(8,145,178,0.34)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(14,116,144,0.10),transparent_30%)] opacity-80" />
                  <div className="relative grid gap-5 p-4 text-cyan-700 sm:p-5 md:p-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-8">
                    <div className="relative overflow-hidden rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-sky-50 to-white p-4 shadow-inner">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_28%)]" />
                      <div className="relative h-52 overflow-hidden rounded-[24px] bg-white sm:h-56 lg:h-[300px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          priority={index < 3}
                          sizes="(max-width: 1024px) 100vw, 44vw"
                          className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                    <div className="px-2 py-1 md:px-3">
                      <div className="mb-4 inline-flex max-w-full rounded-full border border-cyan-300 bg-white px-4 py-1.5 text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.28)] sm:text-base">
                        <span className="break-words">{item.eyebrow}</span>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold leading-tight text-[#0A2E5C] transition-colors duration-300 group-hover:text-cyan-700 sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mb-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-cyan-300/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-cyan-700 shadow-sm sm:text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-2">
                            <PackageCheck className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#eef8fb_52%,#ffffff_100%)] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 xl:grid-cols-[minmax(0,0.94fr)_460px] xl:items-start xl:gap-12">
          <div className="max-w-[820px]">
            <div className="mb-8 max-w-2xl text-center lg:mb-10 lg:text-left">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-cyan-700 md:text-base">
                Khám phá
              </p>
              <h2 className="text-2xl font-bold leading-tight text-[#0A2E5C] md:text-3xl lg:text-4xl">
                Điều khiến Dolic trở thành lựa chọn của đối tác thủy sản
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-5">
              {whyChoose.map(({ title, desc, icon: Icon }) => (
                <details key={title} className="group rounded-[26px] bg-[linear-gradient(180deg,rgba(236,254,255,0.96),rgba(224,242,254,0.94))] p-2.5 shadow-[0_18px_45px_-30px_rgba(8,145,178,0.28)] transition-all duration-300 open:bg-[linear-gradient(180deg,rgba(207,250,254,0.98),rgba(186,230,253,0.92))]">
                  <summary className="flex min-h-[164px] cursor-pointer list-none flex-col justify-between rounded-[22px] border border-cyan-100/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(236,254,255,0.38))] p-5 marker:hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#22d3ee_0%,#0891b2_100%)] text-white shadow-[0_16px_35px_-20px_rgba(8,145,178,0.8)]">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-white/75 text-cyan-700 transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="max-w-[18ch] text-lg font-bold leading-tight text-slate-950 md:text-[1.35rem]">
                      {title}
                    </h3>
                  </summary>
                  <div className="px-2 pb-2 pt-4">
                    <p className="text-[15px] leading-6 text-slate-600">{desc}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute inset-x-10 top-8 h-32 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_72%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-cyan-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(236,254,255,0.72))] p-4 shadow-[0_35px_90px_-34px_rgba(8,145,178,0.28)] md:p-5">
              <div className="mb-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Thực địa
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#0A2E5C]">
                  Dolic in action
                </h3>
              </div>
              <div className="space-y-4 rounded-[28px] bg-[linear-gradient(180deg,#f0fdff_0%,#e0f2fe_100%)] p-3">
                {[
                  [Factory, "Cấu hình thiết bị theo ao nuôi"],
                  [Truck, "Tư vấn giao hàng theo khu vực"],
                  [Headphones, "Đồng hành kỹ thuật sau bán"],
                ].map(([Icon, text]) => (
                  <div key={String(text)} className="flex items-center gap-3 rounded-[22px] bg-white p-4 shadow-sm">
                    <Icon className="h-6 w-6 text-cyan-700" />
                    <span className="font-bold text-slate-800">{text as string}</span>
                  </div>
                ))}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-white">
                  <Image src="/assets/drive/experimental-farm/device-on-pond.jpg" alt="Thiết bị Dolic vận hành trên ao" fill sizes="420px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A2E5C] px-4 py-14 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Lý do hợp tác</p>
            <h2 className="mt-3 text-2xl font-bold tracking-normal md:text-3xl">
              Dolic giúp đối tác bán bằng hiệu quả vận hành, không chỉ bằng giá máy
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {partnerStats.map(([value, label, desc]) => (
              <article key={label} className="rounded-lg border border-white/10 bg-white/8 p-5">
                <p className="text-3xl font-black text-cyan-200">{value}</p>
                <h3 className="mt-2 text-base font-bold">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-cyan-50/72">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">Quy trình</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">Doanh nghiệp của bạn đã sẵn sàng chưa?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([step, title, desc]) => (
              <article key={step} className="rounded-[24px] border border-cyan-100 bg-cyan-50/60 p-5 shadow-sm">
                <p className="text-4xl font-black text-cyan-700">{step}</p>
                <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking-b2b" className="bg-gradient-to-b from-white via-cyan-50 to-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <a href={`tel:${contactInfo.offices[0].hotline}`} className="flex h-14 w-full items-center justify-center rounded-[14px] bg-cyan-500 px-6 text-center text-lg font-extrabold text-slate-950 transition-opacity hover:opacity-90 md:h-16 md:px-8 md:text-[1.65rem]">
            Liên hệ để nhận báo giá B2B
          </a>
          <h2 className="mb-4 pt-5 text-xl font-bold text-black md:text-3xl">Đối tác của bạn đã sẵn sàng chưa?</h2>
          <p className="mb-8 text-sm leading-7 text-slate-600 md:text-[16px]">
            Hãy cung cấp thông tin để Dolic tư vấn chính sách, danh mục và cấu hình phù hợp với mô hình kinh doanh hoặc trang trại của bạn.
          </p>
          <form className="mt-8 space-y-6 md:mt-10">
            <div className="grid gap-5 md:grid-cols-2">
              {["Nhập họ và tên", "Nhập số điện thoại", "Tỉnh/Thành", "Vai trò: đại lý, chủ trại, dự án"].map((placeholder) => (
                <input key={placeholder} className="h-14 w-full rounded-[14px] border border-cyan-200 bg-cyan-50 px-5 text-base text-[#111827] outline-none placeholder:text-[#8b96a5] focus:border-cyan-500 md:text-[1.05rem]" placeholder={placeholder} />
              ))}
            </div>
            <textarea className="w-full rounded-[14px] border border-cyan-200 bg-cyan-50 px-5 py-4 text-base text-[#111827] outline-none placeholder:text-[#8b96a5] focus:border-cyan-500 md:text-[1.05rem]" rows={4} placeholder="Hãy cho Dolic biết bạn đang cần gì..." />
            <button type="button" className="h-14 w-full rounded-[14px] bg-cyan-500 px-8 text-lg font-extrabold text-slate-950 transition-opacity hover:opacity-90 md:h-16 md:text-[1.45rem]">
              Đặt lịch tư vấn miễn phí
            </button>
          </form>
        </div>
      </section>

      <section id="faq-b2b" className="relative overflow-hidden py-20">
        <Image src="/assets/drive/experimental-farm/dolic-farm-real.png" alt="" fill sizes="100vw" className="pointer-events-none select-none object-cover object-center" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(240,253,255,0.84),rgba(236,254,255,0.76))]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="inline-flex flex-col items-center rounded-[32px] border border-white/60 bg-white/45 px-6 py-5 shadow-[0_18px_45px_-28px_rgba(8,145,178,0.35)] backdrop-blur-sm md:px-10">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-700">
                Câu hỏi thường gặp
              </p>
              <h2 className="text-3xl font-extrabold text-[#0A2E5C] md:text-5xl">
                Dolic B2B
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2 lg:gap-5">
            {faqItems.map(([question, answer], index) => (
              <details key={question} className="group rounded-[24px] border border-cyan-100 bg-white/95 p-5 shadow-[0_18px_50px_-30px_rgba(8,145,178,0.35)] transition-all duration-300 open:border-cyan-300 md:rounded-[28px] md:p-6">
                <summary className="flex cursor-pointer list-none items-start gap-4 marker:hidden">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-sm font-bold text-cyan-700">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold leading-tight text-slate-900 md:text-xl">{question}</h3>
                      <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-cyan-700 transition-transform duration-300 group-open:rotate-180" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{answer}</p>
                  </div>
                </summary>
              </details>
            ))}
          </div>
        </div>
      </section>

    </PageFrame>
  );
}
