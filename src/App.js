import HomePage from "./Components/HomePage/HomePage";
import "./App.css";
import ProductListPage from "./Components/ProductList/ProductListPage";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ProductDetailsPage from "./Components/ProductDetails/ProductDetailsPage";
import SearchResultsPage from "./Components/SearchResults/SearchResultsPage";
import PageNotFound from "./PageNotFound";

const Routes = () =>
  useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/products", element: <ProductListPage /> },
    { path: "/products?category", element: <ProductListPage /> },
    { path: "/product/:productId", element: <ProductDetailsPage /> },
    { path: "/search", element: <SearchResultsPage /> },
    { path: "*", element: <PageNotFound /> },
  ]);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
