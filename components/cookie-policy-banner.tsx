"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "dolic-cookie-policy";

export function CookiePolicyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
  }, []);

  const close = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section
      aria-label="Cookie Policy"
      className="fixed inset-x-0 bottom-0 z-[90] bg-black/78 px-4 py-8 text-white shadow-[0_-24px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-6"
    >
      <button
        type="button"
        aria-label="Đóng Cookie Policy"
        onClick={() => close("rejected")}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-slate-950"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto grid max-w-3xl place-items-center text-center">
        <p className="font-serif text-4xl leading-none sm:text-5xl">Cookie Policy</p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/84 sm:text-base">
          Dolic sử dụng cookie để hiểu cách bạn dùng website, cải thiện trải nghiệm tư vấn và tối ưu nội dung sản phẩm. Bạn có thể xem thêm tại{" "}
          <Link href="/chinh-sach-cookie" className="font-bold underline underline-offset-4">
            Chính sách Cookie
          </Link>
          .
        </p>
        <div className="mt-7 flex items-center justify-center gap-5">
          <button type="button" onClick={() => close("rejected")} className="font-serif text-lg font-bold underline underline-offset-4 transition hover:text-cyan-200">
            TỪ CHỐI
          </button>
          <button type="button" onClick={() => close("accepted")} className="grid h-20 w-20 place-items-center rounded-full bg-white font-serif text-lg font-bold text-slate-950 transition hover:bg-cyan-100">
            ĐỒNG Ý
          </button>
        </div>
      </div>
    </section>
  );
}
