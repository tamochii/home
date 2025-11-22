import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'site-1',
    title: 'GitHub Profile',
    description: '这是我的github主页，包含我的开源项目和代码库。',
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
    description: '我是Ziyao Liu 英语名tamochi，这是我的个人导航页，可以点击卡片前往我的不同站点，了解我更多的信息。',
    url: '', // Not used for navigation in this mode
    // Pastel Gray/Blue (Neutral for profile)
    color: 'from-slate-200 to-gray-200',
    iconName: 'User', // Not used if isAvatar is true
    previewImage: 'https://github.com/tamochii.png', // Using github avatar as default
    useLivePreview: false,
    isAvatar: true,
    textContent: `你好，我是tamochi！`
  },
  {
    id: 'site-2',
    title: 'Bilibili Profile',
    description: '这是我的bilibili主页，主要分享一些兴趣爱好的视频。',
    url: 'https://space.bilibili.com/215003532',
    // Pastel Pink/Mint - Adjusted for Bilibili (Pinkish)
    color: 'from-pink-200 to-rose-200',
    iconName: 'Tv',
    previewImage: 'https://picsum.photos/800/600?random=2',
    useLivePreview: true
  },
  {
    id: 'site-4',
    title: "tamochi's cv",
    description: '这是我的在线简历，由notion强力驱动。',
    url: 'https://cv.tamochi.cn',
    // Pastel Blue/Indigo
    color: 'from-blue-200 to-indigo-100',
    iconName: 'FileText',
    previewImage: 'https://picsum.photos/800/600?random=4',
    useLivePreview: true
  },
  {
    id: 'site-5',
    title: "tamochi's blog",
    description: '这是我的生活博客，主要记录生活中的随笔想法。',
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
    description: '这是我的文档站点，包含各种学习笔记和技术文档。',
    url: 'https://doc.tamochi.cn/',
    // Pastel Violet/Purple (soft)
    color: 'from-violet-200 to-fuchsia-100',
    iconName: 'FileText',
    previewImage: 'https://picsum.photos/800/600?random=6',
    useLivePreview: true
  },
];