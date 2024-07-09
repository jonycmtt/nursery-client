import Landing from "../pages/Landing";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";

export const mainRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "singleProducts",
    element: <SingleProduct />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
];
