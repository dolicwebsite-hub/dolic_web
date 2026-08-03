import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { libraryPosts } from "@/lib/library-data";

export type TableRow = {
  cells: string[];
};

export function LibraryBackButton() {
  return (
    <a href="/thu-vien" className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700">
      <ArrowLeft className="h-4 w-4" />
      Về thư viện
    </a>
  );
}

export function SummaryBox({ points }: { points: string[] }) {
  return (
    <section className="rounded-lg border border-cyan-100 bg-cyan-50/60 p-5 md:p-6">
      <p className="text-xs font-bold uppercase text-cyan-700">Tóm tắt cho người nuôi</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {points.map((point) => (
          <div key={point} className="flex gap-3 rounded-lg bg-white/70 p-4">
            <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-700" />
            <p className="text-sm leading-7 text-slate-700">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function InfoTable({ headers, rows }: { headers: string[]; rows: TableRow[] }) {
  return (
    <div className="my-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="grid bg-slate-100 text-sm font-bold text-slate-950" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
        {headers.map((header) => (
          <div key={header} className="border-r border-slate-200 p-4 last:border-r-0">
            {header}
          </div>
        ))}
      </div>
      <div className="divide-y divide-slate-200">
        {rows.map((row) => (
          <div key={row.cells.join("|")} className="grid text-sm leading-7 text-slate-700" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
            {row.cells.map((cell) => (
              <div key={cell} className="border-r border-slate-200 p-4 last:border-r-0">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <div className="my-8 grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-700" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function ContactCta({ title }: { title: string }) {
  return (
    <section className="mt-10 rounded-lg bg-[#071F3E] p-6 text-white md:p-8">
      <p className="text-xs font-bold uppercase text-cyan-200">{title}</p>
      <h2 className="mt-3 text-2xl font-bold">Liên hệ Dolic để được đội ngũ kỹ thuật hỗ trợ.</h2>
      <p className="mt-3 text-sm leading-7 text-slate-200">
        Hotline kỹ thuật Công ty TNHH Thủy sản Dolic: 0913 880 236. Người nuôi hiểu người nuôi.
      </p>
      <a href="/lien-he" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
        Liên hệ tư vấn
        <MessageCircle className="h-4 w-4" />
      </a>
    </section>
  );
}

export function RecentArticles({ currentHref }: { currentHref: string }) {
  const recentArticles = libraryPosts.filter((post) => post.href !== currentHref).slice(0, 3);

  return (
    <section className="mt-12">
      <div className="mb-5 border-b border-slate-200 pb-4">
        <p className="text-xs font-bold uppercase text-cyan-700">Thư viện</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Bài viết gần đây</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {recentArticles.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-48px_rgba(15,23,42,0.55)]">
            {post.type === "Bảo hành / Bảo dưỡng" ? (
              <div className="grid aspect-[4/3] place-items-center bg-[#075BB7] p-10">
                <img src="/Logo-Dolic.png" alt="Dolic" className="w-full max-w-[260px] brightness-0 invert" />
              </div>
            ) : (
              <div className="relative aspect-[4/3] bg-slate-100">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
            )}
            <div className="p-5">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{post.date ?? "Cập nhật tuần"}</span>
              <h3 className="mt-4 min-h-16 font-bold leading-6 text-slate-950">
                <a href={post.href} className="transition hover:text-cyan-700">
                  {post.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
