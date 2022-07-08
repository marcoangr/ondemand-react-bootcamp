import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import ProductListPage from "./Components/ProductList/ProductListPage";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ProductDetailsPage from "./Components/ProductDetails/ProductDetailsPage";
import SearchResultsPage from "./Components/SearchResults/SearchResultsPage";
import PageNotFound from "./PageNotFound";
import CartPage from "./Components/CartPage/CartPage";
import CheckoutPage from "./Components/Checkout/CheckoutPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import { CartContext } from "./Components/Context/ShoppingCartContext";

import "./App.css";

const Routes = () =>
  useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/products", element: <ProductListPage /> },
    { path: "/products?category", element: <ProductListPage /> },
    { path: "/product/:productId", element: <ProductDetailsPage /> },
    { path: "/search", element: <SearchResultsPage /> },
    { path: "*", element: <PageNotFound /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/checkout", element: <CheckoutPage /> },
  ]);

function App() {
  return (
    <div className="App">
      <Router>
        <CartContext>
          <Header />
          <Routes />
        </CartContext>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
