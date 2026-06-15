export type Product = {
  name: string;
  model: string;
  origin: string;
  specs: string;
  price: string;
  image: string;
  status: string;
  priority?: string;
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

export const productCategories: ProductCategory[] = [
  {
    id: "may-suc-khi-quat-nuoc",
    name: "Máy sục khí / Quạt nước",
    summary: "Guồng 2-10 cánh, 0.75-2.2kW, hộp số hoặc bánh răng cho ao tôm/cá.",
    image: "/assets/products/aerator-6-canh-15kw-hop-so-b.png",
    products: [
      { name: "Quạt nước 10 cánh 2.2kW 380V hộp số", model: "YC-2.2Z", origin: "Trung Quốc - Yimin", specs: "2.2kW - 380V - 10 cánh - hộp số", price: "12.900.000", image: "/assets/product-aerator.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Quạt nước 6 cánh 1.5kW 380V hộp số", model: "YC-1.5Z", origin: "Trung Quốc - Yimin", specs: "1.5kW - 380V - 6 cánh - hộp số", price: "9.300.000", image: "/assets/products/aerator-6-canh-15kw-hop-so-b.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Quạt nước 6 cánh 1.5kW 380V bánh răng", model: "YC-1.5", origin: "Trung Quốc - Yimin", specs: "1.5kW - 380V - 6 cánh - bánh răng", price: "9.300.000", image: "/assets/products/aerator-4-canh-15kw-banh-rang-xanh-b.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Quạt nước 4 cánh 1.1kW 220V hộp số", model: "YC-1.1DZ", origin: "Trung Quốc - Yimin", specs: "1.1kW - 220V - 4 cánh - hộp số", price: "8.300.000", image: "/assets/products/aerator-4-canh-11kw-hop-so.jpg", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Quạt nước 2 cánh 0.75kW 220V", model: "YC-0.75Z", origin: "Trung Quốc - Yimin", specs: "0.75kW - 220V - 2 cánh - hộp số", price: "5.900.000", image: "/assets/products/aerator-2-canh-075kw-220v.jpg", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Quạt nước 2 cánh 0.75kW 380V", model: "YC-0.75", origin: "Trung Quốc - Yimin", specs: "0.75kW - 380V - 2 cánh - hộp số", price: "5.900.000", image: "/assets/products/aerator-2-canh-075kw-220v.jpg", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Quạt nước 4 cánh 1.5kW 380V cánh to bánh răng", model: "SC-1.5", origin: "Trung Quốc - Yimin", specs: "1.5kW - 380V - 4 cánh to - bánh răng", price: "9.200.000", image: "/assets/products/aerator-4-canh-15kw-banh-rang-xanh-b.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên trung" },
    ],
  },
  {
    id: "thiet-bi-do-nuoc",
    name: "Thiết bị đo nước",
    summary: "Máy đo oxy cầm tay DOEASY-2001 phục vụ kiểm tra nhanh tại ao.",
    image: "/assets/products/meter-do-oxy-2001.jpg",
    products: [
      { name: "Máy đo oxy DOEASY-2001, 3.7V", model: "DOEASY-2001, 3.7V", origin: "Trung Quốc", specs: "3.7V - đo oxy hòa tan cầm tay", price: "19.000.000", image: "/assets/products/meter-do-oxy-2001.jpg", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 1 - Ưu tiên trung" },
    ],
  },
  {
    id: "may-cho-an-tu-dong",
    name: "Máy cho ăn tự động",
    summary: "Máy 2-6 bao, tùy chọn 180 độ và 360 độ cho mô hình cá/tôm.",
    image: "/assets/product-aerator.png",
    products: [
      { name: "Máy cho ăn tự động 2 bao - 180 độ", model: "T150D-2", origin: "Trung Quốc", specs: "2 bao - 180 độ", price: "3.700.000", image: "/assets/product-aerator.png", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
      { name: "Máy cho ăn tự động 4 bao - 180 độ", model: "T150D-4", origin: "Trung Quốc", specs: "4 bao - 180 độ", price: "5.200.000", image: "/assets/product-aerator.png", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
      { name: "Máy cho ăn tự động 6 bao - 360 độ sò trong", model: "JY-TM3601-DL1", origin: "Trung Quốc", specs: "1200W - 6 bao - 360 độ", price: "14.800.000", image: "/assets/product-aerator.png", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
      { name: "Máy cho ăn tự động 6 bao - 360 độ sò ngoài", model: "JY-TM3601-DL2", origin: "Trung Quốc", specs: "1500W - 6 bao - 360 độ", price: "16.800.000", image: "/assets/product-aerator.png", status: "Một phần ảnh, đã có thông số, cần làm catalog", priority: "Phase 2" },
    ],
  },
  {
    id: "bom-loc-xu-ly-nuoc",
    name: "Bơm, lọc, xử lý nước",
    summary: "Bơm 0.75-11kW, lưu lượng đến 380m3/h cho cấp thoát nước trang trại.",
    image: "/assets/products/pump-75kw-380v.png",
    products: [
      { name: "Bơm chìm 11kW 380V", model: "QY250-9.5-11", origin: "Trung Quốc - Yimin", specs: "11kW - 380V - họng ra", price: "18.000.000", image: "/assets/product-pump.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên trung" },
      { name: "Bơm nổi 7.5kW 380V", model: "FB-200-7.5", origin: "Trung Quốc - Yimin", specs: "7.5kW - 380V - họng ra 200mm - lưu lượng 380m3/h", price: "12.000.000", image: "/assets/products/pump-75kw-380v.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Bơm chìm 4kW 380V biến tần", model: "QT200-4-4", origin: "Trung Quốc - Yimin", specs: "4kW - 380V - họng ra 150mm - lưu lượng 250m3/h", price: "9.300.000", image: "/assets/products/pump-4kw-380v-bien-tan.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Bơm chìm 4kW 380V tiêu chuẩn", model: "QY250-6-4", origin: "Trung Quốc - Yimin", specs: "4kW - 380V - họng ra 152mm - lưu lượng 250m3/h", price: "6.900.000", image: "/assets/product-pump.png", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên cao" },
      { name: "Bơm chìm 1.5kW 220V", model: "QDX70-8-1.5", origin: "Trung Quốc - Yimin", specs: "1.5kW - 220V - họng ra 100mm - lưu lượng 100m3/h", price: "4.200.000", image: "/assets/products/pump-15kw-220v.jpg", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên trung" },
      { name: "Bơm nổi 0.75kW 220V", model: "FB-80-0.75D", origin: "Trung Quốc - Yimin", specs: "0.75kW - 220V - họng ra 76mm - lưu lượng 80m3/h", price: "2.600.000", image: "/assets/products/pump-075kw-220v.jpg", status: "Đã có ảnh, thông số, catalog", priority: "Phase 1 - Ưu tiên trung" },
    ],
  },
  {
    id: "may-suc-khi-ban-treo-khi-nen",
    name: "Máy sục khí bản treo khí nén",
    summary: "Hệ thống 7.5-30kW cho trang trại cần oxy ổn định và vận hành quy mô lớn.",
    image: "/assets/products/air-blower-treo-khi-nen.jpg",
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
    summary: "Dòng biến tần và cơ, phù hợp tăng oxy linh hoạt cho ao nuôi.",
    image: "/assets/product-aerator.png",
    products: [
      { name: "Tam hoa biến tần 2.2kW 380V 3 chế độ/máy", model: "TY-2.2", origin: "Trung Quốc - Yimin", specs: "1.6 - 1.1 - 0.75kW 380V", price: "7.800.000", image: "/assets/product-aerator.png", status: "Đã có ảnh, thông số, catalog" },
      { name: "Tam hoa biến tần 1.5kW 380V 3 chế độ/máy", model: "TY-1.5", origin: "Trung Quốc - Yimin", specs: "1.1 - 0.75 - 0.55kW 380V", price: "6.800.000", image: "/assets/product-aerator.png", status: "Đã có ảnh, thông số, catalog" },
      { name: "Tam hoa biến tần 1.5kW 220V 3 chế độ/máy", model: "TY-1.5D", origin: "Trung Quốc - Yimin", specs: "1.1 - 0.75 - 0.55kW 220V", price: "6.800.000", image: "/assets/product-aerator.png", status: "Đã có ảnh, thông số, catalog" },
      { name: "Tam hoa cơ 0.75kW 220V", model: "YL-0.75DP", origin: "Trung Quốc - Yimin", specs: "0.75kW 220V", price: "6.200.000", image: "/assets/product-aerator.png", status: "Đã có ảnh, thông số, catalog" },
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
    subtitle: "Tạo oxy mạnh, dễ cấu hình theo diện tích ao",
    image: "/assets/products/aerator-6-canh-15kw-hop-so-b.png",
  },
  {
    title: "Bơm và xử lý nước",
    subtitle: "Ổn định cấp thoát nước cho vận hành trang trại",
    image: "/assets/products/pump-75kw-380v.png",
  },
  {
    title: "Đo oxy và chất lượng nước",
    subtitle: "Kiểm tra nhanh các chỉ số rủi ro tại ao",
    image: "/assets/products/meter-do-oxy-2001.jpg",
  },
  {
    title: "Sục khí bản treo khí nén",
    subtitle: "Cấu hình công suất lớn cho trang trại cần oxy ổn định",
    image: "/assets/products/air-blower-treo-khi-nen.jpg",
  },
];

export const allProducts = productCategories.flatMap((category) => category.products);
