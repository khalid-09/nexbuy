import BestSelling from "@/components/BestSelling";
import Discount from "@/components/Discount";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

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
