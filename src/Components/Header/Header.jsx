import React from "react";
import cart from "./../../images/shopping-cart.svg";
import "./header-styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  function handleSearch() {
    console.log("searching");
  }

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
          <button type="submit" className="btnSearch" onSubmit={handleSearch}>
            <i className="fa fa-search" />
          </button>
        </form>
      </div>

      <div className="col-cart">
        <Link to="/">
          <img src={cart} alt="shopping cart" className="cart" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
