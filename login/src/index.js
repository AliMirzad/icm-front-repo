import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import AppRouter from "./components/AppRouter/AppRouter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <AppRouter/>

  </React.StrictMode>
);

