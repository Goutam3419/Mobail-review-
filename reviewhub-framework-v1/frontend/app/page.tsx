
export default function HomePage() {
  return (
    <main>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #1E293B",
        }}
      >
        <h2>ReviewHub</h2>
        <span>Search</span>
      </header>

      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>
          Honest Electronics Reviews
        </h1>

        <p style={{ color: "#CBD5E1" }}>
          Mobile • TV • Laptop • Fridge • Price Comparison
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "14px 28px",
            borderRadius: "12px",
            background: "#00E5FF",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore Reviews
        </button>
      </section>
    </main>
  );
        }
                   // Placeholder: page.tsx
