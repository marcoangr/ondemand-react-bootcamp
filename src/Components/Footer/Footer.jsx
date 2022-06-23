import React from "react";

const footerStyle = {
  width: "100%",
  backgroundColor: "black",
  margin: "auto",
  fontSize: "17px",
  color: "white",
  padding: "50px",
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
