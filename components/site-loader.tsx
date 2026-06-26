"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 1450);

    const hideTimer = window.setTimeout(() => {
      document.body.style.overflow = "";
      setIsVisible(false);
    }, 2050);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#f7f5f1] transition duration-700 ease-out ${
        isLeaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-label="Chào mừng đến với Dolic"
      role="status"
    >
      <div className={`flex items-center gap-5 transition duration-700 ease-out sm:gap-7 ${isLeaving ? "translate-y-4 scale-[0.98] opacity-0" : "translate-y-0 scale-100 opacity-100"}`}>
        <div className="relative flex h-24 w-24 items-center justify-center sm:h-32 sm:w-32">
          <span className="absolute inset-0 rounded-full border border-[#0A2E5C]/10" />
          <span className="absolute inset-3 rounded-full bg-white shadow-[0_18px_50px_-34px_rgba(10,46,92,0.7)]" />
          <span className="absolute h-28 w-28 animate-[dolic-loader-pulse_1.25s_ease-in-out_infinite] rounded-full border border-cyan-300/40 sm:h-36 sm:w-36" />
          <Image src="/favicon-32x32.png" alt="Biểu tượng Dolic" width={56} height={56} className="relative z-10 h-12 w-12 object-contain sm:h-14 sm:w-14" priority />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-700">Dolic Vietnam</p>
          <h2 className="mt-2 font-serif text-5xl leading-none tracking-normal text-[#0A2E5C] sm:text-7xl">Chào mừng</h2>
          <p className="mt-3 text-sm font-semibold text-slate-500 sm:text-base">Người nuôi hiểu người nuôi</p>
          <div className="mt-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
            <span>Đang tải</span>
            <span className="h-px w-14 overflow-hidden rounded-full bg-cyan-700/20">
              <span className="block h-full w-1/2 animate-[dolic-loader-bar_1s_ease-in-out_infinite] bg-cyan-600" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
