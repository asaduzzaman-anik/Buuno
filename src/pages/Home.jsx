import React from "react";
import Categories from "../components/Categories";
import NewArrivals from "./NewArrivals";
import MensCombo from "./MensCombo";
import Hero from "../components/Hero";
import Policy from "../components/Policy";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
      <MensCombo />
      <Policy />
    </div>
  );
};

export default Home;
