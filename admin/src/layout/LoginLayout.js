import { Outlet, useLocation } from "react-router-dom";
import LeftSide from "../Pages/Login/LeftSide/LeftSide";
const LoginLayout = () => {
  const location = useLocation();

  const showLeftSide = location.pathname !== "/dashboard/main";

  return (
    <div className="flex flex-row h-[500px"> 
      {showLeftSide && <LeftSide />}  
      <div className="flex-grow">  
        <Outlet />  
      </div>
    </div>
  );
};

export default LoginLayout;