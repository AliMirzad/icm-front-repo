import { Outlet } from "react-router-dom";
import "./dashboard.css";
import Sidebar from "./component/sidebar/Sidebar";
import { Header } from "./component/header/Header";
import { Logo } from "./component/Logo/Logo";
import Slic from "./component/sidebar/Slic";
export const Dashboard = () => {
  return (
    <div className="boxx">
      <div className="AppGlass">
        <div className="w-1/5">
          {/* <Sidebar /> */}
          <Slic/>
        </div>
        <div className="flex flex-col w-3/4 mx-auto ">
         
          <Outlet />
        </div>
      </div>
    </div>
  );
};
