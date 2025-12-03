import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PoloShirts from "./pages/PoloShirts";
import Tshirt from "./pages/Tshirt";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <SocialLinks />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polo-shirt" element={<PoloShirts />} />
        <Route path="/t-shirt" element={<Tshirt />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
