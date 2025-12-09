"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function CreateReelForm({
  showForm,
  caption, setCaption,
  videoFile, setVideoFile,
  showEmojiPicker, setShowEmojiPicker,
  handleCreateReel,
  onEmojiClick,
  theme,
}) {
  const styles = {
    container: {
      display: showForm ? "block" : "none",
      marginTop: "20px",
      padding: "15px",
      border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
      borderRadius: "8px",
      background: theme === "dark" ? "#1e1e1e" : "#fafafa",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
      background: theme === "dark" ? "#2c2c2c" : "#fff",
      color: theme === "dark" ? "#f1f1f1" : "#000",
    },
    button: {
      padding: "10px 15px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      marginRight: "10px",
      background: theme === "dark" ? "#4caf50" : "#0070f3",
      color: "#fff",
    },
    emojiButton: {
      cursor: "pointer",
      background: "transparent",
      border: "none",
      fontSize: "20px",
      marginRight: "10px",
    },
    videoPreview: {
      width: "100%",
      maxHeight: "300px",
      marginBottom: "10px",
      borderRadius: "8px",
    }
  };

  return (
    <div style={styles.container}>
      <h3>Create Reel</h3>
      <form onSubmit={handleCreateReel}>
        <textarea
          style={styles.input}
          placeholder="Add a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        {showEmojiPicker && (
          <Picker
            onEmojiClick={(emoji) => onEmojiClick(emoji)}
            theme={theme === "dark" ? "dark" : "light"}
          />
        )}

        <div style={{ marginBottom: "10px" }}>
          <button
            type="button"
            style={styles.emojiButton}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊
          </button>

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
        </div>

        {videoFile && (
          <video
            style={styles.videoPreview}
            src={URL.createObjectURL(videoFile)}
            controls
          />
        )}

        <div>
          <button type="submit" style={styles.button}>Publish Reel</button>
        </div>
      </form>
    </div>
  );
}
