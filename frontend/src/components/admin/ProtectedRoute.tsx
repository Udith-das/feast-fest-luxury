import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("ff_admin_token");
  if (!token) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}
