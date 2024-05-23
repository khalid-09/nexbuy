export type Category =
  | "books"
  | "clothes"
  | "earbuds"
  | "furnitures"
  | "laptops"
  | "mobiles"
  | "skincare";

export interface Product {
  id: number;
  category: Category;
  images: string[];
  isAvailable: boolean;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  discount?: number;
  productDetails: string;
}
