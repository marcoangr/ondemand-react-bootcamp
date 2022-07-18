import { useContext } from "react";
import PropTypes from "prop-types";
import { useGetData } from "../../utils/hooks/useGetData";
import Loader from "../Controls/Loader";
import Quantity from "../Controls/Quantity";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import {
  API_PRODUCTDETAILS_URL,
  urlHandlingSearch,
} from "../../utils/api-urls";

export default function Cartcard({ productId = "", quantity = 0 }) {
  const { data, isLoading } = useGetData(
    urlHandlingSearch(API_PRODUCTDETAILS_URL, productId)
  );

  const { removeFromCart } = useContext(ShoppingCartContext);

  if (data.results === undefined) {
    return null;
  }

  const {
    data: { name, sku, price, stock, mainimage },
  } = data.results[0];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="card-cart">
      <div className="main-image">
        <img src={mainimage.url + "&w=500&h=700"} alt={""} />
      </div>
      <div className="main-data">
        <div className="col-1">
          <h4 className="title">{name}</h4>
          <span className="sku">SKU: {sku}</span>
          <span className="price">${price}</span>
        </div>

        <div className="col-2">
          <Quantity
            productId={productId}
            maxValue={stock}
            currentQuantity={quantity}
            parent="cart"
            unitPrice={price}
          />
          <p className="stock" style={{ color: "gray", marginTop: "0px" }}>
            Stock available: {stock}
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
