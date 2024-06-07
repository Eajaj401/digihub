// components/PopupForm.js
import React, { useState } from "react";

const PopupForm = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      onClose();
    } else {
      alert("Error submitting the form.");
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h2>Please fill the form</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <span>Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="inputs">
            <span>Email</span>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="inputs">
            <span>Phone</span>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="inputs">
            <span>Message</span>
            <textarea
              cols="30"
              rows="10"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="button-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
