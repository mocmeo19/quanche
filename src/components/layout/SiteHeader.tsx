import { shopInfo } from "@/data/shop-info";

const navLinks = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#thuc-don", label: "Thực đơn" },
  { href: "#ghe-quan", label: "Ghé quán" },
];

export function SiteHeader() {
  return (
    <header className="border-ink/5 bg-cream/85 sticky top-0 z-30 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#" className="font-display text-redbean text-2xl font-bold">
          {shopInfo.name}
        </a>
        <nav aria-label="Điều hướng chính" className="hidden gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-soft hover:text-pandan transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={shopInfo.phoneHref}
          className="bg-pandan text-coconut hover:bg-pandan/90 rounded-full px-4 py-2 text-sm font-semibold transition"
        >
          Gọi đặt chè
        </a>
      </div>
    </header>
  );
}
