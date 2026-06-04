"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Droplets,
  Factory,
  Handshake,
  Headphones,
  Images,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

const navItems = [
  ["Giải pháp", "#giai-phap"],
  ["Sản phẩm", "#san-pham"],
  ["Trang trại", "#trang-trai"],
  ["Đại lý", "#dai-ly"],
  ["Thư viện", "#thu-vien"],
  ["Liên hệ", "#lien-he"],
];

const solutionPaths = [
  {
    title: "Tôi nuôi tôm/cá",
    desc: "Khảo sát quy mô ao, chọn cấu hình oxy, bơm, đo nước và vận hành phù hợp từng vụ nuôi.",
    cta: "Đặt lịch khảo sát",
    href: "#lien-he",
    icon: Droplets,
  },
  {
    title: "Tôi muốn làm đại lý",
    desc: "Nhận bộ sản phẩm khác biệt, tài liệu marketing, đào tạo kỹ thuật và chính sách hỗ trợ rõ ràng.",
    cta: "Tìm hiểu đại lý",
    href: "#dai-ly",
    icon: Handshake,
  },
  {
    title: "Tôi đang dùng Dolic",
    desc: "Tra cứu bảo hành, hướng dẫn vận hành, hotline kỹ thuật và đặt câu hỏi cho kỹ sư Dolic.",
    cta: "Nhận hỗ trợ",
    href: "#ho-tro",
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

const productGroups = [
  {
    name: "Máy sục khí / Quạt nước",
    count: "7 mẫu",
    price: "Từ 5.9 triệu",
    desc: "Guồng 2-10 cánh, 0.75-2.2kW, hộp số hoặc bánh răng cho ao tôm/cá.",
    image: "/assets/product-aerator.png",
    specs: ["0.75-2.2kW", "2-10 cánh", "220V/380V", "Hộp số hoặc bánh răng"],
  },
  {
    name: "Thiết bị đo nước",
    count: "1 mẫu",
    price: "19 triệu",
    desc: "Máy đo oxy cầm tay DOEASY-2001 phục vụ kiểm tra nhanh tại ao.",
    image: "/assets/product-meter.png",
    specs: ["DOEASY-2001", "Đo oxy hòa tan", "Cầm tay", "Phù hợp kiểm tra ao"],
  },
  {
    name: "Máy cho ăn tự động",
    count: "4 mẫu",
    price: "Từ 3.7 triệu",
    desc: "Máy 2-6 bao, tùy chọn 180 độ và 360 độ cho mô hình cá/tôm.",
    image: "/assets/product-aerator.png",
    specs: ["2-6 bao", "180 độ/360 độ", "1200-1500W", "Phase 2"],
  },
  {
    name: "Bơm, lọc, xử lý nước",
    count: "6 mẫu",
    price: "Từ 2.6 triệu",
    desc: "Bơm 0.75-11kW, lưu lượng đến 380m3/h cho cấp thoát nước trang trại.",
    image: "/assets/product-pump.png",
    specs: ["0.75-11kW", "Lưu lượng đến 380m3/h", "Bơm nổi/chìm", "Cấp thoát nước"],
  },
  {
    name: "Sục khí khí nén",
    count: "6 mẫu",
    price: "Từ 114.5 triệu",
    desc: "Hệ thống 7.5-30kW cho trang trại cần oxy ổn định và vận hành quy mô lớn.",
    image: "/assets/product-aerator.png",
    specs: ["7.5-30kW", "25-35KPA", "Trang trại lớn", "Giá trị cao"],
  },
  {
    name: "Tam hoa 3 quả phao",
    count: "4 mẫu",
    price: "Từ 6 triệu",
    desc: "Dòng biến tần và cơ, phù hợp tăng oxy linh hoạt cho ao nuôi.",
    image: "/assets/product-aerator.png",
    specs: ["0.75-2.2kW", "3 quả phao", "Biến tần/cơ", "Tăng oxy linh hoạt"],
  },
];

const productSlides = [
  {
    title: "Guồng sục khí cho ao tôm",
    subtitle: "Tạo oxy mạnh, dễ cấu hình theo diện tích ao",
    image: "/assets/product-aerator.png",
  },
  {
    title: "Bơm và xử lý nước",
    subtitle: "Ổn định cấp thoát nước cho vận hành trang trại",
    image: "/assets/product-pump.png",
  },
  {
    title: "Đo oxy và chất lượng nước",
    subtitle: "Kiểm tra nhanh các chỉ số rủi ro tại ao",
    image: "/assets/product-meter.png",
  },
];

const proofPoints = [
  ["Kiểm chứng thực địa", "Giải pháp được thử tại trang trại trước khi đưa vào tư vấn."],
  ["Đào tạo đại lý", "Đại lý không chỉ bán máy mà được huấn luyện để tư vấn đúng kỹ thuật."],
  ["Đồng hành tận ao", "Tư vấn cấu hình, hướng dẫn vận hành và hỗ trợ sau bán."],
  ["Bảo hành 12 tháng", "Áp dụng cho lỗi nhà sản xuất theo bảng báo giá hiện hành."],
];

const libraryItems = [
  ["Cách chọn guồng sục khí theo diện tích ao", "Hướng dẫn kỹ thuật"],
  ["Khi nào nên dùng sục khí khí nén?", "Hỏi kỹ sư Dolic"],
  ["Checklist kiểm tra oxy trước và sau khi cho ăn", "Vận hành ao"],
  ["Tài liệu cho đại lý: tư vấn combo giải pháp", "Đại lý"],
];

const formFields = [
  "Họ tên",
  "Số điện thoại/Zalo",
  "Tỉnh/Thành",
  "Loài đang nuôi hoặc mô hình kinh doanh",
];

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">{title}</h2>
      {desc ? <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p> : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
}) {
  const classes = {
    solid: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    outline: "border border-slate-300 bg-white text-slate-950 hover:border-cyan-500 hover:text-cyan-700",
    light: "border border-white/30 bg-white/10 text-white hover:bg-white/18",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition ${classes[variant]}`}
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<(typeof productGroups)[number] | null>(null);
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % productSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (direction: "prev" | "next") => {
    setActiveSlide((current) => {
      if (direction === "prev") {
        return current === 0 ? productSlides.length - 1 : current - 1;
      }

      return (current + 1) % productSlides.length;
    });
  };

  const activeProductSlide = productSlides[activeSlide];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#082A52]/92 text-white backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
          <a href="#" className="flex h-11 w-40 items-center justify-center rounded-md bg-white px-3 shadow-sm ring-1 ring-white/30">
            <Image src="/assets/logo-dolic.png" alt="Dolic" width={210} height={84} className="h-auto w-full object-contain" priority />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-cyan-50/85 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <PrimaryButton href="tel:0397581028" variant="light">
              <Phone className="h-4 w-4" />
              0397 581 028
            </PrimaryButton>
          </div>
          <a href="#lien-he" className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-400 px-3 text-sm font-bold text-slate-950 md:hidden">
            Liên hệ
          </a>
        </div>
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-[#082A52] pt-16 text-white">
        <Image
          src="/assets/aquaculture-hero.png"
          alt="Kỹ thuật viên kiểm tra hệ thống sục khí tại trang trại thuỷ sản"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,82,0.94)_0%,rgba(8,42,82,0.78)_36%,rgba(8,42,82,0.18)_72%)]" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-4 py-14 md:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
              Người nuôi hiểu người nuôi
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              Giải pháp trọn bộ cho trang trại thuỷ sản Việt Nam
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-cyan-50/88 md:text-lg">
              Dolic tư vấn thiết bị, hệ thống giám sát và vi sinh theo combo tích hợp, được kiểm chứng tại thực địa trước khi đồng hành cùng người nuôi đến tận ao.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="#lien-he">
                Khảo sát trang trại miễn phí
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <PrimaryButton href="#giai-phap" variant="light">
                Xem giải pháp
              </PrimaryButton>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["28+", "sản phẩm"],
                ["7", "nhóm thiết bị"],
                ["12 tháng", "bảo hành"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/14 bg-white/10 p-3 backdrop-blur">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs font-medium text-cyan-50/72">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showNotice ? (
        <div className="fixed bottom-5 left-4 right-4 z-50 mx-auto max-w-md rounded-lg border border-cyan-100 bg-white p-4 text-slate-950 shadow-2xl md:left-auto md:right-6">
          <button
            type="button"
            aria-label="Đóng thông báo"
            onClick={() => setShowNotice(false)}
            className="absolute right-3 top-3 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex gap-3 pr-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
              <Bell className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold">Đăng ký khảo sát miễn phí</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Dolic đang nhận thông tin trang trại để đề xuất combo oxy, bơm và đo nước phù hợp.
              </p>
              <a href="#lien-he" onClick={() => setShowNotice(false)} className="mt-3 inline-flex text-sm font-bold text-cyan-700">
                Gửi thông tin ngay
              </a>
            </div>
          </div>
        </div>
      ) : null}

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

      <section id="giai-phap" className="scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
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
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
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
                <h3 className="text-lg font-bold">{card.title}</h3>
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
        </div>
      </section>

      <section id="san-pham" className="scroll-mt-20 bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Danh mục sản phẩm"
            title="Thiết bị cốt lõi cho vận hành ao nuôi"
            desc="Danh mục hiện có được trích từ file sản phẩm và bảng báo giá Dolic. Giá chỉ là tham khảo, cấu hình cuối cùng sẽ được tư vấn theo thực tế trang trại."
          />

          <div className="mb-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
              <div className="relative aspect-[16/9]">
                {productSlides.map((slide, index) => (
                  <Image
                    key={slide.image}
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className={`object-cover transition-all duration-700 ${index === activeSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                    sizes="(min-width: 1024px) 760px, 100vw"
                  />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,6,23,0.78),rgba(2,6,23,0.1)_55%)]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-bold backdrop-blur">
                  <Images className="h-3.5 w-3.5" />
                  Ảnh sản phẩm
                </div>
                <h3 className="mt-3 text-2xl font-bold">{activeProductSlide.title}</h3>
                <p className="mt-1 text-sm text-slate-200">{activeProductSlide.subtitle}</p>
              </div>
              <div className="absolute right-4 top-4 flex gap-2">
                <button type="button" onClick={() => goToSlide("prev")} className="flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-slate-950 shadow transition hover:bg-white">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => goToSlide("next")} className="flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-slate-950 shadow transition hover:bg-white">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Chuyển cảnh tự động</p>
              <h3 className="mt-3 text-2xl font-bold">Lướt nhanh các nhóm thiết bị Dolic</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Carousel tự chạy để khách hàng nhìn thấy sản phẩm trước khi đọc chi tiết. Bấm từng chấm để chuyển ảnh hoặc dùng nút điều hướng.
              </p>
              <div className="mt-5 flex gap-2">
                {productSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Xem ${slide.title}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-10 bg-cyan-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {productGroups.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-lg">
                <button type="button" onClick={() => setSelectedProduct(product)} className="block w-full text-left">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 400px, 100vw" />
                    <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">
                      {product.count}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <Factory className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                      <h3 className="text-lg font-bold">{product.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.desc}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <p className="text-sm font-black text-[#0A2E5C]">{product.price}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-cyan-700">
                        Xem nhanh
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          {selectedProduct ? (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true">
              <div className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-lg bg-white shadow-2xl">
                <button
                  type="button"
                  aria-label="Đóng popup sản phẩm"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/92 text-slate-700 shadow transition hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-80 bg-slate-100">
                    <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" sizes="(min-width: 1024px) 520px, 100vw" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Popup sản phẩm</p>
                    <h3 className="mt-3 text-2xl font-bold">{selectedProduct.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{selectedProduct.desc}</p>
                    <p className="mt-5 text-lg font-black text-[#0A2E5C]">{selectedProduct.price}</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {selectedProduct.specs.map((spec) => (
                        <div key={spec} className="rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                          {spec}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button type="button" onClick={() => setSelectedProduct(null)} className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-400">
                        Chọn sản phẩm này
                      </button>
                      <a href="#lien-he" onClick={() => setSelectedProduct(null)} className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:border-cyan-500 hover:text-cyan-700">
                        Nhận báo giá
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-8 rounded-lg bg-[#0A2E5C] p-6 text-white md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h3 className="text-xl font-bold">Cần cấu hình theo diện tích ao?</h3>
              <p className="mt-2 text-sm leading-6 text-cyan-50/78">Gửi thông tin trang trại, Dolic sẽ đề xuất nhóm thiết bị và combo phù hợp trước khi báo giá.</p>
            </div>
            <div className="mt-5 flex gap-3 md:mt-0">
              <PrimaryButton href="#lien-he">Nhận tư vấn</PrimaryButton>
              <PrimaryButton href="tel:0352495893" variant="light">Gọi 0352 495 893</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="trang-trai" className="scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Trang trại thử nghiệm</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Kiểm chứng trước khi đưa giải pháp đến tay người nuôi</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Trang trại thử nghiệm là nền tảng để Dolic kiểm tra cấu hình thiết bị, quy trình vận hành và điểm rủi ro trong điều kiện thực tế. Đây là khác biệt quan trọng khi tư vấn cho chủ trang trại và đào tạo đại lý.
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

      <section id="dai-ly" className="scroll-mt-20 bg-[#071F3E] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Cơ hội đại lý</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Trở thành đại lý chuyên gia ngành thuỷ sản cùng Dolic</h2>
            <p className="mt-5 text-base leading-8 text-cyan-50/78">
              Dolic ưu tiên đại lý hiểu vùng nuôi, có năng lực tư vấn và muốn xây dựng kênh bán bền vững thay vì cạnh tranh bằng máy giá rẻ.
            </p>
            <PrimaryButton href="#lien-he">
              Đăng ký tìm hiểu chính sách
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [SlidersHorizontal, "Sản phẩm khác biệt", "Danh mục thiết bị theo combo, dễ tư vấn theo mô hình trang trại."],
              [BookOpen, "Tài liệu marketing", "Catalog, nội dung kỹ thuật và bộ tư vấn được chuẩn hóa theo brand."],
              [Wrench, "Đào tạo kỹ thuật", "Hỗ trợ đại lý hiểu cấu hình, vận hành và lỗi thường gặp."],
              [ShieldCheck, "Chính sách ổn định", "Bảo hành, giá và quy trình xử lý lead được thiết kế để mở rộng lâu dài."],
            ].map(([Icon, title, desc]) => (
              <div key={String(title)} className="rounded-lg border border-white/10 bg-white/8 p-5">
                <Icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 font-bold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-cyan-50/72">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="thu-vien" className="scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Thư viện kỹ thuật"
            title="Nội dung để người nuôi và đại lý ra quyết định tốt hơn"
            desc="Phase 1 có thể triển khai thư viện dạng bài viết, tải catalog và form Hỏi kỹ sư Dolic để tích lũy câu hỏi thực tế thành nội dung SEO."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {libraryItems.map(([title, type]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{type}</span>
                <h3 className="mt-4 min-h-16 font-bold leading-6">{title}</h3>
                <a href="#lien-he" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                  Hỏi kỹ sư
                  <MessageCircle className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ho-tro" className="scroll-mt-20 bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Hỗ trợ khách hàng</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal">Đồng hành từ tư vấn đến vận hành</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:col-span-2">
            {[
              [ClipboardCheck, "Khảo sát", "Ghi nhận diện tích, loài nuôi, mật độ và hiện trạng thiết bị."],
              [Sparkles, "Cấu hình", "Đề xuất combo theo mục tiêu oxy, nước, giám sát và ngân sách."],
              [Headphones, "Sau bán", "Bảo hành 12 tháng, hướng dẫn vận hành và hotline kỹ thuật."],
            ].map(([Icon, title, desc]) => (
              <div key={String(title)} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <Icon className="h-6 w-6 text-cyan-700" />
                <h3 className="mt-4 font-bold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lien-he" className="scroll-mt-20 bg-slate-950 px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Liên hệ Dolic</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Gửi thông tin để nhận tư vấn cấu hình phù hợp</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Web là kênh tạo lead. Sau khi nhận thông tin, đội ngũ Dolic sẽ liên hệ qua điện thoại hoặc Zalo để xác nhận nhu cầu và đề xuất bước tiếp theo.
            </p>
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

      <footer className="bg-[#071F3E] px-4 py-8 text-sm text-cyan-50/70 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex h-12 w-36 items-center justify-center rounded-md bg-white px-3">
              <Image src="/assets/logo-dolic.png" alt="Dolic" width={180} height={72} className="h-auto w-full object-contain" />
            </div>
            <p className="mt-3">Dolic - Thương hiệu của sự an tâm.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#giai-phap" className="hover:text-white">Giải pháp</a>
            <a href="#san-pham" className="hover:text-white">Sản phẩm</a>
            <a href="#dai-ly" className="hover:text-white">Đại lý</a>
            <a href="#lien-he" className="hover:text-white">Liên hệ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
