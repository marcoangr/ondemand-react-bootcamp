import React, { useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = React.createContext("shopping-cart");

export function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const itemsInCart = cartItems.length;

  const onAdd = (product) => {
    const exist = cartItems.find(
      (item) => item.productId === product.productId
    );
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.productId
            ? { ...exist, quantity: exist.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(
      (item) => item.productId === product.productId
    );
    if (exist?.quantity === 1) {
      setCartItems(
        cartItems.filter((item) => item.productId !== product.productId)
      );
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.productId
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  const getSubtotalProd = (product) => {
    const exist = cartItems.find(
      (item) => item.productId === product.productId
    );

    return exist?.quantity * exist?.unitPrice;
  };

  const getTotalCart = () => {
    let total = 0;
    cartItems.forEach(
      (item) => (total = total + item.quantity * item.unitPrice)
    );
    return Number.parseFloat(total).toFixed(2);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        setCartItems,
        cartItems,
        removeFromCart,
        onAdd,
        onRemove,
        getSubtotalProd,
        getTotalCart,
        itemsInCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartContext.propTypes = {
  children: PropTypes.element,
};
