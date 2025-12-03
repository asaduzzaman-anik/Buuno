import React from "react";
import { products } from "../data/products";
import ProductList from "./ProductList";

const NewArrivals = () => {
  return (
    <div>
      <ProductList
        heading="New Arrivals"
        subheading="Here's some of our most popular products people are in love with"
        products={products}
      />
    </div>
  );
};

export default NewArrivals;
