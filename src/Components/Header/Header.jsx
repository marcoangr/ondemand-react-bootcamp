import React from "react";
import logo from "./../../images/logo-store.svg";
import cart from "./../../images/shopping-cart.svg";
import "./../../styles/header-styles.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Grovee's Store" />
      <form className="search">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit" className="btnSearch">
          <i className="fa fa-search" />
        </button>
      </form>
      <img src={cart} alt="shopping cart" />
    </header>
  );
};

export default Header;
