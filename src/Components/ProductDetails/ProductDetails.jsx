import React, { useState } from "react";
import { useGetData } from "../../utils/hooks/useGetData";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import Quantity from "../Controls/Quantity";
import Loader from "../Controls/Loader";
import {
  API_PRODUCTDETAILS_URL,
  urlHandlingSearch,
} from "../../utils/api-urls";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function ProductDetails() {
  const { productId } = useParams();
  const { data, isLoading } = useGetData(
    urlHandlingSearch(API_PRODUCTDETAILS_URL, productId)
  );
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (isLoading) {
    return <Loader />;
  }

  if (data[0] === undefined) {
    return null;
  }

  const {
    id,
    tags,
    data: { images, name, sku, price, category, stock, description },
  } = data[0];
  return (
    <>
      <div className="slider-thumbnail">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={5}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="thumbnail"
          direction={"vertical"}
        >
          {images.map((item) => {
            return (
              <SwiperSlide key={Math.random() * 100}>
                <img
                  className="thumbnail-image"
                  src={item.image.url + "&w=700&h=700"}
                  alt={""}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {images?.map((item) => {
            return (
              <SwiperSlide key={Math.random() * 100}>
                <img
                  className="main-image"
                  src={item.image.url + "&w=700&h=700"}
                  alt={""}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="small-div">
          <h2 className="title">{name}</h2>
          <span className="sku">SKU: {sku}</span>
          <span className="price">${price}</span>
          <hr />
          <span className="category-2">
            <b>Category {">"} </b>
            {category.slug}
          </span>
          <hr />
          <div>
            {tags.map((tag) => (
              <a key={"tag-" + tag} className="tag" href="!">
                {tag}
              </a>
            ))}
          </div>
          <p style={{ color: "gray" }}>Stock available: {stock}</p>

          <Quantity
            maxValue={stock}
            productId={id}
            parent={"details"}
            unitPrice={price}
          />
        </div>
      </div>
      <div className="container">
        <span className="label">Description</span>

        <p
          style={{
            textAlign: "left",
            margin: "auto",
            fontSize: "16px",
          }}
        >
          {description[0]?.text}
        </p>
        <hr />
        <span className="label"> Specifications</span>
        <table className="specs">
          <tbody>
            {data[0].data.specs?.map((spec) => (
              <tr key={"sp-" + spec.spec_name}>
                <td className="spec-name">{spec.spec_name}</td>
                <td>{spec.spec_value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
