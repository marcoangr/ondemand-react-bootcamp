import React, { useState } from "react";
import PropTypes from "prop-types";
import Add2CartItem from "./../Controls/Add2CartBtn";

import { useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

const Quantity = ({
  unitPrice = 0,
  maxValue,
  productId,
  parent,
  currentQuantity = -1,
}) => {
  const { onAdd, onRemove } = useContext(ShoppingCartContext);

  const [quantity, setQuantity] = useState(
    currentQuantity !== -1 ? currentQuantity : 1
  );

  function increment() {
    setQuantity(quantity < maxValue ? quantity + 1 : quantity);
    if (parent === "cart") {
      onAdd({ productId, quantity: 1, unitPrice });
    }
  }

  function decrement() {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
    if (parent === "cart") {
      onRemove({ productId, quantity: 1, unitPrice });
    }
  }

  return (
    <>
      <div className="quantity-control">
        <label htmlFor="quantity">{"Quantity: "}</label>

        <button
          className="quantity-input__modifier quantity-input__modifier--left"
          onClick={decrement}
        >
          -
        </button>
        <input
          className="quantity-input__screen"
          type="text"
          value={quantity}
          readOnly
        />
        <button
          className="quantity-input__modifier quantity-input__modifier--right"
          onClick={increment}
        >
          +
        </button>
      </div>
      <h4>Subtotal: ${unitPrice * quantity}</h4>
      {maxValue > 0 && parent === "details" && (
        <Add2CartItem
          productId={productId}
          quantity={quantity}
          price={unitPrice}
        />
      )}
    </>
  );
};

Quantity.propTypes = {
  maxValue: PropTypes.number,
  unitPrice: PropTypes.number,
  productId: PropTypes.string,
  parent: PropTypes.string,
  currentQuantity: PropTypes.number,
};
export default Quantity;
