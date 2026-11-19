export interface NavLink {
  href: string;
  label: string;
}

export interface ExplorePage extends NavLink {
  title: string;
  description: string;
  cta: string;
  /** Slug món chè dùng làm ảnh nền của thẻ. */
  imageSlug: string;
}
