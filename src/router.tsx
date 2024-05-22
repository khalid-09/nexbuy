import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorLayout from "./layout/ErrorLayout";
import LandingLayout from "./layout/LandingLayout";
import Landing from "./pages/Landing";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";

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
          {
            path: "products",
            children: [
              { index: true, element: <AllProducts /> },
              { path: ":id", element: <Product /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
