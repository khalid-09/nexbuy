import { useState } from "react";
import { useDelay } from "@/hooks/useDelay";

import products from "@/data/products";
import Seo from "@/components/Seo";
import ProductCard from "@/components/products/ProductCard";
import ProductPagination from "@/components/products/ProductPagination";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PAGE_SIZE } from "@/constants";

const AllProducts = () => {
  const navigate = useNavigate();
  const { loading, setLoading } = useDelay();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1,
  );

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;

  if (
    parseInt(searchParams.get("page")!) > Math.ceil(products.length / PAGE_SIZE)
  )
    return (
      <section className="m-auto  max-w-6xl font-poppins text-3xl">
        <div className="flex h-dvh flex-col items-center justify-center gap-3">
          <p>This page dosen't exist.</p>
          <Button onClick={() => navigate(-1)}>
            <span> Go Back </span>
            <ArrowRightIcon />
          </Button>
        </div>
      </section>
    );

  return (
    <>
      <Seo
        title="All Products"
        description="List of all products available at NEXBUY. Buy now!"
        type="Clothing, Laptops, Mobiles, Furnitures, Skincare Products,"
        image="hero4.png"
        url="https://nexbuy.vercel.app/products"
      />
      <section className="m-auto max-w-6xl px-4 py-10 font-poppins">
        <h2 className="mb-4 px-2 text-3xl font-medium tracking-wide">
          All Products
        </h2>
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
