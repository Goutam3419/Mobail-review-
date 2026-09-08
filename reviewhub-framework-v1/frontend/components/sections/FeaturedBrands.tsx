const brands = [
  "Apple",
  "Samsung",
  "OnePlus",
  "Xiaomi",
  "LG",
  "Sony",
  "HP",
  "Dell",
];

export default function FeaturedBrands() {
  return (
    <section style={{ padding: "50px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>
          Top Brands
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
            gap: "16px",
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand}
              style={{
                background: "#1E293B",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "16px",
                padding: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }
