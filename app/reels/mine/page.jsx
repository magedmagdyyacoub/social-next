"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/ThemeContext";

export default function MyReelsPage() {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const [reels, setReels] = useState([]);

  useEffect(() => {
    if (user) fetchMyReels();
  }, [user]);

  const fetchMyReels = async () => {
    try {
      const res = await fetch("/api/reels/mine");
      const data = await res.json();
      setReels(data.reels || []);
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "30px", background: theme === "dark" ? "#121212" : "#fff", minHeight: "100vh", color: theme === "dark" ? "#f1f1f1" : "#000" }}>
      <h1>My Reels</h1>

      {reels.length === 0 && <p>No reels yet.</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
        {reels.map(reel => (
          <div key={reel.id} style={{ border: `1px solid ${theme === "dark" ? "#333" : "#ccc"}`, padding: "10px", borderRadius: "8px" }}>
            <video src={reel.video} controls style={{ width: "100%", maxHeight: "400px", borderRadius: "6px" }} />
            {reel.caption && <p>{reel.caption}</p>}
            
            <p style={{ fontSize: "12px", color: theme === "dark" ? "#888" : "#555" }}>
              Created at: {new Date(reel.createdAt).toLocaleString()}
            </p>

            <p style={{ fontSize: "12px", color: theme === "dark" ? "#aaa" : "#666" }}>
              Likes: {reel.likes?.length || 0} | Comments: {reel.comments?.length || 0}
            </p>

            {/* Display first 2 comments as preview */}
            {reel.comments?.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                {reel.comments.slice(0, 2).map(comment => (
                  <div key={comment.id} style={{ padding: "4px 0", fontSize: "13px", color: theme === "dark" ? "#ccc" : "#333" }}>
                    <strong>{comment.author.name || "Unknown"}:</strong> {comment.content} {comment.emoji && <span>{comment.emoji}</span>}
                  </div>
                ))}
                {reel.comments.length > 2 && <p style={{ fontSize: "12px", color: theme === "dark" ? "#888" : "#555" }}>+{reel.comments.length - 2} more comments</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
