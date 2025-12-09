"use client";

import { useState } from "react";
import PostsFeed from "../components/PostsFeed";
import ReelsFeed from "@/components/ReelsFeed";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("posts"); // posts | reels

  return (
    <main
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",   // يخلي المحتوى في النص أفقيًا
      }}
    >
      <div
        style={{
          maxWidth: "800px",        // عرض المحتوى الأساسي
          width: "100%",
          textAlign: "center",      // يخلي النصوص في النص
        }}
      >
        {/* ===== Styled Title ===== */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "800",
            background: "linear-gradient(90deg, #0070f3, #7928ca)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "10px",
            textShadow: "0px 1px 2px rgba(0,0,0,0.15)",
          }}
        >
          Welcome to Social App
        </h1>

        <h2
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#555",
          }}
        >
          Explore
        </h2>

        {/* ===== Tabs Buttons ===== */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            justifyContent: "center", // يخلي الأزرار في النص
          }}
        >
          <button
            onClick={() => setActiveTab("posts")}
            style={{
              padding: "10px 20px",
              background: activeTab === "posts" ? "#0070f3" : "#ddd",
              color: activeTab === "posts" ? "#fff" : "#000",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Posts
          </button>

          <button
            onClick={() => setActiveTab("reels")}
            style={{
              padding: "10px 20px",
              background: activeTab === "reels" ? "#0070f3" : "#ddd",
              color: activeTab === "reels" ? "#fff" : "#000",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Reels
          </button>
        </div>

        {/* ===== Content ===== */}
        <div style={{ marginTop: "30px" }}>
          {activeTab === "posts" && <PostsFeed />}
          {activeTab === "reels" && <ReelsFeed />}
        </div>
      </div>
    </main>
  );
}
