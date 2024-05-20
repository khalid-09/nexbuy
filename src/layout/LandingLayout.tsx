import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LandingLayout;
