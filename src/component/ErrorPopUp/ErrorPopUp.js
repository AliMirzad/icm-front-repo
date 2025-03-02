import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
const ErrorPopUp = ({ error, modal, handleClose,sucess,loadFn }) => {
  console.log(sucess);
const hadmdleChange=()=>{
  loadFn()
}
  return (
    <div
      className={
        error === null && modal === true
          ? " scale-0 absolute inset-0 transition-all duration-300 "
          : "w-full h-screen absolute inset-0   scale-1 bg-black/[0.6] transition-all duration-300"
      }
      onClick={handleClose}
    >
      <div
        className={
          error === null && modal === true
            ? " w-[500px] h-[350px] transition-all duration-300 absolute m-auto inset-0 opacity-0 translate-y-[-100%]  rounded-lg"
            : " w-[500px] h-[250px] flex flex-col justify-center z-[999] items-center gap-y-1 absolute m-auto inset-0 opacity-1 transition-all duration-300 delay-500 translate-y-0 bg-white rounded-lg"
        }
      >
        <span
          onClick={handleClose}
          className={`${sucess===null?`text-rose-600`:`text-green-600`} absolute top-1 right-1 text-[26px] cursor-pointer font-bold`}  
        >
          &times;
        </span>
        {error!==null?    <MdErrorOutline
          className={
            error === null && modal===true
              ? "text-[278px] errorIcon opacity-0 duration-300 delay-1000 text-rose-600 translate-y-[-100%]  "
              : "text-[278px] errorIcon  duration-300 delay-1000 text-green-600 translate-y-0 opacity-100 transition-all "
          }
        />:<FaRegCheckCircle
        className={
          error === null && modal===true
            ? "text-[278px] errorIcon opacity-0 duration-300 delay-1000 text-rose-600 translate-y-[-100%]  "
            : "text-[278px] errorIcon  duration-300 delay-1000 text-green-600 translate-y-0 opacity-100 transition-all "
        }
        />}

        <p
          className={
            error === null && modal===true
              ? "font-bold text-rose-500 text-[24px] opacity-0"
              : "font-bold text-green-500 text-[24px] opacity-1 transition-all duration-300 delay-1000"
          }
          style={{ direction: "ltr" }}
        >
         {error === null && modal===true?error:sucess}
       
        </p>
        <button className={error===null&& modal===true?"bg-rose-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md":"bg-green-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md"} onClick={hadmdleChange}>بازگشت</button>
      </div>

    </div>
  );
};

export default ErrorPopUp;
