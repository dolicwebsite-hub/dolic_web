export type Product = {
  name: string;
  englishName?: string;
  model: string;
  origin: string;
  specs: string;
  price: string;
  image: string;
  status: string;
  priority?: string;
  details?: string;
  usp?: string[];
};

export type ProductCategory = {
  id: string;
  name: string;
  summary: string;
  image: string;
  products: Product[];
};

export const navItems = [
  ["Về chúng tôi", "/about-us"],
  ["Sản phẩm", "/san-pham"],
  ["Đại lý", "/dai-ly"],
  ["Liên hệ", "/lien-he"],
];

export const contactInfo = {
  website: "dolic.vn",
  email: "congtytnhhthuysandolic@gmail.com",
  fanpage: "CÔNG TY TNHH THUỶ SẢN DOLIC",
  tiktok: "THUỶ SẢN DOLIC",
  hotlineNotice: "Hotline mới đang được đăng ký và sẽ được cập nhật sau.",
  socials: {
    zalo: "https://zalo.me/0397581028",
    facebook: "https://www.facebook.com/share/1EmHbXzC78/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/search/user?q=THU%E1%BB%B6%20S%E1%BA%A2N%20DOLIC",
    youtube: "https://www.youtube.com",
    instagram: "https://www.instagram.com",
  },
  offices: [
    {
      region: "Miền Nam",
      address: "QL22/8/48/4 ấp Xuân Thới Đông 2, Tân Xuân, Hóc Môn, Thành phố Hồ Chí Minh",
      hotline: "0397581028",
      displayHotline: "0397 581 028",
    },
    {
      region: "Miền Bắc",
      address: "Thôn Dĩnh Bạn, xã Bảo Đài, tỉnh Bắc Ninh",
      hotline: "0352495893",
      displayHotline: "0352 495 893",
    },
  ],
};

const aeratorUsp = [
  "Tiết kiệm điện 7-15% so với quạt thường, giúp giảm chi phí vận hành mỗi vụ.",
  "Vận hành ổn định liên tục 24/7, hạn chế nóng máy.",
  "Đã kiểm chứng tại trang trại thực nghiệm Dolic.",
  "Bảo hành nhanh chóng.",
];

const pumpUsp = [
  "Tiết kiệm điện 10% so với máy bơm thường, giúp giảm chi phí vận hành mỗi vụ.",
  "Vận hành ổn định liên tục 24/7 trong môi trường thuỷ sản.",
  "Đã kiểm chứng tại trang trại thực nghiệm Dolic.",
  "Bảo hành, bảo dưỡng nhanh chóng.",
];

const inverterUsp = [
  "Tiết kiệm điện từ 20-40%, giúp giảm chi phí vận hành mỗi vụ.",
  "Motor nam châm vĩnh cửu hiệu suất cao, nhiệt độ làm việc thấp.",
  "Đã kiểm chứng tại trang trại thực nghiệm Dolic.",
  "Bảo hành nhanh chóng.",
];

const aeratorPatentDetail =
  "Vỏ motor inox 304 xỉn, cánh quạt nhựa nylon, phao nhựa HDPE. Cánh quạt nhỏ được cấp bằng sáng chế, khi vận hành giúp giảm ma sát với không khí, tăng tốc độ quay và hoạt hoá oxy tốt hơn.";

const pumpDetail =
  "Thân inox 304 xỉn, đầu và miệng bơm bằng nhựa HDPE. Thiết kế tập trung vào hiệu suất cao, tiết kiệm điện, bảo hành và bảo dưỡng nhanh chóng.";

export const productCategories: ProductCategory[] = [
  {
    id: "may-suc-khi-quat-nuoc",
    name: "Máy sục khí / Quạt nước",
    summary: "Guồng 2-10 cánh, 0.75-2.2kW, IPX8, phao HDPE và cánh nylon cho ao tôm/cá.",
    image: "/assets/products/drive-full/yc-15z-6-canh-hop-so.webp",
    products: [
      { name: "Quạt 10 cánh 2.2kW 380V hộp số", englishName: "DOLIC 10-Blade Gear-Driven Paddle Wheel Aerator (2.2 kW, 380V)", model: "YC 2.2", origin: "Trung Quốc - Yimin", specs: "2.2kW - 380V - ≥3.4 kg O2/h - 76kg - 190 vòng/phút - IPX8", price: "12.900.000", image: "/assets/products/drive-full/yc-22z-10-canh.webp", status: "Đang bán", details: `${aeratorPatentDetail} Tuổi thọ động cơ ước tính 5 năm.`, usp: aeratorUsp, priority: "Đang bán" },
      { name: "Quạt 6 cánh 1.5kW 380V hộp số", englishName: "DOLIC 6-Blade Gear-Driven Paddle Wheel Aerator (1.5 kW, 380V)", model: "YC 1.5Z", origin: "Trung Quốc - Yimin", specs: "1.5kW - 380V - ≥2.2 kg O2/h - 63.5kg - 190 vòng/phút - IPX8", price: "9.300.000", image: "/assets/products/drive-full/yc-15z-6-canh-hop-so.webp", status: "Đang bán", details: `${aeratorPatentDetail} Tuổi thọ động cơ ước tính 5 năm.`, usp: aeratorUsp, priority: "Đang bán" },
      { name: "Quạt 6 cánh 1.5kW 380V bánh răng", englishName: "DOLIC 6-Blade Gear Wheel Paddle Wheel Aerator (1.5 kW, 380V)", model: "YC 1.5", origin: "Trung Quốc - Yimin", specs: "1.5kW - 380V - ≥2.2 kg O2/h - 63.5kg - 190 vòng/phút - IPX8", price: "9.300.000", image: "/assets/products/drive-full/yc6-15s-6-canh-banh-rang.webp", status: "Đang bán", details: `${aeratorPatentDetail} Tuổi thọ động cơ ước tính 5 năm.`, usp: aeratorUsp, priority: "Đang bán" },
      { name: "Quạt 4 cánh 1.1kW 380V/220V hộp số", englishName: "DOLIC 4-Blade Gear-Driven Paddle Wheel Aerator (1.1 kW, 380V/220V)", model: "YC 1.1Z", origin: "Trung Quốc - Yimin", specs: "1.1kW - 380V/220V - ≥1.5 kg O2/h - 52.5kg - 190 vòng/phút - IPX8", price: "8.300.000", image: "/assets/products/drive-full/yc-11z-4-canh-hop-so.webp", status: "Đang bán", details: `${aeratorPatentDetail} Tuổi thọ động cơ ước tính 3-5 năm.`, usp: aeratorUsp, priority: "Đang bán" },
      { name: "Quạt 4 cánh 1.1kW 220V bánh răng", englishName: "DOLIC 4-Blade Open-Gear Paddle Wheel Aerator (1.1 kW, 220V)", model: "YC 1.1", origin: "Trung Quốc - Yimin", specs: "1.1kW - 220V - ≥2.2 kg O2/h - 63.5kg - 190 vòng/phút - IPX8", price: "8.300.000", image: "/assets/products/drive-full/yc4-11s-4-canh-banh-rang.webp", status: "Đang bán", details: `${aeratorPatentDetail} Tuổi thọ động cơ ước tính 3-5 năm.`, usp: aeratorUsp, priority: "Đang bán" },
      { name: "Quạt 2 cánh 0.75kW 220V", englishName: "DOLIC 2-Blade Paddle Wheel Aerator (0.75 kW, 220V)", model: "YC 0.75DZ", origin: "Trung Quốc - Yimin", specs: "0.75kW - 220V - ≥0.9 kg O2/h - 34kg - 190 vòng/phút - IPX8", price: "5.900.000", image: "/assets/products/drive-full/yc-075dz-2-canh.webp", status: "Đang bán", details: `${aeratorPatentDetail} Tuổi thọ động cơ ước tính 3-5 năm.`, usp: aeratorUsp, priority: "Đang bán" },
      { name: "Quạt 2 cánh 0.75kW 380V", englishName: "DOLIC 2-Blade Paddle Wheel Aerator (0.75 kW, 380V)", model: "YC 0.75Z", origin: "Trung Quốc - Yimin", specs: "0.75kW - 380V - ≥0.9 kg O2/h - 34kg - 190 vòng/phút - IPX8", price: "5.900.000", image: "/assets/products/drive-full/yc-075z-2-canh.webp", status: "Đang bán", details: `${aeratorPatentDetail} Tuổi thọ động cơ ước tính 3-5 năm.`, usp: aeratorUsp, priority: "Đang bán" },
      { name: "Quạt 4 cánh xanh to 1.5kW 380V bánh răng", englishName: "DOLIC 4-Blade Large Green Open-Gear Paddle Wheel Aerator (1.5 kW, 380V)", model: "SC 1.5", origin: "Trung Quốc - Yimin", specs: "1.5kW - 380V - ≥2.2 kg O2/h - 71kg - 107 vòng/phút - IPX8", price: "9.000.000", image: "/assets/products/drive-full/sc-15-4-canh-cutout.webp", status: "Mới ra mắt", details: "Vỏ motor inox 304 xỉn, cánh quạt nhựa nylon, phao nhựa HDPE. Cánh quạt lớn giúp dòng chảy mạnh hơn; thiết kế răng lược tạo oxy, phần giữa cánh không có lỗ để tạo dòng chảy mạnh hơn. Tuổi thọ động cơ ước tính 3-5 năm.", usp: aeratorUsp, priority: "Mới ra mắt" },
    ],
  },
  {
    id: "thiet-bi-do-nuoc",
    name: "Thiết bị đo nước",
    summary: "Máy đo oxy cầm tay DOEASY-2001 phục vụ kiểm tra nhanh tại ao.",
    image: "/assets/products/drive-full/may-do-oxy-2001.webp",
    products: [
      { name: "Máy đo oxy DOEASY-2001, 3.7V", model: "DOEASY-2001, 3.7V", origin: "Trung Quốc", specs: "3.7V - đo oxy hòa tan cầm tay", price: "19.000.000", image: "/assets/products/drive-full/may-do-oxy-2001.webp", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 1 - Ưu tiên trung" },
    ],
  },
  {
    id: "may-cho-an-tu-dong",
    name: "Máy cho ăn tự động",
    summary: "Máy 2-6 bao, tùy chọn 180 độ và 360 độ cho mô hình cá/tôm.",
    image: "/assets/products/drive-full/may-cho-an-4-bao.webp",
    products: [
      { name: "Máy cho ăn tự động 2 bao - 180 độ", model: "T150D-2", origin: "Trung Quốc", specs: "2 bao - 180 độ", price: "3.700.000", image: "/assets/products/drive-full/may-cho-an-2-bao.webp", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
      { name: "Máy cho ăn tự động 4 bao - 180 độ", model: "T150D-4", origin: "Trung Quốc", specs: "4 bao - 180 độ", price: "5.200.000", image: "/assets/products/drive-full/may-cho-an-4-bao.webp", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
      { name: "Máy cho ăn tự động 6 bao - 360 độ sò trong", model: "JY-TM3601-DL1", origin: "Trung Quốc", specs: "1200W - 6 bao - 360 độ", price: "14.800.000", image: "/assets/products/drive-full/may-cho-an-6-bao-so-trong.webp", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
      { name: "Máy cho ăn tự động 6 bao - 360 độ sò ngoài", model: "JY-TM3601-DL2", origin: "Trung Quốc", specs: "1500W - 6 bao - 360 độ", price: "16.800.000", image: "/assets/products/drive-full/may-cho-an-6-bao-so-ngoai.webp", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
    ],
  },
  {
    id: "bom-loc-xu-ly-nuoc",
    name: "Bơm, lọc, xử lý nước",
    summary: "Bơm chìm và bơm nổi 0.75-11kW, IPX8, thân inox 304 xỉn cho cấp thoát nước trang trại.",
    image: "/assets/products/drive-full/fb-200-75-bom-co-phao.webp",
    products: [
      { name: "Bơm 11kW 380V", englishName: "DOLIC Water Pump (11 kW)", model: "QY250-9.5-11", origin: "Trung Quốc - Yimin", specs: "11kW - 380V - cửa xả 200mm - đẩy cao 9.5m - 73kg - IPX8", price: "18.000.000", image: "/assets/products/drive-full/qy400-6-11-bom.webp", status: "Đang bán", details: `${pumpDetail} Lưu lượng/cột áp: 20m3/16.3m, 30m3/10.9m, 35m3/7.2m. Tuổi thọ động cơ ước tính 3-5 năm.`, usp: pumpUsp, priority: "Đang bán" },
      { name: "Bơm 7.5kW có phao 380V", englishName: "DOLIC Float Switch Water Pump (7.5 kW)", model: "FB 200-7.5", origin: "Trung Quốc - Yimin", specs: "7.5kW - 380V - 380m3/h - cửa xả 200mm - đẩy cao 6m - IPX8", price: "12.000.000", image: "/assets/products/drive-full/fb-200-75-bom-co-phao.webp", status: "Đang bán", details: `${pumpDetail} Cân nặng 58kg. Tuổi thọ động cơ ước tính 3-5 năm.`, usp: pumpUsp, priority: "Đang bán" },
      { name: "Bơm 4kW tiêu chuẩn 380V", englishName: "DOLIC Standard Water Pump (4 kW)", model: "QY200-4-4", origin: "Trung Quốc - Yimin", specs: "4kW - 380V - 200m3/h - cửa xả 152mm - đẩy cao 6m - IPX8", price: "6.900.000", image: "/assets/products/drive-full/qy250-6-4-bom-tieu-chuan.webp", status: "Đang bán", details: `${pumpDetail} Cân nặng 35kg. Tuổi thọ động cơ ước tính 3-5 năm.`, usp: pumpUsp, priority: "Đang bán" },
      { name: "Bơm 4kW biến tần 380V", englishName: "DOLIC VFD Water Pump (4 kW)", model: "QT200-4-4", origin: "Trung Quốc - Yimin", specs: "4kW - 380V - 200m3/h - cửa xả 152mm - đẩy cao 4m - IPX8", price: "9.300.000", image: "/assets/products/drive-full/qt200-4-4-bom-bien-tan.webp", status: "Đang bán", details: `${pumpDetail} Cân nặng 20kg. Tuổi thọ động cơ ước tính 3-5 năm.`, usp: pumpUsp, priority: "Đang bán" },
      { name: "Bơm 1.5kW 220V", englishName: "DOLIC Standard Water Pump (1.5 kW)", model: "QDX70-8-1.5", origin: "Trung Quốc - Yimin", specs: "1.5kW - 220V - 70m3/h - cửa xả 100mm - 19kg - IPX8", price: "4.200.000", image: "/assets/products/drive-full/qdx70-8-15-bom-cutout.webp", status: "Đang bán", details: `${pumpDetail} Cân nặng 19kg. Tuổi thọ động cơ ước tính 3-5 năm.`, usp: pumpUsp, priority: "Đang bán" },
      { name: "Bơm 0.75kW 220V", englishName: "DOLIC Standard Water Pump (0.75 kW)", model: "FB-80-0.75D", origin: "Trung Quốc - Yimin", specs: "0.75kW - 220V - 50m3/h - cửa xả 80mm - đẩy cao 3m - IPX8", price: "2.600.000", image: "/assets/products/drive-full/fb-80-075-bom.webp", status: "Đang bán", details: `${pumpDetail} Cân nặng 15kg. Tuổi thọ động cơ ước tính 3-5 năm.`, usp: pumpUsp, priority: "Đang bán" },
    ],
  },
  {
    id: "may-suc-khi-ban-treo-khi-nen",
    name: "Máy sục khí bản treo khí nén",
    summary: "Hệ thống 7.5-30kW cho trang trại cần oxy ổn định và vận hành quy mô lớn.",
    image: "/assets/products/drive-full/may-suc-khi-treo-khi-nen.webp",
    products: [
      { name: "Máy sục khí bản treo khí nén 7.5kW 380V CFA075-35, 35KPA", model: "CFA075-35, 35KPA", origin: "Trung Quốc", specs: "7.5kW - 380V - 35KPA", price: "114.500.000", image: "/assets/products/air-blower-treo-khi-nen.jpg", status: "Đã có thông số, catalog một phần", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Máy sục khí bản treo khí nén 7.5kW 380V CFA075-25, 25KPA", model: "CFA075-25, 25KPA", origin: "Trung Quốc", specs: "7.5kW - 380V - 25KPA", price: "114.500.000", image: "/assets/products/air-blower-treo-khi-nen.jpg", status: "Đã có thông số, catalog một phần", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Máy sục khí bản treo khí nén 15kW 380V CFA150-35, 35KPA", model: "CFA150-35, 35KPA", origin: "Trung Quốc", specs: "15kW - 380V - 35KPA", price: "153.000.000", image: "/assets/products/air-blower-treo-khi-nen.jpg", status: "Đã có thông số, catalog một phần", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Máy sục khí bản treo khí nén 15kW 380V CFA150-25, 25KPA", model: "CFA150-25, 25KPA", origin: "Trung Quốc", specs: "15kW - 380V - 25KPA", price: "153.000.000", image: "/assets/products/air-blower-treo-khi-nen.jpg", status: "Đã có thông số, catalog một phần", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Máy sục khí bản treo khí nén 22kW 380V CFA220-35, 35KPA", model: "CFA220-35, 35KPA", origin: "Trung Quốc", specs: "22kW - 380V - 35KPA", price: "177.000.000", image: "/assets/products/air-blower-treo-khi-nen.jpg", status: "Đã có thông số, catalog một phần", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Máy sục khí bản treo khí nén 30kW 380V CFA300-30, 30KPA", model: "CFA300-30, 30KPA", origin: "Trung Quốc", specs: "30kW - 380V - 30KPA", price: "177.000.000", image: "/assets/products/air-blower-treo-khi-nen.jpg", status: "Đã có thông số, catalog một phần", priority: "Phase 1 - Ưu tiên cao" },
    ],
  },
  {
    id: "tam-hoa-3-qua-phao",
    name: "Tam hoa 3 quả phao",
    summary: "Dòng biến tần và cơ dùng motor nam châm vĩnh cửu, tăng oxy linh hoạt cho ao nuôi.",
    image: "/assets/products/drive-full/ty-22-bien-tan.webp",
    products: [
      { name: "Tam hoa biến tần 1.5kW 220V", englishName: "DOLIC Tam Hoa Inverter Auto Feeder (1.5 kW, 220V)", model: "TY-1.5D", origin: "Trung Quốc - Yimin", specs: "1.5kW - 220V - ≥2.3 kg O2/h - 28kg - 3 chế độ 1.1/0.75/0.55kW - IPX8", price: "6.750.000", image: "/assets/products/drive-full/ty-15d-bien-tan.webp", status: "Đang bán", details: "Motor nam châm vĩnh cửu hiệu suất cao, khung inox 304, phao HDPE. Tuổi thọ động cơ ước tính 3-5 năm. Hiệu suất cao, tiết kiệm điện, bảo hành bảo dưỡng nhanh chóng.", usp: inverterUsp, priority: "Đang bán" },
      { name: "Tam hoa biến tần 2.2kW 380V", englishName: "DOLIC Tam Hoa Inverter Auto Feeder (2.2 kW, 380V)", model: "TY-2.2", origin: "Trung Quốc - Yimin", specs: "2.2kW - 380V - ≥4.0 kg O2/h - 30kg - 3 chế độ 1.6/1.3/0.75kW - IPX8", price: "7.750.000", image: "/assets/products/drive-full/ty-22-bien-tan.webp", status: "Đang bán", details: "Motor nam châm vĩnh cửu hiệu suất cao, khung inox 304, phao HDPE. Tuổi thọ động cơ ước tính 3-5 năm. Hiệu suất cao, tiết kiệm điện, bảo hành bảo dưỡng nhanh chóng.", usp: inverterUsp, priority: "Đang bán" },
      { name: "Tam hoa cơ 0.75kW 220V", englishName: "DOLIC Tam Hoa Mechanical Auto Feeder (0.75 kW, 220V)", model: "YL-0.75", origin: "Trung Quốc - Yimin", specs: "0.75kW - 220V - ≥1.1 kg O2/h - 42kg - 148 vòng/phút - IPX8", price: "6.000.000", image: "/assets/products/drive-full/tam-hoa-co-075kw-220v-white.jpg", status: "Đang bán", details: "Motor nam châm vĩnh cửu hiệu suất cao, khung inox 304, phao HDPE. Tuổi thọ động cơ ước tính 3-5 năm. Ưu điểm: hiệu suất cao, nhiệt độ làm việc thấp, lưu lượng nước lớn.", usp: inverterUsp, priority: "Đang bán" },
      { name: "Tam hoa cơ 1.5kW 380V", englishName: "DOLIC Tam Hoa Mechanical Auto Feeder (1.5 kW, 380V)", model: "YL-1.5", origin: "Trung Quốc - Yimin", specs: "1.5kW - 380V - ≥2.3 kg O2/h - 42kg - 138 vòng/phút - IPX8", price: "7.000.000", image: "/assets/products/drive-full/ty-15-bien-tan.webp", status: "Đang bán", details: "Motor nam châm vĩnh cửu hiệu suất cao, khung inox 304, phao HDPE. Tuổi thọ động cơ ước tính 3-5 năm. Hiệu suất cao, tiết kiệm điện, bảo hành bảo dưỡng nhanh chóng.", usp: inverterUsp, priority: "Đang bán" },
    ],
  },
  {
    id: "combo-thiet-bi",
    name: "Combo thiết bị tối ưu điện",
    summary: "Ô chờ cho các combo máy theo mô hình ao, diện tích và mục tiêu tiết kiệm điện.",
    image: "/assets/products/air-blower-treo-khi-nen.jpg",
    products: [],
  },
];

export const productSlides = [
  {
    title: "Quạt nước và guồng sục khí",
    subtitle: "Tạo oxy mạnh, dễ chọn theo diện tích ao",
    image: "/assets/products/drive-full/yc-15z-6-canh-hop-so.webp",
  },
  {
    title: "Bơm và xử lý nước",
    subtitle: "Ổn định cấp thoát nước cho vận hành trang trại",
    image: "/assets/products/drive-full/fb-200-75-bom-co-phao.webp",
  },
  {
    title: "Đo oxy và chất lượng nước",
    subtitle: "Kiểm tra nhanh các chỉ số rủi ro tại ao",
    image: "/assets/products/drive-full/may-do-oxy-2001.webp",
  },
  {
    title: "Sục khí bản treo khí nén",
    subtitle: "Công suất lớn cho trang trại cần oxy ổn định",
    image: "/assets/products/drive-full/may-suc-khi-treo-khi-nen.webp",
  },
];

export const allProducts = productCategories.flatMap((category) => category.products);
