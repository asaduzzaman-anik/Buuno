import React from 'react'
import ProductList from './ProductList'
import { products } from '../data/products'

const MensCollection = () => {
  return (
    <div>
      <ProductList
        heading="Mens' Collection"
        subheading="Here's some of our most popular products people are in love with"
        products={products}
      />
    </div>
  )
}

export default MensCollection