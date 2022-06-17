// import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import HomePage from "./Components/HomePage/HomePage";
import "./App.css";
import ProductListPage from "./Components/ProductList/ProductListPage";

const showHomePage = () => {
  if (window.location.pathname.match(/\/ondemand-react-bootcamp[/]?/)) {
    return <HomePage />;
  }
};

const showProductsPage = () => {
  if (
    window.location.pathname.match(
      /\/ondemand-react-bootcamp\/all-products[/]?/
    )
  ) {
    return <ProductListPage />;
  }
};

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  return (
    <div className="App">
      {showHomePage()}
      {showProductsPage()}
    </div>
  );
}

export default App;
