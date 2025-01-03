import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TransformBrand from "./components/TransformBrand";
import GraphicPhotography from "./components/GraphicPhotography";
import Testimonials from "./components/Testimonials";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDescription from "./components/ProductDescription";
import Cart from "./components/Cart";

function App() {
  // Retrieve cart data from sessionStorage if it exists, otherwise use an empty array
  const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(storedCart);

  // UseEffect to update sessionStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      sessionStorage.setItem("cart", JSON.stringify(cart)); // Save cart to sessionStorage
    }
  }, [cart]); // Dependency array ensures this runs only when cart changes

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageGallery />
              <TransformBrand />
              <GraphicPhotography />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/product-description/:productName"
          element={<ProductDescription cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
