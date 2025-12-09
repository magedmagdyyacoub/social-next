"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UploadReel() {
  const { user } = useContext(AuthContext);
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!user) return alert("Please login first!");

    if (!video) return alert("Select video first!");

    setLoading(true);

    const form = new FormData();
    form.append("video", video);
    form.append("caption", caption);
    form.append("userId", user.id);

    const res = await fetch("/api/reels/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Reel uploaded!");
      setVideo(null);
      setCaption("");
    } else {
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Reel</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files[0])}
      />

      <textarea
        placeholder="Write caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        style={{ width: "100%", marginTop: "10px" }}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "8px 20px",
          fontSize: "16px"
        }}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
