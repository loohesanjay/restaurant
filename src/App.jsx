import React, { useState } from "react";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#fff5f3", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#d00000", textAlign: "center", marginBottom: "20px" }}>🇮🇳 My Indian Restaurant</h1>
      <Menu addToCart={addToCart} />
      <Booking cart={cart} />
      <Gallery />
    </div>
  );
}

export default App;
