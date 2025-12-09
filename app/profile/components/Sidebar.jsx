"use client";
import { FaPlus, FaUserFriends, FaChevronLeft, FaChevronRight, FaVideo } from "react-icons/fa";

export default function Sidebar({
  collapsed,
  setCollapsed,
  setShowForm,
  setShowReelForm,          // 👈 new prop for reels
  handleAddFriendsClick,
  handleShowFriendRequests,
  handleShowMyFriends,
  theme
}) {

  const styles = {
    sidebar: {
      width: collapsed ? "70px" : "220px",
      transition: "width 0.3s",
      padding: "20px 10px",
      background: theme === "dark" ? "#1e1e1e" : "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      borderRight: theme === "dark" ? "1px solid #333" : "1px solid #ccc",
      position: "sticky",
      top: 0,
      height: "100vh",
    },
    sidebarBtn: {
      display: "flex",
      alignItems: "center",
      gap: collapsed ? "0" : "10px",
      padding: "10px",
      background: theme === "dark" ? "#333" : "#ddd",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      justifyContent: collapsed ? "center" : "flex-start",
    },
    collapseBtn: {
      marginTop: "auto",
      padding: "6px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: theme === "dark" ? "#fff" : "#000",
    },
  };

  return (
    <div style={styles.sidebar}>
      {/* Create Post */}
      <button onClick={() => setShowForm(prev => !prev)} style={styles.sidebarBtn}>
        <FaPlus /> {!collapsed && <span>Create Post</span>}
      </button>

      {/* Create Reel */}
      <button onClick={() => setShowReelForm(prev => !prev)} style={styles.sidebarBtn}>
        <FaVideo /> {!collapsed && <span>Create Reel</span>}
      </button>

      {/* Friend Suggestions */}
      <button onClick={handleAddFriendsClick} style={styles.sidebarBtn}>
        <FaUserFriends /> {!collapsed && <span>Friend Suggestions</span>}
      </button>

      {/* Friend Requests */}
      <button onClick={handleShowFriendRequests} style={styles.sidebarBtn}>
        <FaUserFriends /> {!collapsed && <span>Friend Requests</span>}
      </button>

      {/* My Friends */}
      <button onClick={handleShowMyFriends} style={styles.sidebarBtn}>
        <FaUserFriends /> {!collapsed && <span>My Friends</span>}
      </button>

      {/* Collapse button */}
      <button onClick={() => setCollapsed(!collapsed)} style={styles.collapseBtn}>
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
}
