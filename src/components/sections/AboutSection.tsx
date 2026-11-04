import { shopHighlights, shopInfo } from "@/data/shop-info";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function AboutSection() {
  return (
    <section id="gioi-thieu" className="bg-coconut scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Câu chuyện của quán"
          title="Từ gánh chè đầu ngõ đến góc quán nhỏ"
          description={`${shopInfo.name} bắt đầu từ gánh chè của bà ngoại ở chợ quê. Hơn hai mươi năm sau, công thức ấy vẫn được giữ nguyên: nấu chậm, ngọt vừa, và luôn có thêm một vá nước cốt dừa cho khách quen.`}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {shopHighlights.map((highlight, index) => (
            <div key={highlight.title} className="bg-cream rounded-3xl p-8">
              <span className="font-display text-mung text-4xl font-bold">0{index + 1}</span>
              <h3 className="font-display text-ink mt-3 text-xl font-semibold">
                {highlight.title}
              </h3>
              <p className="text-ink-soft mt-2 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
