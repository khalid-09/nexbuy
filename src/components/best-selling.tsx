import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

const BestSelling = () => {
  return (
    <section className="font-poppins m-auto max-w-6xl space-y-4 px-4 py-10">
      <h2 className="text-start text-4xl">Today's best selling product!</h2>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="h-[80px] md:h-fit">
          <div className="flex flex-wrap items-start gap-1 p-2">
            <TabsTrigger className="px-4" value="all">
              All
            </TabsTrigger>
            <TabsTrigger value="laptops">Laptops</TabsTrigger>
            <TabsTrigger value="furnitures">Furnitures</TabsTrigger>
            <TabsTrigger value="clothes">Clothes</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="skincare">Skin Care</TabsTrigger>
            <TabsTrigger value="mobiles">Mobiles</TabsTrigger>
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
          </div>
        </TabsList>
        <TabsContent
          value="clothes"
          className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-4"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <Card className="overflow-hidden" key={i}>
              <CardHeader className="relative mb-0 h-56">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="white_hoodie_mockup.jpg"
                />
              </CardHeader>
              <CardContent className="mt-2 space-y-2 px-6 md:mt-0 md:px-6 md:py-4">
                <div className="flex w-full items-center justify-between">
                  <CardTitle>White Hoodie</CardTitle>
                  <p className="text-muted-foreground">₦10,000</p>
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
          ))}
        </TabsContent>
        <TabsContent value="tech">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default BestSelling;
