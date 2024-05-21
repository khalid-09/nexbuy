// import products from "@/data/products";

// // import {
// //   Card,
// //   CardContent,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
// // import { Button } from "@/components/ui/button";
// // import { Link } from "react-router-dom";
// // import { formatCurrency } from "@/lib/utils";
// // import { Badge } from "@/components/ui/badge";
// import AllProductSkeleton from "@/components/all-product-skelton";
// import { useState } from "react";
// import Seo from "@/components/seo";
// import ProductCard from "@/components/ui/product-card";
// import ProductPagination from "@/components/ProductPagination";

// const AllProducts = () => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       <Seo
//         title="All Products"
//         description="List of all products available at NEXBUY. Buy now!"
//         type="Clothing, Laptops, Mobiles, Furnitures, Skincare Products,"
//       />
//       <section className="m-auto max-w-6xl px-4 py-10 font-poppins">
//         <h2 className="mb-4 font-poet text-3xl">All Products</h2>
//         <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
//           {loading && <AllProductSkeleton />}
//           {products.map((product) => (
//             <ProductCard
//               product={product}
//               loading={loading}
//               setLoading={setLoading}
//             />
//           ))}
//         </div>
//       </section>
//       <ProductPagination count={products.length} />
//     </>
//   );
// };
// export default AllProducts;

import products from "@/data/products";
import AllProductSkeleton from "@/components/all-product-skelton";
import { useState, useEffect } from "react";
import Seo from "@/components/seo";
import ProductCard from "@/components/ui/product-card";
import ProductPagination from "@/components/ProductPagination";

const PAGE_SIZE = 8;

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices for slicing the products array
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;

  useEffect(() => {
    // Simulate a delay to showcase the skeleton loader
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <>
      <Seo
        title="All Products"
        description="List of all products available at NEXBUY. Buy now!"
        type="Clothing, Laptops, Mobiles, Furnitures, Skincare Products,"
      />
      <section className="m-auto max-w-6xl px-4 py-10 font-poppins">
        <h2 className="mb-4 font-poet text-3xl">All Products</h2>
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {loading && <AllProductSkeleton />}
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
