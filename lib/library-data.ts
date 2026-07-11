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
      { title: "Dolic tham gia triển lãm quốc tế công nghệ Nông nghiệp và Môi trường", image: "/assets/drive/exhibition/IMG_6001.PNG", href: "/thu-vien", date: "Tuần 1" },
      { title: "Dolic giới thiệu giải pháp tại gian hàng công nghệ thuỷ sản", image: "/assets/drive/exhibition/IMG_6009.PNG", href: "/thu-vien", date: "Tuần 1" },
      { title: "Kết nối đại lý vùng nuôi tại miền Nam", image: "/assets/drive/exhibition/IMG_6576.PNG", href: "/thu-vien", date: "Tuần 1" },
      { title: "Dolic chia sẻ kinh nghiệm vận hành thiết bị ngoài ao", image: "/assets/drive/exhibition/IMG_4750.PNG", href: "/thu-vien", date: "Tuần 1" },
      { title: "Tổng hợp hoạt động truyền thông trong tuần", image: "/assets/drive/exhibition/IMG_6004.PNG", href: "/thu-vien", date: "Tuần 1" },
    ],
  },
  {
    id: "giai-phap-tiet-kiem-dien",
    title: "Giải pháp tiết kiệm điện",
    description: "Bài viết kỹ thuật giúp chọn công suất đúng và tối ưu chi phí điện theo từng mô hình ao.",
    posts: [
      { title: "Cách chọn guồng sục khí theo diện tích ao", image: "/assets/drive/experimental-farm/device-on-pond.jpg", href: "/thu-vien", date: "Tuần 1" },
      { title: "Khi nào nên dùng sục khí khí nén?", image: "/assets/products/drive-full/may-suc-khi-treo-khi-nen.webp", href: "/thu-vien", date: "Tuần 1" },
      { title: "Checklist kiểm tra oxy trước và sau khi cho ăn", image: "/assets/products/drive-full/may-do-oxy-2001.webp", href: "/thu-vien", date: "Tuần 1" },
      { title: "Vận hành bơm theo khung giờ để giảm điện năng", image: "/assets/products/drive-full/fb-200-75-bom-co-phao.webp", href: "/thu-vien", date: "Tuần 1" },
      { title: "So sánh cấu hình quạt nước cho ao tôm thâm canh", image: "/assets/products/drive-full/yc-22z-10-canh.webp", href: "/thu-vien", date: "Tuần 1" },
    ],
  },
  {
    id: "bao-hanh-bao-duong",
    title: "Bảo hành / Bảo dưỡng",
    description: "Hướng dẫn bảo dưỡng định kỳ, quy trình tiếp nhận bảo hành và xử lý sự cố.",
    posts: [
      { title: "Quy trình bảo hành thiết bị Dolic", image: "/assets/drive/customer-farm/customer-aerator-installed.jpg", href: "/lien-he", date: "Tuần 1" },
      { title: "Lịch bảo dưỡng quạt nước theo mùa vụ", image: "/assets/products/drive-full/yc-15z-6-canh-hop-so.webp", href: "/thu-vien", date: "Tuần 1" },
      { title: "Các lỗi thường gặp ở bơm và cách xử lý nhanh", image: "/assets/products/drive-full/qy250-6-4-bom-tieu-chuan.webp", href: "/thu-vien", date: "Tuần 1" },
      { title: "Kiểm tra động cơ giảm tốc trước khi vào vụ mới", image: "/assets/drive/history-website/history-office.webp", href: "/thu-vien", date: "Tuần 1" },
      { title: "Biểu mẫu gửi yêu cầu hỗ trợ kỹ thuật", image: "/assets/drive/exhibition/IMG_6574.PNG", href: "/lien-he", date: "Tuần 1" },
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
