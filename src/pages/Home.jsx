import React from "react";
import { BrowserRouter } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <BrowserRouter>
      {/* Hero section goes here */}

      {/* Category section goes here */}
      <Categories />

      {/* New Arrivals section goes here */}

      {/* Combo offer section goes here */}
    </BrowserRouter>
  );
};

export default Home;
