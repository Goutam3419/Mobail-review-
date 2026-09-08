const categories = [
  { icon: "📱", name: "Mobile" },
  { icon: "📺", name: "TV" },
  { icon: "💻", name: "Laptop" },
  { icon: "❄️", name: "Fridge" },
  { icon: "🧺", name: "Washing Machine" },
  { icon: "❄️", name: "AC" },
];

export default function Categories() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "30px", fontSize: "32px" }}>
          Browse Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "20px",
          }}
        >
          {categories.map((item) => (
            <div
              key={item.name}
              style={{
                background: "#1E293B",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px" }}>{item.icon}</div>
              <h3 style={{ marginTop: "12px" }}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
