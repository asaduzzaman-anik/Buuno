import React from "react";
import Categories from "../components/Categories";
import NewArrivals from "./NewArrivals";
import MensCombo from "./MensCombo";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
      <MensCombo />
    </div>
  );
};

export default Home;
