import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageFrame, SectionHeader } from "@/components/site-chrome";

const policySections = [
  {
    title: "Cookie là gì?",
    desc: "Cookie là các tệp nhỏ được lưu trên trình duyệt để website ghi nhớ một số lựa chọn và hiểu cách người dùng tương tác với nội dung.",
  },
  {
    title: "Dolic dùng cookie để làm gì?",
    desc: "Chúng tôi dùng cookie để duy trì trải nghiệm ổn định, đo lường hiệu quả nội dung, cải thiện trang sản phẩm và hỗ trợ hoạt động tư vấn khách hàng.",
  },
  {
    title: "Bạn có thể lựa chọn như thế nào?",
    desc: "Bạn có thể đồng ý hoặc từ chối thông báo cookie trên website. Bạn cũng có thể xoá hoặc chặn cookie trong phần cài đặt của trình duyệt đang sử dụng.",
  },
  {
    title: "Thông tin liên hệ",
    desc: "Nếu có câu hỏi về cookie hoặc dữ liệu website, vui lòng liên hệ Dolic qua trang Liên hệ để được hỗ trợ.",
  },
];

export default function CookiePolicyPage() {
  return (
    <PageFrame>
      <section className="px-4 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition hover:text-cyan-900">
            <ArrowLeft className="h-4 w-4" />
            Về trang chủ
          </Link>
          <SectionHeader
            eyebrow="Cookie Policy"
            title="Chính sách Cookie"
            desc="Trang này giải thích ngắn gọn cách Dolic sử dụng cookie để cải thiện trải nghiệm website và nội dung tư vấn."
          />
          <div className="grid gap-4">
            {policySections.map((section) => (
              <article key={section.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
