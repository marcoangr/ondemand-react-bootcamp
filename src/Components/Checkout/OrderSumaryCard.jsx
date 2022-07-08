import { useProductDetails } from "../../utils/hooks/useProductDetails";
import Loader from "../Controls/Loader";

import PropTypes from "prop-types";

export default function OrderSumaryCard({ productId = "", quantity = 0 }) {
  const { areLoadingDetails, productDetails } = useProductDetails(productId);

  if (areLoadingDetails) {
    return <Loader />;
  }
  if (productDetails[0] === undefined) {
    return null;
  }
  const {
    data: { mainimage, name, price },
  } = productDetails[0];
  return (
    <div className="card-sumary">
      <div className="main-image">
        <img src={mainimage.url + "&w=500&h=700"} alt={""} />
      </div>
      <div className="main-data">
        <div className="col-1">
          <h4 className="title">{name}</h4>

          <span>{"Products(" + quantity + ")"}</span>
          <hr />
          <span>
            {"SubTotal: $" + Number.parseFloat(quantity * price).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

OrderSumaryCard.propTypes = {
  productId: PropTypes.string,
  quantity: PropTypes.number,
};
