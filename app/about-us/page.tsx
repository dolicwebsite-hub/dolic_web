import { AboutLinearShowcase } from "@/components/about-linear-showcase";
import { PageFrame } from "@/components/site-chrome";
import { contactInfo } from "@/lib/site-data";

const primaryAddress = contactInfo.offices[1].address;
const googleMapsQuery = encodeURIComponent(primaryAddress);

export default function AboutUsPage() {
  return (
    <PageFrame>
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
