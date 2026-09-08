export default function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        borderTop: "1px solid rgba(255,255,255,.08)",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
        }}
      >
        <div>
          <h2 style={{ color: "#00E5FF" }}>ReviewHub</h2>
          <p style={{ color: "#94A3B8", marginTop: "12px" }}>
            Honest reviews for Mobile, TV, Laptop, Fridge and other gadgets.
          </p>
        </div>

        <div>
          <h3>Categories</h3>
          <p>Mobile</p>
          <p>TV</p>
          <p>Laptop</p>
          <p>Fridge</p>
        </div>

        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "16px",
          borderTop: "1px solid rgba(255,255,255,.08)",
          color: "#94A3B8",
        }}
      >
        © 2026 ReviewHub. All Rights Reserved.
      </div>
    </footer>
  );
        }
