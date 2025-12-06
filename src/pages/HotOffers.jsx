import React from 'react'
import { products } from '../data/products';
import ProductList from './ProductList';

const HotOffers = () => {
  const offerItems = products.filter(
    (product) => product.category === "Hot Offers"
  );

  return (
    <div>
      <ProductList
        heading="Hot Offers"
        subheading="Here's some of our most popular products people are in love with"
        products={offerItems}
      />
    </div>
  );
}

export default HotOffers