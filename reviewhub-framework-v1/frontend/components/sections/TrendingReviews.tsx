import ProductCard from "@/components/cards/ProductCard";

const products = [
  {
    name: "Samsung Galaxy S25 Ultra",
    price: "₹74,999",
    rating: 4.9,
    category: "Mobile",
  },
  {
    name: "LG OLED Smart TV",
    price: "₹89,999",
    rating: 4.8,
    category: "TV",
  },
  {
    name: "MacBook Air M4",
    price: "₹1,09,999",
    rating: 4.9,
    category: "Laptop",
  },
];

export default function TrendingReviews() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Trending Reviews
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
                     }
