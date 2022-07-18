import {
  API_PRODUCTDETAILS_URL,
  urlHandlingSearch,
} from "../../utils/api-urls";
import Loader from "../Controls/Loader";

import PropTypes from "prop-types";
import { useGetData } from "../../utils/hooks/useGetData";

export default function OrderSumaryCard({ productId = "", quantity = 0 }) {
  const { data, isLoading } = useGetData(
    urlHandlingSearch(API_PRODUCTDETAILS_URL, productId)
  );

  if (isLoading) {
    return <Loader />;
  }
  if (data[0] === undefined) {
    return null;
  }
  const {
    data: { mainimage, name, price },
  } = data[0];
  return (
    <div className="card-sumary">
      <div className="main-image">
        <img src={mainimage.url + "&w=500&h=700"} alt={""} />
      </div>
      <div className="main-data">
        <div className="col-1">
          <h4 className="title">{name}</h4>

          <span className="quantity">{"Product x " + quantity}</span>
          <hr />
          <span className="subtotal">
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
