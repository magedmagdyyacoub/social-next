"use client";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import dynamic from "next/dynamic";

// Load emoji picker dynamically (client-side only)
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function PostsPage() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    content: "",
    imageFile: null,
    videoFile: null,
    existingImage: "",
    existingVideo: "",
    showEmojiPicker: false,
  });

  const fetchPosts = async () => {
    const res = await fetch("/api/posts/mine");
    const data = await res.json();
    setPosts(data.posts || []);
  };

  useEffect(() => {
    if (!user) return;
    fetchPosts();
  }, [user]);

  if (!user) return <p>Loading...</p>;

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  };

  const handleEditSave = async (id) => {
    const formData = new FormData();
    formData.append("title", editData.title);
    formData.append("content", editData.content);
    if (editData.imageFile) formData.append("image", editData.imageFile);
    if (editData.videoFile) formData.append("video", editData.videoFile);

    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: formData,
    });
    const data = await res.json();

    if (res.ok) {
      setEditingPostId(null);
      setEditData({
        title: "",
        content: "",
        imageFile: null,
        videoFile: null,
        existingImage: "",
        existingVideo: "",
        showEmojiPicker: false,
      });
      fetchPosts();
    } else {
      alert(data.error || "Failed to update post");
    }
  };

  const handleEmojiClick = (emojiData) => {
    setEditData((prev) => ({
      ...prev,
      content: prev.content + emojiData.emoji,
    }));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Posts</h1>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul style={{ marginTop: "20px" }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              {editingPostId === post.id ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <input
                    value={editData.title}
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, title: e.target.value }))
                    }
                    placeholder="Title"
                    style={{ width: "100%", marginBottom: "5px" }}
                  />
                  <textarea
                    value={editData.content}
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, content: e.target.value }))
                    }
                    placeholder="Content"
                    style={{ width: "100%", marginBottom: "5px" }}
                    rows={3}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setEditData((prev) => ({
                        ...prev,
                        showEmojiPicker: !prev.showEmojiPicker,
                      }))
                    }
                  >
                    {editData.showEmojiPicker ? "Close Emojis" : "Add Emoji"}
                  </button>
                  {editData.showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}

                  {/* Image upload */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, imageFile: e.target.files[0] }))
                    }
                  />
                  {editData.imageFile && (
                    <img
                      src={URL.createObjectURL(editData.imageFile)}
                      alt="preview"
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                  {!editData.imageFile && post.image && (
                    <img src={post.image} alt="existing" style={{ maxWidth: "100%" }} />
                  )}

                  {/* Video upload */}
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, videoFile: e.target.files[0] }))
                    }
                  />
                  {editData.videoFile && (
                    <video controls style={{ maxWidth: "100%" }}>
                      <source src={URL.createObjectURL(editData.videoFile)} />
                    </video>
                  )}
                  {!editData.videoFile && post.video && (
                    <video controls style={{ maxWidth: "100%" }}>
                      <source src={post.video} />
                    </video>
                  )}

                  <div>
                    <button onClick={() => handleEditSave(post.id)}>Save</button>
                    <button
                      onClick={() => setEditingPostId(null)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  {post.image && <img src={post.image} alt="post" style={{ maxWidth: "100%" }} />}
                  {post.video && (
                    <video controls style={{ maxWidth: "100%" }}>
                      <source src={post.video} />
                    </video>
                  )}
                  <small>{new Date(post.createdAt).toLocaleDateString()}</small>
                  <div style={{ marginTop: "5px" }}>
                    <button
                      onClick={() => {
                        setEditingPostId(post.id);
                        setEditData({
                          title: post.title,
                          content: post.content,
                          imageFile: null,
                          videoFile: null,
                          existingImage: post.image || "",
                          existingVideo: post.video || "",
                          showEmojiPicker: false,
                        });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
