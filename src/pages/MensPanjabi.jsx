import React from 'react'
import ProductList from './ProductList';
import { products } from '../data/products';

const MensPanjabi = () => {
  const Panjabi = products.filter(
    (product) => product.category === "Mens' Panjabi"
  );
  return (
    <div>
      <ProductList
        heading="Mens' Panjabi"
        subheading="Here's some of our most popular products people are in love with"
        products={Panjabi}
      />
    </div>
  );
}

export default MensPanjabi