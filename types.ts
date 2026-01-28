
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  skinType: SkinType[];
  description: string;
}

export enum SkinType {
  OILY = 'Oily',
  DRY = 'Dry',
  COMBINATION = 'Combination',
  SENSITIVE = 'Sensitive',
  NORMAL = 'Normal'
}

export interface Tip {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
}
