import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRoute({ requiredPermission }) {
  const { loggedIn, checkingStatus, permissions } = useAuthStatus();

  // Still loading the auth status
  if (checkingStatus) {
    return <Spinner />;
  }

  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  // If a requiredPermission is specified, check if the user has it
  if (requiredPermission && !permissions[requiredPermission]) {
    // User does not have the required permission
    return <Navigate to="/unauthorized" />;
  }

  // User is logged in and either no specific permission is required
  // or the user has the required permission
  return <Outlet />;
}
