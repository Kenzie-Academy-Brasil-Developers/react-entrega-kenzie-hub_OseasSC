import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./../pages/LoginPage/index";
import { RegisterPage } from "./../pages/RegisterPage/index";
import { DashboardPage } from "./../pages/DashboardPage/index";
import { PublicRoutes } from "./Public/index";
import { ProtectedRoutes } from "./Protected/index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
