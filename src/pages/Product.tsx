import ProductBreadcrumbs from "@/components/breadcrumbs";
import Seo from "@/components/seo";
import { useLocation } from "react-router-dom";
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
        <div className=" flex h-dvh flex-col items-start justify-start md:flex-row md:justify-start ">
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
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{product.price * count}</span>
                  {product.isAvailable ? (
                    <p className="flex items-center gap-1">
                      <FaCircleCheck className="text-primary" />
                      <span>In Stock!</span>
                    </p>
                  ) : (
                    <p>Out of stock!</p>
                  )}
                </div>
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
                <Button size="lg" className="space-x-2">
                  <FaWhatsapp className="h-6 w-6" />
                  <span>Inquire on WhatsApp!</span>
                </Button>
                <span>Categories: {product.category}</span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
