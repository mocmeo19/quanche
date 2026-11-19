import Image from 'next/image';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { cn } from '@/lib/cn';

const photos = [
  {
    src: '/images/visit/khong-gian-quan.webp',
    alt: 'Góc quán với bàn ghế gỗ, cửa sổ xanh và hai phần chè trong nắng chiều',
    label: 'Một góc thật yên',
    caption: 'Ngồi lại, nhâm nhi một chút ngọt ngào.',
  },
  {
    src: '/images/visit/ban-be-thuong-che.webp',
    alt: 'Ba người bạn trò chuyện và thưởng thức chè bên cửa sổ',
    label: 'Chè ngon, chuyện vui',
    caption: 'Hẹn nhau bên những món chè quen.',
  },
  {
    src: '/images/visit/mot-chen-che-am.webp',
    alt: 'Nhân viên mang một chén chè trôi nước đến bàn cho thực khách',
    label: 'Mời bạn một chén chè',
    caption: 'Thêm chút ấm áp cho buổi ghé chơi.',
  },
];

export function VisitGallery() {
  return (
    <section
      aria-label="Không gian và khoảnh khắc ở quán"
      className="px-4 pt-20 sm:px-6 lg:pt-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="Một buổi ghé Yang"
          title="Có chè ngon, có nhau."
          description="Rủ một người bạn, chọn món chè yêu thích và dành cho nhau một buổi chiều thảnh thơi."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className={cn(
                'group bg-pandan-light relative isolate aspect-[3/2] overflow-hidden rounded-[2rem]',
                index === 0 && 'lg:row-span-2 lg:aspect-auto',
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 55vw, 685px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="from-ink/85 absolute inset-0 bg-linear-to-t via-transparent to-transparent"
              />
              <figcaption className="text-coconut absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {photo.label}
                </h3>
                <p className="text-cream/85 mt-2 text-sm sm:text-base">
                  {photo.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-ink-soft mt-4 text-sm">
          Hình ảnh minh họa không gian và trải nghiệm tại quán.
        </p>
      </div>
    </section>
  );
}
