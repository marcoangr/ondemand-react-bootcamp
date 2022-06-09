import React, { useState } from "react";
import "./../../styles/slider-styles.css";
import BtnSlider from "./BtnSlider.jsx";

const Banners = (props) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex);
    } else if (slideIndex === 0) {
      setSlideIndex(props.size);
    }
  };

  const nextSlide = () => {
    if (slideIndex !== props.size) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === props.size) {
      setSlideIndex(1);
    }
  };

  return (
    <div className="container-slider">
      {props.results.map((record, j) => (
        <div
          className={slideIndex === j + 1 ? "slide active-anim" : "slide"}
          key={record.id}
        >
          <img
            src={record.data.main_image.url.replace(
              /(&w=([0-9]+&h=[0-9]+))/g,
              "&w=700&h=300"
            )}
            alt={record.data.main_image.alt}
          />
          <div className="overlay">{record.data.title}</div>
        </div>
      ))}
      ;
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: props.size }).map((item, index) => (
          <div
            key={"d-" + index}
            className="dot"
            onClick={() => {
              setSlideIndex(index + 1);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banners;
