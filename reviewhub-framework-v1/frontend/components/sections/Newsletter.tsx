export default function Newsletter() {
  return (
    <section
      style={{
        padding: "70px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#1E293B",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,.08)",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Never Miss a Review
        </h2>

        <p style={{ color: "#94A3B8", marginBottom: "30px" }}>
          Mobile, TV, Laptop aur Fridge ki latest reviews aur deals email par
          pao.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid #334155",
              background: "#0F172A",
              color: "#fff",
              minWidth: "260px",
              outline: "none",
            }}
          />

          <button
            style={{
              background: "#00E5FF",
              color: "#000",
              padding: "14px 24px",
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
