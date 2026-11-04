export const shopInfo = {
  name: "Chè Mộc Miên",
  slogan: "Ngọt lành vị quê, mát lòng phố thị",
  address: "86 Phan Đình Phùng, Quận Phú Nhuận, TP. Hồ Chí Minh",
  phone: "0909 123 456",
  phoneHref: "tel:0909123456",
  openingHours: [
    { days: "Thứ Hai – Thứ Sáu", hours: "10:00 – 22:00" },
    { days: "Thứ Bảy – Chủ Nhật", hours: "09:00 – 23:00" },
  ],
} as const;

export const shopHighlights = [
  {
    title: "Nấu mới mỗi sáng",
    description: "Đậu, nếp, nước cốt dừa được nấu trong ngày, không dùng lại chè cũ.",
  },
  {
    title: "Nguyên liệu quê nhà",
    description: "Hạt sen Huế, bưởi da xanh Bến Tre, dừa xiêm Tam Quan chọn tận vườn.",
  },
  {
    title: "Ngọt vừa phải",
    description: "Đường phèn và đường thốt nốt cho vị ngọt thanh, ăn hoài không ngấy.",
  },
] as const;
