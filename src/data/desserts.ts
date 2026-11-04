import type { CategoryOption, Dessert } from "@/types/dessert";

export const categoryOptions: CategoryOption[] = [
  { value: "tat-ca", label: "Tất cả" },
  { value: "lanh", label: "Chè lạnh" },
  { value: "nong", label: "Chè nóng" },
  { value: "dac-biet", label: "Đặc biệt" },
];

export const desserts: Dessert[] = [
  {
    slug: "che-ba-mau",
    name: "Chè ba màu",
    description:
      "Đậu đỏ bùi, đậu xanh béo và thạch lá dứa xanh mát, rưới nước cốt dừa sánh mịn cùng đá bào.",
    ingredients: ["Đậu đỏ", "Đậu xanh", "Thạch lá dứa", "Nước cốt dừa"],
    price: 25000,
    category: "lanh",
    layerColors: ["#9b3b3b", "#e8c25a", "#5fae6b", "#fbf5e6"],
    isBestSeller: true,
  },
  {
    slug: "che-thai",
    name: "Chè Thái sầu riêng",
    description:
      "Mít vàng, sầu riêng thơm lừng, thạch dừa và trân châu giòn hòa trong sữa tươi mát lạnh.",
    ingredients: ["Sầu riêng", "Mít", "Thạch dừa", "Trân châu", "Sữa tươi"],
    price: 35000,
    category: "lanh",
    layerColors: ["#e9b949", "#f2d57e", "#d94f70", "#fff6df"],
    isBestSeller: true,
  },
  {
    slug: "che-buoi",
    name: "Chè bưởi",
    description:
      "Cùi bưởi giòn sần sật áo bột năng trong veo, ăn kèm đậu xanh đánh nhuyễn và nước cốt dừa.",
    ingredients: ["Cùi bưởi", "Đậu xanh", "Bột năng", "Nước cốt dừa"],
    price: 25000,
    category: "lanh",
    layerColors: ["#e8c25a", "#f4e4b8", "#fbf5e6"],
  },
  {
    slug: "suong-sa-hat-luu",
    name: "Sương sa hạt lựu",
    description:
      "Hạt lựu đỏ hồng dai giòn, sương sa lá dứa và đậu xanh, thêm chút dừa non cho ngày nắng.",
    ingredients: ["Hạt lựu", "Sương sa", "Đậu xanh", "Dừa non"],
    price: 25000,
    category: "lanh",
    layerColors: ["#5fae6b", "#d94f70", "#e8c25a", "#fbf5e6"],
  },
  {
    slug: "che-troi-nuoc",
    name: "Chè trôi nước",
    description:
      "Viên nếp dẻo nhân đậu xanh ngọt bùi, thả trong nước đường gừng ấm nồng, rắc mè rang.",
    ingredients: ["Bột nếp", "Đậu xanh", "Gừng", "Mè rang", "Nước cốt dừa"],
    price: 25000,
    category: "nong",
    layerColors: ["#c98a3a", "#f3ede0", "#fbf5e6"],
    isBestSeller: true,
  },
  {
    slug: "che-bap",
    name: "Chè bắp",
    description:
      "Bắp nếp ngọt tự nhiên nấu cùng bột báng, múc nóng hổi và chan nước cốt dừa béo ngậy.",
    ingredients: ["Bắp nếp", "Bột báng", "Nước cốt dừa"],
    price: 20000,
    category: "nong",
    layerColors: ["#e9b949", "#f2d57e", "#fbf5e6"],
  },
  {
    slug: "che-chuoi",
    name: "Chè chuối",
    description:
      "Chuối sứ chín mềm, bột báng trong veo, nước cốt dừa thơm và đậu phộng rang giòn rắc trên mặt.",
    ingredients: ["Chuối sứ", "Bột báng", "Nước cốt dừa", "Đậu phộng"],
    price: 22000,
    category: "nong",
    layerColors: ["#e3b5a0", "#f4e4b8", "#fbf5e6"],
  },
  {
    slug: "che-dau-den",
    name: "Chè đậu đen",
    description:
      "Đậu đen xanh lòng ninh nhừ mà vẫn giữ hạt, vị ngọt thanh, ăn nóng hay lạnh đều ngon.",
    ingredients: ["Đậu đen", "Đường phèn", "Nước cốt dừa"],
    price: 20000,
    category: "nong",
    layerColors: ["#3a2a35", "#5a4350", "#fbf5e6"],
  },
  {
    slug: "che-sen-long-nhan",
    name: "Chè sen long nhãn",
    description:
      "Hạt sen Huế bở tơi bọc trong cùi nhãn lồng giòn ngọt, nước đường phèn thanh mát kiểu cung đình.",
    ingredients: ["Hạt sen Huế", "Nhãn lồng", "Đường phèn"],
    price: 40000,
    category: "dac-biet",
    layerColors: ["#f3ede0", "#efe2c4", "#fdf9ef"],
    isBestSeller: true,
  },
  {
    slug: "che-khuc-bach",
    name: "Chè khúc bạch",
    description:
      "Khúc bạch sữa, trà xanh, lá dứa mềm mịn tan trong miệng, cùng nhãn và hạnh nhân lát rang.",
    ingredients: ["Khúc bạch", "Nhãn", "Hạnh nhân", "Vải"],
    price: 35000,
    category: "dac-biet",
    layerColors: ["#fdf9ef", "#a7c97a", "#f6d6c8", "#fbf5e6"],
  },
];
