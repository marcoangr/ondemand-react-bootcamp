import PropTypes from "prop-types";

export default function ProductItem({ record }) {
  return (
    <div className={"card-p"} key={record.id}>
      <img
        src={record.data.mainimage.url + "&w=500&h=700"}
        alt="Denim Jeans"
        style={{ width: "100%" }}
      />
      <h3>{record.data.name}</h3>
      <p className="price">{"$" + record.data.price}</p>
      <span className="category">{record.data.category.slug}</span>
    </div>
  );
}

ProductItem.propTypes = {
  record: PropTypes.objectOf(PropTypes.shape),
};
