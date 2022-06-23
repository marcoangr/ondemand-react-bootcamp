import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import Banners from "./../Banner/Banners.jsx";
import Categories from "./../Categories/Categories.jsx";
import bannersData from "./../../data/mocks/es-mx/featured-banners.json";
import FeaturedProducts from "./../FeaturedProducts/FeaturedProducts.jsx";
import featuredProdData from "../../data/mocks/es-mx/featured-products.json";
function App() {
  // const { data, isLoading } = useFeaturedBanners();
  return (
    <>
      <Header />
      <Banners results={bannersData.results} size={bannersData.results_size} />
      <Categories />
      <FeaturedProducts data={featuredProdData.results} parent={"home"} />
      <Footer />
    </>
  );
}

export default App;
