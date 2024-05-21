import ProductBreadcrumbs from "@/components/breadcrumbs";
import Seo from "@/components/seo";
import { Link, useLocation } from "react-router-dom";
import type { Product } from "@/data/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCircleCheck, FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import {
  CrossCircledIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

const Product = () => {
  const [count, setCount] = useState(1);
  const { state } = useLocation();
  const product = state as Product;

  return (
    <>
      <Seo
        title={product.name}
        description={product.shortDescription}
        type={product.category}
      />
      <section className="m-auto max-w-6xl space-y-6 px-4 font-poppins md:space-y-0">
        <div className="flex justify-center md:mb-24">
          <ProductBreadcrumbs
            productName={product.name}
            category={product.category}
          />
        </div>
        <div className=" flex h-dvh flex-col items-center justify-start md:flex-row md:items-start md:justify-start ">
          <div className="w-full px-12 md:w-1/2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className=""
            >
              <CarouselContent>
                {product.images.map((image, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={image}
                      alt={product.name}
                      className="h-96 w-full rounded-md object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="px-6 md:px-0">
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    {formatCurrency(product.price * count)}
                  </span>
                  {product.isAvailable ? (
                    <p className="flex items-center gap-1">
                      <FaCircleCheck className="text-primary" />
                      <span>In Stock!</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-1">
                      <CrossCircledIcon className="text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Out of stock
                      </span>
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    {product.reviewCount} Reviews
                  </p>
                  <p className="flex gap-1">
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
                  </p>
                </div>
                {product.discount && (
                  <Badge variant="outline">{`${product.discount}% Off`}</Badge>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-3">
                <div className="flex items-center">
                  <div className="w-28 space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (count > 1) setCount((count) => count - 1);
                      }}
                    >
                      -
                    </Button>
                    <span>{count}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCount((count) => count + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button size="lg" variant="secondary">
                    Add to Cart
                  </Button>
                </div>
                <Button size="lg" className="space-x-2" asChild>
                  <Link
                    to={`https://web.whatsapp.com/send?phone=8787878787&text=Hey, I am interested in buying ${product.name}-${product.price}.&app_absent=0`}
                    target="_blank"
                  >
                    <FaWhatsapp className="h-6 w-6" />
                    <span>Inquire on WhatsApp!</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
