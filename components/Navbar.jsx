"use client";

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "var(--nav-bg)",
        color: "var(--nav-text)",
      }}
    >
      <h2>Social App</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link href="/">Home</Link>

        {user ? (
          <>
            <Link href="/posts">My Posts</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/reels/mine">My Reels</Link> {/* 👈 NEW LINK */}
            <Link href="/portfolio">Portfolio</Link> {/* 👈 NEW LINK */}
            {user.role === "ADMIN" && <Link href="/dashboard">Admin</Link>}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/portfolio">Portfolio</Link> {/* 👈 NEW LINK */}
          </>
        )}

        {/* 🔥 Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
