const COMBINING_MARKS = /[̀-ͯ]/g;

/** Bỏ dấu và viết thường để người dùng gõ "dau xanh" vẫn tìm được "Đậu xanh". */
export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .toLowerCase()
    .replace(/đ/g, 'd')
    .replace(/\s+/g, ' ')
    .trim();
}
