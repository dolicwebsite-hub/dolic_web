import { AboutLinearShowcase } from "@/components/about-linear-showcase";
import { PageFrame } from "@/components/site-chrome";

const dolicAddress = "Thôn Dĩnh Bạn, xã Bảo Đài, tỉnh Bắc Ninh, Việt Nam";
const googleMapsQuery = encodeURIComponent(dolicAddress);

export default function AboutUsPage() {
  return (
    <PageFrame>
      <AboutLinearShowcase />

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Vị trí Dolic</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Bản đồ đến Công ty TNHH Thủy Sản Dolic</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{dolicAddress}</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
            <iframe
              title="Google Map - Công ty TNHH Thủy Sản Dolic"
              src={`https://www.google.com/maps?q=${googleMapsQuery}&output=embed`}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-400"
          >
            Mở trên Google Maps
          </a>
        </div>
      </section>
    </PageFrame>
  );
}
