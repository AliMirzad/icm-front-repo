import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="flex w-3/5 justify-center mt-4">
      <div className="overflow-hidden w-4/5  h-[40px]  rounded-3xl flex justify-center items-center header-animation">
        <h1 className="welcome-text">Welcome to the Admin Panel</h1>
      </div>
    </div>
  );
};
