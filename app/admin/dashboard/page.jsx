"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // Prevent normal users from entering admin area
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.role !== "ADMIN") {
      router.push("/profile");
    }
  }, [user]);

  if (!user || user.role !== "ADMIN") return null;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ marginTop: "20px", padding: "20px", background: "#222", color: "#fff", borderRadius: "8px" }}>
        <p>Welcome, Admin {user.name || ""}</p>
        <p>You have full control over the platform.</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Quick Actions</h2>
        <ul>
          <li>Manage Users</li>
          <li>View Reports</li>
          <li>Manage Posts</li>
        </ul>
      </div>
    </div>
  );
}
