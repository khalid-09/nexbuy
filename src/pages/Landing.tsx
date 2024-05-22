import BestSelling from "@/components/best-selling";
import Discount from "@/components/discount";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

const Landing = () => {
  return (
    <main className="h-dvh bg-green-200 font-poppins dark:bg-background">
      <Hero />
      <BestSelling />
      <Discount />
      <Footer />
    </main>
  );
};

export default Landing;
