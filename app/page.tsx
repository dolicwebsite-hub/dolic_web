import Image from "next/image";
import { ArrowRight, BookOpen, Camera, Check, Gauge, MessageSquareQuote, Newspaper } from "lucide-react";
import { allProducts, productCategories } from "@/lib/site-data";
import { PageFrame, PrimaryButton } from "@/components/site-chrome";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const brandPages = [
  {
    title: "Bắt đầu từ chính nghề nuôi",
    desc: "Dolic được kiến tạo từ trải nghiệm thật với ao tôm, ao cá: tiền điện, oxy, máy móc và những đêm phải xử lý sự cố tại ao.",
  },
  {
    title: "Người nuôi hiểu người nuôi",
    desc: "Tư vấn không dừng ở thông số máy. Dolic nhìn thiết bị theo điều kiện ao, điện áp, mật độ nuôi và chi phí vận hành của từng mô hình.",
  },
  {
    title: "Tập trung vào mắt xích thiết bị",
    desc: "Định hướng hiện tại là máy móc thiết bị giúp tối ưu điện năng, độ bền và khả năng hợp tác với các đơn vị giải pháp trang trại khác.",
  },
  {
    title: "Trang tiếp theo",
    desc: "Chừa nội dung câu chuyện thương hiệu chi tiết, hình ảnh người sáng lập và các mốc phát triển chính thức.",
  },
];

const companionStats = [
  ["Đang cập nhật", "diện tích Dolic đồng hành", "Số liệu sẽ nhập theo thống kê trang trại và đại lý."],
  ["Đang cập nhật", "khách hàng quay lại mua", "Chỉ dùng số chính thức để giữ độ tin cậy của thương hiệu."],
  ["Đang cập nhật", "diện tích trang trại thực nghiệm", "Phần này dành cho trại Dolic và trại đối tác thử nghiệm."],
];

const fieldProofs = [
  "Trang trại Dolic dùng để chạy thử, đo điện năng và theo dõi độ ổn định thiết bị.",
  "Trang trại đối tác tiên phong cho phép so sánh thực tế giữa cấu hình Dolic và sản phẩm khác.",
  "Dữ liệu vận hành sẽ được chuyển thành khuyến nghị cấu hình dễ hiểu cho người nuôi.",
];

const efficiencyStats = [
  ["20-50%", "mục tiêu tiết kiệm điện", "Tối ưu bằng cách chọn đúng nhóm máy, công suất và cách bố trí theo ao."],
  ["24/7", "vận hành liên tục", "Ưu tiên thiết bị chịu tải tốt cho môi trường ao nuôi hoạt động ngày đêm."],
  ["12 tháng", "bảo hành hiện hành", "Hỗ trợ kỹ thuật và bảo hành theo chính sách đang áp dụng."],
];

const productTiles = productCategories.slice(0, 6).map((category) => ({
  title: category.name,
  desc: category.summary,
  image: category.image,
  href: `/san-pham#${category.id}`,
  count: category.products.length > 0 ? `${category.products.length} máy` : "Chờ combo",
}));

const testimonials = [
  ["Video khách hàng", "Ô chờ cho clip người nuôi chia sẻ sau khi dùng quạt nước, bơm hoặc sục khí Dolic."],
  ["Hình ảnh thực tế", "Lưu ảnh ao, máy đang chạy, đại lý lắp đặt và các tình huống trước/sau."],
  ["Text ngắn", "Trích nhận xét súc tích, có tên khu vực hoặc mô hình nuôi khi được phép công bố."],
];

const libraryItems = [
  ["Triển lãm & sự kiện", "Tin Dolic tham gia triển lãm, gặp đại lý và kết nối đối tác ngành thủy sản."],
  ["Ứng dụng công nghệ sâu", "Bài viết về thiết bị, đo đạc, tối ưu điện và cách đọc hiệu năng vận hành."],
  ["Kinh nghiệm người nuôi", "Nội dung thực dụng cho người nuôi tôm cá, tập trung vào vận hành và chi phí."],
];

export default function HomePage() {
  return (
    <PageFrame>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#061B35] text-white">
        <Image
          src="/assets/aquaculture-hero.png"
          alt="Trang trại nuôi trồng thuỷ sản vận hành thiết bị Dolic"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,53,0.82)_0%,rgba(6,27,53,0.58)_46%,rgba(6,27,53,0.9)_100%)] md:bg-[linear-gradient(90deg,rgba(6,27,53,0.92)_0%,rgba(6,27,53,0.72)_42%,rgba(6,27,53,0.2)_78%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-14 pt-28 md:px-8 md:pb-16">
          <div className="max-w-3xl">
            <p className="hero-enter inline-flex rounded-full border border-cyan-100/28 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-50 backdrop-blur">
              Người nuôi hiểu người nuôi
            </p>
            <h1 className="hero-enter hero-enter-1 mt-5 text-3xl font-bold leading-tight tracking-normal sm:text-5xl md:text-6xl">
              Giải pháp tối ưu điện năng và bền vững cho ngành nuôi trồng thuỷ sản
            </h1>
            <p className="hero-enter hero-enter-2 mt-5 max-w-2xl text-base leading-8 text-cyan-50/88 md:text-lg">
              Dolic tập trung vào máy móc thiết bị: sục khí, quạt nước, bơm và đo nước được cấu hình theo thực tế ao nuôi để giảm hao phí điện, tăng độ bền và dễ hợp tác trong các dự án trang trại.
            </p>
            <div className="hero-enter hero-enter-3 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/san-pham">
                Xem danh mục máy
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <PrimaryButton href="/about-us" variant="light">
                Câu chuyện Dolic
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll>
      <section className="bg-[#F5F8F7] px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Câu chuyện thương hiệu</p>
            <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl md:text-4xl">Một cuốn sách mở về hành trình từ ao nuôi</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {brandPages.map((page, index) => (
              <article key={page.title} className="motion-interactive lift-hover min-h-64 rounded-md border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] md:p-8" style={{ transitionDelay: `${index * 40}ms` }}>
                <div className="flex items-center justify-between gap-4">
                  <BookOpen className="h-6 w-6 text-cyan-700" />
                  <span className="text-sm font-black text-slate-300">Trang {index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-slate-950">{page.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{page.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={40}>
      <section className="bg-white px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Sự đồng hành của chúng tôi</p>
            <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl md:text-4xl">Số liệu sẽ là bằng chứng, không phải khẩu hiệu</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {companionStats.map(([value, label, desc], index) => (
              <article key={label} className="motion-interactive lift-hover rounded-md border border-slate-200 bg-slate-50 p-5" style={{ transitionDelay: `${index * 35}ms` }}>
                <p className="text-3xl font-black text-[#0A2E5C]">{value}</p>
                <h3 className="mt-3 text-base font-bold text-slate-950">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section className="bg-[#071F3E] px-4 py-14 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-900">
            <Image src="/assets/aquaculture-hero.png" alt="Trang trại thực địa kiểm chứng thiết bị Dolic" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Trang trại thực địa kiểm chứng</p>
            <h2 className="mt-3 text-2xl font-bold tracking-normal sm:text-3xl md:text-4xl">Thử trước ở ao thật, rồi mới tư vấn rộng rãi</h2>
            <p className="mt-5 text-sm leading-7 text-cyan-50/78 sm:text-base sm:leading-8">
              Khu vực này dành cho hình ảnh trại Dolic và các trại đối tác tiên phong. Khi có dữ liệu chính thức, mỗi thử nghiệm có thể kèm chỉ số điện năng, độ ổn định oxy và nhận xét vận hành.
            </p>
            <div className="mt-6 grid gap-3">
              {fieldProofs.map((item) => (
                <p key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-3 text-sm leading-6 text-cyan-50/82">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={50}>
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#eef8fb_100%)] px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Hiệu năng cao & tiết kiệm điện</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-normal text-slate-950 sm:text-3xl md:text-4xl">
              Trọng tâm là chi phí điện và độ bền của mắt xích máy móc
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Dolic không định vị là đơn vị bao trọn mọi hạng mục trang trại. Thế mạnh hiện tại là thiết bị và cấu hình vận hành, giúp người nuôi và các đối tác chuyên về thiết kế, thuốc hoặc kỹ thuật trại có một mắt xích máy móc rõ ràng, dễ đo hiệu quả.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {efficiencyStats.map(([value, label, desc], index) => (
              <article key={label} className="motion-interactive lift-hover rounded-md border border-cyan-100 bg-white p-4 shadow-sm" style={{ transitionDelay: `${index * 35}ms` }}>
                <p className="text-2xl font-black text-[#0A2E5C]">{value}</p>
                <h3 className="mt-2 text-sm font-bold text-cyan-800">{label}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-500">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={70}>
      <section className="bg-white px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Sản phẩm</p>
              <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl md:text-4xl">Danh mục máy và ô chờ combo thiết bị</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Combo sẽ được thêm như một sản phẩm riêng khi Dolic chốt cấu hình theo mô hình ao và mục tiêu tiết kiệm điện.
              </p>
            </div>
            <PrimaryButton href="/san-pham" variant="outline">
              Xem tất cả {allProducts.length} sản phẩm
            </PrimaryButton>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productTiles.map((item, index) => (
              <a key={item.title} href={item.href} className="motion-interactive pressable lift-hover group overflow-hidden rounded-md border border-slate-200 bg-slate-50 hover:border-cyan-300 hover:shadow-lg" style={{ transitionDelay: `${index * 35}ms` }}>
                <div className="relative h-56 bg-white">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1280px) 50vw, 33vw" className="object-contain p-6 transition duration-300 group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-black uppercase text-slate-950">{item.count}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">{item.desc}</p>
                  <span className="motion-interactive mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 group-hover:gap-3">
                    Xem danh mục
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={90}>
      <section className="bg-[#F5F8F7] px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Khách hàng nói gì về Dolic</p>
            <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl md:text-4xl">Chừa sẵn cấu trúc cho video, hình ảnh và nhận xét thật</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map(([title, desc], index) => (
              <article key={title} className="motion-interactive lift-hover rounded-md border border-slate-200 bg-white p-5" style={{ transitionDelay: `${index * 35}ms` }}>
                <MessageSquareQuote className="h-6 w-6 text-cyan-700" />
                <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll delay={110}>
      <section className="bg-white px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Thư viện</p>
              <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl md:text-4xl">Thông tin hữu ích cho người nuôi tôm cá</h2>
            </div>
            <PrimaryButton href="/thu-vien" variant="outline">
              Xem thư viện
            </PrimaryButton>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {libraryItems.map(([title, desc], index) => {
              const Icon = [Newspaper, Gauge, Camera][index];
              return (
                <article key={title} className="motion-interactive lift-hover rounded-md border border-slate-200 bg-slate-50 p-5">
                  <Icon className="h-6 w-6 text-cyan-700" />
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      </RevealOnScroll>
    </PageFrame>
  );
}
