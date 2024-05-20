import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="m-auto flex h-dvh max-w-6xl -translate-y-14 flex-col items-center  justify-center px-4 text-center md:-translate-y-10 md:flex-row md:justify-start  md:text-start ">
      <div className="mt-20 w-full space-y-4 md:mt-0 md:w-2/3">
        <p className="text-lg font-medium">Welcome to shopping paradise</p>
        <h1 className="text-3xl font-bold text-foreground md:text-5xl">
          Experience Unmatched Convenience and Variety at{" "}
          <span className="text-primary">NEX</span>BUY.
        </h1>
        <p className="font-semibold text-muted-foreground">
          Discover a world of products curated just for you. From the latest
          tech gadgets to stylish fashion trends, our handpicked selections
          cater to your every need.
        </p>
        <Button className="space-x-2" asChild>
          <Link to="/products">
            <span>Shop Now</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
      <div className="hidden w-full sm:hidden  md:block md:w-1/3">
        <img src="hero4.png" alt="hero" className="inset-0 object-cover " />
      </div>
    </section>
  );
};

export default Hero;