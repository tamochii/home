import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'site-1',
    title: 'GitHub Profile',
    description: 'Explore my open source contributions, repositories, and coding activity.',
    url: 'https://github.com/tamochii',
    // Pastel Green/Teal
    color: 'from-emerald-300 to-teal-200',
    iconName: 'Github',
    previewImage: 'https://picsum.photos/800/600?random=1',
    useLivePreview: false
  },
  {
    id: 'site-profile',
    title: 'About Me', // Hidden in Grid
    description: 'Check out my personal bio, interests, and contact information.',
    url: '', // Not used for navigation in this mode
    // Pastel Gray/Blue (Neutral for profile)
    color: 'from-slate-200 to-gray-200',
    iconName: 'User', // Not used if isAvatar is true
    previewImage: 'https://github.com/tamochii.png', // Using github avatar as default
    useLivePreview: false,
    isAvatar: true,
    textContent: `Hi there! I'm Tamochi.

Welcome to my personal navigation page. I am a passionate developer and creator who loves building interesting web projects and sharing knowledge.

Here you can find links to my GitHub, my video content on Bilibili, and my personal documentation and blogs.

I enjoy exploring new technologies, specifically frontend development and AI integration. Feel free to browse through my hub!`
  },
  {
    id: 'site-2',
    title: 'Bilibili Profile',
    description: 'Check out my latest videos, live streams, and creative content on Bilibili.',
    url: 'https://space.bilibili.com/215003532',
    // Pastel Pink/Mint - Adjusted for Bilibili (Pinkish)
    color: 'from-pink-200 to-rose-200',
    iconName: 'Tv',
    previewImage: 'https://picsum.photos/800/600?random=2',
    useLivePreview: true
  },
  {
    id: 'site-4',
    title: "tamochi's pi",
    description: 'My personal AI playground and experimental features.',
    url: 'https://pi.tamochi.fun',
    // Pastel Pink (Pale)
    color: 'from-pink-200 to-rose-100',
    iconName: 'Sparkles', // Using a generic sparkle/star icon for "Pi/AI"
    previewImage: 'https://picsum.photos/800/600?random=4',
    useLivePreview: true
  },
  {
    id: 'site-5',
    title: "tamochi's blog",
    description: 'My personal space for sharing daily updates, lifestyle, and tech notes.',
    url: 'https://blog.tamochi.cn/',
    // Pastel Orange/Amber (warmth)
    color: 'from-amber-200 to-orange-100',
    iconName: 'Coffee',
    previewImage: 'https://picsum.photos/800/600?random=5',
    useLivePreview: true
  },
  {
    id: 'site-6',
    title: "tamochi's doc",
    description: 'Comprehensive documentation, guides, and wikis for my projects.',
    url: 'https://doc.tamochi.cn/',
    // Pastel Violet/Purple (soft)
    color: 'from-violet-200 to-fuchsia-100',
    iconName: 'FileText',
    previewImage: 'https://picsum.photos/800/600?random=6',
    useLivePreview: true
  },
];