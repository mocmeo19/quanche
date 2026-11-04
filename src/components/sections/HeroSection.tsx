import Image from "next/image";
import { desserts } from "@/data/desserts";
import { shopInfo } from "@/data/shop-info";

const featuredDessert = desserts[0];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-pandan-light absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-mung/30 absolute -bottom-40 -left-24 h-80 w-80 rounded-full blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="flex flex-col gap-6">
          <p className="bg-coconut text-pandan ring-pandan/20 w-fit rounded-full px-4 py-1 text-sm font-medium ring-1">
            Chè Việt nấu mới mỗi ngày
          </p>
          <h1 className="font-display text-ink text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Một chén chè,
            <br />
            <span className="text-redbean">ngọt cả buổi chiều.</span>
          </h1>
          <p className="text-ink-soft max-w-md text-lg leading-relaxed">
            {shopInfo.name} mang hương vị chè ba miền về giữa lòng Sài Gòn: từ chè ba màu mát lạnh
            đến chè trôi nước ấm nồng gừng, chén nào cũng nấu bằng cả tấm lòng.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#thuc-don"
              className="bg-redbean text-coconut hover:bg-redbean/90 rounded-full px-6 py-3 font-semibold shadow-md transition"
            >
              Xem thực đơn
            </a>
            <a
              href="#ghe-quan"
              className="bg-coconut text-ink ring-ink/10 hover:bg-pandan-light rounded-full px-6 py-3 font-semibold ring-1 transition"
            >
              Đường đến quán
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src={`/images/desserts/${featuredDessert.slug}.png`}
            alt="Chè ba màu với đậu đỏ, đậu xanh, thạch lá dứa và nước cốt dừa"
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            preload
            className="rounded-3xl object-cover shadow-xl"
          />
          <p className="bg-coconut text-ink absolute right-0 bottom-6 rounded-2xl px-4 py-3 text-sm font-semibold shadow-lg">
            Món được gọi nhiều nhất
            <span className="font-display text-redbean block text-lg">{featuredDessert.name}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
