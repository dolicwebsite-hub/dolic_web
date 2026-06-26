import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { contactInfo } from "@/lib/site-data";

const dealerPrinciples = [
  {
    title: "Không chỉ là kênh bán",
    desc: "Dolic xem đại lý là đối tác giữ uy tín tại vùng nuôi, cùng tư vấn đúng và cùng chịu trách nhiệm với người nuôi.",
    icon: Users,
  },
  {
    title: "Đào tạo để thành chuyên gia",
    desc: "Đại lý được hỗ trợ tài liệu, kiến thức vận hành và cách chọn cấu hình theo ao nuôi thay vì bán thiết bị rời rạc.",
    icon: BookOpen,
  },
  {
    title: "Giữ chuẩn thực địa",
    desc: "Sản phẩm đi qua trang trại thực nghiệm Dolic trước khi đưa vào danh mục tư vấn cho bà con.",
    icon: ShieldCheck,
  },
];

const dealerSteps = [
  ["01", "Tìm hiểu vùng nuôi", "Ghi nhận khu vực, nhóm khách hàng, mặt hàng đang bán và năng lực kỹ thuật của đại lý."],
  ["02", "Chọn danh mục phù hợp", "Dolic đề xuất nhóm thiết bị chủ lực theo nhu cầu vùng: quạt nước, bơm, sục khí, đo nước hoặc combo."],
  ["03", "Đào tạo tư vấn", "Cung cấp catalog, cách tính cấu hình, quy trình xử lý bảo hành và nội dung truyền thông bán hàng."],
  ["04", "Cùng phát triển thị trường", "Theo dõi phản hồi từ hộ nuôi, tối ưu chính sách nhập hàng và hỗ trợ triển khai lead tại địa phương."],
];

const partnerTypes = [
  "Cửa hàng vật tư thủy sản",
  "Đại lý vùng nuôi",
  "Đội kỹ thuật ao nuôi",
  "Đơn vị thi công farm",
  "Nhà phân phối thiết bị",
  "Đối tác B2B liên ngành",
];

export default function DealerPage() {
  return (
    <PageFrame>
      <section className="relative min-h-[88svh] overflow-hidden bg-[#061B35] px-5 pb-16 pt-32 text-white md:px-10 md:pb-24 md:pt-40">
        <Image
          src="/assets/drive/customer-farm/customer-farm-1.jpg"
          alt="Vùng nuôi đối tác Dolic"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,42,0.94)_0%,rgba(4,20,42,0.78)_48%,rgba(4,20,42,0.44)_100%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Cơ hội đại lý Dolic</p>
          <h1 className="mt-6 max-w-6xl font-serif text-[clamp(3.2rem,7.5vw,7.2rem)] leading-[1.08] tracking-normal">
            Cùng đại lý lớn lên bằng uy tín vùng nuôi
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-cyan-50/78">
            Dolic không xây mạng lưới bằng bán nhanh. Chúng tôi chọn những đối tác hiểu người nuôi, được đào tạo đúng quy trình và cùng giữ lời hứa về giải pháp đã kiểm chứng.
          </p>
          <Link href="#dang-ky-dai-ly" className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 text-sm font-black uppercase tracking-[0.08em] text-slate-950 transition hover:bg-cyan-300">
            Đăng ký làm đại lý
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-16 text-[#202b50] md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Our Vision</p>
              <h2 className="mt-4 font-serif text-[clamp(3.4rem,7vw,7rem)] leading-[0.96] tracking-normal">
                Người nuôi tin đại lý, đại lý tin Dolic
              </h2>
            </div>
            <p className="text-lg font-semibold leading-9 text-[#202b50]/72">
              Tầm nhìn của Dolic là xây dựng hệ sinh thái đại lý có năng lực tư vấn thật: mỗi điểm bán không chỉ giao hàng, mà còn là nơi người nuôi tìm được cấu hình đúng, bảo hành rõ và sự đồng hành tận ao.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {dealerPrinciples.map(({ title, desc, icon: Icon }) => (
              <article key={title} className="border-t border-[#202b50]/25 pt-6">
                <Icon className="h-8 w-8 text-cyan-700" />
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#202b50]/68">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#222c5a] text-white lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[660px]">
          <Image src="/assets/drive/exhibition/IMG_6001.PNG" alt="Dolic kết nối đối tác tại triển lãm" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center px-5 py-14 md:px-10 lg:px-16">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Dealer Mission</p>
          <h2 className="mt-5 font-serif text-[clamp(3.2rem,6vw,6rem)] leading-none tracking-normal">Đào tạo từng đại lý thành chuyên gia</h2>
          <p className="mt-8 max-w-2xl text-lg font-semibold leading-9 text-white/76">
            Đại lý Dolic được hỗ trợ để hiểu thiết bị, hiểu ao và tư vấn đúng bài toán của người nuôi. Sự phát triển bền vững không đến từ chiết khấu đơn lẻ, mà từ năng lực bán giải pháp.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              ["Catalog", "tài liệu bán hàng"],
              ["Kỹ thuật", "đào tạo cấu hình"],
              ["Bảo hành", "quy trình rõ ràng"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-cyan-200/35 pl-4">
                <p className="text-2xl font-black text-cyan-200">{value}</p>
                <p className="mt-1 text-sm font-bold text-white/62">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-slate-950 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Cách Dolic đồng hành</p>
            <h2 className="mt-4 text-3xl font-black tracking-normal md:text-5xl">Từ điểm bán địa phương đến mạng lưới chuyên gia vùng nuôi</h2>
            <div className="mt-9 grid gap-5">
              {dealerSteps.map(([step, title, desc]) => (
                <article key={step} className="grid gap-4 border-b border-slate-200 pb-5 sm:grid-cols-[82px_1fr]">
                  <p className="font-serif text-5xl leading-none text-cyan-700">{step}</p>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image src="/assets/drive/customer-farm/customer-farm-3.jpg" alt="Farm khách hàng Dolic" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image src="/assets/drive/experimental-farm/warehouse.png" alt="Kho thiết bị Dolic" fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image src="/assets/drive/experimental-farm/device-on-pond.jpg" alt="Thiết bị Dolic chạy trên ao" fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1E8] px-5 py-16 text-[#202b50] md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Đối tác phù hợp</p>
              <h2 className="mt-4 font-serif text-[clamp(3.2rem,6vw,5.8rem)] leading-none tracking-normal">Cùng một chuẩn uy tín</h2>
            </div>
            <div className="grid gap-px bg-[#202b50]/20 sm:grid-cols-2">
              {partnerTypes.map((item) => (
                <div key={item} className="flex min-h-24 items-center gap-3 bg-[#F4F1E8] p-5 text-lg font-black">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dang-ky-dai-ly" className="bg-[#071F3E] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Đăng ký đại lý</p>
            <h2 className="mt-4 text-3xl font-black tracking-normal md:text-5xl">Bắt đầu trao đổi chính sách phân phối Dolic</h2>
            <p className="mt-5 text-base font-semibold leading-8 text-cyan-50/72">
              Gửi thông tin khu vực và mô hình kinh doanh. Đội ngũ Dolic sẽ liên hệ để tư vấn danh mục phù hợp, mức nhập hàng và kế hoạch đào tạo.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-cyan-50/72">
              <p className="flex gap-3">
                <MapPin className="h-5 w-5 text-cyan-300" />
                Miền Nam: {contactInfo.offices[0].address}
              </p>
              <p className="flex gap-3">
                <MapPin className="h-5 w-5 text-cyan-300" />
                Miền Bắc: {contactInfo.offices[1].address}
              </p>
            </div>
          </div>

          <form className="bg-white p-5 text-slate-950 md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {["Họ tên", "Số điện thoại/Zalo", "Tỉnh/Thành đang kinh doanh", "Mô hình hiện tại"].map((placeholder) => (
                <input key={placeholder} className="h-12 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white" placeholder={placeholder} />
              ))}
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white" placeholder="Bạn đang muốn phân phối nhóm sản phẩm nào? Khu vực vùng nuôi nào là trọng tâm?" />
            <button type="button" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 text-sm font-black text-slate-950 transition hover:bg-cyan-400">
              Gửi đăng ký đại lý
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {contactInfo.offices.map((office) => (
                <Link key={office.region} href={`tel:${office.hotline}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-black text-[#0A2E5C] transition hover:border-cyan-500">
                  <Phone className="h-4 w-4" />
                  {office.displayHotline}
                </Link>
              ))}
            </div>
          </form>
        </div>
      </section>
    </PageFrame>
  );
}
