import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Hero from "./components/Hero/Hero";
import Goals from "./components/Goals/Goals";
import Tech from "./components/Tech/Tech";
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Hero />

    <Wrapper />
    <Goals />
    <Tech/>
    <Blog/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
