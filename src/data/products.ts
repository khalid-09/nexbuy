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
    images: [
      "https://i.pinimg.com/236x/04/07/5f/04075f93e8d58c31bead68971d885d8c.jpg",
      "https://i.pinimg.com/236x/f0/49/ac/f049acaeea01538545bdb1a7a0c29229.jpg",
      "https://i.pinimg.com/236x/cc/26/03/cc2603fba67580b695b11ffd2246d641.jpg",
      "https://i.pinimg.com/236x/e7/33/82/e73382b3f0c63462e65ae8bf0b2d1469.jpg",
    ],
    productDetails:
      "This shirt combo offers three stylish shirts for the price of two. Made from high-quality fabric, they are comfortable, durable, and perfect for any occasion.",
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
    images: [
      "https://i.pinimg.com/236x/ec/48/7e/ec487ec339cacc808f02b7ec830ab2c7.jpg",
      "https://i.pinimg.com/236x/48/ee/7a/48ee7a8466eb7d1786f10b9c1daa9029.jpg",
      "https://i.pinimg.com/236x/36/2e/39/362e39ea579633e474715a0fecd117b4.jpg",
      "https://i.pinimg.com/236x/4e/96/15/4e961510aa048d050c206bc317632306.jpg",
    ],
    productDetails:
      "Stay warm and stylish with our high-quality hoodies. Perfect for the cold weather, these hoodies offer comfort and durability with a sleek design.",
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
    images: [
      "https://i.pinimg.com/236x/da/2f/46/da2f4623ff9f24bda2cc967138471602.jpg",
      "https://i.pinimg.com/236x/89/7f/88/897f8819d47dd6a418054bb29f823431.jpg",
      "https://i.pinimg.com/236x/49/6c/79/496c792c9656e6993f1c12531830f18d.jpg",
      "https://i.pinimg.com/236x/fd/8d/4b/fd8d4b84da7e7cf1f431919e91f11b46.jpg",
    ],
    productDetails:
      "Our stylish caps collection features a variety of designs perfect for any occasion. Made from high-quality materials, they offer both comfort and style.",
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
    images: [
      "https://i.pinimg.com/474x/d8/a2/1f/d8a21f5c799c19af18a99a62d187cd32.jpg",
      "https://i.pinimg.com/236x/71/a5/cc/71a5cc69d15dba43aea4b3b7a0772799.jpg",
      "https://i.pinimg.com/236x/27/9a/cf/279acf3967dd8397bd2992b76f4d4234.jpg",
      "https://i.pinimg.com/236x/43/dd/ef/43ddef263c52f47e2f1e470e5cc032b7.jpg",
    ],
    productDetails:
      "Discover our collection of stylish and modern jackets. Crafted from premium materials, these jackets offer both warmth and a sleek, fashionable look.",
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
    images: [
      "https://i.pinimg.com/236x/5a/99/72/5a9972aea56182f274f9c2d15e8b6362.jpg",
      "https://i.pinimg.com/236x/4a/d7/7e/4ad77e9847107df71a2e551197312b14.jpg",
      "https://i.pinimg.com/236x/f4/96/15/f49615dd3d07099b7729b44cfd5ecb4c.jpg",
      "https://i.pinimg.com/236x/f0/7d/2d/f07d2d27e3583dda7bec4614da3761b2.jpg",
    ],
    productDetails:
      "Our statement pants collection is designed to make you stand out. Made from high-quality fabrics, these pants offer comfort, durability, and unique style.",
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
    images: [
      "https://i.pinimg.com/474x/01/1c/ec/011ceca68df26d7dd3bd9acfff1020e1.jpg",
      "https://i.pinimg.com/236x/4b/ec/66/4bec66080ef73e8cc5469c5efdf219fa.jpg",
      "https://i.pinimg.com/236x/43/7d/5f/437d5f2f5ae12f538b6006b5aff4445d.jpg",
    ],
    productDetails:
      "Atomic Habits by James Clear offers practical strategies for forming good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.",
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
    images: [
      "https://i.pinimg.com/236x/08/35/ef/0835efaf9f98c7308cad0c1471e26b48.jpg",
      "https://i.pinimg.com/236x/94/7f/b4/947fb462480e70129d1099c990e1e881.jpg",
      "https://i.pinimg.com/236x/3c/24/57/3c24574decb362b2a9d21e0b8645f0ca.jpg",
    ],
    productDetails:
      "Think and Grow Rich by Napoleon Hill is a personal development and self-help book that teaches how to achieve financial success through goal setting and positive thinking.",
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
    images: [
      "https://i.pinimg.com/236x/36/b9/84/36b984fc35f2aa04b397d2671ad28ab0.jpg",
      "https://i.pinimg.com/236x/53/61/eb/5361eb80ac0bdca85d2f5650acc3ee6c.jpg",
      "https://i.pinimg.com/236x/04/20/a3/0420a3bfa8dfcf08479604c06c9945b9.jpg",
    ],
    productDetails:
      "Rich Dad Poor Dad by Robert T. Kiyosaki emphasizes the importance of financial education, investing, and entrepreneurship for financial success and independence.",
  },

  // Earbuds
  {
    id: 9,
    category: "earbuds",
    name: "Boat Earbuds",
    isAvailable: true,
    price: 1000,
    rating: 4.5,
    reviewCount: 10,
    discount: 10,
    shortDescription: "High Quality Earbuds",
    images: [
      "https://i.pinimg.com/236x/f7/5f/b0/f75fb01b1be709e17735d427a38f0452.jpg",
      "https://i.pinimg.com/236x/ee/a2/16/eea21607f58b6a468c9bc2e5b51cb418.jpg",
      "https://i.pinimg.com/236x/e0/d8/6a/e0d86a821bea1f2450590e98e1a1babf.jpg",
    ],
    productDetails:
      "Boat Earbuds are high-quality earbuds offering exceptional sound performance and comfort. With a rating of 4.5 and 10 reviews, these earbuds provide an immersive audio experience. Available at a price of $1000 with a discount of 10%, they are a great choice for music lovers on a budget. The sleek design and durable build make them perfect for everyday use.",
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
    images: [
      "https://i.pinimg.com/236x/d8/8f/70/d88f70099051535ffd93b37a56fe18da.jpg",
      "https://i.pinimg.com/236x/d6/a2/e9/d6a2e91bc67af7b56727e248835af106.jpg",
      "https://i.pinimg.com/236x/5d/8e/e7/5d8ee731dbe942b7ebcfe193725b86ae.jpg",
    ],
    productDetails:
      "Marshall Speakers are high-quality audio devices known for their exceptional sound output and durability. With a rating of 4.5 and 10 reviews, these speakers offer an immersive listening experience. Priced at $7000 with a discount of 10%, they provide great value for music enthusiasts. The sleek design and premium build make them a stylish addition to any home entertainment setup.",
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
    images: [
      "https://i.pinimg.com/236x/90/5a/14/905a14a834f3591cdb24a07f284a9ec8.jpg",
      "https://i.pinimg.com/236x/29/e4/a6/29e4a6d016ba2a8089cfbd069880f8b8.jpg",
      "https://i.pinimg.com/236x/f7/f5/4a/f7f54a5337b2b579876200de63f4f01f.jpg",
    ],
    productDetails:
      "Experience premium audio quality and comfort with the Skullcandy Headphones. Rated at 4.5, these headphones deliver exceptional sound clarity and immersive listening. Priced affordably at $5000 with a 10% discount, they are a great choice for audiophiles seeking high-quality sound without breaking the bank.",
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
    images: [
      "https://i.pinimg.com/236x/38/aa/7e/38aa7ea284e99fa0615546ee4ecc6a63.jpg",
      "https://i.pinimg.com/236x/2f/20/fc/2f20fca687f126b2666bac2423537b90.jpg",
      "https://i.pinimg.com/236x/a7/57/66/a7576678eee6855100d8ad180ae6dd2e.jpg",
    ],
    productDetails:
      "Airpods Pro offer premium sound quality and advanced features for an immersive listening experience. With a rating of 4.5 and 10 reviews, they are highly regarded among users. Priced at $50000 with a 10% discount, they represent the pinnacle of wireless earbuds technology.",
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
    images: [
      "https://i.pinimg.com/236x/e9/05/c5/e905c536c865d8b9c93d184aef1e45ec.jpg",
      "https://i.pinimg.com/236x/f1/80/16/f1801684feaebd75f60f471289d6f041.jpg",
      "https://i.pinimg.com/474x/9f/9b/62/9f9b6256ec5628b547820a9fb9be87ff.jpg",
    ],
    productDetails:
      " Sony Headphones deliver superior audio quality and comfort, earning a rating of 4.5 based on 10 reviews. With a price of $10000 and a 10% discount, they provide excellent value for those seeking premium sound experiences.",
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
    images: [
      "https://i.pinimg.com/236x/33/68/4f/33684fe814b9a4725974da5e9ed3a0d1.jpg",
      "https://i.pinimg.com/236x/82/c8/2c/82c82c6888fd3785a00edff7adc1eba6.jpg",
      "https://i.pinimg.com/236x/b1/04/5f/b1045fdf96ef94318d120bdd917ded2d.jpg",
    ],
    productDetails:
      "Beds are crafted with premium materials, ensuring durability and comfort for a restful sleep. Rated at 4.5 with 10 reviews, these beds offer both quality and style. Priced at $100000 with a 10% discount, they are a luxurious addition to any bedroom.",
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
    images: [
      "https://i.pinimg.com/236x/b0/6a/9d/b06a9d43074d538dd2485f5ede9d4666.jpg",
      "https://i.pinimg.com/236x/40/78/20/4078202662d91e6e5496d3f650572a69.jpg",
      "https://i.pinimg.com/236x/3e/51/16/3e51167ea4b863f14346455088ba910f.jpg",
    ],
    productDetails:
      "Sofas offer both comfort and style, perfect for relaxing or entertaining guests. With a rating of 4.5 and 10 reviews, these high-quality sofas are designed to enhance any living space. Priced at $75000 with a 10% discount, they are an excellent investment in home furniture.",
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
    images: [
      "https://i.pinimg.com/236x/e1/7c/b6/e17cb6a1056a7ae4b6d88773e208067f.jpg",
      "https://i.pinimg.com/236x/7f/42/06/7f42066e6b12594883366a2cc6d8b484.jpg",
      "https://i.pinimg.com/236x/bd/04/e4/bd04e4a9107029ef41ee271bc16e7e27.jpg",
    ],
    productDetails:
      "Tables are essential pieces of furniture for any home or office space. These high-quality tables, with a rating of 4.5 and 10 reviews, combine functionality with style. Priced at $40000 with a 10% discount, they offer great value for enhancing your living or workspace.",
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
    images: [
      "https://i.pinimg.com/236x/52/00/8b/52008b08ddd32a6d5cdce3f29fb25c2a.jpg",
      "https://i.pinimg.com/236x/b2/9a/a4/b29aa46d4502bdebb61c2b197a4f15af.jpg",
      "https://i.pinimg.com/236x/30/f8/50/30f85031561615c6d9b650d324833642.jpg",
    ],
    productDetails:
      "The Macbook Air is a top-of-the-line laptop known for its sleek design and powerful performance. With a rating of 4.5 and 10 reviews, it offers reliability and efficiency for all your computing needs. Available at a price of $100000 with a 10% discount, it's a premium choice for professionals and enthusiasts alike.",
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
    images: [
      "https://i.pinimg.com/236x/38/65/94/386594135756b1c8572b20991e9dd963.jpg",
      "https://i.pinimg.com/236x/31/bd/19/31bd19deecc3b76212a59442fdc54141.jpg",
      "https://i.pinimg.com/236x/5b/a8/8f/5ba88f91b76f355631cb134ca77feb43.jpg",
    ],
    productDetails:
      "The Asus Rog is a high-performance laptop designed for gaming enthusiasts and professionals. With its powerful specifications and cutting-edge technology, it delivers top-notch gaming experiences and multitasking capabilities. Rated at 4.5 with 10 reviews, it's a premium choice for those seeking exceptional performance. Priced at 150000 with a 10% discount",
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
    images: [
      "https://i.pinimg.com/236x/e0/13/57/e01357380af6610fedc77f0e006f18ae.jpg",
      "https://i.pinimg.com/236x/22/ec/c0/22ecc017ebe47613c74e7675969138f4.jpg",
      "https://i.pinimg.com/236x/a8/dd/89/a8dd897d4a2fecb93c7dc0f203b11646.jpg",
    ],
    productDetails:
      "The Lenovo Thinkpad is a reliable and powerful laptop suitable for both personal and professional use. With a rating of 4.5 based on 10 reviews, it offers exceptional performance and durability. Priced at $80000 with a 10% discount, it provides great value for its high-quality features. Whether you're working on complex tasks or enjoying multimedia content, the Lenovo Thinkpad delivers a seamless experience.",
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
    images: [
      "https://i.pinimg.com/236x/10/4a/97/104a979c02357cb9905162a10c6a27ce.jpg",
      "https://i.pinimg.com/736x/cc/ce/38/ccce386b499231e62dfc93b5801f4d23.jpg",
      "https://i.pinimg.com/236x/39/53/ee/3953eee234dfaa0b1cb9271928f90f4c.jpg",
    ],
    productDetails:
      "The HP Pavilion is a sleek and powerful laptop designed to meet your computing needs with style. Boasting a rating of 4.5 based on 10 reviews, it offers exceptional performance and reliability. Priced at $90000 with a 10% discount, it provides excellent value for its high-quality features. Whether you're working, streaming, or gaming, the HP Pavilion delivers smooth and immersive experiences.",
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
    images: [
      "https://i.pinimg.com/736x/a4/cf/db/a4cfdb1d7745e89403bcaa19f14f0b94.jpg",
      "https://i.pinimg.com/474x/c4/14/2d/c4142d7338d961e80d8ec0675e58f2fa.jpg",
      "https://i.pinimg.com/236x/a0/0c/63/a00c635347abe1847f5a5097419ae694.jpg",
    ],
    productDetails:
      "The iPhone 14 is the latest flagship offering from Apple, known for its cutting-edge technology and premium design. With a rating of 4.5 based on 10 reviews, it's hailed for its exceptional performance and innovative features. Priced at $120000 with a 10% discount, it offers excellent value for a high-quality mobile experience. Capture stunning photos, enjoy immersive gaming, and stay connected in style with the iPhone 14.",
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
    images: [
      "https://i.pinimg.com/474x/4f/31/2d/4f312d2d8b7a69f696564959d541764d.jpg",
      "https://i.pinimg.com/474x/15/89/f8/1589f8017c3d5f7fbf58845416631e6f.jpg",
      "https://i.pinimg.com/236x/8f/36/ab/8f36ab8ce938eb7ff3099296ca3cd337.jpg",
    ],
    productDetails:
      "The Samsung Galaxy S24 Ultra sets the standard for premium smartphones with its cutting-edge technology and sleek design. Boasting a rating of 4.5 based on 10 reviews, it offers exceptional performance and features for the discerning user. With a price of $130000 and a 10% discount, it delivers outstanding value for those seeking a high-quality mobile experience. Capture stunning photos, enjoy immersive multimedia, and stay productive on the go with the Samsung Galaxy S24 Ultra.",
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
    images: [
      "https://i.pinimg.com/236x/f7/a5/f8/f7a5f8c255d3800e63df8edd152df0ef.jpg",
      "https://i.pinimg.com/474x/75/a2/d0/75a2d0836f3df59130e012b2861b55bb.jpg",
      "https://i.pinimg.com/236x/db/ab/76/dbab762171bfb375b55b8bb7371bf9f4.jpg",
    ],
    productDetails:
      "Experience innovation and elegance with the Google Pixel 8 Pro. This high-quality mobile device, priced at $110000 with a 10% discount, offers a seamless blend of style and performance. With a rating of 4.5 based on 10 reviews, it promises exceptional user satisfaction. Capture stunning photos, enjoy smooth multitasking, and stay connected with the Google Pixel 8 Pro. Elevate your mobile experience with cutting-edge technology and sleek design.",
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
    images: [
      "https://i.pinimg.com/236x/95/7b/b2/957bb2ca650186adca6b537e1ea55b03.jpg",
      "https://i.pinimg.com/236x/2c/9e/cf/2c9ecfc4166461b92463c067c56b08be.jpg",
      "https://i.pinimg.com/236x/2b/25/6d/2b256d0483f4233498df4affe00e3cdf.jpg",
    ],
    productDetails:
      "Experience gentle yet effective skincare with Cetaphil Cleanser. This high-quality cleanser, priced at $2000 with a 10% discount, is formulated to cleanse and moisturize without stripping the skin's natural oils. With a rating of 4.5 based on 10 reviews, it promises to leave your skin feeling clean, refreshed, and nourished. Incorporate Cetaphil Cleanser into your skincare routine for a healthy and radiant complexion.",
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
    images: [
      "https://i.pinimg.com/236x/38/ad/5e/38ad5ecc22028c618ecdcba3a8cba03f.jpg",
      "https://i.pinimg.com/474x/f0/6f/81/f06f81ee32fd6f7ea8995840ca2c42fe.jpg",
      "https://i.pinimg.com/236x/5a/d5/96/5ad596b3bec854873bb1cca9aa6bdab5.jpg",
    ],
    productDetails:
      "Discover the power of the Ordinary Serum, a high-quality skincare solution designed to rejuvenate and nourish your skin. Priced at $3000 with a 10% discount, this serum combines potent ingredients to address various skin concerns and promote a radiant complexion. With a rating of 4.5 based on 10 reviews, it's trusted by many for its effectiveness. Elevate your skincare routine with the Ordinary Serum and unlock smoother, healthier-looking skin.",
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
    images: [
      "https://i.pinimg.com/564x/50/3c/7b/503c7b678996e5d52b64ef17f3101ed7.jpg",
      "https://i.pinimg.com/236x/86/9b/de/869bde5ba757dda101b126a4b9c27aac.jpg",
      "https://i.pinimg.com/236x/eb/c0/8c/ebc08c5c78d9fead0fd5646c2fdd36e2.jpg",
    ],
    productDetails:
      "Experience the transformative power of Corsx Snail Mucin, a high-quality skincare product designed to hydrate and nourish your skin. Priced at $1100 with a 10% discount, this mucin boasts a rating of 4.5 based on 10 reviews",
  },
];

export default products;
