import React, { useState } from "react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+2347013771792"; // Replace with your number
  const message = encodeURIComponent("Hello, I need more information!");

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "WhatsAppChat", "width=400,height=600");
  };

  return (
    <div>
      {/* Floating WhatsApp Button */}
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#ff4000",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          fontSize: "24px",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
       💬
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <p>Chat with us on WhatsApp!</p>
          <button
            onClick={openWhatsApp}
            style={{
              backgroundColor: "#ff4000",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Open Chat
          </button>
          <span
            onClick={() => setIsOpen(false)}
            style={{
              display: "block",
              marginTop: "10px",
              cursor: "pointer",
              color: "red",
            }}
          >
            ✖ Close
          </span>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
