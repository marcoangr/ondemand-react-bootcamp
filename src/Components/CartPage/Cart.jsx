import Cartcard from "./CartCard";
import cart from "./../../images/shopping-cart.svg";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { getTotalCart, cartItems } = useContext(ShoppingCartContext);
  const subTotal = getTotalCart();

  if (cartItems?.length === 0) {
    return (
      <div className="empty-shopping-cart">
        <img src={cart} alt="empty cart" />
        <h2>Your Shopping cart is empty</h2>
        <p>
          Once you have added items in your cart, you can check out from here.
        </p>
        <Link to="/products" id={"btn-see-all"} className="btn-see-all">
          See all products
        </Link>
      </div>
    );
  }

  return (
    <div className="card-cart-container">
      {cartItems?.map((item) => (
        <Cartcard
          key={"xartx-" + Math.random() * 10}
          productId={item.productId}
          quantity={item.quantity}
        />
      ))}
      <span className="btn-subtotal">Subtotal: ${subTotal}</span>
      <Link to='/checkout' className="btn-buy">Buy</Link>
    </div>
  );
}
