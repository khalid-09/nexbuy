import FirstProduct from "./products/FirstProducts";
import OnlyClothes from "./products/OnlyClothes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BestSelling = () => {
  return (
    <section className="m-auto max-w-6xl space-y-4 px-4 py-10 font-poppins">
      <h2 className="text-start text-4xl font-medium">
        Today's best selling products!
      </h2>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="h-[80px] md:h-fit">
          <div className="flex flex-wrap items-start gap-1 p-2">
            <TabsTrigger className="" value="all">
              All
            </TabsTrigger>
            <TabsTrigger value="clothes">Clothes</TabsTrigger>
            <TabsTrigger value="laptops" disabled>
              Laptops
            </TabsTrigger>
            <TabsTrigger value="furnitures" disabled>
              Furnitures
            </TabsTrigger>
            <TabsTrigger value="books" disabled>
              Books
            </TabsTrigger>
            <TabsTrigger value="skincare" disabled>
              Skin Care
            </TabsTrigger>
            <TabsTrigger value="mobiles" disabled>
              Mobiles
            </TabsTrigger>
            <TabsTrigger value="fruits" disabled>
              Earbuds
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent
          value="clothes"
          className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
        >
          <OnlyClothes />
        </TabsContent>
        <TabsContent
          className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          value="all"
        >
          <FirstProduct />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default BestSelling;
