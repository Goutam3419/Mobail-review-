export default function Hero() {
  return (
    <section
      style={{
        padding: "70px 20px",
        background:
          "linear-gradient(180deg,#0F172A 0%, #111827 60%, #0F172A 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              background: "#00E5FF22",
              color: "#00E5FF",
              padding: "8px 14px",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            ⭐ #1 Tech Review Website
          </span>

          <h1
            style={{
              fontSize: "56px",
              marginTop: "20px",
              lineHeight: "1.1",
            }}
          >
            Honest Reviews Before You Buy
          </h1>

          <p
            style={{
              marginTop: "20px",
              color: "#94A3B8",
              fontSize: "18px",
            }}
          >
            Mobile, TV, Laptop, Fridge aur har gadget ki detailed review aur
            price comparison.
          </p>

          <div style={{ display: "flex", gap: "16px", marginTop: "30px" }}>
            <button
              style={{
                background: "#00E5FF",
                color: "#000",
                padding: "14px 24px",
                fontWeight: "bold",
              }}
            >
              Explore Reviews
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #334155",
                padding: "14px 24px",
              }}
            >
              Compare Products
            </button>
          </div>
        </div>

        <div
          style={{
            background: "#1E293B",
            borderRadius: "28px",
            padding: "30px",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div
            style={{
              height: "340px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg,#00E5FF33,#1E293B,#0F172A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "90px",
            }}
          >
            📱
          </div>

          <h3 style={{ marginTop: "20px" }}>Samsung Galaxy S25 Ultra</h3>

          <p style={{ color: "#94A3B8" }}>
            ⭐ 4.9/5 · Camera · Battery · Performance
          </p>
        </div>
      </div>
    </section>
  );
}
