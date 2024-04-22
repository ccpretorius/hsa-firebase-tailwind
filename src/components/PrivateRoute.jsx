import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = ({ requiredPermission, children }) => {
  const { loggedIn, checkingStatus, permissions } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (requiredPermission && !permissions[requiredPermission]) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;
