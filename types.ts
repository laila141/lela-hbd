export enum View {
  INTRO = 'INTRO',
  GALLERY = 'GALLERY',
  LETTER = 'LETTER',
  COUPONS = 'COUPONS'
}

export interface Memory {
  id: string;
  image: string;
  caption: string;
  date: string;
  rotation: string;
  isSticker?: boolean;
  stickerIcon?: string;
  stickerColor?: string;
  stickerPos?: string;
  description?: string;
}

export interface Coupon {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  iconColorClass: string;
  code: string;
  tag?: string;
  isUsed?: boolean;
}