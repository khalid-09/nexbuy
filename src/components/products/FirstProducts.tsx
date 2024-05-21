import { Category, Product } from "@/data/types";
import products from "@/data/products";
import FirstProductSkeleton from "./FirstProductSkeleton";
import { useState } from "react";
import ProductCard from "../ui/product-card";

const getFirstProductFromEachCategory = (products: Product[]): Product[] => {
  const seenCategories = new Set<Category>();
  return products.reduce((acc, product) => {
    if (!seenCategories.has(product.category)) {
      seenCategories.add(product.category);
      acc.push(product);
    }
    return acc.length < 4 ? acc : acc.slice(0, 4);
  }, [] as Product[]);
};

const firstProducts = getFirstProductFromEachCategory(products);

const FirstProduct = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <FirstProductSkeleton />}
      {firstProducts.map((product) => (
        <ProductCard
          product={product}
          loading={loading}
          setLoading={setLoading}
        />
      ))}
    </>
  );
};

export default FirstProduct;
