import React from "react";
import leftArrow from "./../../images/left-arrow.svg";
import rightArrow from "./../../images/right-arrow.svg";
import PropTypes from "prop-types";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt={direction}
      />
    </button>
  );
};

BtnSlider.propTypes = {
  direction: PropTypes.string,
  moveSlide: PropTypes.func,
};
export default BtnSlider;
