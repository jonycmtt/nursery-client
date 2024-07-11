import Checkout from "../pages/MainPage/Checkout";
import Landing from "../pages/landing/Landing";
import Payment from "../pages/MainPage/Payment";
import SingleProduct from "../pages/MainPage/SingleProduct";
import Products from "../pages/MainPage/Products";

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
