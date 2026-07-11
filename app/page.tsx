import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShoppingCart } from "lucide-react";
import { CompanyPresenceSection } from "@/components/company-presence-section";
import { HomeLibrarySection } from "@/components/home-library-section";
import { HomeRegionProductSection } from "@/components/home-region-product-section";
import { SocialLinks } from "@/components/social-links";
import { contactInfo } from "@/lib/site-data";

const heroLinks = [
  { label: "Trang trại", href: "/trang-trai" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Giải pháp", href: "/giai-phap" },
  { label: "Đại lý", href: "/dai-ly" },
  { label: "B2B", href: "/b2b" },
  { label: "Thư viện", href: "/thu-vien", suffix: "Tin mới" },
];

const actionLinks = [
  { label: "Tư vấn", href: "/lien-he", icon: Phone },
  { label: "Sản phẩm", href: "/san-pham", icon: ShoppingCart },
  { label: "Đại lý", href: "/dai-ly", icon: MapPin },
];

const featurePanels = [
  {
    title: "Trang trại thực nghiệm",
    desc: "120.000m2 ao nuôi là nơi Dolic kiểm chứng thiết bị và mức tiêu thụ điện trước khi tư vấn cho người nuôi.",
    href: "/trang-trai",
    image: "/assets/drive/experimental-farm/dolic-farm-real.png",
  },
  {
    title: "Hiệu năng và tiết kiệm điện",
    desc: "Tập trung vào quạt nước, bơm, sục khí và phương án vận hành giúp giảm hao phí điện trong vụ nuôi.",
    href: "/giai-phap",
    image: "/assets/drive/performance/1JRKM8T8D_5FLBM0.jpg",
  },
  {
    title: "Từ sản phẩm đến giải pháp",
    desc: "Từ Bắc Giang, Dolic mở rộng mạng lưới Nam - Bắc, đồng hành cùng đại lý và hộ nuôi bằng dữ liệu thực địa.",
    href: "/about-us",
    image: "/assets/drive/exhibition/IMG_6009.PNG",
  },
];

const homeQuickLinks = [
  ["Về chúng tôi", "/about-us"],
  ["Giải pháp", "/giai-phap"],
  ["Đại lý", "/dai-ly"],
  ["Thư viện", "/thu-vien"],
  ["Chính sách bảo mật", "/chinh-sach-cookie"],
];

export default function HomePage() {
  return (
    <main className="home-pizza-style min-h-screen bg-[#05182f] text-white">
      <section className="relative min-h-[100svh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/drive/customer-farm/farm-anh-nam-quang-ninh.mp4"
          poster="/assets/drive/customer-farm/customer-aerator-installed.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,24,0.72)_0%,rgba(2,11,24,0.34)_50%,rgba(2,11,24,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,24,0.46)_0%,rgba(2,11,24,0.08)_38%,rgba(2,11,24,0.72)_100%)]" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-28 pt-28 md:px-10 lg:pb-16">
          <div className="max-w-[880px] pb-8 md:pb-0">
            <p className="mb-5 max-w-xl text-sm font-bold uppercase tracking-[0.22em] text-cyan-100/86">Người nuôi hiểu người nuôi</p>
            <nav aria-label="Điểm đến chính" className="grid gap-0.5">
              {heroLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex w-fit items-baseline gap-4 font-serif text-[clamp(3rem,9vw,6.8rem)] leading-[0.95] tracking-normal transition duration-300 ${
                    item.label === "Sản phẩm" ? "text-white" : "text-white/45 hover:text-white/78"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.suffix ? <span className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-white/68">{item.suffix}</span> : null}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <nav className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-3 border-t border-white/14 bg-black/38 text-white backdrop-blur md:hidden">
          {actionLinks.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="flex min-h-16 items-center justify-center gap-2 border-r border-white/10 text-xs font-bold uppercase tracking-[0.12em] last:border-r-0">
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </section>

      <CompanyPresenceSection />

      <HomeRegionProductSection />

      <HomeLibrarySection />

      <section className="bg-[#0A2E5C] text-white">
        <div className="relative px-5 py-14 text-center md:px-10 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.16em]">Tầm nhìn Dolic</p>
          <div className="mx-auto mt-8 grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center md:text-left">
            <h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-normal">
              Mảnh ghép tin cậy trong mỗi vụ nuôi Việt
            </h2>
            <Link
              href="/about-us"
              className="mx-auto flex h-36 w-36 shrink-0 items-center justify-center rounded-full border border-white/72 font-serif text-2xl leading-none transition hover:bg-white hover:text-[#0A2E5C] md:mx-0 md:h-40 md:w-40"
            >
              Xem
              <br />
              thêm
            </Link>
          </div>
        </div>

        <div className="grid min-h-[620px] md:grid-cols-[1.4fr_0.8fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-slate-900 md:min-h-[620px]">
            <Image
              src="/assets/drive/exhibition/IMG_6009.PNG"
              alt="Dolic tại triển lãm công nghệ quốc tế"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,24,0.28),rgba(2,11,24,0.05))]" />
          </div>

          <div className="flex flex-col justify-between bg-[#061B35] px-6 py-12 text-white md:px-12 md:py-16">
            <div>
              <h3 className="font-serif text-[clamp(3rem,5vw,5.4rem)] leading-none tracking-normal">Đồng hành!</h3>
              <p className="mt-8 max-w-md text-xl font-semibold leading-8 text-white/82 md:text-2xl md:leading-10">
                Từ trang trại thực nghiệm đến từng ao nuôi, Dolic kiểm chứng giải pháp, đào tạo đại lý theo bộ quy trình chuẩn và đồng hành cùng người nuôi.
              </p>
            </div>
            <Link
              href="/lien-he"
              className="mt-12 flex h-36 w-36 items-center justify-center rounded-full bg-white font-serif text-2xl leading-none text-[#17234d] transition hover:bg-cyan-100 md:h-40 md:w-40"
            >
              Tư vấn
              <br />
              ngay
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8F7] px-4 py-16 text-slate-950 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Dolic Vietnam</p>
              <h1 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl">Thiết bị thuỷ sản được kiểm chứng tại trang trại thử nghiệm</h1>
            </div>
          </div>

          <div className="mb-8 overflow-hidden rounded-md bg-[#061B35]">
            <div className="relative aspect-[16/8] min-h-[320px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/assets/drive/experimental-farm/dolic-farm-video.mp4"
                poster="/assets/drive/customer-farm/customer-aerator-installed.jpg"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.7),rgba(3,18,38,0.18))]" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featurePanels.map((item) => (
              <Link key={item.href} href={item.href} className="group overflow-hidden rounded-md bg-white shadow-[0_26px_80px_-58px_rgba(15,23,42,0.75)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`transition duration-500 group-hover:scale-105 ${item.title === "Hiệu năng và tiết kiệm điện" ? "object-contain bg-slate-100 p-4" : "object-cover"}`}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-700">
                    Xem tiếp
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-slate-950 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Câu chuyện thương hiệu</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Lịch sử hình thành Dolic từ ao nuôi gia đình</h2>
          </div>
          <Link href="/about-us#lich-su" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#0A2E5C] px-5 text-sm font-black text-white transition hover:bg-[#061B35]">
            Xem câu chuyện
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#071F3E] px-4 py-14 text-white md:px-8 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-white/10 py-10 md:grid-cols-[0.8fr_0.9fr_1.3fr]">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-cyan-200">Dolic Vietnam</h3>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Liên kết nhanh</h3>
            <nav className="mt-4 grid gap-2">
              {homeQuickLinks.map(([label, href]) => (
                <Link key={href} href={href} className="w-fit text-sm font-semibold text-cyan-50/80 transition hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">CÔNG TY TNHH THUỶ SẢN DOLIC</h3>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-cyan-50/80">
              <p>Hotline miền Nam: {contactInfo.offices[0].displayHotline}</p>
              <p>Hotline miền Bắc: {contactInfo.offices[1].displayHotline}</p>
              <p>Email for inquiry: {contactInfo.email}</p>
              <p>Email for feedback: feedback@dolic.vn</p>
              <p>Miền Nam: {contactInfo.offices[0].address}</p>
              <p>Miền Bắc: {contactInfo.offices[1].address}</p>
            </div>
            <div className="mt-5">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-cyan-200">Facebook · TikTok · YouTube · Instagram</p>
              <SocialLinks variant="footer" tone="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061B35] px-4 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Sẵn sàng trao đổi giải pháp</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Tư vấn theo ao, theo điện năng và mục tiêu vụ nuôi</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href={`tel:${contactInfo.offices[0].hotline}`} className="rounded-md bg-cyan-400 px-5 py-4 text-center font-black text-slate-950 transition hover:bg-cyan-300">
              Gọi miền Nam
              <span className="block text-sm font-bold">{contactInfo.offices[0].displayHotline}</span>
            </Link>
            <Link href={`tel:${contactInfo.offices[1].hotline}`} className="rounded-md border border-white/18 px-5 py-4 text-center font-black text-white transition hover:bg-white/10">
              Gọi miền Bắc
              <span className="block text-sm font-bold">{contactInfo.offices[1].displayHotline}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
