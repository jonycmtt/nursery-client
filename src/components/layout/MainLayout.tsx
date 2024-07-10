import { Outlet } from "react-router-dom";
import TopHeader from "../../pages/MainPage/TopHeader";

const MainLayout = () => {
  return (
    <div className="">
      <TopHeader />

      <Outlet />
    </div>
  );
};

export default MainLayout;
