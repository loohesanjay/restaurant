import React from "react";

import paneer from "../assets/paneer.jpg";
import butterChicken from "../assets/butter-chicken.jpg";
import biryani from "../assets/biryani.jpg";
import gulabJamun from "../assets/gulabjamun.jpg"; // <-- match your file name exactly
import masalaDosa from "../assets/masala-dosa.jpg";


const images = [paneer, butterChicken, biryani, gulabJamun, masalaDosa];

function Gallery() {
  return (
    <div style={{ margin: "30px 0" }}>
      <h2 style={{ color: "#ff6b6b", textAlign: "center" }}>📸 Gallery</h2>
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            width="400"
            height="250"
            style={{
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
