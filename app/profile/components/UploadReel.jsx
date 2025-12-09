"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UploadReel({ onUpload }) {
  const { user } = useContext(AuthContext);
  const [videoFile, setVideoFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("video/")) return alert("File must be a video");
    setVideoFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!videoFile) return alert("Select a video first");
    if (!user) return alert("Login first");

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("video", videoFile);
      formData.append("userId", user.id);
      formData.append("caption", caption);

      const res = await fetch("/api/reels/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("Reel uploaded successfully!");
        setVideoFile(null);
        setCaption("");
        setPreviewUrl("");
        if (onUpload) onUpload(); // refresh reels feed
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Upload a Reel</h3>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        rows={2}
        style={{ width: "100%", marginTop: "10px", padding: "6px" }}
      />
      {previewUrl && (
        <video src={previewUrl} controls style={{ width: "100%", marginTop: "10px" }} />
      )}
      <button
        onClick={handleUpload}
        disabled={uploading || !videoFile}
        style={{ marginTop: "10px", padding: "8px", background: "#0070f3", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}
      >
        {uploading ? "Uploading..." : "Upload Reel"}
      </button>
    </div>
  );
}
