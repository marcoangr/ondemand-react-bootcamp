import React from "react";
import OrderSumaryCard from "./OrderSumaryCard";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";

export default function OrderSumary() {
  const { getTotalCart, cartItems } = useContext(ShoppingCartContext);
  const subTotal = getTotalCart();

  return (
    <>
      <h1>Order Sumary</h1>
      <div className="card-cart-container sumary">
        {cartItems?.map((item) => (
          <OrderSumaryCard
            key={"xartx-" + Math.random() * 10}
            productId={item.productId}
            quantity={item.quantity}
          />
        ))}
      </div>
      <span className="btn-subtotal">Total: ${subTotal}</span>
    </>
  );
}
