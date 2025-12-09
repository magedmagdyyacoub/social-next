"use client";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function PostsFeed() {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); // "dark" or "light"

  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({});
  const [replyText, setReplyText] = useState({});
  const [showEmoji, setShowEmoji] = useState({});
  const [replyInputVisible, setReplyInputVisible] = useState({});
  const [repliesVisible, setRepliesVisible] = useState({});
  const [lazyReplies, setLazyReplies] = useState({});
  const REPLIES_BATCH = 5;

  const fetchRandomPosts = async () => {
    try {
      const res = await fetch("/api/posts/random");
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error("Fetch random posts error:", err);
    }
  };

  useEffect(() => {
    fetchRandomPosts();
  }, []);

  const handleLike = async (postId) => {
    if (!user) return alert("Please login first");
    await fetch(`/api/posts/${postId}/interact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "like" }),
    });
    fetchRandomPosts();
  };

  const handleComment = async (postId, parentId = null) => {
    if (!user) return alert("Please login first");
    const content = parentId ? replyText[parentId] : commentText[postId];
    if (!content || content.trim() === "") return;

    await fetch(`/api/posts/${postId}/interact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "comment", content, parentId }),
    });

    if (parentId) {
      setReplyText((prev) => ({ ...prev, [parentId]: "" }));
      setReplyInputVisible((prev) => ({ ...prev, [parentId]: false }));
    } else {
      setCommentText((prev) => ({ ...prev, [postId]: "" }));
    }
    fetchRandomPosts();
  };

  const handleCommentLike = async (commentId) => {
    if (!user) return alert("Please login first");
    await fetch(`/api/comments/${commentId}/like`, { method: "POST" });
    fetchRandomPosts();
  };

  const handleEmojiClick = (id, emojiData, isReply = false) => {
    if (isReply)
      setReplyText((prev) => ({ ...prev, [id]: (prev[id] || "") + emojiData.emoji }));
    else
      setCommentText((prev) => ({ ...prev, [id]: (prev[id] || "") + emojiData.emoji }));
  };

  const toggleReplies = (commentId) => {
    setRepliesVisible((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
    if (!lazyReplies[commentId]) {
      setLazyReplies((prev) => ({ ...prev, [commentId]: REPLIES_BATCH }));
    }
  };

  const loadMoreReplies = (commentId) => {
    setLazyReplies((prev) => ({
      ...prev,
      [commentId]: Math.min(
        prev[commentId] + REPLIES_BATCH,
        posts
          .flatMap((p) => p.comments)
          .find((c) => c.id === commentId)?.replies?.length || 0
      ),
    }));
  };

  const renderReplies = (postId, replies, parentId) => {
    const countToShow = lazyReplies[parentId] || REPLIES_BATCH;

    return replies.slice(0, countToShow).map((reply) => (
      <li key={reply.id} style={{ marginLeft: "20px", marginTop: "5px" }}>
        <strong style={{ color: theme === "dark" ? "#7abfff" : "#0070f3" }}>
          {reply.author?.name || "Unknown"}:
        </strong>{" "}
        {reply.content}

        <button
          onClick={() => handleCommentLike(reply.id)}
          style={{
            marginLeft: "10px",
            background: "#ff4d4f",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "2px 6px",
            cursor: "pointer",
          }}
        >
          ❤️ {reply.likes?.length || 0}
        </button>

        {!replyInputVisible[reply.id] && (
          <button
            style={{
              marginLeft: "10px",
              background: theme === "dark" ? "#444" : "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "2px 6px",
              cursor: "pointer",
            }}
            onClick={() =>
              setReplyInputVisible((prev) => ({ ...prev, [reply.id]: true }))
            }
          >
            ↩️ Reply
          </button>
        )}

        {replyInputVisible[reply.id] && (
          <div style={{ marginTop: "5px" }}>
            <textarea
              placeholder="Write a reply..."
              value={replyText[reply.id] || ""}
              onChange={(e) =>
                setReplyText((prev) => ({ ...prev, [reply.id]: e.target.value }))
              }
              rows={1}
              style={{
                width: "80%",
                borderRadius: "6px",
                border: "1px solid #ccc",
                padding: "6px",
                fontSize: "14px",
                background: theme === "dark" ? "#222" : "#fff",
                color: theme === "dark" ? "#f1f1f1" : "#000",
                resize: "none",
              }}
            />
            <div style={{ display: "flex", gap: "5px", marginTop: "4px" }}>
              <button
                type="button"
                onClick={() =>
                  setShowEmoji((prev) => ({ ...prev, [reply.id]: !prev[reply.id] }))
                }
                style={{
                  background: "#eee",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                😊 Emoji
              </button>
              {showEmoji[reply.id] && (
                <Picker onEmojiClick={(e) => handleEmojiClick(reply.id, e, true)} />
              )}
              <button
                onClick={() => handleComment(postId, reply.id)}
                style={{
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                ✅ Done
              </button>
            </div>
          </div>
        )}

        {reply.replies?.length > 0 && (
          <>
            <button
              onClick={() => toggleReplies(reply.id)}
              style={{
                marginTop: "5px",
                background: theme === "dark" ? "#333" : "#ddd",
                border: "none",
                borderRadius: "6px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              {repliesVisible[reply.id]
                ? "Hide Replies"
                : `View Replies (${reply.replies.length})`}
            </button>
            {repliesVisible[reply.id] && (
              <ul style={{ marginTop: "5px" }}>
                {renderReplies(postId, reply.replies, reply.id)}
                {lazyReplies[reply.id] < reply.replies.length && (
                  <button
                    onClick={() => loadMoreReplies(reply.id)}
                    style={{
                      marginTop: "5px",
                      background: "#0070f3",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "4px 8px",
                      cursor: "pointer",
                    }}
                  >
                    ➕ View More Replies
                  </button>
                )}
              </ul>
            )}
          </>
        )}
      </li>
    ));
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    background: theme === "dark" ? "#121212" : "#f9f9f9",
    minHeight: "100vh",
    padding: "20px 0",
    color: theme === "dark" ? "#f1f1f1" : "#000",
  };

  const postStyle = {
    background: theme === "dark" ? "#1e1e1e" : "#fff",
    boxShadow: theme === "dark"
      ? "0 2px 8px rgba(255,255,255,0.05)"
      : "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "12px",
    transition: "transform 0.2s",
  };

  return (
    <div style={containerStyle}>
      {posts.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#888" }}>
          Loading posts...
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, maxWidth: "700px", width: "100%" }}>
          {posts.map((post) => (
            <li key={post.id} style={postStyle}>
              {/* ===== Author & Date ===== */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <strong style={{ color: theme === "dark" ? "#7abfff" : "#0070f3" }}>
                  {post.author?.name || "Unknown"}
                </strong>
                <small style={{ color: theme === "dark" ? "#999" : "#999" }}>
                  {new Date(post.createdAt).toLocaleDateString()}
                </small>
              </div>

              {/* ===== Post Content ===== */}
              <h3 style={{ margin: "10px 0", fontSize: "20px", color: theme === "dark" ? "#f1f1f1" : "#333" }}>
                {post.title}
              </h3>
              <p style={{ marginBottom: "15px", lineHeight: "1.5", color: theme === "dark" ? "#ddd" : "#444" }}>
                {post.content}
              </p>

              {post.image && (
                <img
                  src={post.image}
                  style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                />
              )}

              {post.video && (
                <video
                  controls
                  style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                >
                  <source src={post.video} />
                </video>
              )}

              {/* ===== Actions ===== */}
              <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <button
                  onClick={() => handleLike(post.id)}
                  style={{
                    background: "#0070f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    cursor: "pointer",
                  }}
                >
                  👍 Like
                </button>
                <span>{post._count?.likes || 0} Likes</span>
                <span>{post._count?.comments || 0} Comments</span>
              </div>

              {/* ===== Comment Box ===== */}
              <div style={{ marginBottom: "15px" }}>
                <textarea
                  placeholder="Write a comment..."
                  value={commentText[post.id] || ""}
                  onChange={(e) =>
                    setCommentText((prev) => ({ ...prev, [post.id]: e.target.value }))
                  }
                  rows={1}
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    padding: "8px",
                    fontSize: "14px",
                    background: theme === "dark" ? "#222" : "#fff",
                    color: theme === "dark" ? "#f1f1f1" : "#000",
                    resize: "none",
                  }}
                />
                <div style={{ marginTop: "8px", display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() =>
                      setShowEmoji((prev) => ({ ...prev, [post.id]: !prev[post.id] }))
                    }
                    style={{
                      background: "#eee",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    😊 Emoji
                  </button>
                  {showEmoji[post.id] && (
                    <Picker onEmojiClick={(e) => handleEmojiClick(post.id, e)} />
                  )}
                  <button
                    onClick={() => handleComment(post.id)}
                    style={{
                      background: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    💬 Comment
                  </button>
                </div>
              </div>

              {/* ===== Comments ===== */}
              {post.comments?.length > 0 && (
                <ul style={{ marginTop: "10px", paddingLeft: "0" }}>
                  {post.comments.map((c) => (
                    <li
                      key={c.id}
                      style={{
                        background: theme === "dark" ? "#2a2a2a" : "#f9f9f9",
                        padding: "10px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                      }}
                    >
                      <strong style={{ color: theme === "dark" ? "#7abfff" : "#0070f3" }}>
                        {c.author?.name || "Unknown"}:
                      </strong>{" "}
                      {c.content}

                      <div style={{ marginTop: "5px", display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => handleCommentLike(c.id)}
                          style={{
                            background: "#ff4d4f",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "4px 10px",
                            cursor: "pointer",
                          }}
                        >
                          ❤️ {c.likes?.length || 0}
                        </button>

                        {!replyInputVisible[c.id] && (
                          <button
                            style={{
                              background: theme === "dark" ? "#444" : "#0070f3",
                              color: "#fff",
                              border: "none",
                              borderRadius: "6px",
                              padding: "4px 10px",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              setReplyInputVisible((prev) => ({ ...prev, [c.id]: true }))
                            }
                          >
                            ↩️ Reply
                          </button>
                        )}
                      </div>

                      {replyInputVisible[c.id] && (
                        <div style={{ marginTop: "8px" }}>
                          <textarea
                            placeholder="Write a reply..."
                            value={replyText[c.id] || ""}
                            onChange={(e) =>
                              setReplyText((prev) => ({ ...prev, [c.id]: e.target.value }))
                            }
                            rows={1}
                            style={{
                              width: "90%",
                              borderRadius: "6px",
                              border: "1px solid #ccc",
                              padding: "6px",
                              fontSize: "14px",
                              background: theme === "dark" ? "#222" : "#fff",
                              color: theme === "dark" ? "#f1f1f1" : "#000",
                              resize: "none",
                            }}
                          />
                          <div style={{ marginTop: "6px", display: "flex", gap: "10px" }}>
                            <button
                              type="button"
                              onClick={() =>
                                setShowEmoji((prev) => ({ ...prev, [c.id]: !prev[c.id] }))
                              }
                              style={{
                                background: "#eee",
                                border: "none",
                                borderRadius: "6px",
                                padding: "4px 10px",
                                cursor: "pointer",
                              }}
                            >
                              😊 Emoji
                            </button>

                            {showEmoji[c.id] && (
                              <Picker onEmojiClick={(e) => handleEmojiClick(c.id, e, true)} />
                            )}

                            <button
                              onClick={() => handleComment(post.id, c.id)}
                              style={{
                                background: "#28a745",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                padding: "4px 10px",
                                cursor: "pointer",
                              }}
                            >
                              ✅ Done
                            </button>
                          </div>
                        </div>
                      )}

                      {c.replies?.length > 0 && (
                        <>
                          <button
                            onClick={() => toggleReplies(c.id)}
                            style={{
                              marginTop: "8px",
                              background: theme === "dark" ? "#333" : "#ddd",
                              border: "none",
                              borderRadius: "6px",
                              padding: "4px 10px",
                              cursor: "pointer",
                            }}
                          >
                            {repliesVisible[c.id]
                              ? "Hide Replies"
                              : `View Replies (${c.replies.length})`}
                          </button>

                          {repliesVisible[c.id] && (
                            <>
                              <ul style={{ marginTop: "8px" }}>
                                {renderReplies(post.id, c.replies, c.id)}
                              </ul>

                              {lazyReplies[c.id] < c.replies.length && (
                                <button
                                  onClick={() => loadMoreReplies(c.id)}
                                  style={{
                                    marginTop: "6px",
                                    background: "#0070f3",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "6px",
                                    padding: "4px 10px",
                                    cursor: "pointer",
                                  }}
                                >
                                  ➕ View More Replies
                                </button>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
