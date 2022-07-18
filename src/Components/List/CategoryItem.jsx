import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CategoryItem({ record }) {
  const {
    data: { main_image, name },
  } = record;
  return (
    <div className="column">
      <img
        className="card"
        src={main_image.url.replace(/(&w=([0-9]+&h=[0-9]+))/g, "&w=180&h=120")}
        alt={""}
      />
      <div id="title">
        <Link className="link" to={"/products?category=" + name}>
          {name}
        </Link>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  record: PropTypes.objectOf(PropTypes.shape),
};
