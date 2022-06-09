import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import Banners from "./../Main/Banners.jsx";
import Categories from "./../Categories/Categories.jsx";
import bannersData from "./../../data/mocks/es-mx/featured-banners.json";
import FeaturedProducts from "./../FeaturedProducts/FeaturedProducts.jsx";
function App() {
  // const { data, isLoading } = useFeaturedBanners();
  return (
    <>
      <Header />
      <Banners results={bannersData.results} size={bannersData.results_size} />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default App;
