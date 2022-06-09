import React from "react";
import "./../../styles/slider-styles.css";
import leftArrow from "./../../images/left-arrow.svg";
import rightArrow from "./../../images/right-arrow.svg";

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

export default BtnSlider;
