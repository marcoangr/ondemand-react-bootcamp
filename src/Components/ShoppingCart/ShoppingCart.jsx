import React, { useContext } from "react";
import cart from "./../../images/shopping-cart.svg";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

import "./ShoppingCart.css";

export default function ShoppingCart() {
  const { itemsInCart } = useContext(ShoppingCartContext);

  return (
    <Link to="/cart" className="shopping-cart">
      <img src={cart} alt="shopping cart" />
      <div className="badge">{itemsInCart}</div>
    </Link>
  );
}
