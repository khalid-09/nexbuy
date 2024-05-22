import { useState } from "react";
import { useDelay } from "@/hooks/useDelay";

import products from "@/data/products";
import Seo from "@/components/seo";
import ProductCard from "@/components/ui/product-card";
import ProductPagination from "@/components/products/ProductPagination";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";

const PAGE_SIZE = 8;

const AllProducts = () => {
  const { loading, setLoading } = useDelay();
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;

  return (
    <>
      <Seo
        title="All Products"
        description="List of all products available at NEXBUY. Buy now!"
        type="Clothing, Laptops, Mobiles, Furnitures, Skincare Products,"
      />
      <section className="m-auto max-w-6xl px-4 py-10 font-poppins">
        <h2 className="mb-4 px-2 text-3xl">All Products</h2>
        <div className="grid grid-cols-1 gap-6 px-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {loading && <ProductCardSkeleton isAllProducts={true} />}
          {!loading &&
            products
              .slice(startIdx, endIdx)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  loading={loading}
                  setLoading={setLoading}
                />
              ))}
        </div>
      </section>
      <ProductPagination
        count={products.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default AllProducts;
