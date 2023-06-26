import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./../pages/LoginPage/index";
import { RegisterPage } from "./../pages/RegisterPage/index";
import { DashboardPage } from "./../pages/DashboardPage/index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
