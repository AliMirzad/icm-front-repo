import React, { useState } from "react";
import { SidebarData } from "./data-in-sidebar/SidebarData";
import svg from "../../../images/control.png";
import logo from "../../../images/images.jpeg";
import { Link } from "react-router-dom";
import "./header.css";

const Slic = ({open,setOpen}) => {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex b">
      <div
        className={` ${
          open ? "w-full bg-[#2a2185]" : "w-full bg-[#2a2185] "
        } bg-dark-purple h-screen   pt-8 relative duration-300 border-r-[10px] border-solid border-[#2a2185]`}
      >
        <img
          src={svg}
          className={`absolute cursor-pointer -left-3 top-9 w-7  transition-all duration-500  border-dark-purple
           border-2 rounded-full ${!open && "rotate-180 "}`}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`w-[40px] cursor-pointer transition-all duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt=""
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            TechNYX
          </h1>
        </div>

        <ul className=" flex flex-col justify-evenly  h-full  overflow-hidden  top-[100px]  w-full">
          {SidebarData.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={` w-full relative  rounded-md  hover:text-[#2a2185]   cursor-pointer  text-gray-100 text-sm rounded-tr-[30px] rounded-br-[30px] hover:bg-white  transition-all hover:duration-150 before:transition-all before:duration-100 after:transition-all after:duration-100 items-center before:absolute before:left-[0px]  before:top-[-50px] before:shadow-[-35px_35px_0px_10px_transparent] before:w-[50px] before:h-[50px] before:bg-transparenthover:before:transition-all hover:before:duration-150 before:rounded-[50%]  before:pointer-events-none after:absolute after:left-[0px] after:bottom-[-50px] after:shadow-[-35px_-35px_0px_10px_transparent] after:w-[50px] after:h-[50px] after:bg-transparent hover:after:transition-all hover:after:duration-150 after:rounded-[50%]  after:pointer-events-none hover:before:shadow-white hover:after:shadow-white ${
                !open && `justify-center  w-[50px] h-[50px] before:bg-transparent before:top-[-50px] after:bottom-[-20px] before:left-[-51px] after:left-[-30px] after:bg-transparent before:shadow-[-15px_15px_0px_2px_transparent] hover:before:shadow-white`
              }
              ${item.gap ? "mt-9" : "mt-2"} ${
                activeIndex === index ? "active    " : ""
              }`}
            >
              <Link
                to={item.link}
                className=" w-full pr-[15px] h-[50px]  flex justify-start items-center  " 
              >
                <item.icon />
                <span
                  className={`${
                    !open && "hidden "
                  } ms-[5px]   duration-200`}
                >
                  {item.heading}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slic;
