import React from "react";
import { products } from "../data/products";
import ProductList from "./ProductList";

const Tshirt = () => {
  const tShirt = products.filter(
    (product) => product.category === "Mens' T-Shirt"
  );
  return (
    <div>
      <ProductList
        heading="Mens' T-Shirt"
        subheading="Here's some of our most popular products people are in love with"
        products={tShirt}
      />
    </div>
  );
};

export default Tshirt;
