import { shopInfo } from "@/data/shop-info";

export function VisitSection() {
  return (
    <section id="ghe-quan" className="scroll-mt-20 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-pandan text-coconut grid gap-10 overflow-hidden rounded-[2.5rem] p-8 sm:p-12 md:grid-cols-2">
          <div>
            <p className="text-mung text-sm font-semibold tracking-widest uppercase">Ghé quán</p>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              Ghé ăn chè, ngồi chơi lâu một chút
            </h2>
            <p className="text-coconut/80 mt-4 leading-relaxed">
              Quán có chỗ ngồi thoáng mát, nhận đặt chè mang về và giao tận nơi cho đơn từ 5 chén.
            </p>
            <a
              href={shopInfo.phoneHref}
              className="bg-mung text-ink hover:bg-mung/90 mt-8 inline-block rounded-full px-6 py-3 font-semibold transition"
            >
              Gọi {shopInfo.phone}
            </a>
          </div>

          <dl className="bg-coconut/10 grid gap-6 self-center rounded-3xl p-6">
            <div>
              <dt className="text-coconut/70 text-sm">Địa chỉ</dt>
              <dd className="mt-1 text-lg font-semibold">{shopInfo.address}</dd>
            </div>
            <div>
              <dt className="text-coconut/70 text-sm">Giờ mở cửa</dt>
              {shopInfo.openingHours.map((slot) => (
                <dd key={slot.days} className="mt-1 flex justify-between gap-4 font-semibold">
                  <span>{slot.days}</span>
                  <span>{slot.hours}</span>
                </dd>
              ))}
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
