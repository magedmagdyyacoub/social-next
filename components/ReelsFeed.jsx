"use client";

import { useEffect, useState } from "react";

export default function ReelsFeed() {
  const [reels, setReels] = useState([]);
  const [newComments, setNewComments] = useState({}); // temp input per reel

  const fetchReels = async () => {
    try {
      const res = await fetch("/api/reels/random"); // fetch reels
      const data = await res.json();

      // Fetch interactions (likes + comments) for each reel
      const reelsWithInteractions = await Promise.all(
        (data.reels || []).map(async (r) => {
          const res2 = await fetch(`/api/reels/${r.id}/interact`);
          const interactions = await res2.json();
          return { ...r, likes: interactions.likes, comments: interactions.comments };
        })
      );

      setReels(reelsWithInteractions);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReels();
  }, []);

  const handleLike = async (reelId) => {
    try {
      await fetch(`/api/reels/${reelId}/interact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "like" }),
      });
      fetchReels(); // refresh to update likes
    } catch (err) {
      console.error(err);
    }
  };

  const handleComment = async (reelId) => {
    if (!newComments[reelId]) return;
    try {
      await fetch(`/api/reels/${reelId}/interact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "comment", content: newComments[reelId] }),
      });
      setNewComments({ ...newComments, [reelId]: "" }); // clear input
      fetchReels(); // refresh to show new comment
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Reels</h2>
      {reels.length === 0 ? (
        <p>No reels yet</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {reels.map((r) => (
            <div
              key={r.id}
              style={{
                width: "250px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <video
                src={r.video}
                controls
                style={{ width: "100%", borderRadius: "6px" }}
              />
              {r.caption && <p style={{ marginTop: "5px" }}>{r.caption}</p>}

              {/* Likes */}
              <button
                onClick={() => handleLike(r.id)}
                style={{
                  marginTop: "5px",
                  cursor: "pointer",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                ❤️ {r.likes?.length || 0}
              </button>

              {/* Previous comments */}
              <div style={{ marginTop: "10px" }}>
                {r.comments?.length > 0 &&
                  r.comments.map((c) => (
                    <div key={c.id} style={{ fontSize: "13px", padding: "2px 0" }}>
                      <strong>{c.author?.name || "Unknown"}:</strong> {c.content}{" "}
                      {c.emoji && <span>{c.emoji}</span>}
                      {/* Show replies recursively if needed */}
                      {c.replies?.length > 0 &&
                        c.replies.map((rpl) => (
                          <div
                            key={rpl.id}
                            style={{
                              fontSize: "12px",
                              paddingLeft: "10px",
                              color: "#555",
                            }}
                          >
                            <strong>{rpl.author?.name || "Unknown"}:</strong>{" "}
                            {rpl.content}
                          </div>
                        ))}
                    </div>
                  ))}
              </div>

              {/* Comment input */}
              <div style={{ marginTop: "10px" }}>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComments[r.id] || ""}
                  onChange={(e) =>
                    setNewComments({ ...newComments, [r.id]: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  onClick={() => handleComment(r.id)}
                  style={{
                    marginTop: "5px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
