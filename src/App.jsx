import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import MensTshirt from "./pages/MensTshirt";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/Navbar";
import MensPolo from "./pages/MensPolo";
import MensPanjabi from "./pages/MensPanjabi";
import NewArrivals from "./pages/NewArrivals";
import MensCollection from "./pages/MensCollection";
import MensCombo from "./pages/MensCombo";
import HotOffers from "./pages/HotOffers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <SocialLinks />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/mens-collection" element={<MensCollection />} />
        <Route path="/mens-tshirt" element={<MensTshirt />} />
        <Route path="/mens-polo" element={<MensPolo />} />
        <Route path="/mens-panjabi" element={<MensPanjabi />} />
        <Route path="/mens-combo" element={<MensCombo />} />
        <Route path="/hot-offers" element={<HotOffers />} />
        <Route path="/product/:code" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
