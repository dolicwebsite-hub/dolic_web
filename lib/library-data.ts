export type LibraryPost = {
  title: string;
  image: string;
  href: string;
  date?: string;
};

export type LibraryTopic = {
  id: "tin-tuc-su-kien" | "giai-phap-tiet-kiem-dien" | "bao-hanh-bao-duong";
  title: string;
  description: string;
  posts: LibraryPost[];
};

export const libraryTopics: LibraryTopic[] = [
  {
    id: "tin-tuc-su-kien",
    title: "Tin tức / Sự kiện",
    description: "Cập nhật triển lãm, hoạt động thị trường và sự kiện nổi bật của Dolic.",
    posts: [
      { title: "Dolic tại triển lãm quốc tế VietAgros 2026: tiết kiệm điện lên đến 40% không khó", image: "/assets/drive/exhibition/IMG_6001.PNG", href: "/tin-tuc/dolic-tai-vietagros-2026", date: "09-11/06/2026" },
    ],
  },
  {
    id: "giai-phap-tiet-kiem-dien",
    title: "Giải pháp tiết kiệm điện",
    description: "Bài viết kỹ thuật giúp chọn công suất đúng và tối ưu chi phí điện theo từng mô hình ao.",
    posts: [
      { title: "Máy sục khí treo khí nén Dolic: từ khảo sát thực địa đến kiểm chứng tại Việt Nam", image: "/assets/products/drive-full/may-suc-khi-treo-khi-nen.webp", href: "/tin-tuc/may-suc-khi-treo-khi-nen-nguon-goc", date: "30/07/2026" },
    ],
  },
  {
    id: "bao-hanh-bao-duong",
    title: "Bảo hành / Bảo dưỡng",
    description: "Hướng dẫn bảo dưỡng định kỳ, quy trình tiếp nhận bảo hành và xử lý sự cố.",
    posts: [
      { title: "Đừng đổ nhầm dầu xe máy vào hộp số giảm tốc quạt nước", image: "/assets/products/drive-full/yc-15z-6-canh-hop-so.webp", href: "/tin-tuc/dau-hop-so-giam-toc-quat-nuoc", date: "30/07/2026" },
      { title: "Đấu dây tiếp địa PE đúng cách cho thiết bị ao nuôi", image: "/assets/products/drive-full/qy250-6-4-bom-tieu-chuan.webp", href: "/tin-tuc/dau-day-tiep-dia-pe-thiet-bi-ao-nuoi", date: "30/07/2026" },
      { title: "Mô-tơ ngừng do quá nhiệt: nguyên nhân và cách xử lý", image: "/assets/products/drive-full/fb-200-75-bom-co-phao.webp", href: "/tin-tuc/mo-to-qua-nhiet-tu-ngat-nguyen-nhan-cach-xu-ly", date: "30/07/2026" },
      { title: "Vì sao phải dùng thiết bị chống mất pha cho động cơ ba pha", image: "/assets/products/drive-full/MÔ TƠ GIẢM TỐC 2,2KW 380V.webp", href: "/tin-tuc/thiet-bi-chong-mat-pha-dong-co-3-pha", date: "30/07/2026" },
    ],
  },
];

export const libraryPosts = libraryTopics.flatMap((topic) =>
  topic.posts.map((post) => ({ ...post, type: topic.title })),
);

export const exhibitionImages = [
  "/assets/drive/exhibition/IMG_6001.PNG",
  "/assets/drive/exhibition/IMG_6004.PNG",
  "/assets/drive/exhibition/IMG_6574.PNG",
  "/assets/drive/exhibition/IMG_4750.PNG",
  "/assets/drive/exhibition/IMG_6009.PNG",
  "/assets/drive/exhibition/IMG_6576.PNG",
];
