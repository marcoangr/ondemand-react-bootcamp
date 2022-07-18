import React, { useState } from "react";
import "./slider-styles.css";
import { useGetData } from "../../utils/hooks/useGetData";
import BtnSlider from "./BtnSlider.jsx";
import Loader from "../Controls/Loader";

const Banners = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { data, isLoading } = useGetData();

  if (isLoading) {
    return <Loader />;
  }

  if (data === undefined) {
    return null;
  }

  const size = data.results.length;

  const prevSlide = () => {
    setSlideIndex(slideIndex > 1 ? slideIndex - 1 : size);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex !== size ? slideIndex + 1 : 1);
  };

  return (
    <div className="container-slider">
      {data.results.map((record, j) => (
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
        {Array.from({ length: size }).map((item, index) => (
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
