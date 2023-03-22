import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./getToken";

const ProtectedRoute = () => {
  const isAuth = getToken();

  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;
