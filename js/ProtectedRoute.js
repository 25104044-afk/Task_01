import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wrap any route that should only be reachable by a logged-in user.
// Optionally pass `roles` to restrict to specific roles, e.g. roles={["admin"]}
const ProtectedRoute = ({ children, roles }) => {
  const { user, loading } = useAuth();

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
