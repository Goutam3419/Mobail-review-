export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#0F172A",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <h2 style={{ color: "#00E5FF", margin: 0 }}>ReviewHub</h2>

        <input
          type="text"
          placeholder="Search Mobile, TV, Laptop..."
          style={{
            flex: 1,
            maxWidth: "500px",
            padding: "12px 16px",
            borderRadius: "12px",
            border: "1px solid #334155",
            background: "#1E293B",
            color: "white",
            outline: "none",
          }}
        />

        <button
          style={{
            background: "#00E5FF",
            color: "#000",
            padding: "10px 18px",
            fontWeight: "bold",
          }}
        >
          Menu
        </button>
      </div>
    </header>
  );
            }
