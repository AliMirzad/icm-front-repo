import React, { useState } from "react";
import "./sidebar.css";
import { Logo } from "../Logo/Logo";
import { SidebarData } from "./data-in-sidebar/SidebarData";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = ({ setSidebarExpanded, expanded }) => {
  const [selected, setSelected] = useState(0);

  const toggleSidebar = () => {
    setSidebarExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? "sidebar-expanded" : "sidebar-collapsed"} h-full bg-[#202531] text-white`}>
      <div className="bars" onClick={toggleSidebar}>
        <UilBars />
      </div>
      <motion.div
        className={`sidebar-content ${expanded ? "expanded" : "collapsed"}`}
        animate={expanded ? { width: "200px", opacity: 1 } : { width: "60px", opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
  

        <div className={`w-full flex justify-center items-center ${expanded ? "" : "collapsed"}`}>
          <Logo />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <Link
              to={item.link || "#"}
              className={`menuItem ${selected === index ? "active" : ""}`}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              {expanded && <span>{item.heading}</span>}
            </Link>
          ))}
          <div className="cursor-pointer flex items-center gap-4 mt-6 mr-3">
            <UilSignOutAlt />
            خروج
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
