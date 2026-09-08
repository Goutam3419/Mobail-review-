
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReviewHub",
  description: "Honest Mobile, TV, Laptop & Fridge Reviews"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0F172A",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
          }
// Placeholder: layout.tsx
