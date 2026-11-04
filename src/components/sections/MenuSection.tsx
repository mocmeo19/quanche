import { categoryOptions, desserts } from "@/data/desserts";
import { MenuBrowser } from "@/components/menu/MenuBrowser";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function MenuSection() {
  return (
    <section id="thuc-don" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Thực đơn"
          title="Chè ngon ba miền"
          description="Mười món chè quen thuộc, nóng có lạnh có, chọn một món hay gọi cả mâm cho cả nhóm cùng thử."
        />
        <div className="mt-12">
          <MenuBrowser desserts={desserts} categories={categoryOptions} />
        </div>
      </div>
    </section>
  );
}
