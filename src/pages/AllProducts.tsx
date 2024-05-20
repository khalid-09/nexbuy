import products from "@/data/products";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import AllProductSkeleton from "@/components/all-product-skelton";
const AllProducts = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <section className="m-auto max-w-6xl px-4 py-10 font-poppins">
      <h2 className="mb-4 font-poet text-3xl">All Products</h2>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {loading && <AllProductSkeleton />}
        {products.slice(0, 8).map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card className="overflow-hidden">
              <CardHeader className="relative mb-0 h-56">
                <img
                  className={`absolute inset-0 h-full w-full object-cover ${
                    loading ? "hidden" : ""
                  }`}
                  src={product.images[0]}
                  onLoad={handleImageLoad}
                  alt={product.name}
                />
              </CardHeader>
              <CardContent className="mt-2 space-y-2 px-6 md:mt-0 md:px-6 md:py-4">
                <div className="flex w-full items-center justify-between">
                  <CardTitle>{product.name}</CardTitle>
                  <p className="text-muted-foreground">{product.price}</p>
                </div>
                <div className="flex items-center gap-1">
                  <StarFilledIcon className="text-primary" />
                  <StarFilledIcon className="text-primary" />
                  <StarFilledIcon className="text-primary" />
                  <StarFilledIcon className="text-primary" />
                  <StarIcon className="text-primary" />
                </div>
              </CardContent>
              <CardFooter className="mt-0 px-4 md:px-6">
                <Button variant="outline">Add to Cart</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default AllProducts;
