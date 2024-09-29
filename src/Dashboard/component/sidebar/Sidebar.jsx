import React, { useState } from "react";
import "./sidebar.css";
import { Logo } from "../Logo/Logo";
import { SidebarData } from "./data-in-sidebar/SidebarData";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { IoPersonCircle } from "react-icons/io5";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <div className="w-full h-full  bg-[#1c336b] text-white ">
      <div
        className="bars"
        style={expanded ? { left: "50%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className=" w-full flex justify-center items-center mr-8 ">
          <Logo />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link
                to={item.link || "#"}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </Link>
            );
          })}
          {/* signoutIcon */}
          <div className=" cursor-pointer flex items-center gap-4 mt-6 mr-3">
            <UilSignOutAlt />
            خروج
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
