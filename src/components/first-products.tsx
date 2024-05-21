import { Category, Product } from "@/data/types";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import products from "@/data/products";
import FirstProductSkeleton from "./first-product-skeleton";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "./ui/badge";

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

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <FirstProductSkeleton />}
      {firstProducts.map((product) => (
        <Link to={`/products/${product.id}`} state={product} key={product.id}>
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
                <p className="text-muted-foreground">
                  {formatCurrency(product.price)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {product.rating > 4.5 ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <StarFilledIcon key={i} className="text-primary" />
                    ))
                  ) : (
                    <>
                      {Array.from({ length: 4 }).map((_, i) => (
                        <StarFilledIcon key={i} className="text-primary" />
                      ))}
                      <StarIcon className="text-primary" />
                    </>
                  )}
                </div>
                {product.discount && (
                  <Badge variant="outline">{`${product.discount}% Off`}</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="mt-0 px-4 md:px-6">
              <Button variant="outline">Add to Cart</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default FirstProduct;
