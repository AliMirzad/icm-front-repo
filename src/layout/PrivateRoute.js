import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'
const PrivateRoute = ({ children }) => {
  // const accessToken = localStorage.getItem("accessToken");
  const accessToken = Cookies.get('accessToken');
  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
