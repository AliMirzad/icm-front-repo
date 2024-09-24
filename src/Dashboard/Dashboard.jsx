import { Outlet } from "react-router-dom";
import "./dashboard.css";
import Sidebar from "./component/sidebar/Sidebar";
import { Header } from "./component/header/Header";
import { Logo } from "./component/Logo/Logo";
export const Dashboard = () => {
  return (
    <div className="boxx">
      <div className="AppGlass">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="flex flex-col w-3/4 mx-auto ">
          <div className="flex justify-between">
            <Header />
            <Logo />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
