import Image from "next/image";
import { PageFrame, PrimaryButton } from "@/components/site-chrome";

const dolicAddress = "Thôn Dĩnh Bạn, xã Bảo Đài, tỉnh Bắc Ninh, Việt Nam";
const googleMapsQuery = encodeURIComponent(dolicAddress);

export default function AboutUsPage() {
  return (
    <PageFrame>
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">About us</p>
            <h1 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">Công ty TNHH Thủy Sản Dolic</h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Dolic cung cấp thiết bị và giải pháp vận hành cho trang trại thủy sản Việt Nam, tập trung vào sục khí, bơm nước, đo môi trường và cấu hình thiết bị phù hợp từng mô hình nuôi.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Địa chỉ", dolicAddress],
                ["Hotline", "0397 581 028 - 0352 495 893"],
                ["Email", "congtytnhhthuysandolic@gmail.com"],
                ["Bảo hành", "12 tháng cho lỗi của nhà sản xuất"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-20 w-64 items-center justify-center rounded-md bg-white px-4 ring-1 ring-slate-200">
              <Image src="/Logo-Dolic.png" alt="Logo Dolic" width={2867} height={842} className="h-auto w-full object-contain" />
            </div>
            <div className="mt-6 rounded-lg bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Bảng báo giá</p>
              <h2 className="mt-3 text-2xl font-bold">Hiệu lực từ 01/05/2026</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Giá trong trang được tổng hợp từ file danh mục sản phẩm và báo giá Dolic, đã bao gồm VAT 8% và chưa bao gồm cước vận chuyển.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <PrimaryButton href="/san-pham">Xem sản phẩm</PrimaryButton>
                <PrimaryButton href="/lien-he" variant="outline">Nhận tư vấn</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

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
