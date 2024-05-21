import { Product } from "./types";

const products: Product[] = [
  // clothes
  {
    id: 1,
    category: "clothes",
    name: "Shirts",
    isAvailable: true,
    price: 2000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "A combo of 3 shirts for the price of 2",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/clothes/shirts/shirt${i + 1}.jpg`,
    ),
  },
  {
    id: 2,
    category: "clothes",
    name: "Hoodies",
    isAvailable: true,
    price: 2500,
    rating: 4.2,
    discount: 5,
    reviewCount: 5,
    shortDescription: "A warm hoodie for the cold weather",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/clothes/hoodies/hoodie${i + 1}.jpg`,
    ),
  },
  {
    id: 3,
    category: "clothes",
    name: "Caps",
    isAvailable: true,
    price: 1000,
    rating: 4.8,
    reviewCount: 15,
    shortDescription: "A collection of stylish caps",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/clothes/caps/cap${i + 1}.jpg`,
    ),
  },
  {
    id: 4,
    category: "clothes",
    name: "Jackets",
    isAvailable: true,
    price: 4000,
    rating: 4.8,
    reviewCount: 12,
    shortDescription: "A collection of stylish & modern jackets",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/clothes/jackets/jacket${i + 1}.jpg`,
    ),
  },
  {
    id: 5,
    category: "clothes",
    name: "Pants",
    isAvailable: true,
    price: 3000,
    rating: 4.5,
    reviewCount: 17,
    shortDescription: "A collection of statement pants",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/clothes/pants/pant${i + 1}.jpg`,
    ),
  },

  // Books
  {
    id: 6,
    category: "books",
    name: "Atomic Habits",
    isAvailable: false,
    price: 500,
    rating: 4.8,
    reviewCount: 15,
    shortDescription: "A book on how to build good habits and break bad ones",
    discount: 10,
    images: Array.from({ length: 3 }).map(
      (_, i) => `/books/atomic/book${i + 1}.jpg`,
    ),
  },
  {
    id: 7,
    category: "books",
    name: "Think and Grow Rich",
    isAvailable: true,
    price: 600,
    rating: 4.5,
    reviewCount: 10,
    shortDescription: "A book on how to become rich",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/books/think/book${i + 1}.jpeg`,
    ),
  },
  {
    id: 8,
    category: "books",
    name: "Rich Dad Poor Dad",
    isAvailable: true,
    price: 700,
    rating: 4.6,
    reviewCount: 12,
    shortDescription: "A book on daily financial education",
    images: Array.from({ length: 2 }).map(
      (_, i) => `/books/rich/book${i + 1}.jpeg`,
    ),
  },

  // Earbuds
  {
    id: 9,
    category: "earbuds",
    name: "Boad Earbuds",
    isAvailable: true,
    price: 1000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Earbuds",
    images: Array.from({ length: 3 }).map(
      (_, i) => `/earbuds/boat/ear${i + 1}.jpeg`,
    ),
  },
  {
    id: 10,
    category: "earbuds",
    name: "Marshall Speakers",
    isAvailable: true,
    price: 7000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Speakers",
    images: Array.from({ length: 3 }).map(
      (_, i) => `/earbuds/marshall/ear${i + 1}.jpeg`,
    ),
  },
  {
    id: 11,
    category: "earbuds",
    name: "Skullcandy Headphones",
    isAvailable: true,
    price: 5000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Headphones",
    images: Array.from({ length: 3 }).map(
      (_, i) => `/earbuds/skullcandy/ear${i + 1}.jpeg`,
    ),
  },
  {
    id: 12,
    category: "earbuds",
    name: "Airpods Pro",
    isAvailable: true,
    price: 50000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Airpods",
    images: Array.from({ length: 3 }).map(
      (_, i) => `/earbuds/airpods/ear${i + 1}.jpeg`,
    ),
  },
  {
    id: 13,
    category: "earbuds",
    name: "Sony Headphones",
    isAvailable: true,
    price: 10000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Headphones",
    images: Array.from({ length: 3 }).map(
      (_, i) => `/earbuds/sony/ear${i + 1}.jpeg`,
    ),
  },

  // Furnitures
  {
    id: 14,
    category: "furnitures",
    name: "Beds",
    isAvailable: true,
    price: 100000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Beds",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/furniture/beds/bed${i + 1}.jpg`,
    ),
  },
  {
    id: 15,
    category: "furnitures",
    name: "Sofas",
    isAvailable: true,
    price: 75000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Sofas",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/furniture/sofas/sofa${i + 1}.jpg`,
    ),
  },
  {
    id: 16,
    category: "furnitures",
    name: "Tables",
    isAvailable: true,
    price: 40000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Tables",
    images: Array.from({ length: 5 }).map(
      (_, i) => `/furniture/tables/table${i + 1}.jpg`,
    ),
  },

  // Laptops
  {
    id: 17,
    category: "laptops",
    name: "Macbook Air",
    isAvailable: true,
    price: 100000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Laptops",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/laptops/macbooks/mackbook${i + 1}.jpg`,
    ),
  },
  {
    id: 18,
    category: "laptops",
    name: "Asus Rog",
    isAvailable: true,
    price: 150000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Laptops",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/laptops/asus/rog${i + 1}.jpg`,
    ),
  },
  {
    id: 19,
    category: "laptops",
    name: "Lenovo Thinkpad",
    isAvailable: true,
    price: 80000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Laptops",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/laptops/lenovo/lenovo${i + 1}.jpeg`,
    ),
  },
  {
    id: 20,
    category: "laptops",
    name: "Hp Pavilion",
    isAvailable: true,
    price: 90000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Laptops",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/laptops/hp/hp${i + 1}.jpeg`,
    ),
  },

  // Mobiles
  {
    id: 21,
    category: "mobiles",
    name: "Iphone 14",
    isAvailable: true,
    price: 120000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Mobiles",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/mobiles/iphone/phone${i + 1}.jpeg`,
    ),
  },
  {
    id: 22,
    category: "mobiles",
    name: "Samsung Galaxy S24 Ultra",
    isAvailable: true,
    price: 130000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Mobiles",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/mobiles/samsung/phone${i + 1}.jpeg`,
    ),
  },
  {
    id: 23,
    category: "mobiles",
    name: "Google Pixel 8 Pro",
    isAvailable: true,
    price: 110000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Mobiles",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/mobiles/pixel/phone${i + 1}.jpeg`,
    ),
  },

  // Skincare
  {
    id: 24,
    category: "skincare",
    name: "Cetaphil Cleanser",
    isAvailable: true,
    price: 2000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Cleanser",
    images: Array.from({ length: 3 }).map(
      (_, i) => `/skincare/cetaphil/sc${i + 1}.jpeg`,
    ),
  },
  {
    id: 25,
    category: "skincare",
    name: "Ordinary Serum",
    isAvailable: true,
    price: 3000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Serum",
    images: Array.from({ length: 4 }).map(
      (_, i) => `/skincare/ordinary/sc${i + 1}.jpg`,
    ),
  },
  {
    id: 26,
    category: "skincare",
    name: "Corsx Snail Mucin",
    isAvailable: true,
    price: 1100,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Mucin",
    images: Array.from({ length: 3 }).map(
      (_, i) => `/skincare/corsx/sc${i + 1}.jpeg`,
    ),
  },
];

export default products;
