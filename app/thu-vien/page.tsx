import { MessageCircle } from "lucide-react";
import { PageFrame } from "@/components/site-chrome";
import { exhibitionImages, libraryTopics } from "@/lib/library-data";

export default function LibraryPage() {
  return (
    <PageFrame>
      <section className="px-4 pb-16 pt-40 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <p className="text-xl font-bold uppercase text-cyan-700">Thư viện kỹ thuật</p>
          </div>
          <div className="mb-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#071F3E] p-7 text-white md:p-9">
                <p className="text-xs font-bold uppercase text-cyan-200">Trang thư viện</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">Dolic tại triển lãm quốc tế VietAgros 2026</h2>
              </div>
              <div className="p-7 md:p-9">
                <p className="text-lg font-bold leading-8 text-slate-950">
                  Dolic tham gia VietAgros 2026 với vai trò nhà tài trợ, ba gian hàng A7-A8-A9 và bài trình bày về tối ưu chi phí điện năng trong nuôi tôm.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Bài viết ghi lại các hoạt động tại triển lãm, phần tư vấn kỹ thuật tại gian hàng và số liệu kiểm chứng thực địa từ các vùng nuôi.
                </p>
                <a href="/tin-tuc/dolic-tai-vietagros-2026" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                  Đọc bài viết
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-px bg-slate-200 md:grid-cols-6">
              {exhibitionImages.map((src, index) => (
                <div key={src} className="relative aspect-square overflow-hidden bg-white">
                  <img src={src} alt={`Hình ảnh Dolic tham gia triển lãm ${index + 1}`} className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            {libraryTopics.map((topic) => {
              const isWarrantyTopic = topic.id === "bao-hanh-bao-duong";

              return (
                <section key={topic.id} className="rounded-lg border border-slate-200 bg-white p-5 md:p-6">
                  <div className="mb-5 border-b border-slate-200 pb-4">
                    <p className="text-xs font-bold uppercase text-cyan-700">Chuyên mục</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">{topic.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{topic.description}</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {topic.posts.map((post) => (
                      <article key={post.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-48px_rgba(15,23,42,0.55)]">
                        <div className="relative aspect-[4/3] bg-slate-100">
                          <img src={isWarrantyTopic ? "/assets/articles/bao-hanh-cover.webp" : post.image} alt={post.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-5">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{post.date ?? "Cập nhật tuần"}</span>
                          <h3 className="mt-4 min-h-14 font-bold leading-6">
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
            })}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
