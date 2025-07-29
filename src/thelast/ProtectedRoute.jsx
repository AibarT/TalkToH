// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Синхронная проверка аутентификации
  const isLoggedIn = localStorage.getItem("auth") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
