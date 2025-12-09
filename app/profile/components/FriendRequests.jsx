export default function FriendRequests({ friendRequests, handleAcceptRequest, handleRejectRequest, theme }) {
  const cardStyle = {
    marginTop: "15px",
    padding: "10px",
    background: theme === "dark" ? "#2a2a2a" : "#eee",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  if (!friendRequests || friendRequests.length === 0) return <p>No requests</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Incoming Friend Requests</h2>
      {friendRequests.map(r => (
        <div key={r.id} style={cardStyle}>
          <span>{r.fromName || "Unknown User"}</span>
          <div style={{ display: "flex", gap: "5px" }}>
            <button
              style={{ padding: "6px 12px", background: "green", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}
              onClick={() => handleAcceptRequest(r.id)}
            >
              Accept
            </button>
            <button
              style={{ padding: "6px 12px", background: "red", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}
              onClick={() => handleRejectRequest(r.id)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
