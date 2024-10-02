import React, { useState } from "react";
import { SidebarData } from "./data-in-sidebar/SidebarData";
import svg from "../../../images/control.png";
import logo from "../../../images/images.jpeg";
import { Link } from "react-router-dom";
import "./header.css";

const Slic = () => {
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex b">
      <div
        className={` ${
          open ? "w-72 bg-blue-600" : "w-20 bg-blue-600 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src={svg}
          className={`absolute cursor-pointer -left-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`w-[40px] cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            TechNYX
          </h1>
        </div>
        <ul className=" flex flex-col gap-y-6 py-4">
          {SidebarData.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <li
                className={` flex rounded-md   cursor-pointer  text-gray-100 text-sm  items-start gap-x-3 
                ${item.gap ? "mt-9" : "mt-2"} ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <item.icon className="text-black " />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {item.heading}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slic;
