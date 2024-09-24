import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../../image/logo-team/Technix-opengraph.png";
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
    <div className="w-[250px] bg-white mr-4 my-4 rounded-3xl ">
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
        <div className="logo flex flex-col justify-center items-center mx-[10px] " style={{margin:"0 20px"}}>
          <IoPersonCircle size={100} className="text-blue-500" />
          <h1>hosein</h1>
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
          <div className=" cursor-pointer flex items-center gap-4">
            <UilSignOutAlt />
            خروج
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
