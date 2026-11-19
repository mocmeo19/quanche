import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { SignatureShowcase } from '@/components/signature/SignatureShowcase';
import { bestSellers } from '@/data/desserts';

export function SignatureSection() {
  return (
    <section
      aria-labelledby="signature-list-title"
      className="bg-ink text-cream relative isolate overflow-clip pb-12 lg:pb-16"
    >
      <GrainOverlay className="-z-10 opacity-[0.15] mix-blend-soft-light" />
      <div
        aria-hidden="true"
        className="bg-redbean/40 absolute top-1/4 -left-48 -z-10 size-[40rem] rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="bg-pandan/40 absolute -right-40 bottom-0 -z-10 size-[36rem] rounded-full blur-[140px]"
      />

      {/* Tiêu đề hiển thị nằm ở hero của trang; giữ h2 ẩn để cấu trúc heading liền mạch. */}
      <h2 id="signature-list-title" className="sr-only">
        Danh sách món đặc trưng
      </h2>
      <SignatureShowcase desserts={bestSellers} />
    </section>
  );
}
