import { Outlet, useLocation } from "react-router-dom";
const LoginLayout = () => {
  const location = useLocation();

  const showLeftSide = location.pathname !== "/dashboard/main";

  return (
    <div className="flex flex-row h-[500px"> 
      <div className="flex-grow">  
        <Outlet />  
      </div>
    </div>
  );
};

export default LoginLayout;