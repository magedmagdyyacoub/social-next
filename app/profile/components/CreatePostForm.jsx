"use client";

import dynamic from "next/dynamic";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function CreatePostForm({
  showForm,
  title,
  setTitle,
  content,
  setContent,
  imageFile,
  setImageFile,
  videoFile,
  setVideoFile,
  showEmojiPicker,
  setShowEmojiPicker,
  handleCreatePost,
  theme,
  onEmojiClick
}) {
  if (!showForm) return null;

  const styles = {
    form: {
      marginTop: "20px",
      padding: "20px",
      background: theme === "dark" ? "#1e1e1e" : "#f7f7f7",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      background: theme === "dark" ? "#2b2b2b" : "#fff",
    },
    textarea: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      background: theme === "dark" ? "#2b2b2b" : "#fff",
    },
    submitBtn: {
      padding: "8px",
      background: "green",
      color: "#fff",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
    },
    emojiBtn: {
      padding: "6px 12px",
      background: "#ffecb3",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <form onSubmit={handleCreatePost} style={styles.form} encType="multipart/form-data">
      <input
        type="text"
        placeholder="Post title"
        style={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows={4}
        placeholder="Write something..."
        style={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        type="button"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        style={styles.emojiBtn}
      >
        {showEmojiPicker ? "Close Emojis" : "Add Emoji"}
      </button>

      {showEmojiPicker && (
        <Picker
          onEmojiClick={onEmojiClick}
          theme={theme === "dark" ? "dark" : "light"}
        />
      )}

      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
      <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files[0])} />

      <button type="submit" style={styles.submitBtn}>Publish</button>
    </form>
  );
}
