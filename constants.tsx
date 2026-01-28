
import { Product, SkinType, Tip } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hydra-Glow Serum',
    category: 'Serums',
    price: 48,
    image: 'https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    skinType: [SkinType.DRY, SkinType.SENSITIVE],
    description: 'A lightweight serum packed with Hyaluronic Acid for instant hydration.'
  },
  {
    id: '2',
    name: 'Pure Balance Cleanser',
    category: 'Cleansers',
    price: 32,
    image: 'https://images.unsplash.com/photo-1642429948123-bb852afcb0f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW5zZXJzfGVufDB8fDB8fHww',
    skinType: [SkinType.OILY, SkinType.COMBINATION],
    description: 'Gentle foaming cleanser that removes impurities without stripping moisture.'
  },
  {
    id: '3',
    name: 'Ceramide Shield Cream',
    category: 'Moisturizers',
    price: 54,
    image: 'https://images.unsplash.com/photo-1575410229391-19b4da01cc94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    skinType: [SkinType.DRY, SkinType.NORMAL],
    description: 'Deeply nourishing cream to restore skin barrier and seal in hydration.'
  },
  {
    id: '4',
    name: 'Revive Retinol Night',
    category: 'Treatments',
    price: 65,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    skinType: [SkinType.NORMAL, SkinType.COMBINATION],
    description: 'Advanced night treatment to reduce fine lines and improve texture.'
  }
];

export const SKIN_TIPS: Tip[] = [
  {
    id: 't1',
    title: 'Morning Glow Routine',
    category: 'Routine',
    content: 'Start with a gentle cleanser, followed by Vitamin C and a high-SPF sunscreen.',
    image: 'https://plus.unsplash.com/premium_photo-1689298476470-fdfda046a788?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwd2F0ZXIlMjBmYWNlJTIwdHJlYXRtZW50fGVufDB8fDB8fHww'
  },
  {
    id: 't2',
    title: 'Double Cleansing 101',
    category: 'Technique',
    content: 'Use an oil-based cleanser first to melt SPF and makeup, followed by a water-based one.',
    image: 'https://plus.unsplash.com/premium_photo-1676583283219-9cfb63303462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5zaW5nfGVufDB8fDB8fHww'
  }
];
