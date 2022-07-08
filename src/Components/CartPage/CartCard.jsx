import { useContext } from "react";
import PropTypes from "prop-types";
import { useProductDetails } from "../../utils/hooks/useProductDetails";
import Loader from "../Controls/Loader";
import Quantity from "../Controls/Quantity";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

export default function Cartcard({ productId = "", quantity = 0 }) {
  const { areLoadingDetails, productDetails } = useProductDetails(productId);
  const { removeFromCart } = useContext(ShoppingCartContext);

  if (areLoadingDetails) {
    return <Loader />;
  }

  return (
    <div className="card-cart">
      <div className="main-image">
        <img
          src={productDetails[0]?.data?.mainimage.url + "&w=500&h=700"}
          alt={""}
        />
      </div>
      <div className="main-data">
        <div className="col-1">
          <h4 className="title">{productDetails[0]?.data?.name}</h4>
          <span className="sku">SKU: {productDetails[0]?.data?.sku}</span>
          <span className="price">${productDetails[0]?.data?.price}</span>
        </div>

        <div className="col-2">
          <Quantity
            productId={productId}
            maxValue={productDetails[0]?.data?.stock}
            currentQuantity={quantity}
            parent="cart"
            unitPrice={productDetails[0]?.data?.price}
          />
          <p style={{ color: "gray", marginTop: "0px" }}>
            Stock available: {productDetails[0]?.data?.stock}
          </p>

          <span
            className="remove-btn"
            onClick={() => removeFromCart(productId)}
          >
            Remove product
          </span>
        </div>
      </div>
    </div>
  );
}

Cartcard.propTypes = {
  productId: PropTypes.string,
  quantity: PropTypes.number,
};
