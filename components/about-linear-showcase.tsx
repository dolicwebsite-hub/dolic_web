import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, HeartHandshake, Leaf, Network, ShieldCheck, UsersRound } from "lucide-react";

const timeline = [
  {
    year: "1996",
    title: "Hai bàn tay trắng",
    image: "/assets/drive/experimental-farm/warehouse.png",
    fit: "cover",
    text:
      "Từ câu hỏi trăn trở của tuổi đôi mươi, ông Bùi Văn Tới cùng người vợ tảo tần đồng lòng gây dựng cơ nghiệp từ hai bàn tay trắng. Những viên gạch đầu tiên của Dolic được đặt bằng bản lĩnh của người cha, sự kiên trung của người mẹ và niềm tin mãnh liệt của tuổi trẻ.",
  },
  {
    year: "1997",
    title: "Trang trại đầu tiên tại Bắc Giang",
    image: "/assets/drive/customer-farm/customer-farm-4.jpg",
    fit: "cover",
    text:
      "Với số vốn vay hoàn toàn bằng tín chấp, từ vài người họ hàng tin vào ý chí của ông, ông bắt đầu dựng trang trại ngay trên mảnh đất quê hương Bắc Giang. Không có gì ngoài đôi tay, lòng tin và một lời hứa với chính mình.",
  },
  {
    year: "2016",
    title: "Trang trại 12ha",
    image: "/assets/drive/customer-farm/customer-farm-2.jpg",
    fit: "cover",
    text:
      "Sau hai mươi năm bền bỉ, trang trại nuôi trồng thủy sản rộng 12 ha trở thành gốc rễ tri thức của Dolic. Hai mươi năm ấy không chỉ là số diện tích tích luỹ được, mà là sự thấu hiểu tận cùng những khó khăn của người nuôi và về sau trở thành trang trại thực nghiệm và cũng là gốc rễ tri thức của Dolic.",
  },
  {
    year: "2019",
    title: "Ứng dụng vi sinh và máy móc trên ao",
    image: "/assets/drive/experimental-farm/device-on-pond.jpg",
    fit: "cover",
    text:
      "Sau nhiều mùa vụ thất thoát vì dịch bệnh, nguồn nước khó kiểm soát và chi phí điện năng không được tối ưu, trang trại Dolic đi tìm lời giải bằng công nghệ vi sinh và cũng trở thành đơn vị tiên phong ở Bắc Giang áp dụng công nghệ vi sinh để “nuôi nước” và đưa máy móc hiện đại vào quy trình nuôi.",
  },
  {
    year: "2020",
    title: "Thiết bị đã qua kiểm chứng",
    image: "/assets/drive/experimental-farm/comparison-aerator-1.jpg",
    fit: "cover",
    text:
      "Hiểu rõ trên ao thật sự cần gì, Dolic tuyển chọn và đưa những thiết bị máy móc tốt đã được kiểm chứng trên chính trại nuôi của mình đến với bà con các vùng lân cận.",
  },
  {
    year: "2024",
    title: "Công ty TNHH Thuỷ sản Dolic chính thức thành lập",
    image: "/assets/drive/exhibition/IMG_6009.PNG",
    fit: "cover",
    text:
      "“Một cây làm chẳng nên non\nBa cây chụm lại nên hòn núi cao.”\n\nNăm 2024, Công ty TNHH Thuỷ sản Dolic chính thức thành lập. Tên thương hiệu được ghép từ tên của ba anh em trong gia đình-  biểu trưng cho tinh thần đoàn kết, lấy gia đình làm gốc, lấy biết ơn làm kim chỉ nam.\n\nNiềm đam mê và ý chí của người cha với một nền nông nghiệp bền vững được người con trai cả, anh Bùi Quý Đôn, kế thừa bằng tấm lòng và phát huy bằng tri thức. Anh theo học chuyên ngành Thuỷ sản học tại Học viện Nông nghiệp Việt Nam, tiếp tục học lên chương trình thạc sĩ và đảm nhận vai trò Giám đốc Kinh doanh của Dolic.",
  },
  {
    year: "2025",
    title: "Mạng lưới đại lý và vùng nuôi",
    image: "/assets/drive/customer-farm/customer-aerator-installed.jpg",
    fit: "cover",
    text:
      "Chỉ sau một năm, Dolic đưa những sản phẩm đã được kiểm chứng cùng tinh thần “người nuôi hiểu người nuôi” của Dolic đến tận tay bà con. Từ gốc Bắc Giang, Dolic vươn ra phủ khắp thị trường Nam – Bắc, phục vụ 34 tỉnh thành qua 15000 khách hàng bao gồm cả đại lý và các hộ nuôi. Cùng năm, Dolic đặt chi nhánh tại miền Nam để đứng gần hơn với các vùng nuôi trọng điểm.",
  },
  {
    year: "2026",
    title: "Từ sản phẩm đến giải pháp",
    headline: "Từ bán sản phẩm đến bán giải pháp",
    image: "/assets/drive/exhibition/IMG_6001.PNG",
    fit: "cover",
    text:
      "Người con gái thứ hai, chị Bùi Khánh Linh, tốt nghiệp chuyên ngành Quản trị Kinh doanh Nông nghiệp tiên tiến (Học viện Nông nghiệp Việt Nam) cùng khát vọng nâng tầm doanh nghiệp gia đình, đảm nhận vai trò Head of Marketing. Ngoài đam mê với kinh doanh, chị còn là gương mặt được công chúng yêu mến và biết đến với ý chí quyết tâm, sự bản lĩnh khi chinh phục danh hiệu Á hậu  tại các đấu trường nhan sắc lớn trong nước và quốc tế.\n\nĐây cũng là năm đánh dấu bước chuyển mình của Dolic: hiện diện tại nhiều triển lãm công nghệ quốc tế đầu ngành, tham gia hội thảo khoa học trong ngành nông nghiệp và nâng cấp từ bán sản phẩm hoàn thiện sang bán giải pháp tối ưu chi phí và bền vững cho ngành nuôi trồng thuỷ sản.",
  },
];

const systems = [
  {
    title: "Nền tảng gia đình",
    image: "/assets/drive/experimental-farm/warehouse.png",
    fit: "cover",
    text:
      "Dolic hình thành từ sự đồng lòng của một gia đình làm nghề nuôi thực địa, nơi lòng biết ơn và tinh thần đoàn kết trở thành gốc rễ cho mọi quyết định.",
    href: "#tam-nhin",
  },
  {
    title: "Trang trại thực nghiệm",
    image: "/assets/drive/customer-farm/customer-farm-2.jpg",
    fit: "cover",
    text:
      "120.000m2 ao nuôi là nơi thiết bị được chạy thử, đo đạc và hiệu chỉnh trong điều kiện thật trước khi được tư vấn rộng rãi.",
    href: "/trang-trai",
  },
  {
    title: "Mạng lưới người nuôi",
    image: "/assets/drive/customer-farm/customer-farm-2.jpg",
    fit: "cover",
    text:
      "Từ đại lý đến hộ nuôi, Dolic chọn đồng hành bằng đào tạo, quy trình và sự gần gũi của người đã trải qua khó khăn ngoài ao.",
    href: "/dai-ly",
  },
];

type Principle = {
  number: string;
  title: string;
  headline: string;
  desc: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  { number: "01", title: "Với gia đình", headline: "Lấy gia đình làm gốc, lấy biết ơn làm kim chỉ nam.", desc: "Mọi quyết định bắt đầu từ sự đoàn kết và lòng biết ơn.", icon: UsersRound },
  { number: "02", title: "Với người nuôi", headline: "Người nuôi hiểu người nuôi.", desc: "Là người bạn nghề, không phải người bán hàng; không khoảng cách giữa doanh nghiệp và bà con.", icon: HeartHandshake },
  { number: "03", title: "Với đại lý", headline: "Đào tạo từng đại lý thành chuyên gia, cùng nhau lớn.", desc: "Không xem đại lý là kênh bán, mà là đối tác cùng phát triển và cùng giữ uy tín.", icon: Network },
  { number: "04", title: "Với đội ngũ", headline: "Coi đồng đội như người trong nhà.", desc: "Lớn lên cùng nhau, trân trọng từng người góp sức dựng nên Dolic.", icon: BadgeCheck },
  { number: "05", title: "Với mỗi giải pháp", headline: "Kiểm chứng thực địa - không mang đến khách hàng những sản phẩm chưa được\nthực nghiệm.", desc: "Mọi sản phẩm đi qua trang trại thực nghiệm trước khi đến tay người nuôi.", icon: ShieldCheck },
  { number: "06", title: "Với môi trường", headline: "Vì Người nuôi hôm nay vì môi trường ngày mai.", desc: "Nuôi trồng bền vững là trách nhiệm, không phải khẩu hiệu.", icon: Leaf },
];

const commitments = [
  ["Hiệu năng cao", "Thiết bị vận hành tối ưu, tiết kiệm điện, tăng năng suất vụ nuôi."],
  ["Ổn định", "Vận hành đáng tin cậy trong nhiều điều kiện môi trường thuỷ sản khắc nghiệt."],
];

function Divider() {
  return (
    <div className="mx-auto my-8 flex max-w-5xl items-center gap-5 text-cyan-700" aria-hidden="true">
      <span className="h-px flex-1 bg-slate-300" />
      <span className="h-2 w-2 rotate-45 bg-current" />
      <span className="h-px flex-1 bg-slate-300" />
    </div>
  );
}

export function AboutLinearShowcase() {
  return (
    <>
      <section className="relative min-h-[86svh] overflow-hidden bg-[#061B35] text-white">
        <Image src="/assets/drive/customer-farm/customer-farm-2.jpg" alt="Trang trại thực nghiệm Dolic" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,53,0.18)_0%,rgba(6,27,53,0.38)_44%,rgba(6,27,53,0.88)_100%)]" />
        <div className="relative mx-auto flex min-h-[86svh] max-w-7xl items-end justify-center px-4 pb-16 pt-28 text-center md:px-8 md:pb-24">
          <div className="max-w-5xl">
            <p className="text-base font-bold uppercase tracking-[0.24em] text-cyan-100 md:text-xl">Dolic Vietnam</p>
            <h1 className="mt-5 font-serif text-4xl font-bold uppercase leading-[1.02] tracking-normal sm:text-5xl md:text-6xl">
              Người nuôi hiểu người nuôi
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-cyan-50/86 md:text-xl md:leading-9">
              Từ ao nuôi gia đình đến giải pháp bền vững, Dolic được hình thành bằng trải nghiệm thực địa, lòng biết ơn và khát vọng tối ưu chi phí cho người nuôi Việt.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] px-4 py-16 text-slate-950 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Image src="/favicon-32x32.png" alt="Dolic icon" width={42} height={42} className="mx-auto h-10 w-10" />
          <Divider />
          <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal md:text-5xl">Câu chuyện thương hiệu Dolic</h2>
          <Divider />
          <div className="mx-auto grid max-w-4xl gap-5 text-left text-base leading-8 text-slate-700 md:text-center md:text-lg md:leading-9">
            <p>
              Dolic không bắt đầu từ một bản giới thiệu doanh nghiệp, mà bắt đầu từ những ao nuôi thật: nguồn nước khó kiểm soát, dịch bệnh, chi phí điện và những khó khăn trong quá trình nuôi thực tế.
            </p>
            <p>
              Từ nền tảng gia đình, Dolic chọn đi bằng con đường kiểm chứng: thử nghiệm tại trang trại, đào tạo đại lý theo quy trình và đồng hành với người nuôi bằng sự thấu hiểu của người trong nghề.
            </p>
            <p>
              Điều Dolic theo đuổi không chỉ là bán một thiết bị, mà là đưa đến giải pháp vận hành ổn định, tiết kiệm điện và thân thiện với môi trường.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Divider />
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal text-slate-950 md:text-5xl">Ba nền tảng Dolic</h2>
            <Divider />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {systems.map((item) => (
              <article key={item.title} className="text-center">
                <div className={`relative mx-auto aspect-[4/3] w-full overflow-hidden bg-[#f3f5f5] ${item.fit === "contain" ? "p-10 md:p-14" : ""}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={item.fit === "contain" ? "object-contain p-10" : "object-cover"}
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold uppercase leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tam-nhin" className="bg-[#f7f6f2] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <Divider />
          <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal text-slate-950 md:text-5xl">Tầm nhìn - Sứ mệnh - Giá trị cốt lõi</h2>
          <Divider />
          <div className="grid gap-10 border-y border-slate-300 py-10">
            <article>
              <p className="text-base font-black uppercase tracking-[0.2em] text-cyan-700 md:text-lg">Tầm nhìn</p>
              <h3 className="mx-auto mt-4 max-w-5xl font-serif text-3xl font-bold leading-tight text-[#0A2E5C] md:text-4xl">
                Mảnh ghép đáng tin cậy
              </h3>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Trở thành mảnh ghép tin cậy trong mỗi vụ nuôi của người Việt — và mang giải pháp nuôi trồng bền vững của Việt Nam vươn ra Đông Nam Á.
              </p>
            </article>
            <article className="border-t border-slate-300 pt-10">
              <p className="text-base font-black uppercase tracking-[0.2em] text-cyan-700 md:text-lg">Sứ mệnh</p>
              <h3 className="mx-auto mt-4 max-w-5xl font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                Kiểm chứng, đào tạo, đồng hành
              </h3>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Kiểm chứng từng giải pháp tại trang trại thực nghiệm · đào tạo đại lý theo bộ quy trình chuẩn và đồng hành cùng người nuôi.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Divider />
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal text-slate-950 md:text-5xl">Nguyên tắc cốt lõi</h2>
            <Divider />
          </div>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ number, title, headline, desc, icon: Icon }) => (
              <article key={title} className="text-center">
                <Icon className="mx-auto h-9 w-9 text-cyan-700" />
                <p className="mt-5 text-sm font-black uppercase tracking-[0.24em] text-slate-400">{number}</p>
                <h3 className="mt-3 text-xl font-bold uppercase leading-tight text-slate-950">{title}</h3>
                <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#0A2E5C]">{headline}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lich-su" className="bg-[#061B35] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Divider />
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal md:text-5xl">Lịch sử hình thành</h2>
            <Divider />
          </div>
          <div className="grid gap-12">
            {timeline.map((item, index) => (
              <article key={item.year} className="grid gap-8 border-b border-white/14 pb-12 last:border-b-0 md:grid-cols-2 md:items-center">
                <div className={`relative aspect-[4/3] overflow-hidden bg-white/6 ${item.fit === "contain" ? "p-10 md:p-16" : ""} ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={item.fit === "contain" ? "object-contain p-10 brightness-0 invert" : "object-cover"}
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1 md:text-right" : ""}>
                  <p className="font-serif text-7xl leading-none text-cyan-200 md:text-8xl">{item.year}</p>
                  {"headline" in item ? <h3 className="mt-5 text-3xl font-bold uppercase leading-tight md:text-4xl">{item.headline}</h3> : null}
                  <p className="mt-5 whitespace-pre-line text-sm leading-7 text-cyan-50/76 md:text-base md:leading-8">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <Divider />
          <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal text-slate-950 md:text-5xl">Cam kết sản phẩm</h2>
          <Divider />
          <div className="grid gap-6 md:grid-cols-2">
            {commitments.map(([title, desc]) => (
              <article key={title} className="bg-white p-8 shadow-[0_22px_70px_-52px_rgba(15,23,42,0.75)]">
                <h3 className="font-serif text-3xl font-bold text-[#0A2E5C]">{title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061B35] px-4 py-20 text-white md:px-8 md:py-28">
        <Image src="/assets/drive/customer-farm/customer-aerator-installed.jpg" alt="Thiết bị Dolic vận hành trên ao" fill className="object-cover object-right opacity-24" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061B35_0%,rgba(6,27,53,0.94)_46%,rgba(6,27,53,0.58)_100%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Từ bán sản phẩm đến bán giải pháp</p>
          <h2 className="mt-5 font-serif text-4xl font-bold uppercase leading-tight md:text-6xl">
            Một vụ nuôi bền vững bắt đầu từ thiết bị được chọn đúng.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/san-pham" className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-black uppercase tracking-[0.12em] text-[#061B35] transition hover:bg-cyan-100">
              Xem sản phẩm
            </Link>
            <Link href="/lien-he" className="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10">
              Nhận tư vấn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
