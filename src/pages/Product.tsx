import { useLocation } from "react-router-dom";
import type { Product } from "@/data/types";

import ProductBreadcrumbs from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductDetails from "@/components/products/ProductDetails";

const Product = () => {
  const { state } = useLocation();
  const product = state as Product;

  return (
    <>
      <Seo
        title={product.name}
        description={product.shortDescription}
        type={product.category}
        image={product.images.at(1)!}
        url={`https://nexbuy.vercel.app/products/${product.id}`}
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
            <ProductDetails product={product} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
