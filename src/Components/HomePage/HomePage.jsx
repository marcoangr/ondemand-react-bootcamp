import Banners from "./../Banner/Banners.jsx";
import Categories from "./../Categories/Categories.jsx";
import FeaturedProducts from "./../FeaturedProducts/FeaturedProducts.jsx";
import { useGetData } from "../../utils/hooks/useGetData";
import Loader from "../Controls/Loader.jsx";
import { API_FEATUREDBANNERS_URL } from "./../../utils/api-urls";

function HomePage() {
  const { data, isLoading } = useGetData(API_FEATUREDBANNERS_URL);

  return (
    <>
      <Banners />
      <Categories />
      {!isLoading ? (
        <FeaturedProducts data={data?.results} parent={"home"} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HomePage;
