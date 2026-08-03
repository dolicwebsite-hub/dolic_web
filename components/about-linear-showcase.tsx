 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, ChevronDown, ChevronUp, HeartHandshake, Leaf, Network, ShieldCheck, UsersRound } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TimelineParallax } from "@/components/timeline-parallax";

const timeline = [
  {
    year: "2026",
    title: "Từ sản phẩm đến giải pháp",
    headline: "Từ bán sản phẩm đến bán giải pháp",
    image: "/assets/drive/history-website/history-2026.webp",
    fit: "cover",
    text:
      "Người con gái thứ hai, chị Bùi Khánh Linh, tốt nghiệp chuyên ngành Quản trị Kinh doanh Nông nghiệp tiên tiến (Học viện Nông nghiệp Việt Nam) cùng khát vọng nâng tầm doanh nghiệp gia đình, đảm nhận vai trò Head of Marketing. Ngoài đam mê với kinh doanh, chị còn là gương mặt được công chúng yêu mến và biết đến với ý chí quyết tâm, sự bản lĩnh khi chinh phục danh hiệu Á hậu tại các đấu trường nhan sắc lớn trong nước và quốc tế.\n\nĐây cũng là năm đánh dấu bước chuyển mình của Dolic: hiện diện tại nhiều triển lãm công nghệ quốc tế đầu ngành, tham gia hội thảo khoa học trong ngành nông nghiệp và nâng cấp từ bán sản phẩm hoàn thiện sang bán giải pháp tối ưu chi phí và bền vững cho ngành nuôi trồng thuỷ sản.",
  },
  {
    year: "2025",
    title: "Mạng lưới đại lý và vùng nuôi",
    image: "/assets/drive/history-website/history-office.webp",
    fit: "cover",
    text:
      "Chỉ sau một năm, Dolic đưa những sản phẩm đã được kiểm chứng cùng tinh thần “người nuôi hiểu người nuôi” của Dolic đến tận tay bà con. Từ gốc Bắc Giang, Dolic vươn ra phủ khắp thị trường Nam – Bắc, phục vụ 34 tỉnh thành qua 15000 khách hàng bao gồm cả đại lý và các hộ nuôi. Cùng năm, Dolic đặt chi nhánh tại miền Nam để đứng gần hơn với các vùng nuôi trọng điểm.",
  },
  {
    year: "2024",
    title: "Công ty TNHH Thuỷ sản Dolic chính thức thành lập",
    image: "/assets/drive/exhibition/IMG_6009.PNG",
    fit: "cover",
    text:
      "“Một cây làm chẳng nên non\nBa cây chụm lại nên hòn núi cao.”\n\nNăm 2024, Công ty TNHH Thuỷ sản Dolic chính thức thành lập. Tên thương hiệu được ghép từ tên của ba anh em trong gia đình- biểu trưng cho tinh thần đoàn kết, lấy gia đình làm gốc, lấy biết ơn làm kim chỉ nam.\n\nNiềm đam mê và ý chí của người cha với lĩnh vực nông nghiệp bền vững được người con trai cả, anh Bùi Quý Đôn, kế thừa bằng tấm lòng và phát huy bằng tri thức. Anh theo học chuyên ngành Thuỷ sản học tại Học viện Nông nghiệp Việt Nam, tiếp tục học lên chương trình thạc sĩ và đảm nhận vai trò Giám đốc Kinh doanh của Dolic.",
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
    year: "2019",
    title: "Ứng dụng vi sinh và máy móc trên ao",
    image: "/assets/drive/experimental-farm/device-on-pond.jpg",
    fit: "cover",
    text:
      "Sau nhiều mùa vụ thất thoát vì dịch bệnh, nguồn nước khó kiểm soát và chi phí điện năng không được tối ưu, trang trại Dolic đi tìm lời giải bằng công nghệ vi sinh và cũng trở thành đơn vị tiên phong ở Bắc Giang áp dụng công nghệ vi sinh để “nuôi nước” và đưa máy móc hiện đại vào quy trình nuôi.",
  },
  {
    year: "2016",
    title: "Trang trại 12ha",
    image: "/assets/drive/history-website/history-2016.webp",
    fit: "cover",
    text:
      "Sau hai mươi năm bền bỉ, trang trại nuôi trồng thủy sản rộng 12 ha trở thành gốc rễ tri thức của Dolic. Hai mươi năm ấy không chỉ là số diện tích tích luỹ được, mà là sự thấu hiểu tận cùng những khó khăn của người nuôi và về sau trở thành trang trại thực nghiệm và cũng là gốc rễ tri thức của Dolic.",
  },
  {
    year: "1997",
    title: "Trang trại đầu tiên tại Bắc Giang",
    image: "/assets/drive/history-website/history-1997.webp",
    fit: "cover",
    text:
      "Với số vốn vay hoàn toàn bằng tín chấp, từ vài người họ hàng tin vào ý chí của ông, ông bắt đầu dựng trang trại ngay trên mảnh đất quê hương Bắc Giang. Không có gì ngoài đôi tay, lòng tin và một lời hứa với chính mình.",
  },
  {
    year: "1996",
    title: "Hai bàn tay trắng",
    image: "/assets/drive/history-website/history-1996.webp",
    fit: "cover",
    text:
      "Từ câu hỏi trăn trở của tuổi đôi mươi, ông Bùi Văn Tới cùng người vợ tảo tần đồng lòng gây dựng cơ nghiệp từ hai bàn tay trắng. Những viên gạch đầu tiên của Dolic được đặt bằng bản lĩnh của người cha, sự kiên trung của người mẹ và niềm tin mãnh liệt của tuổi trẻ.",
  },
];

const blueOverlayTimelineImages = new Set([
  "/assets/drive/history-website/history-2016.webp",
  "/assets/drive/experimental-farm/device-on-pond.jpg",
  "/assets/drive/experimental-farm/comparison-aerator-1.jpg",
]);

const systems = [
  {
    title: "Nền tảng gia đình",
    image: "/nền tảng gia đình.png",
    fit: "contain",
    text:
      "Dolic hình thành từ sự đồng lòng \n của một gia đình làm nghề nuôi thực địa,\nnơi lòng biết ơn và tinh thần đoàn kết \n trở thành gốc rễ cho mọi quyết định.",
    href: "#tam-nhin",
  },
  {
    title: "Trang trại thực nghiệm",
    image: "/assets/drive/customer-farm/customer-farm-2.jpg",
    fit: "cover",
    text:
      "120.000m2 ao nuôi là nơi thiết bị được chạy thử,\n đo đạc và hiệu chỉnh trong điều kiện thật,\ntrước khi được tư vấn rộng rãi.",
    href: "/trang-trai",
  },
  {
    title: "Mạng lưới người nuôi",
    image: "/1b48ecc0-f5cb-47d6-9d68-5a0becebba08.png",
    fit: "contain",
    text:
      "Từ đại lý đến hộ nuôi, \n Dolic chọn đồng hành bằng đào tạo,\nquy trình và sự gần gũi \n của người đã trải qua khó khăn ngoài ao.",
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
  { number: "01", title: "Với gia đình", headline: "Lấy gia đình làm gốc, \nlấy biết ơn làm kim chỉ nam.", desc: "Mọi quyết định bắt đầu từ sự đoàn kết và lòng biết ơn.", icon: UsersRound },
  { number: "02", title: "Với người nuôi", headline: "Người nuôi hiểu người nuôi.", desc: "Là người bạn nghề, không phải người bán hàng; \nkhông khoảng cách giữa doanh nghiệp và bà con.", icon: HeartHandshake },
  { number: "03", title: "Với đại lý", headline: "Đào tạo từng đại lý thành chuyên gia, \ncùng nhau lớn.", desc: "Không xem đại lý là kênh bán,\n mà là đối tác cùng phát triển và cùng giữ uy tín.", icon: Network },
  { number: "04", title: "Với đội ngũ", headline: "Coi đồng đội như người trong nhà.", desc: "Lớn lên cùng nhau, \ntrân trọng từng người góp sức dựng nên Dolic.", icon: BadgeCheck },
  { number: "05", title: "Với mỗi giải pháp", headline: "Kiểm chứng thực địa \n không mang đến khách hàng\n những sản phẩm chưa được thực nghiệm.", desc: "Mọi sản phẩm đi qua trang trại thực nghiệm \ntrước khi đến tay người nuôi.", icon: ShieldCheck },
  { number: "06", title: "Với môi trường", headline: "Vì Người nuôi hôm nay vì môi trường ngày mai.", desc: "Nuôi trồng bền vững là trách nhiệm, không phải khẩu hiệu.", icon: Leaf },
];

const commitments = [
  ["Hiệu năng cao", "Thiết bị vận hành tối ưu, tiết kiệm điện, tăng năng suất vụ nuôi."],
  ["Ổn định", "Vận hành đáng tin cậy trong nhiều điều kiện môi trường thuỷ sản \n khắc nghiệt."],
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
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelinePathRef = useRef<SVGPathElement>(null);
  const timelineItemRefs = useRef<Array<HTMLElement | null>>([]);
  const [markerOffsets, setMarkerOffsets] = useState<number[]>([]);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const updatePathProgressRef = useRef<() => void>(() => {});

  useEffect(() => {
    const path = timelinePathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const updatePathProgress = () => {
      const container = timelineContainerRef.current;
      if (!container || !path) return;

      const containerRect = container.getBoundingClientRect();
      if (!containerRect.height) return;

      const focusLine = window.innerHeight * 0.42;
      const focusInContainer = focusLine - containerRect.top;
      const progress = Math.min(1, Math.max(0, focusInContainer / containerRect.height));

      path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
    };

    updatePathProgressRef.current = updatePathProgress;
    updatePathProgress();
    const timeoutId = window.setTimeout(updatePathProgress, 240);
    window.addEventListener("scroll", updatePathProgress, { passive: true });
    window.addEventListener("resize", updatePathProgress);
    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", updatePathProgress);
      window.removeEventListener("resize", updatePathProgress);
    };
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const timeoutId = window.setTimeout(() => {
      const items = timelineItemRefs.current.filter(Boolean) as HTMLElement[];
      if (items.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visibleEntries.length === 0) return;

          const nextIndex = items.findIndex((item) => item === visibleEntries[0].target);
          if (nextIndex >= 0) setActiveTimelineIndex(nextIndex);
        },
        { threshold: [0.35, 0.55, 0.75], rootMargin: "-20% 0px -20% 0px" },
      );

      items.forEach((item) => observer?.observe(item));
    }, 120);

    return () => {
      window.clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, []);

  const scrollToTimelineItem = (index: number) => {
    const targetIndex = Math.min(timeline.length - 1, Math.max(0, index));
    const target = timelineItemRefs.current[targetIndex];
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveTimelineIndex(targetIndex);
  };

  useEffect(() => {
    const container = timelineContainerRef.current;
    const path = timelinePathRef.current;
    if (!container || !path) return;

    const svgViewBoxWidth = 1000;
    const svgViewBoxHeight = 4200;

    const getPointAtY = (targetY: number) => {
      let lo = 0;
      let hi = path.getTotalLength();

      for (let i = 0; i < 36; i += 1) {
        const mid = (lo + hi) / 2;
        const pt = path.getPointAtLength(mid);
        if (pt.y < targetY) {
          lo = mid;
        } else {
          hi = mid;
        }
      }

      return path.getPointAtLength((lo + hi) / 2);
    };

    const recalcMarkers = () => {
      const rect = container.getBoundingClientRect();
      if (!rect.height || !rect.width) return;

      const nextOffsets = timelineItemRefs.current.map((itemEl) => {
        if (!itemEl) return 0;
        const itemRect = itemEl.getBoundingClientRect();
        const centerYInContainer = itemRect.top - rect.top + itemRect.height / 2;
        const yRatio = Math.min(1, Math.max(0, centerYInContainer / rect.height));
        const targetY = yRatio * svgViewBoxHeight;
        const point = getPointAtY(targetY);
        const markerXPx = (point.x / svgViewBoxWidth) * rect.width;
        const centerXPx = rect.width / 2;
        return markerXPx - centerXPx;
      });

      setMarkerOffsets(nextOffsets);
      updatePathProgressRef.current();
    };

    recalcMarkers();
    const rafId = window.requestAnimationFrame(recalcMarkers);
    const timeoutId = window.setTimeout(recalcMarkers, 180);

    const resizeObserver = new ResizeObserver(() => recalcMarkers());
    resizeObserver.observe(container);
    timelineItemRefs.current.forEach((itemEl) => {
      if (itemEl) resizeObserver.observe(itemEl);
    });

    window.addEventListener("resize", recalcMarkers);
    window.addEventListener("scroll", recalcMarkers, { passive: true });
    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.removeEventListener("resize", recalcMarkers);
      window.removeEventListener("scroll", recalcMarkers);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="relative min-h-[86svh] overflow-hidden bg-[#061B35] text-white">
        <Image src="/assets/drive/history-website/history-2026.webp" alt="" fill className="object-cover object-center opacity-55 blur-sm scale-105 md:hidden" priority />
        <Image src="/assets/drive/history-website/history-2026.webp" alt="Hình ảnh lịch sử hình thành năm 2026" fill className="object-contain object-[center_32%] md:object-cover md:object-center" priority />
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
                <div className={`relative mx-auto aspect-[4/3] w-full overflow-hidden ${item.fit === "contain" ? "bg-white p-4 md:p-6" : "bg-[#f3f5f5]"}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={item.fit === "contain" ? "object-contain" : "object-cover"}
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold uppercase leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600 md:text-base md:leading-8">{item.text}</p>
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
                Trở thành mảnh ghép tin cậy trong mỗi vụ nuôi của người Việt <br></br> và mang giải pháp nuôi trồng bền vững của Việt Nam vươn ra Đông Nam Á.
              </p>
            </article>
            <article className="border-t border-slate-300 pt-10">
              <p className="text-base font-black uppercase tracking-[0.2em] text-cyan-700 md:text-lg">Sứ mệnh</p>
              <h3 className="mx-auto mt-4 max-w-5xl font-serif text-3xl font-bold leading-tight text-[#0A2E5C] md:text-4xl">
                Kiểm chứng, đào tạo, đồng hành
              </h3>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Kiểm chứng từng giải pháp tại trang trại thực nghiệm  đào tạo đại lý theo bộ quy trình chuẩn <br/> và đồng hành cùng người nuôi.
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
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lich-su" className="bg-[#f5f2ea] px-4 py-16 text-[#1c1c1c] md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Divider />
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-normal md:text-5xl">Lịch sử hình thành</h2>
            <Divider />
          </div>

          <div ref={timelineContainerRef} className="relative mt-12 md:mt-16">
            <div className="pointer-events-none absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 md:flex">
              <button
                type="button"
                aria-label="Mốc trước"
                disabled={activeTimelineIndex <= 0}
                onClick={() => scrollToTimelineItem(activeTimelineIndex - 1)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/95 text-[#0A2E5C] shadow-[0_12px_30px_-18px_rgba(15,23,42,0.55)] transition hover:border-cyan-400 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronUp className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Mốc sau"
                disabled={activeTimelineIndex >= timeline.length - 1}
                onClick={() => scrollToTimelineItem(activeTimelineIndex + 1)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/95 text-[#0A2E5C] shadow-[0_12px_30px_-18px_rgba(15,23,42,0.55)] transition hover:border-cyan-400 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1000 4200" preserveAspectRatio="none" aria-hidden="true">
              <path
                ref={timelinePathRef}
                d="M500 0 C518 110 518 240 500 360 C482 480 482 610 500 730 C518 860 518 990 500 1120 C482 1250 482 1380 500 1510 C518 1640 518 1770 500 1900 C482 2030 482 2160 500 2290 C518 2420 518 2550 500 2680 C482 2810 482 2940 500 3070 C518 3200 518 3330 500 3460 C482 3590 482 3720 500 3850 C518 3980 510 4090 500 4200"
                fill="none"
                stroke="#97a5b8"
                strokeWidth="1.7"
                strokeDasharray="2.5 9"
                strokeLinecap="round"
                opacity="0.62"
              />
            </svg>

            <div className="grid gap-16 md:gap-24">
              {timeline.map((item, index) => {
                const textOnRight = index % 2 === 0;
                const useBlueOverlay = blueOverlayTimelineImages.has(item.image);
                return (
                  <article
                    key={item.year}
                    ref={(el) => {
                      timelineItemRefs.current[index] = el;
                    }}
                    className="relative scroll-mt-28 md:min-h-[560px] md:grid md:grid-cols-2 md:gap-14"
                  >
                    <span
                      className="absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 md:block"
                      style={{ transform: `translate(-50%, -50%) translateX(${markerOffsets[index] ?? 0}px)` }}
                    >
                      <span className="absolute inset-0 rounded-full border-[2.5px] border-dotted border-[#0A2E5C]/50" />
                      <span className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-cyan-600/35 bg-white shadow-[0_0_0_8px_rgba(8,145,178,0.12)]" />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img
                          src="https://img.icons8.com/?size=100&id=793&format=png&color=0A2E5C"
                          alt=""
                          aria-hidden="true"
                          className="h-[18px] w-[18px] object-contain"
                        />
                      </span>
                    </span>

                    <RevealOnScroll delay={Math.min(index * 50, 240)} direction="up" className={`timeline-rise-reveal ${textOnRight ? "md:col-start-2" : "md:col-start-1"}`}>
                      <TimelineParallax speed={textOnRight ? -0.045 : 0.045} className={textOnRight ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:pr-16 md:text-left"}>
                        <p className="font-serif text-6xl italic leading-none text-[#0f172a] md:text-7xl">{item.year}</p>
                        {"headline" in item ? (
                          <h3 className="mt-4 max-w-xl text-xl font-semibold leading-tight text-[#0f172a] md:text-2xl">{item.headline}</h3>
                        ) : (
                          <h3 className="mt-4 max-w-xl text-xl font-semibold leading-tight text-[#0f172a] md:text-2xl">{item.title}</h3>
                        )}
                        <p className="mt-4 max-w-xl whitespace-pre-line text-sm leading-7 text-slate-600 md:text-base md:leading-8">{item.text}</p>
                      </TimelineParallax>
                    </RevealOnScroll>

                    <RevealOnScroll delay={Math.min(index * 50 + 120, 360)} direction="up" className={`timeline-rise-reveal ${textOnRight ? "md:col-start-1 md:row-start-1" : "md:col-start-2 md:row-start-1"}`}>
                      <TimelineParallax speed={textOnRight ? 0.055 : -0.055} className={`${textOnRight ? "md:col-start-1 md:row-start-1 md:pr-16" : "md:col-start-2 md:row-start-1 md:pl-16"} mt-6 md:mt-1`}>
                        <div className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-transparent ${item.fit === "contain" ? "p-8 md:p-12" : ""}`}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 768px) 42vw, 100vw"
                            className={`${item.fit === "contain" ? "object-contain p-8" : "object-cover"} contrast-[1.08] saturate-[1.08]`}
                          />
                          {useBlueOverlay ? <span className="absolute inset-0 bg-[linear-gradient(130deg,rgba(7,31,62,0.28),rgba(13,59,102,0.18)_50%,rgba(7,31,62,0.24))]" /> : null}
                        </div>
                      </TimelineParallax>
                    </RevealOnScroll>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-center gap-3 md:hidden">
              <button
                type="button"
                aria-label="Mốc trước"
                disabled={activeTimelineIndex <= 0}
                onClick={() => scrollToTimelineItem(activeTimelineIndex - 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0A2E5C] shadow-sm disabled:opacity-35"
              >
                <ChevronUp className="h-5 w-5" />
              </button>
              <span className="min-w-16 text-center text-sm font-bold text-slate-600">{timeline[activeTimelineIndex]?.year}</span>
              <button
                type="button"
                aria-label="Mốc sau"
                disabled={activeTimelineIndex >= timeline.length - 1}
                onClick={() => scrollToTimelineItem(activeTimelineIndex + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0A2E5C] shadow-sm disabled:opacity-35"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
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
                <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-600">{desc}</p>
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
