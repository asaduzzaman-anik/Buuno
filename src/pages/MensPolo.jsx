import React from "react";
import { products } from "../data/products";
import ProductList from "./ProductList";

const MensPolo = () => {
  const poloShirts = products.filter(
    (product) => product.category === "Mens' Polo Shirt"
  );
  return (
    <div>
      <ProductList
        heading="Mens' Polo Shirt"
        subheading="Here's some of our most popular products people are in love with"
        products={poloShirts}
      />
    </div>
  );
};

export default MensPolo;
