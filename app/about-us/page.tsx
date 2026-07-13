import type { Metadata } from "next";
import { AboutLinearShowcase } from "@/components/about-linear-showcase";
import { PageFrame } from "@/components/site-chrome";
import { contactInfo } from "@/lib/site-data";

const primaryAddress = contactInfo.offices[1].address;
const googleMapsQuery = encodeURIComponent(primaryAddress);
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dolic.vn";

export const metadata: Metadata = {
  title: "Về chúng tôi | Dolic Vietnam",
  description:
    "Tìm hiểu lịch sử hình thành Dolic Vietnam và hành trình phát triển cùng đội ngũ, trong đó có chị Bùi Khánh Linh với vai trò Head of Marketing.",
  keywords: [
    "Bùi Khánh Linh",
    "Dolic Vietnam",
    "Về chúng tôi Dolic",
    "Lịch sử hình thành Dolic",
    "Head of Marketing Dolic",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "Về chúng tôi | Dolic Vietnam",
    description:
      "Hành trình phát triển của Dolic Vietnam và đội ngũ đồng hành cùng ngành nuôi trồng thủy sản Việt Nam.",
    url: "/about-us",
    type: "website",
  },
};

export default function AboutUsPage() {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bùi Khánh Linh",
    jobTitle: "Head of Marketing",
    worksFor: {
      "@type": "Organization",
      name: "CÔNG TY TNHH THUỶ SẢN DOLIC",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/about-us`,
    description:
      "Người con gái thứ hai trong hành trình phát triển của Dolic, đảm nhận vai trò Head of Marketing và đồng hành trong định hướng bán giải pháp.",
  };

  return (
    <PageFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
      <AboutLinearShowcase />

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Vị trí Dolic</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Bản đồ đến văn phòng Dolic</h2>
            <div className="mt-4 grid gap-3 text-base leading-7 text-slate-600 md:grid-cols-2">
              {contactInfo.offices.map((office) => (
                <div key={office.region} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-950">Văn phòng {office.region}</p>
                  <p className="mt-1">{office.address}</p>
                  <p className="mt-1 font-semibold text-cyan-700">Hotline: {office.displayHotline}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
            <iframe
              title="Google Map - Văn phòng miền Bắc Dolic"
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
            Mở văn phòng miền Bắc trên Google Maps
          </a>
        </div>
      </section>
    </PageFrame>
  );
}
