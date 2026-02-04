import React, { useState } from "react";

function Booking({ cart }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(
      `Table booked successfully for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.\nTotal Order Cost: ₹${total}`
    );
    setFormData({ name: "", email: "", date: "", time: "", guests: "" });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ margin: "30px 0", textAlign: "center" }}>
      <h2 style={{ color: "#ff6b6b" }}>📝 Book a Table</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "0 auto",
          gap: "10px",
          background: "#fff3e0",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required />
        <p style={{ fontWeight: "bold", color: "#d00000" }}>Total Selected Items: ₹{total}</p>
        <button
          type="submit"
          style={{
            backgroundColor: "#ff6b6b",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;
