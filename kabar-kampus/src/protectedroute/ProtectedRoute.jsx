// ProtectedRoute.jsx
import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { database } from "../../config/FirebaseConfig";

const ProtectedRoute = () => {
  const isAuthenticated = !!database.currentUser;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
