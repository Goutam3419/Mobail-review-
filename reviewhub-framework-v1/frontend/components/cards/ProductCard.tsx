type ProductCardProps = {
  name: string;
  price: string;
  rating: number;
  category: string;
};

export default function ProductCard({
  name,
  price,
  rating,
  category,
}: ProductCardProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: "22px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "200px",
          background: "linear-gradient(135deg,#00E5FF22,#111827)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "72px",
        }}
      >
        📱
      </div>

      <div style={{ padding: "20px" }}>
        <span style={{ color: "#00E5FF", fontSize: "14px" }}>
          {category}
        </span>

        <h3 style={{ margin: "10px 0" }}>{name}</h3>

        <p style={{ color: "#94A3B8" }}>⭐ {rating}/5</p>

        <h2 style={{ margin: "16px 0" }}>{price}</h2>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#00E5FF",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "12px",
          }}
        >
          Read Review
        </button>
      </div>
    </div>
  );
      }
