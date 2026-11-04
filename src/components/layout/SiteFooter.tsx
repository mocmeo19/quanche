import { shopInfo } from "@/data/shop-info";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p className="font-display text-cream text-lg">{shopInfo.name}</p>
        <p>{shopInfo.slogan}</p>
      </div>
    </footer>
  );
}
