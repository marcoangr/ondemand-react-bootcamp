import React from "react";
import "./header-styles.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Header = () => {
  return (
    <header className="header">
      <div className="col-logo">
        <Link to="/" className="commpany-name">
          Grovee's Store
        </Link>
      </div>
      <div className="col-search">
        <form className="search" action="/search">
          <input type="text" placeholder="Search.." name="q" />
          <button type="submit" className="btnSearch">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>

      <div className="col-cart">
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
