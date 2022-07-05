import React, { useState } from "react";
import PropTypes from "prop-types";

const Quantity = ({ maxValue }) => {
  const [value, setValue] = useState(1);

  function increment() {
    setValue(value < maxValue ? value + 1 : value);
  }

  function decrement() {
    setValue(value > 0 ? value - 1 : 0);
  }

  return (
    <div>
      <button
        className="quantity-input__modifier quantity-input__modifier--left"
        onClick={decrement}
      >
        &mdash;
      </button>
      <input
        className="quantity-input__screen"
        type="text"
        value={value}
        readOnly
      />
      <button
        className="quantity-input__modifier quantity-input__modifier--right"
        onClick={increment}
      >
        &#xff0b;
      </button>
    </div>
  );
};

Quantity.propTypes = {
  maxValue: PropTypes.number,
};
export default Quantity;
