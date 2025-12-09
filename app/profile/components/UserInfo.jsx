export default function UserInfo({ user, theme }) {
  return (
    <div style={{
      padding: "20px",
      background: theme === "dark" ? "#1e1e1e" : "#eee",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
      <p><strong>Name:</strong> {user.name || "No Name"}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
