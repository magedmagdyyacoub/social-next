"use client";

import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function MyFriends({ myFriends, theme, user }) {
  const [openChats, setOpenChats] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const openChat = async (friend) => {
    const res = await fetch("/api/messages/get-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ friendId: friend.id }),
    });
    const data = await res.json();
    if (data.chatId) {
      setOpenChats((prev) => {
        if (prev.some((c) => c.chatId === data.chatId)) return prev;
        return [...prev, { friend, chatId: data.chatId }];
      });
      setActiveTab(data.chatId); // افتح التاب الجديد مباشرة
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My Friends</h2>

      {myFriends.map((f) => (
        <div
          key={f.id}
          style={{
            marginTop: "10px",
            padding: "8px",
            background: theme === "dark" ? "#2a2a2a" : "#eee",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => openChat(f.friend)}
        >
          <span>{f.friend.name || f.friend.email}</span>
        </div>
      ))}

      {openChats.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            {openChats.map((chat) => (
              <div
                key={chat.chatId}
                onClick={() => setActiveTab(chat.chatId)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  background: activeTab === chat.chatId ? "#4caf50" : "#ccc",
                  color: activeTab === chat.chatId ? "#fff" : "#000",
                }}
              >
                {chat.friend.name || chat.friend.email}
                <button
                  style={{ marginLeft: "5px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenChats((prev) =>
                      prev.filter((c) => c.chatId !== chat.chatId)
                    );
                    if (activeTab === chat.chatId) setActiveTab(null);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* Active Chat Window فقط */}
          {activeTab && (
            <ChatWindow
              key={activeTab} // مهم علشان يفصل الـ state
              friend={openChats.find((c) => c.chatId === activeTab)?.friend}
              user={user}
              chatId={activeTab}
              onClose={() =>
                setOpenChats((prev) =>
                  prev.filter((c) => c.chatId !== activeTab)
                )
              }
            />
          )}
        </div>
      )}
    </div>
  );
}
