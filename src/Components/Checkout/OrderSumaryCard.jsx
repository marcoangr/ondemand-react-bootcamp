import { useProductDetails } from "../../utils/hooks/useProductDetails";
import Loader from "../Controls/Loader";

import PropTypes from "prop-types";

export default function OrderSumaryCard({ productId = "", quantity = 0 }) {
  const { areLoadingDetails, productDetails } = useProductDetails(productId);

  if (areLoadingDetails) {
    return <Loader />;
  }

  return (
    <div className="card-sumary">
      <div className="main-image">
        <img
          src={productDetails[0]?.data?.mainimage.url + "&w=500&h=700"}
          alt={""}
        />
      </div>
      <div className="main-data">
        <div className="col-1">
          <h4 className="title">{productDetails[0]?.data?.name}</h4>

          <span>{"Products(" + quantity + ")"}</span>
          <hr />
          <span>
            {"SubTotal: $" +
              Number.parseFloat(
                quantity * productDetails[0]?.data?.price
              ).toFixed(2)}
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
