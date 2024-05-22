import { useDelay } from "@/hooks/useDelay";

import products from "@/data/products";
import { Product } from "@/data/types";

import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCard from "../ui/product-card";

const getOnlyClothes = (products: Product[]): Product[] => {
  return products.filter((product) => product.category === "clothes");
};
const onlyClothes = getOnlyClothes(products);

const OnlyClothes = () => {
  const { loading, setLoading } = useDelay();

  return (
    <>
      {loading && <ProductCardSkeleton />}
      {!loading &&
        onlyClothes
          .slice(0, 4)
          .map((product) => (
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

export default OnlyClothes;
