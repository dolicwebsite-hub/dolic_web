# Hướng Dẫn Đăng Nhập Và Sử Dụng Tài Khoản Website Dolic.vn

Tài liệu này dành cho người quản lý website Dolic không chuyên kỹ thuật. Mục tiêu là giúp Bên A biết tài khoản nào dùng để làm gì, cách đăng nhập an toàn và khi nào cần nhờ kỹ thuật hỗ trợ.

## 1. Danh Sách Tài Khoản Cần Quản Lý

Theo biên bản bàn giao, các tài khoản chính gồm:

- Tên miền: `congtytnhhthuysandolic@gmail.com`
- Vercel/hosting website: `dolicwebsite@gmail.com`
- GitHub/source code: `dolicwebsite@gmail.com`
- Google Analytics 4: `dolicwebsite@gmail.com`
- Google Search Console: `dolicwebsite@gmail.com`

Nên lưu các tài khoản này trong một nơi an toàn như trình quản lý mật khẩu, không gửi mật khẩu qua Zalo/Facebook/email nếu không cần thiết.

## 2. Nguyên Tắc An Toàn Trước Khi Đăng Nhập

- Đổi mật khẩu sau khi nhận bàn giao nếu tài khoản từng được nhiều người sử dụng.
- Bật xác thực 2 lớp cho Gmail, GitHub và Vercel.
- Không bấm vào link đăng nhập lạ được gửi qua tin nhắn.
- Luôn kiểm tra đúng địa chỉ website trước khi nhập mật khẩu.
- Không cấp quyền quản trị cho người không phụ trách website.
- Khi nhân sự hoặc đơn vị kỹ thuật kết thúc công việc, cần thu hồi quyền truy cập.

## 3. Tài Khoản Gmail Quản Trị

### Dùng Để Làm Gì

Gmail quản trị thường được dùng để nhận mã xác minh, thông báo từ Vercel/GitHub/Google và quản lý quyền truy cập.

### Cách Đăng Nhập

1. Truy cập `https://mail.google.com`.
2. Nhập email quản trị, ví dụ `dolicwebsite@gmail.com`.
3. Nhập mật khẩu đã bàn giao.
4. Nếu Google yêu cầu xác minh, nhập mã OTP từ điện thoại/email khôi phục.
5. Sau khi vào được Gmail, kiểm tra mục Inbox và Spam để xem thông báo từ Vercel, GitHub hoặc Google.

### Việc Nên Làm Sau Khi Nhận Bàn Giao

- Đổi mật khẩu Gmail.
- Cập nhật số điện thoại khôi phục.
- Cập nhật email khôi phục thuộc quyền sở hữu của Công ty TNHH Thủy Sản Dolic.
- Bật xác thực 2 lớp trong phần Google Account > Security.

## 4. GitHub

### GitHub Dùng Để Làm Gì

GitHub là nơi lưu mã nguồn website. Có thể hiểu đây là “kho chứa bản gốc” của website.

Khi cần sửa website, kỹ thuật viên sẽ sửa source code và đưa bản cập nhật lên GitHub. Sau đó Vercel sẽ lấy code mới từ GitHub để cập nhật website.

### Cách Đăng Nhập GitHub

1. Truy cập `https://github.com/login`.
2. Nhập email/tên đăng nhập đã bàn giao, ví dụ `dolicwebsite@gmail.com`.
3. Nhập mật khẩu GitHub.
4. Nếu có yêu cầu xác thực 2 lớp, nhập mã xác minh.
5. Sau khi đăng nhập, vào mục repositories hoặc truy cập link repository website Dolic do bên bàn giao cung cấp.

### Những Mục Khách Hàng Cần Biết

- Repository: nơi chứa source code website.
- Branch: nhánh source đang dùng. Thông thường branch chính là `main`.
- Commit: mỗi lần cập nhật source sẽ tạo một bản ghi thay đổi.
- Pull request: yêu cầu gộp thay đổi, thường dùng khi có nhiều kỹ thuật viên cùng làm.

### Khách Hàng Có Nên Tự Sửa Code Không

Không nên nếu không có kiến thức kỹ thuật.

Khách hàng chỉ nên dùng GitHub để:

- Kiểm tra source code vẫn còn.
- Cấp quyền cho kỹ thuật viên mới.
- Xem lịch sử cập nhật.
- Tải bản backup source nếu cần.

### Cách Cấp Quyền Cho Kỹ Thuật Viên

1. Vào repository website Dolic.
2. Chọn Settings.
3. Chọn Collaborators hoặc Manage access.
4. Chọn Add people.
5. Nhập username/email GitHub của kỹ thuật viên.
6. Chọn quyền phù hợp:
   - Read: chỉ xem source.
   - Write: được cập nhật source.
   - Admin: toàn quyền, chỉ cấp cho người thật sự tin cậy.

Khuyến nghị: chỉ cấp quyền `Write` cho kỹ thuật viên bảo trì. Không cấp `Admin` nếu không cần.

### Cách Tải Backup Source Code

1. Vào repository website Dolic trên GitHub.
2. Chọn nút Code màu xanh.
3. Chọn Download ZIP.
4. Lưu file ZIP vào ổ cứng hoặc Google Drive của công ty.

## 5. Vercel

### Vercel Dùng Để Làm Gì

Vercel là nơi chạy website `dolic.vn`. Có thể hiểu GitHub là nơi giữ source code, còn Vercel là nơi đưa website lên internet.

Khi source code trên GitHub được cập nhật, Vercel sẽ tự động build và deploy website.

### Cách Đăng Nhập Vercel

1. Truy cập `https://vercel.com/login`.
2. Chọn đăng nhập bằng email hoặc GitHub, tùy tài khoản đã bàn giao.
3. Nếu dùng email, nhập `dolicwebsite@gmail.com`.
4. Nếu dùng GitHub, chọn Continue with GitHub và đăng nhập GitHub.
5. Sau khi đăng nhập, chọn project website Dolic.

### Các Mục Quan Trọng Trong Vercel

- Project: website đang được deploy.
- Deployments: lịch sử các lần cập nhật website.
- Domains: tên miền đang trỏ về website, ví dụ `dolic.vn`.
- Settings: cấu hình kỹ thuật của website.
- Environment Variables: biến môi trường, ví dụ `MAINTENANCE_MODE`.

### Cách Kiểm Tra Website Có Deploy Thành Công Không

1. Vào project Dolic trên Vercel.
2. Chọn tab Deployments.
3. Xem bản deploy mới nhất.
4. Nếu hiện trạng thái Ready hoặc Production nghĩa là deploy thành công.
5. Nếu hiện Error hoặc Failed, cần gửi ảnh màn hình/log lỗi cho kỹ thuật viên.

### Cách Bật Trang Bảo Trì

Dùng khi website cần tạm ngưng hiển thị để sửa chữa.

1. Vào project Dolic trên Vercel.
2. Chọn Settings.
3. Chọn Environment Variables.
4. Thêm hoặc sửa biến:

```text
MAINTENANCE_MODE=true
```

5. Lưu lại.
6. Vào Deployments và redeploy bản mới nhất, hoặc nhờ kỹ thuật viên redeploy.

### Cách Tắt Trang Bảo Trì

1. Vào Environment Variables trong Vercel.
2. Đổi biến thành:

```text
MAINTENANCE_MODE=false
```

Hoặc xóa biến `MAINTENANCE_MODE`.

3. Redeploy website.
4. Mở `https://dolic.vn` để kiểm tra website đã hiển thị lại bình thường.

### Những Việc Không Nên Tự Làm Trên Vercel

- Không xóa project.
- Không xóa domain `dolic.vn`.
- Không xóa biến môi trường nếu không hiểu chức năng.
- Không đổi framework/build command.
- Không ngắt kết nối GitHub repository.

Nếu cần thao tác các mục trên, nên hỏi kỹ thuật viên trước.

## 6. Google Analytics 4

### Google Analytics Dùng Để Làm Gì

Google Analytics 4 dùng để xem thống kê truy cập website:

- Có bao nhiêu người vào website.
- Người dùng vào từ nguồn nào.
- Người dùng xem trang nào nhiều.
- Thiết bị truy cập là điện thoại hay máy tính.
- Hiệu quả của các chiến dịch marketing.

### Cách Đăng Nhập Google Analytics

1. Truy cập `https://analytics.google.com`.
2. Đăng nhập bằng email được cấp quyền, ví dụ `dolicwebsite@gmail.com`.
3. Chọn tài sản/property của website Dolic.
4. Vào Reports để xem báo cáo.

### Các Mục Nên Xem

- Reports snapshot: tổng quan nhanh.
- Realtime: người dùng đang truy cập ngay lúc này.
- Acquisition: người dùng đến từ Google, Facebook, Zalo, quảng cáo hay truy cập trực tiếp.
- Engagement: các trang được xem nhiều.
- Tech: thiết bị và trình duyệt người dùng sử dụng.

### Lưu Ý

- Số liệu GA4 có thể trễ, không phải lúc nào cũng cập nhật ngay lập tức.
- Một số người dùng có thể chặn tracking nên số liệu chỉ mang tính tham khảo.
- Không xóa property hoặc data stream nếu không chắc chắn.

## 7. Google Search Console

### Search Console Dùng Để Làm Gì

Google Search Console dùng để theo dõi tình trạng website trên Google Search:

- Google đã nhận website chưa.
- Trang nào được index.
- Từ khóa nào đang có lượt hiển thị/click.
- Website có lỗi SEO kỹ thuật không.
- Sitemap có được Google đọc không.

### Cách Đăng Nhập Search Console

1. Truy cập `https://search.google.com/search-console`.
2. Đăng nhập bằng email được cấp quyền, ví dụ `dolicwebsite@gmail.com`.
3. Chọn property của website `dolic.vn`.

### Các Mục Nên Xem

- Performance: lượt hiển thị, lượt click, từ khóa tìm kiếm.
- Pages/Indexing: trang nào đã được Google index.
- Sitemaps: kiểm tra sitemap đã gửi chưa.
- Experience: trải nghiệm trang nếu Google có dữ liệu.

### Cách Gửi Sitemap

1. Vào Search Console.
2. Chọn property `dolic.vn`.
3. Chọn Sitemaps.
4. Nhập:

```text
sitemap.xml
```

5. Bấm Submit.

Sitemap đầy đủ của website là:

```text
https://dolic.vn/sitemap.xml
```

### Khi Nào Cần Dùng Search Console

- Sau khi website mới go-live.
- Sau khi thêm nhiều trang/bài viết mới.
- Khi muốn kiểm tra website có xuất hiện trên Google không.
- Khi thấy Google báo lỗi index, sitemap hoặc mobile usability.

## 8. Tên Miền

### Tên Miền Dùng Để Làm Gì

Tên miền là địa chỉ website, ví dụ `dolic.vn`. Nếu mất quyền quản lý tên miền, website và email liên quan có thể bị ảnh hưởng nghiêm trọng.

### Khách Hàng Cần Quản Lý Những Gì

- Tài khoản nhà đăng ký tên miền.
- Email/số điện thoại nhận thông báo gia hạn.
- Ngày hết hạn tên miền.
- Cấu hình DNS trỏ về Vercel.

### Việc Cần Làm Định Kỳ

- Kiểm tra ngày hết hạn tên miền.
- Bật tự động gia hạn nếu nhà đăng ký hỗ trợ.
- Đảm bảo email quản trị tên miền là email công ty kiểm soát.
- Không chuyển tên miền cho bên thứ ba nếu không có văn bản rõ ràng.

### Những Việc Không Nên Tự Làm

- Không xóa DNS record.
- Không đổi nameserver nếu không hiểu hậu quả.
- Không chuyển quyền sở hữu tên miền cho cá nhân bên ngoài.
- Không để tên miền hết hạn.

## 9. Khi Cần Cập Nhật Website Thì Làm Gì

### Trường Hợp Cập Nhật Nhỏ

Ví dụ:

- Đổi số điện thoại.
- Đổi địa chỉ.
- Đổi giá sản phẩm.
- Thêm ảnh sản phẩm.
- Sửa lỗi chính tả.

Quy trình khuyến nghị:

1. Ghi rõ nội dung cần sửa.
2. Chụp màn hình vị trí cần sửa nếu có.
3. Gửi cho kỹ thuật viên.
4. Kỹ thuật viên cập nhật source trên GitHub.
5. Vercel tự deploy.
6. Khách hàng kiểm tra lại trên `https://dolic.vn`.

### Trường Hợp Cập Nhật Lớn

Ví dụ:

- Thêm trang mới.
- Thêm CMS.
- Kết nối form liên hệ với email/CRM.
- Làm tính năng đặt hàng/báo giá.
- Thay đổi giao diện.

Quy trình khuyến nghị:

1. Mô tả yêu cầu bằng văn bản.
2. Thống nhất phạm vi, thời gian và chi phí nếu phát sinh.
3. Kỹ thuật viên thực hiện trên source.
4. Kiểm tra bản demo/preview.
5. Deploy lên website chính thức.

## 10. Cách Kiểm Tra Website Sau Mỗi Lần Cập Nhật

Sau khi kỹ thuật báo đã cập nhật xong, khách hàng nên kiểm tra:

- Mở `https://dolic.vn` bằng điện thoại.
- Mở `https://dolic.vn` bằng máy tính.
- Kiểm tra trang vừa được sửa.
- Kiểm tra menu đầu trang.
- Kiểm tra nút gọi điện, email, Zalo/Facebook nếu có.
- Kiểm tra trang sản phẩm và trang liên hệ.
- Nếu có bài viết mới, kiểm tra link bài viết.
- Nếu có lỗi hình ảnh hoặc chữ sai, chụp màn hình gửi lại kỹ thuật.

## 11. Bảng Tóm Tắt Dành Cho Người Quản Lý

| Tài nguyên | Dùng để làm gì | Ai nên thao tác |
| --- | --- | --- |
| Gmail quản trị | Nhận mã xác minh, thông báo tài khoản | Chủ sở hữu/quản lý |
| GitHub | Lưu source code website | Kỹ thuật viên |
| Vercel | Chạy và deploy website | Kỹ thuật viên/quản lý được hướng dẫn |
| Google Analytics 4 | Xem thống kê truy cập | Marketing/quản lý |
| Google Search Console | Theo dõi SEO trên Google | Marketing/kỹ thuật SEO |
| Tên miền | Quản lý địa chỉ `dolic.vn` | Chủ sở hữu/quản lý |

## 12. Checklist Sau Khi Nhận Bàn Giao

- Đăng nhập được Gmail quản trị.
- Đăng nhập được GitHub.
- Đăng nhập được Vercel.
- Đăng nhập được Google Analytics.
- Đăng nhập được Google Search Console.
- Kiểm tra email/số điện thoại khôi phục.
- Đổi mật khẩu các tài khoản quan trọng.
- Bật xác thực 2 lớp.
- Lưu ngày hết hạn tên miền.
- Lưu link repository GitHub.
- Lưu link project Vercel.
- Lưu tài liệu hướng dẫn này cùng hồ sơ bàn giao website.

## 13. Khi Gặp Sự Cố Cần Gửi Gì Cho Kỹ Thuật

Khi website lỗi, nên gửi đủ thông tin sau:

- Link trang bị lỗi.
- Ảnh chụp màn hình lỗi.
- Lỗi xảy ra trên điện thoại hay máy tính.
- Trình duyệt đang dùng, ví dụ Chrome/Safari.
- Thời điểm phát hiện lỗi.
- Nội dung vừa được cập nhật trước khi lỗi xảy ra, nếu có.

Không nên chỉ nhắn “website lỗi” vì kỹ thuật viên sẽ khó xác định nguyên nhân.

## 14. Người Phụ Trách Bàn Giao

Người phụ trách bàn giao: Đoàn Phạm Minh Hiếu

Kênh trao đổi tài liệu/cấu hình: Zalo hoặc ứng dụng trao đổi tin nhắn khác theo biên bản nghiệm thu.
