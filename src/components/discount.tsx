import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <section className="m-auto mt-10 flex w-full max-w-4xl flex-col gap-6 px-4 pb-20 md:mt-14 md:flex-row">
      <Card className="w-full bg-lime-200 px-4 py-6 ">
        <CardHeader>
          <CardDescription className="space-x-3">
            <span>Exclusive Offer </span>
            <Badge>10% OFF</Badge>
          </CardDescription>
          <CardTitle className="text-3xl">
            Best Online Deals, Free Stuff
          </CardTitle>
          <CardDescription>Only on this week...Don't miss!</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="lg" asChild className="space-x-2">
            <Link to="products">
              <span>Get Best Deal</span>
              <ArrowRightIcon />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full bg-green-200 px-4  py-6">
        <CardHeader>
          <CardDescription>
            <span>Regular Offer </span>
          </CardDescription>
          <CardTitle className="text-3xl">
            10% cash-back on personal care
          </CardTitle>
          <CardDescription>
            Max cashback: {formatCurrency(960)}. Code: CADHL417
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="lg" variant="secondary" asChild className="space-x-2">
            <Link to="products">
              <span>Shop Now</span>
              <ArrowRightIcon />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Discount;
