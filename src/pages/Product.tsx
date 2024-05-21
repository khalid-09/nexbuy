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

const Product = () => {
  const { state } = useLocation();
  const product = state as Product;

  return (
    <>
      <Seo
        title={product.name}
        description={product.shortDescription}
        type={product.category}
      />
      <section className="m-auto max-w-6xl px-4 font-poppins">
        <ProductBreadcrumbs
          productName={product.name}
          category={product.category}
        />
        <div className="items- flex h-dvh flex-col items-center justify-center md:flex-row md:justify-start ">
          <div className="w-full px-12 md:w-1/2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              // orientation="vertical"
              className="-translate-y-20"
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
          <div>Product Details</div>
        </div>
      </section>
    </>
  );
};

export default Product;
