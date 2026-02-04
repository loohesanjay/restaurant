import React from "react";

// Import local images
import paneer from "../assets/paneer.jpg";
import butterChicken from "../assets/butter-chicken.jpg";
import biryani from "../assets/biryani.jpg";
import gulabJamun from "../assets/gulabjamun.jpg"; // <-- match file name exactly
import masalaDosa from "../assets/masala-dosa.jpg";
  

const menuItems = [
  { name: "Paneer Butter Masala", price: 250, image: paneer },
  { name: "Butter Chicken", price: 300, image: butterChicken },
  { name: "Biryani", price: 280, image: biryani },
  { name: "Gulab Jamun", price: 100, image: gulabJamun },
  { name: "Masala Dosa", price: 150, image: masalaDosa },
];

function Menu({ addToCart }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <h2 style={{ color: "#ff6b6b", textAlign: "center" }}>🍛 Our Indian Menu</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "15px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              background: "linear-gradient(135deg, #ffe066, #ffd6a5)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="180"
              height="120"
              style={{
                borderRadius: "10px",
                marginBottom: "10px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ color: "#d00000" }}>{item.name}</h3>
            <p style={{ fontWeight: "bold" }}>₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              style={{
                backgroundColor: "#06d6a0",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
