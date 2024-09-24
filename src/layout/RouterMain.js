import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
const RouterMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Login/>} path="/login"/>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterMain;
