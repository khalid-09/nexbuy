import { useDelay } from "@/hooks/useDelay";

import { Category, Product } from "@/data/types";
import products from "@/data/products";

import ProductCardSkeleton from "./ProductCardSkeleton";
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
  const { loading, setLoading } = useDelay();

  return (
    <>
      {loading && <ProductCardSkeleton />}
      {!loading &&
        firstProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            loading={loading}
            setLoading={setLoading}
          />
        ))}
    </>
  );
};

export default FirstProduct;
