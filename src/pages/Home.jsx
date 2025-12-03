import React from "react";
import ProductList from "./ProductList";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <ProductList
        heading="new arrivals"
        subheading="Here's some of our most popular products people are in love with"
        products={products}
      />
    </div>
  );
};

export default Home;
