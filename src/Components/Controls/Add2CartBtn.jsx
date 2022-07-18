import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import PropTypes from "prop-types";

export default function Add2CartBtn({ productId, quantity = 1, price }) {
  return (
    <ShoppingCartContext.Consumer>
      {(props) => (
        <button
          className="add-to-cart-btn"
          onClick={() => {
            props.onAdd({ productId, quantity, unitPrice: price });
          }}
        >
          Add to cart
        </button>
      )}
    </ShoppingCartContext.Consumer>
  );
}

Add2CartBtn.propTypes = {
  productId: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
};
