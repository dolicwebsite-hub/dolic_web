import Image from "next/image";
import { MaintenanceBackground } from "@/components/MaintenanceBackground";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <MaintenanceBackground />
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/25 bg-white p-8 text-center shadow-xl backdrop-blur md:p-12">
        <Image
          src="/assets/logo-dolic.png"
          alt="Dolic Logo"
          width={280}
          height={120}
          className="mx-auto h-auto w-[220px] md:w-[280px]"
          priority
        />

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">Thông báo hệ thống</p>
        <h1 className="mt-3 text-3xl font-bold text-[var(--brand)] md:text-4xl">Website đang bảo trì</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          Dolic đang nâng cấp hệ thống để phục vụ tốt hơn. Vui lòng quay lại sau. Mọi nhu cầu hỗ trợ khẩn, vui lòng liên hệ hotline hoặc fanpage chính thức của Dolic.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <a
            href="tel:0377575597"
            className="rounded-xl bg-[var(--brand)] px-4 py-3 text-base font-semibold text-white transition hover:opacity-90"
          >
            Hotline: 037 757 5597
          </a>
          <a
            href="https://www.facebook.com/share/1EmHbXzC78/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[var(--brand-2)] bg-cyan-50 px-4 py-3 text-base font-semibold text-[var(--brand)] transition hover:bg-cyan-100"
          >
            Fanpage Dolic
          </a>
        </div>
      </div>
    </main>
  );
}
