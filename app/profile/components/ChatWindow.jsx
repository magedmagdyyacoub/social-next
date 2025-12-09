"use client";

import { useEffect, useState, useRef } from "react";

export default function ChatWindow({ friend, user, chatId, onClose }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const lastMessageIdRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch(`/api/messages/${chatId}?afterId=${lastMessageIdRef.current || ""}`);
      if (!res.ok) return;
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setMessages((prev) => {
          const merged = [
            ...prev,
            ...data.filter((m) => !prev.some((msg) => msg.id === m.id)),
          ];
          return merged;
        });
        lastMessageIdRef.current = data[data.length - 1].id;
        scrollToBottom();
      }
    } catch (err) {
      console.error("Fetch messages error:", err);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId, content: newMessage }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Send message failed:", errText);
        return;
      }

      const msg = await res.json();
      setMessages((prev) => [...prev, msg]);
      lastMessageIdRef.current = msg.id;
      setNewMessage("");
      scrollToBottom();
    } catch (err) {
      console.error("Send message error:", err);
    }
  };

useEffect(() => {
  setMessages([]);              // فضي الرسائل عند تغيير الشات
  lastMessageIdRef.current = null;
  fetchMessages();              // هات الرسائل الخاصة بالشات ده
  const interval = setInterval(fetchMessages, 2000);
  return () => clearInterval(interval);
}, [chatId]);                   // مهم جداً


  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Chat with {friend.name || friend.email}</h3>
        {onClose && <button onClick={onClose}>X</button>}
      </div>

      <div style={{ maxHeight: 300, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.senderId === user?.id ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: msg.senderId === user?.id ? "#4caf50" : "#eee",
                color: msg.senderId === user?.id ? "#fff" : "#000",
                borderRadius: "15px",
                padding: "5px 10px",
              }}
            >
              {msg.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ display: "flex", gap: 5 }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type..."
          style={{ flex: 1, padding: 5 }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
