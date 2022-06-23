// import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import HomePage from "./Components/HomePage/HomePage";
import "./App.css";
import ProductListPage from "./Components/ProductList/ProductListPage";
import Router from "./utils/Router";

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  return (
    <div className="App">
      <Router path="/ondemand-react-bootcamp">
        <HomePage />
      </Router>

      <Router path="/ondemand-react-bootcamp/all-products">
        <ProductListPage />
      </Router>
    </div>
  );
}

export default App;
