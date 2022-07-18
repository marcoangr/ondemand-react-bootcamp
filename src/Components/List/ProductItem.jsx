import PropTypes from "prop-types";

export default function ProductItem({ record }) {
  const {
    id,
    data: { mainimage, name, price, category },
  } = record;
  return (
    <div className={"card-p"} key={id}>
      <img
        src={mainimage.url + "&w=500&h=700"}
        alt="Denim Jeans"
        style={{ width: "100%" }}
      />
      <h3>{name}</h3>
      <p className="price">{"$" + price}</p>
      <span className="category">{category.slug}</span>
    </div>
  );
}

ProductItem.propTypes = {
  record: PropTypes.objectOf(PropTypes.shape),
};
