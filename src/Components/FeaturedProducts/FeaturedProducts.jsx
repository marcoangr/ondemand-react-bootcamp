import React from "react";
import "./FeaturedProducts.css";
import featuredProdData from "../../data/mocks/es-mx/featured-products.json";

function seeMore() {
  var hidenElements = document.querySelectorAll(".see-more-p");
  console.log(hidenElements);
  for (var i = 0; i < hidenElements.length; i++) {
    console.log(i);
    hidenElements[i].classList.remove("see-more-p");
  }

  document.getElementById("btn-see-more").style.display = "none";
}

export default function FeaturedProducts() {
  return (
    <div className="container">
      <h1>Best sellers</h1>
      <ul className="products">
        {featuredProdData.results.map((record, index) => (
          <li
            className={
              (window.innerWidth > 600 && index >= 3
                ? "see-more-p"
                : window.innerWidth < 600 && index >= 4
                ? "see-more-p"
                : "") + " card-p"
            }
            key={record.id}
          >
            <img
              src={record.data.mainimage.url + "&w=500&h=700"}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <h3>{record.data.name}</h3>
            <p className="price">{"$" + record.data.price}</p>
            <span className="category">{record.data.category.slug}</span>
            <button key={"btn-" + index}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button id={"btn-see-more"} className="btn-see-more" onClick={seeMore}>
        Ver mas
      </button>
    </div>
  );
}
