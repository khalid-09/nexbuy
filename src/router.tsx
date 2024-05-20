import { createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import RootLayout from "./layout/RootLayout";
import ErrorLayout from "./layout/ErrorLayout";
import Shop from "./pages/Shop";
import LandingLayout from "./layout/LandingLayout";
import Landing from "./pages/Landing";
import Products from "./pages/Products";

type Router = ReturnType<typeof createBrowserRouter>;

const router: Router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        element: <LandingLayout />,
        children: [
          { path: "/", element: <Landing /> },
          { path: "/contact", element: <Contact /> },
          { path: "/shop", element: <Shop /> },
          { path: "/products", element: <Products /> },
        ],
      },
    ],
  },
]);

export default router;
