# Hướng Dẫn Bàn Giao Và Vận Hành Website Dolic.vn

Tài liệu này được lập dựa trên biên bản nghiệm thu website Dolic ngày 11/08/2026 và mã nguồn hiện tại của dự án `Dolic_Dev`.

## 1. Thông Tin Chung

- Tên website: Dolic Vietnam
- Tên miền chính thức: https://dolic.vn
- Đơn vị sở hữu/vận hành: Công ty TNHH Thủy Sản Dolic
- Email liên hệ công khai: congtytnhhthuysandolic@gmail.com
- Hotline miền Nam: 0397 581 028
- Hotline miền Bắc: 0352 495 893
- Tài khoản kỹ thuật đã bàn giao theo biên bản:
  - Tên miền: congtytnhhthuysandolic@gmail.com
  - Hosting/Vercel: dolicwebsite@gmail.com
  - Google Analytics 4: dolicwebsite@gmail.com
  - Google Search Console: dolicwebsite@gmail.com
  - GitHub/source code: dolicwebsite@gmail.com

## 2. Phạm Vi Website Đã Bàn Giao

Website là hệ thống giới thiệu thương hiệu, sản phẩm và giải pháp của Dolic, bao gồm:

- Trang chủ tiếng Việt.
- Trang tiếng Anh với các trang nội dung chính.
- Giới thiệu công ty, lịch sử phát triển và vùng hoạt động.
- Danh mục sản phẩm thiết bị thủy sản.
- Trang giải pháp, trang trại thực nghiệm, đại lý/B2B.
- Thư viện bài viết, tin tức, sự kiện, bảo hành/bảo dưỡng.
- Trang liên hệ và thông tin hotline/email/văn phòng.
- Cookie banner và trang chính sách cookie.
- Sitemap, robots và cấu hình SEO cơ bản.
- Google Analytics 4 và Google Search Console đã gắn trong source.

Lưu ý quan trọng: website hiện tại chưa bao gồm hệ thống CMS/super admin để tự đăng bài, sửa nội dung hoặc thêm sản phẩm trên trình duyệt. Việc cập nhật nội dung thực hiện bằng cách chỉnh sửa source code và deploy lại.

## 3. Công Nghệ Sử Dụng

- Framework: Next.js 16
- Ngôn ngữ: TypeScript
- Thư viện giao diện: React 19
- CSS/UI: Tailwind CSS 4, Radix UI, lucide-react
- Animation/interactive: GSAP, carousel Embla
- Môi trường chạy khuyến nghị: Node.js bản LTS mới, npm
- Nền tảng deploy đang dùng/bàn giao: Vercel
- Quản lý source: GitHub

## 4. Cấu Trúc Thư Mục Quan Trọng

- `app/`: toàn bộ route/trang của website.
- `components/`: các thành phần giao diện dùng lại, header, footer, product browser, loader, cookie banner.
- `lib/site-data.ts`: thông tin liên hệ, menu, danh mục sản phẩm, giá, model, hình ảnh sản phẩm.
- `lib/library-data.ts`: danh sách chủ đề thư viện và bài viết.
- `lib/maintenance.ts`: cấu hình chế độ bảo trì.
- `content/`: dữ liệu trích xuất từ tài liệu nguồn DOCX/XLSX.
- `public/assets/`: hình ảnh, video, logo, tài liệu nguồn và media công khai.
- `public/assets/source/`: file nguồn đã bàn giao, gồm brand guideline, danh mục sản phẩm, báo giá.
- `app/sitemap.ts`: danh sách URL đưa vào sitemap.xml.
- `app/robots.ts`: cấu hình robots.txt.
- `app/layout.tsx`: metadata tổng, Google Search Console, Google Analytics 4.

## 5. Danh Sách Trang Chính

Tiếng Việt:

- `/`: trang chủ.
- `/about-us`: giới thiệu Dolic.
- `/san-pham`: danh mục sản phẩm.
- `/giai-phap`: giải pháp thiết bị và tiết kiệm điện.
- `/trang-trai`: trang trại thực nghiệm.
- `/dai-ly`: thông tin đại lý.
- `/b2b`: hợp tác B2B.
- `/thu-vien`: thư viện bài viết/tin tức.
- `/lien-he`: trang liên hệ.
- `/chinh-sach-cookie`: chính sách cookie.

Tiếng Anh:

- `/en`
- `/en/about-us`
- `/en/products`
- `/en/solutions`
- `/en/farm`
- `/en/dealer`
- `/en/b2b`
- `/en/library`
- `/en/contact`

Bài viết hiện có:

- `/tin-tuc/dolic-tai-vietagros-2026`
- `/tin-tuc/dolic-tai-vietshrimp-asia-2026`
- `/tin-tuc/dolic-hoi-thao-co-dien-nong-nghiep-thong-minh-vnua`
- `/tin-tuc/may-suc-khi-treo-khi-nen-nguon-goc`
- `/tin-tuc/nguyen-ly-hoat-dong-may-suc-khi-treo-khi-nen`
- `/tin-tuc/vi-sao-suc-khi-treo-khi-nen-tiet-kiem-dien`
- `/tin-tuc/dau-hop-so-giam-toc-quat-nuoc`
- `/tin-tuc/dau-day-tiep-dia-pe-thiet-bi-ao-nuoi`
- `/tin-tuc/mo-to-qua-nhiet-tu-ngat-nguyen-nhan-cach-xu-ly`
- `/tin-tuc/thiet-bi-chong-mat-pha-dong-co-3-pha`

## 6. Hướng Dẫn Cài Đặt Và Chạy Trên Máy Tính

Điều kiện cần có:

- Node.js bản LTS.
- npm.
- Quyền truy cập repository GitHub của dự án.

Các bước:

```bash
git clone <duong-dan-repository-github>
cd Dolic_Dev
npm install
npm run dev
```

Sau khi chạy lệnh `npm run dev`, mở trình duyệt tại:

```text
http://localhost:3000
```

Lệnh build kiểm tra trước khi deploy:

```bash
npm run build
```

Lệnh chạy bản production trên máy chủ riêng nếu không dùng Vercel:

```bash
npm run build
npm run start
```

## 7. Biến Môi Trường

File `.env` hiện có biến:

```text
MAINTENANCE_MODE
```

Ý nghĩa:

- `MAINTENANCE_MODE=true`, `MAINTENANCE_MODE=1` hoặc `MAINTENANCE_MODE=yes`: bật trang bảo trì.
- Để trống hoặc đặt giá trị khác: website hiển thị bình thường.

Biến tùy chọn khác được source hỗ trợ:

```text
NEXT_PUBLIC_SITE_URL=https://dolic.vn
```

Biến này dùng để tạo URL trong `sitemap.xml` và `robots.txt`. Nếu không khai báo, hệ thống mặc định dùng `https://dolic.vn`.

Không công khai nội dung thật của file `.env` cho người không có quyền quản trị.

## 8. Hướng Dẫn Deploy Trên Vercel

Quy trình cập nhật website:

1. Chỉnh sửa source code trên máy local.
2. Chạy `npm run build` để kiểm tra lỗi.
3. Commit và push source lên GitHub.
4. Vercel tự động build và deploy theo repository đã kết nối.
5. Sau deploy, kiểm tra website tại `https://dolic.vn`.

Cấu hình Vercel khuyến nghị:

- Framework Preset: Next.js.
- Build Command: `npm run build`.
- Install Command: `npm install`.
- Output Directory: để mặc định của Next.js.
- Environment Variables:
  - `MAINTENANCE_MODE`: chỉ bật khi cần bảo trì.
  - `NEXT_PUBLIC_SITE_URL`: `https://dolic.vn`.

Kiểm tra sau deploy:

- Trang chủ load bình thường.
- Các trang sản phẩm, giải pháp, liên hệ, thư viện load bình thường.
- `/sitemap.xml` có danh sách URL.
- `/robots.txt` trỏ về sitemap đúng domain.
- Google Analytics vẫn nhận dữ liệu truy cập.
- Không có lỗi 404/500 ở các đường dẫn chính.

## 9. Hướng Dẫn Cập Nhật Nội Dung

### 9.1. Cập Nhật Thông Tin Liên Hệ

File cần sửa: `lib/site-data.ts`.

Tìm object `contactInfo` để cập nhật:

- Email.
- Hotline.
- Địa chỉ văn phòng.
- Link Zalo/Facebook/TikTok/YouTube/Instagram.

Sau khi sửa, chạy:

```bash
npm run build
```

Nếu build thành công thì commit, push và deploy.

### 9.2. Cập Nhật Menu Đầu Trang/Cuối Trang

File cần sửa: `lib/site-data.ts`.

Tìm `navItems` để thêm, sửa hoặc đổi thứ tự menu.

Lưu ý: nếu thêm route mới, cần tạo trang tương ứng trong `app/` và bổ sung vào `app/sitemap.ts`.

### 9.3. Cập Nhật Sản Phẩm

File cần sửa: `lib/site-data.ts`.

Danh mục sản phẩm nằm trong `productCategories`. Mỗi danh mục có:

- `id`: mã danh mục, dùng cho điều hướng/nội bộ.
- `name`: tên danh mục.
- `summary`: mô tả ngắn.
- `image`: ảnh đại diện danh mục.
- `products`: danh sách sản phẩm.

Mỗi sản phẩm có các trường chính:

- `name`: tên sản phẩm tiếng Việt.
- `englishName`: tên tiếng Anh, nếu có.
- `model`: model.
- `origin`: xuất xứ.
- `specs`: thông số vận hành.
- `price`: giá hiển thị.
- `image`: đường dẫn ảnh.
- `status`: tình trạng sản phẩm.
- `details`: mô tả chi tiết.
- `usp`: các điểm nổi bật.

Thêm ảnh sản phẩm:

1. Đưa file ảnh vào `public/assets/products/drive-full/` hoặc thư mục assets phù hợp.
2. Dùng đường dẫn bắt đầu bằng `/assets/...` trong `image`.
3. Nên ưu tiên ảnh `.webp` để tối ưu tốc độ tải.
4. Tên file nên không dấu, không khoảng trắng cho dễ bảo trì về sau.

### 9.4. Cập Nhật Bài Viết/Thư Viện

Danh sách hiển thị trong thư viện nằm tại `lib/library-data.ts`.

Mỗi bài viết cần có:

- `title`: tiêu đề.
- `image`: ảnh đại diện.
- `href`: đường dẫn bài viết.
- `date`: ngày tháng hiển thị.

Để thêm bài viết mới:

1. Tạo thư mục mới trong `app/tin-tuc/<slug>/`.
2. Tạo file `page.tsx` trong thư mục đó.
3. Thêm bài viết vào `lib/library-data.ts`.
4. Thêm đường dẫn vào `app/sitemap.ts`.
5. Build và deploy lại.

### 9.5. Cập Nhật SEO

Metadata tổng nằm ở `app/layout.tsx`:

- Title mặc định.
- Description mặc định.
- Favicon.
- Google Search Console verification.
- Google Analytics 4 tracking ID.

Nhiều trang riêng có `export const metadata`. Khi cập nhật SEO cho từng trang, sửa metadata trong file `page.tsx` của trang đó.

Sitemap nằm ở `app/sitemap.ts`. Khi thêm trang mới, cần thêm route vào mảng `routes`.

Robots nằm ở `app/robots.ts`.

## 10. Google Analytics 4 Và Search Console

Google Analytics 4 đang được gắn trong `app/layout.tsx` với Measurement ID:

```text
G-V14F0T5YLF
```

Google Search Console đang có meta verification trong `app/layout.tsx`.

Sau khi bàn giao, Bên A cần đảm bảo:

- Email `dolicwebsite@gmail.com` hoặc email do Bên A quản lý có quyền Owner/Administrator.
- Không xóa tracking code trong source nếu vẫn muốn đo lường truy cập.
- Khi đổi domain hoặc tạo domain phụ, cần kiểm tra lại Search Console và sitemap.

## 11. Bảo Trì Và Backup

Khuyến nghị sau bàn giao:

- Giữ repository GitHub là bản backup source chính.
- Không sửa trực tiếp trên Vercel nếu không commit về GitHub.
- Mỗi đợt cập nhật nên tạo commit riêng kèm nội dung rõ ràng.
- Lưu bản sao tài liệu nguồn trong `public/assets/source/`.
- Định kỳ tải bản backup source code từ GitHub và cấu hình Vercel.
- Kiểm tra website sau mỗi lần deploy.

Bật trang bảo trì:

1. Vào Vercel Project Settings.
2. Thêm hoặc sửa biến `MAINTENANCE_MODE=true`.
3. Redeploy website.

Tắt trang bảo trì:

1. Đặt `MAINTENANCE_MODE=false` hoặc xóa biến.
2. Redeploy website.

## 12. Bảo Mật Và Quyền Truy Cập

Tài sản cần được Bên A quản lý:

- Tài khoản nhà đăng ký tên miền.
- Tài khoản Vercel.
- Tài khoản GitHub.
- Tài khoản Google Analytics 4.
- Tài khoản Google Search Console.
- Email quản trị liên quan.

Khuyến nghị:

- Bật xác thực 2 lớp cho email, GitHub, Vercel và Google.
- Đổi mật khẩu sau khi nhận bàn giao nếu tài khoản từng được chia sẻ.
- Không gửi file `.env` hoặc mã xác thực qua kênh không an toàn.
- Chỉ cấp quyền repository cho người thực sự phụ trách kỹ thuật.
- Khi đơn vị bên ngoài hoàn tất công việc, thu hồi quyền nếu không còn nhu cầu.

## 13. Các Lưu Ý Chức Năng Hiện Tại

- Website hiện tại không có CMS. Muốn thêm CMS cần phát triển/tích hợp thêm.
- Form liên hệ trên trang `/lien-he` hiện là giao diện thu thập thông tin, chưa kết nối hệ thống gửi email, lưu CRM hoặc database. Người dùng vẫn có thể liên hệ qua hotline, email và các link mạng xã hội.
- Website không có database riêng trong source hiện tại; nội dung sản phẩm/bài viết nằm trong TypeScript/CSV/assets.
- Không có theme/plugin trả phí cần license riêng trong source.
- Hình ảnh, video và file tài liệu nguồn được đặt trong `public/assets/`.

## 14. Xử Lý Sự Cố Thường Gặp

### Website Hiện Trang Bảo Trì

Kiểm tra biến `MAINTENANCE_MODE` trên Vercel. Nếu đang là `true`, `1` hoặc `yes`, đổi về `false` hoặc xóa biến và redeploy.

### Deploy Thất Bại Trên Vercel

Kiểm tra:

- Log build trên Vercel.
- Lệnh `npm run build` trên máy local.
- File ảnh hoặc import có sai đường dẫn không.
- Có thêm route mới nhưng thiếu file `page.tsx` không.
- Có lỗi TypeScript không.

### Ảnh Không Hiển Thị

Kiểm tra:

- File ảnh có nằm trong `public/assets/...` không.
- Đường dẫn trong source có bắt đầu bằng `/assets/...` không.
- Tên file có đúng chữ hoa/chữ thường và dấu tiếng Việt không.

### Sitemap Sai Domain

Kiểm tra biến `NEXT_PUBLIC_SITE_URL`. Giá trị khuyến nghị:

```text
https://dolic.vn
```

### Google Analytics Không Ghi Nhận

Kiểm tra:

- Tracking ID trong `app/layout.tsx`.
- Quyền truy cập tài khoản GA4.
- Trình duyệt có chặn tracking không.
- Website đã deploy phiên bản mới chưa.

## 15. Checklist Bàn Giao Cho Bên A

- Đã nhận quyền quản trị tên miền.
- Đã nhận quyền quản trị Vercel/hosting.
- Đã nhận quyền GitHub repository.
- Đã nhận quyền Google Analytics 4.
- Đã nhận quyền Google Search Console.
- Đã nhận source code đầy đủ.
- Đã nhận tài liệu nguồn, hình ảnh, logo, brand guideline.
- Đã có hướng dẫn cài đặt, build và deploy.
- Đã biết cách bật/tắt trang bảo trì.
- Đã biết website chưa có CMS và form chưa kết nối backend.
- Đã kiểm tra website trên desktop/mobile.
- Đã kiểm tra các route chính không lỗi 404/500.
- Đã kiểm tra HTTPS/SSL trên `https://dolic.vn`.

## 16. Thông Tin Liên Hệ Hỗ Trợ Kỹ Thuật

Người phụ trách bàn giao: Đoàn Phạm Minh Hiếu

Kênh trao đổi tài liệu/cấu hình: Zalo hoặc ứng dụng trao đổi tin nhắn khác theo biên bản nghiệm thu.

Khi yêu cầu hỗ trợ, nên cung cấp:

- Đường dẫn trang đang gặp lỗi.
- Ảnh chụp màn hình lỗi.
- Thời điểm xảy ra lỗi.
- Nội dung vừa cập nhật, nếu có.
- Log build trên Vercel, nếu lỗi xảy ra khi deploy.
