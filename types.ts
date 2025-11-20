export interface NavItem {
  id: string;
  title: string;
  description: string;
  url: string;
  color: string; // Tailwind gradient or color class
  iconName: string; // Icon name mapping
  previewImage: string; // URL for the card cover/preview
  useLivePreview?: boolean; // Toggle between iframe and static image
  isAvatar?: boolean; // If true, render as a profile card (large image, no title)
  textContent?: string; // If present, show this text in overlay instead of URL
}

export interface Dimensions {
  width: number;
  height: number;
}