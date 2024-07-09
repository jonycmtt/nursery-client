import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ManageProducts from "../pages/ManageProducts";
import { mainRoutes } from "./mainRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: mainRoutes,
  },
  {
    path: "/dashboard",
    element: <ManageProducts />,
  },
]);

export default router;
