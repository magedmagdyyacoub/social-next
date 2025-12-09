"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useRouter } from "next/navigation";

// Components
import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";
import CreatePostForm from "./components/CreatePostForm";
import CreateReelForm from "./components/CreateReelForm"; // 👈 IMPORTED
import FriendSuggestions from "./components/FriendSuggestions";
import FriendRequests from "./components/FriendRequests";
import MyFriends from "./components/MyFriends";


export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [showReelForm, setShowReelForm] = useState(false); // 👈 separate state for reels
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFriendRequests, setShowFriendRequests] = useState(false);
  const [showMyFriends, setShowMyFriends] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [myFriends, setMyFriends] = useState([]);

  // Post states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  // Reel states
  const [caption, setCaption] = useState("");
  const [reelVideoFile, setReelVideoFile] = useState(null);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!user) router.push("/login");
    else {
      fetchSuggestions();
      fetchFriendRequests();
      fetchMyFriends();
    }
  }, [user]);

  if (!user) return null;

  const showTemporaryMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  // Fetching data
  const fetchSuggestions = async () => {
    try {
      const res = await fetch("/api/friends/suggestions");
      const data = await res.json();
      setSuggestedUsers(data.users || []);
    } catch (err) { console.error(err); }
  };

  const fetchFriendRequests = async () => {
    try {
      const res = await fetch("/api/friends/requests");
      const data = await res.json();
      setFriendRequests(data.requests || []);
    } catch (err) { console.error(err); }
  };

  const fetchMyFriends = async () => {
    try {
      const res = await fetch("/api/friends/list");
      const data = await res.json();
      setMyFriends(data.friends || []);
    } catch (err) { console.error(err); }
  };

  // Friend handlers
  const handleSendRequest = async (friendId) => {
    try {
      const res = await fetch("/api/friends/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ friendId })
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Failed to send friend request");
      alert("Friend request sent!");
      fetchSuggestions();
    } catch (err) { console.error("SEND REQUEST ERROR:", err); }
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      const res = await fetch("/api/friends/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId })
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Failed to accept request");
      alert("Friend request accepted!");
      fetchFriendRequests();
      fetchMyFriends();
    } catch (err) { console.error("ACCEPT REQUEST ERROR:", err); }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const res = await fetch("/api/friends/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId })
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Failed to reject request");
      alert("Request rejected!");
      fetchFriendRequests();
    } catch (err) { console.error("REJECT REQUEST ERROR:", err); }
  };

  // Create post
  const handleCreatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (imageFile) formData.append("image", imageFile);
    if (videoFile) formData.append("video", videoFile);

    const res = await fetch("/api/posts/create", { method: "POST", body: formData });
    const data = await res.json();

    if (res.ok) {
      setTitle(""); setContent(""); setImageFile(null); setVideoFile(null);
      showTemporaryMessage("Post Published!");
    } else setMessage(data.error || "Error");
  };

  // Create reel
  const handleCreateReel = async (e) => {
    e.preventDefault();
    if (!reelVideoFile) return alert("Please select a video.");

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("video", reelVideoFile);

    const res = await fetch("/api/reels/create", { method: "POST", body: formData });
    const data = await res.json();

    if (res.ok) {
      setCaption(""); setReelVideoFile(null);
      showTemporaryMessage("Reel Published!");
    } else setMessage(data.error || "Error publishing reel");
  };

  const onEmojiClick = (emojiData) => setContent(prev => prev + emojiData.emoji);

  const styles = {
    page: { display: "flex", minHeight: "100vh", background: theme === "dark" ? "#121212" : "#fff", color: theme === "dark" ? "#f1f1f1" : "#000" },
    main: { flex: 1, padding: "30px" },
    message: { marginTop: "15px", color: "green" },
  };

  return (
    <div style={styles.page}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setShowForm={setShowForm}
        setShowReelForm={setShowReelForm} // 👈 pass reel toggle
        handleAddFriendsClick={() => setShowSuggestions(!showSuggestions)}
        handleShowFriendRequests={() => setShowFriendRequests(!showFriendRequests)}
        handleShowMyFriends={() => setShowMyFriends(!showMyFriends)}
        theme={theme}
      />

      <div style={styles.main}>
        <h1>Your Profile</h1>
        <UserInfo user={user} theme={theme} />

        {showUpdateProfile && <UpdateProfile user={user} theme={theme} />}

        {/* Create Post Form */}
        <CreatePostForm
          showForm={showForm}
          title={title} setTitle={setTitle}
          content={content} setContent={setContent}
          imageFile={imageFile} setImageFile={setImageFile}
          videoFile={videoFile} setVideoFile={setVideoFile}
          showEmojiPicker={showEmojiPicker} setShowEmojiPicker={setShowEmojiPicker}
          handleCreatePost={handleCreatePost}
          theme={theme}
          onEmojiClick={onEmojiClick}
        />

        {/* Create Reel Form */}
        <CreateReelForm
          showForm={showReelForm}
          caption={caption} setCaption={setCaption}
          videoFile={reelVideoFile} setVideoFile={setReelVideoFile}
          showEmojiPicker={showEmojiPicker} setShowEmojiPicker={setShowEmojiPicker}
          handleCreateReel={handleCreateReel}
          onEmojiClick={(emoji) => setCaption(prev => prev + emoji.emoji)}
          theme={theme}
        />

        {message && <p style={styles.message}>{message}</p>}

        {showSuggestions && <FriendSuggestions suggestedUsers={suggestedUsers} handleSendRequest={handleSendRequest} theme={theme} />}
        {showFriendRequests && <FriendRequests friendRequests={friendRequests} handleAcceptRequest={handleAcceptRequest} handleRejectRequest={handleRejectRequest} theme={theme} />}
        {showMyFriends && <MyFriends myFriends={myFriends} theme={theme} user={user} />}
      </div>
    </div>
  );
}
