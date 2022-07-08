import Banners from "./../Banner/Banners.jsx";
import Categories from "./../Categories/Categories.jsx";
import FeaturedProducts from "./../FeaturedProducts/FeaturedProducts.jsx";
import { useFeaturedProducts } from "./../../utils/hooks/useFeaturedProducts";
import Loader from "../Controls/Loader.jsx";

function HomePage() {
  const { dataFeaturedProd, isLoadingFeaturedProd } = useFeaturedProducts();

  return (
    <>
      <Banners />
      <Categories />
      {!isLoadingFeaturedProd ? (
        <FeaturedProducts data={dataFeaturedProd?.results} parent={"home"} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HomePage;
