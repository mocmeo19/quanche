import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { MotionProvider } from '@/components/effects/MotionProvider';
import { ScrollProgress } from '@/components/effects/ScrollProgress';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { shopInfo } from '@/data/shop-info';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: `${shopInfo.name} – Quán chè Việt Nam`,
    template: `%s – ${shopInfo.name}`,
  },
  description: `${shopInfo.name} phục vụ các món chè truyền thống Việt Nam: chè ba màu, chè Thái, chè bưởi, chè trôi nước, chè sen long nhãn, chế biến trong ngày.`,
};

export const viewport: Viewport = {
  themeColor: '#fbf5e6',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <MotionProvider>
          <ScrollProgress />
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
