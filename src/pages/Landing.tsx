import BestSelling from "@/components/best-selling";
import Discount from "@/components/discount";
import Hero from "@/components/hero";

const Landing = () => {
  return (
    <main className="h-dvh bg-green-200 font-poppins">
      <Hero />
      <BestSelling />
      <Discount />
    </main>
  );
};

export default Landing;
