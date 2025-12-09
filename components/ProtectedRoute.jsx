"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, admin }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
    if (admin && user?.role !== "ADMIN") router.push("/");
  }, [user]);

  if (!user || (admin && user.role !== "ADMIN")) return null;

  return children;
}
