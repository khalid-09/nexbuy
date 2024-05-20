import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="m-auto flex h-dvh max-w-6xl flex-col items-center  px-4 md:-translate-y-10  md:flex-row ">
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
        <Button className="space-x-2">
          <span>Shop Now</span>
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="w-full md:w-1/3">Image</div>
    </div>
  );
};

export default Hero;
