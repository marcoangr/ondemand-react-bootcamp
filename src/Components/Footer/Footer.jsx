import React from "react";

const footerStyle = {
  maxWidth: "1024px",
  width: "100%",
  backgroundColor: "black",
  margin: "auto",
  fontSize: "17px",
  color: "white",
  padding: "20px",
  fontWeight: "700",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <span>Ecommerce created during Wizeline’s Academy React Bootcamp</span>
    </footer>
  );
};

export default Footer;
