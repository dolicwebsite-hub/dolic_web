import Image from "next/image";
import { ArrowRight, Check, Leaf, ShieldCheck, Zap } from "lucide-react";
import { FarmActivityRings } from "@/components/farm-activity-rings";
import { allProducts, productCategories } from "@/lib/site-data";
import { PageFrame, PrimaryButton } from "@/components/site-chrome";

const proofPoints = [
  ["Kiểm chứng thực địa", "Giải pháp được thử tại trang trại trước khi đưa vào tư vấn."],
  ["Đào tạo đại lý", "Đại lý không chỉ bán máy mà được huấn luyện để tư vấn đúng kỹ thuật."],
  ["Đồng hành tận ao", "Tư vấn cấu hình, hướng dẫn vận hành và hỗ trợ sau bán."],
  ["Bảo hành 12 tháng", "Áp dụng cho lỗi nhà sản xuất theo bảng báo giá hiện hành."],
];

const efficiencyStats = [
  ["20-50%", "tiết kiệm điện", "Tối ưu chi phí vận hành nhờ chọn đúng thiết bị và công suất."],
  ["24/7", "vận hành bền bỉ", "Ưu tiên thiết bị chịu tải tốt cho môi trường ao nuôi liên tục."],
  ["10+ năm", "định hướng tuổi thọ", "Tư vấn bảo trì và nâng cấp theo hướng đầu tư lâu dài."],
];

const missionPoints = [
  {
    title: "Tối ưu chi phí sản xuất",
    desc: "Giảm tiền điện, giảm sửa chữa lặt vặt và hạn chế mua sai cấu hình ngay từ đầu.",
    icon: Zap,
  },
  {
    title: "An tâm trong vận hành",
    desc: "Thiết bị ổn định hơn giúp giảm rủi ro sự cố oxy, cấp thoát nước và ca trực ban đêm.",
    icon: ShieldCheck,
  },
  {
    title: "Hướng tới bền vững",
    desc: "Ưu tiên công nghệ hiệu năng cao, giảm hao phí năng lượng và phù hợp trang trại hiện đại.",
    icon: Leaf,
  },
];

const strategicProducts = [
  {
    title: "Máy sục khí bản treo khí nén",
    badge: "Tối ưu điện",
    desc: "Giải pháp sục khí công suất lớn cho trang trại cần oxy ổn định, vận hành êm và giảm hao phí.",
    image: "/assets/products/air-blower-treo-khi-nen.jpg",
    href: "/san-pham#may-suc-khi-ban-treo-khi-nen",
  },
  {
    title: "Quạt nước hiệu năng cao",
    badge: "1 pha - 3 pha",
    desc: "Guồng quạt, hộp số hoặc bánh răng được cấu hình theo diện tích ao và mật độ nuôi.",
    image: "/assets/products/aerator-6-canh-15kw-hop-so-b.png",
    href: "/san-pham#may-suc-khi-quat-nuoc",
  },
  {
    title: "Bơm nước lưu lượng lớn",
    badge: "24/7",
    desc: "Nhóm bơm cấp thoát nước cho trang trại cần lưu lượng mạnh, ổn định và dễ bảo trì.",
    image: "/assets/products/pump-75kw-380v.png",
    href: "/san-pham#bom-loc-xu-ly-nuoc",
  },
];

export default function HomePage() {
  return (
    <PageFrame>
      <section className="relative min-h-[620px] overflow-hidden bg-[#082A52] text-white md:min-h-[720px]">
        <Image
          src="/assets/aquaculture-hero.png"
          alt="Kỹ thuật viên kiểm tra hệ thống sục khí tại trang trại thuỷ sản"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,42,82,0.92)_0%,rgba(8,42,82,0.82)_46%,rgba(8,42,82,0.46)_100%)] md:bg-[linear-gradient(90deg,rgba(8,42,82,0.94)_0%,rgba(8,42,82,0.78)_36%,rgba(8,42,82,0.18)_72%)]" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-10 md:min-h-[720px] md:px-8 md:py-14">
          <div className="max-w-2xl">
            <p className="inline-flex max-w-full rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-100 sm:text-xs sm:tracking-[0.18em]">
              Người nuôi hiểu người nuôi
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-normal sm:text-4xl md:text-6xl">
              Giải pháp trọn bộ cho trang trại thuỷ sản Việt Nam
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-cyan-50/88 sm:text-base md:text-lg md:leading-8">
              Dolic tư vấn thiết bị, hệ thống giám sát và combo vận hành được kiểm chứng tại thực địa trước khi đồng hành cùng người nuôi đến tận ao.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/lien-he">
                Khảo sát trang trại miễn phí
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <PrimaryButton href="/san-pham" variant="light">
                Xem sản phẩm
              </PrimaryButton>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 sm:gap-3 md:mt-10">
              {[
                [`${allProducts.length}+`, "sản phẩm"],
                [String(productCategories.length), "danh mục"],
                ["12 tháng", "bảo hành"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/14 bg-white/10 p-2.5 backdrop-blur sm:p-3">
                  <p className="text-xl font-black text-white sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[11px] font-medium leading-4 text-cyan-50/72 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 md:grid-cols-4 md:px-8">
          {proofPoints.map(([title, desc]) => (
            <div key={title} className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Check className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FarmActivityRings />

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#eef8fb_100%)] px-4 py-12 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Hiệu năng cao & tiết kiệm điện</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-normal text-slate-950 sm:text-3xl md:text-4xl">
              Không chỉ bán thiết bị, Dolic tập trung vào hiệu quả vận hành của trang trại
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Khi chi phí điện, vật tư và nhân công tăng, việc chọn đúng thiết bị quyết định trực tiếp đến lợi nhuận mỗi vụ nuôi. Dolic ưu tiên các cấu hình sục khí, bơm và đo nước giúp trang trại giảm hao phí, vận hành ổn định và dễ mở rộng.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {efficiencyStats.map(([value, label, desc]) => (
                <div key={label} className="rounded-lg border border-cyan-100 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-[#0A2E5C] sm:text-3xl">{value}</p>
                  <p className="mt-1 text-sm font-bold text-cyan-800">{label}</p>
                  <p className="mt-3 text-xs leading-5 text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {missionPoints.map(({ title, desc, icon: Icon }) => (
              <article key={title} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:gap-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-700 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950 sm:text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Bộ 3 sản phẩm chiến lược</p>
            <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl md:text-4xl">Nhóm thiết bị cốt lõi để trang trại vận hành trơn tru</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Dolic tập trung vào các nhóm máy tạo oxy, cấp thoát nước và kiểm soát môi trường ao để giảm chi phí vận hành thay vì chỉ bán từng máy lẻ.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {strategicProducts.map((item) => (
              <a key={item.title} href={item.href} className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm transition hover:border-cyan-300 hover:shadow-lg">
                <div className="relative h-56 bg-white">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-6 transition group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-black uppercase text-slate-950">{item.badge}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{item.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                    Xem danh mục
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </PageFrame>
  );
}
