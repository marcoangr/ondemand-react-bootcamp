import React, { useState } from "react";
import { useProductDetails } from "../../utils/hooks/useProductDetails";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import Quantity from "../Controls/Quantity";
import Loader from "../Controls/Loader";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function ProductDetails() {
  const { productId } = useParams();
  const { productDetails, areLoadingDetails } = useProductDetails(productId);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (areLoadingDetails) {
    return <Loader />;
  }

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
          {productDetails[0]?.data?.images?.map((item) => {
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
          {productDetails[0]?.data?.images?.map((item) => {
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
          <h2 className="title">{productDetails[0]?.data?.name}</h2>
          <span className="sku">SKU: {productDetails[0]?.data?.sku}</span>
          <span className="price">${productDetails[0]?.data?.price}</span>
          <hr />
          <span className="category-2">
            <b>Category {">"} </b>
            {productDetails[0]?.data?.category.slug}
          </span>
          <hr />
          <div>
            {productDetails[0]?.tags.map((tag) => (
              <a key={"tag-" + tag} className="tag" href="!">
                {tag}
              </a>
            ))}
          </div>
          <p style={{ color: "gray" }}>
            Stock available: {productDetails[0]?.data?.stock}
          </p>

          <Quantity
            maxValue={productDetails[0]?.data?.stock}
            productId={productDetails[0]?.id}
            parent={"details"}
            unitPrice={productDetails[0]?.data?.price}
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
          {productDetails[0]?.data?.description[0]?.text}
        </p>
        <hr />
        <span className="label"> Specifications</span>
        <table className="specs">
          <tbody>
            {productDetails[0]?.data?.specs?.map((spec) => (
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
