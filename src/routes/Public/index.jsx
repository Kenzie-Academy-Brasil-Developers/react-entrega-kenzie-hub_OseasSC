import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const PublicRoutes = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
