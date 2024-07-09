import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ManageProducts from "../pages/ManageProducts";
import { mainRoutes } from "./mainRoutes";
import Dashboard from "../pages/Deshbaord/Dashboard";
import CreateProduct from "../pages/Deshbaord/CreateProduct";
import CreateCategory from "../pages/Deshbaord/CreateCategory";
import ProductList from "../pages/Deshbaord/ProductList";
import CategoryList from "../pages/Deshbaord/CategoryList";
import Payment from "../pages/Payment";
import Order from "../pages/Deshbaord/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: mainRoutes,
  },
  {
    path: "/dashboard",
    element: <ManageProducts />,
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "create-category",
        element: <CreateCategory />,
      },
      {
        path: "product-list",
        element: <ProductList />,
      },
      {
        path: "category-list",
        element: <CategoryList />,
      },
      {
        path: "payments",
        element: <Payment />,
      },
      {
        path: "orders",
        element: <Order />,
      },
    ],
  },
]);

export default router;
