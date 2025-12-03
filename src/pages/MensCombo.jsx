import React from 'react'
import { products } from '../data/products';
import ProductList from './ProductList';

const MensCombo = () => {
  const comboItems = products.filter(
    (product) => product.category === "Mens' Combo"
  );
  return (
    <div>
      <ProductList
        heading="Mens' Combo"
        subheading="Here's some of our most popular products people are in love with"
        products={comboItems}
      />
    </div>
  );
}

export default MensCombo