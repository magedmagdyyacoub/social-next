export default function FriendSuggestions({ suggestedUsers, handleSendRequest, theme }) {
  const cardStyle = {
    marginTop: "15px",
    padding: "10px",
    background: theme === "dark" ? "#2a2a2a" : "#eee",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  if (!suggestedUsers || suggestedUsers.length === 0) return <p>No suggestions found</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Friend Suggestions</h2>
      {suggestedUsers.map(u => (
        <div key={u.id} style={cardStyle}>
          <span>{u.name || u.email}</span>
          <button
            style={{ padding: "6px 12px", background: "green", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}
            onClick={() => handleSendRequest(u.id)}
          >
            Send Request
          </button>
        </div>
      ))}
    </div>
  );
}
