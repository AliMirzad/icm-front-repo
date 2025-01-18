import { Outlet } from "react-router-dom";
import "./dashboard.css";
import Sidebar from "./component/sidebar/Sidebar";
import { Header } from "./component/header/Header";
import { Logo } from "./component/Logo/Logo";
import Slic from "./component/sidebar/Slic";
import { useState } from "react";
export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  // const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="boxx">
      <div className="AppGlass">
        <div
          className={
            open
              ? "w-1/5 transition-all duration-300 bg-purple-700"
              : "w-[5%] transition-all duration-300"
          }
        >
          {/* <Sidebar /> */}
          <Slic open={open} setOpen={() => setOpen(!open)} />
        </div>
        <div
          className={
            open
              ? "flex flex-col w-4/5 justify-center  px-[20px]  transition-all duration-300"
              : "transition-all duration-300 flex flex-col w-[95%] justify-center "
          }
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
