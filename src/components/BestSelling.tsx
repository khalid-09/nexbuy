import FirstProduct from "./products/FirstProducts";
import OnlyClothes from "./products/OnlyClothes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BestSelling = () => {
  return (
    <section className="m-auto max-w-6xl space-y-4 px-4 py-10 font-poppins">
      <h2 className="mb-10 text-start text-4xl font-medium">
        Today's best selling products!
      </h2>
      <Tabs defaultValue="all" className=" w-full">
        <TabsList className="p-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="clothes">Clothes</TabsTrigger>
          <TabsTrigger value="laptops" disabled>
            Laptops
          </TabsTrigger>
          <TabsTrigger value="furnitures" disabled>
            Furnitures
          </TabsTrigger>
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
