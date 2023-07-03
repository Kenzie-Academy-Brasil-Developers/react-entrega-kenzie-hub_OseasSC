import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
